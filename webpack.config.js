const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const posthtml = require('posthtml');
const posthtmlWebp = require('posthtml-webp');
const posthtmlReplace = require('posthtml-replace');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyPlugin = require('copy-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

const PAGES_DIR = `${SRC}/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: { chunks: 'all' },
  };

  if (isProd) {
    config.minimizer = [

      new CssMinimizerPlugin(),

      new TerserPlugin(),

      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['mozjpeg', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp'],
            },
          },
        ],
      }),

    ];
  }

  return config;
};

module.exports = {
  context: SRC,
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    index: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    path: DIST,
    assetModuleFilename: '[path][name][ext]',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': SRC,
    },
  },
  optimization: optimization(),
  devServer: {
    port: 666,
    watchFiles: `${SRC}/**/*.pug`,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [

    // ???????????? ???????????? /dist
    new CleanWebpackPlugin(),

    // ?????????????????????? ????????????
    new CopyPlugin({
      patterns: [
        { from: 'assets/json', to: 'assets/json' },
      ],
    }),

    // ????????????
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        fill: '',
      },
    }),

    // html
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
      minify: {
        collapseWhitespace: false,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    })),

    // ?????????????????? css - ???????????????? ?????? ?? ???????? ????????
    new MiniCssExtractPlugin({
      filename: isDev ? './css/[name].css' : './css/[name].[contenthash].css',
      chunkFilename: isDev ? './css/[id].css' : './css/[id].[contenthash].css',
    }),

    // eslint
    new ESLintPlugin({
      extensions: ['js'],
      // fix: true,
    }),

  ],
  module: {
    rules: [

      {
        test: /icons.*\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: './assets/img/icons/sprite.svg',
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: '(fill|stroke)',
                  },
                },
              ],
            },
          },
        ],
      },

      {
        test: /svg.*\.svg$/,
        type: 'asset/resource',
      },

      {
        test: /\.(png|jpe?g|gif|webp|ico)$/,
        type: 'asset/resource',
      },

      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },

      { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // plugins: [], // ?????????????? ?????? babel ????????
          },
        },
      },

      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              sources: {
                // ?????????????????? ???????????????? ??????????????
                // ???????????????????? ?????? ?? ???????? ???????? sprite.svg - ??.??. ???? ???????????????????? ???????????? ?? dist
                urlFilter: (attr, val) => {
                  if (/sprite\.svg/.test(val)) return false;
                  return true;
                },
              },
              preprocessor: (content, loaderContext) => {
                let result;

                try {
                  result = posthtml([
                    // ???????????? ???? img -> picture
                    // img(src=*.jpg) -> picture [ source(srcset=*.jpg.webp) img(src=*.jpg) ]
                    posthtmlWebp(),
                    // ???????? ?????????????????? ???????????????????????????????? ???????????????? ?? webp ?????????? ???????????????? ?as=webp
                    posthtmlReplace([
                      {
                        match: { tag: 'source' },
                        attrs: { srcset: { from: '.webp', to: '?as=webp' } },
                      },
                    ]),
                  ])
                    .process(content, { sync: true });
                } catch (error) {
                  loaderContext.emitError(error);
                  return content;
                }

                return result.html;
              },
            },
          },
          { loader: 'pug-html-loader', options: { pretty: true } },
        ],
      },

    ],
  },
};
