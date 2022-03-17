export default class Canvas {
  constructor() {
    this.canvasStars = document.querySelector('#stars');
    this.canvasResult = document.querySelector('#result');
  }

  init() {
    if (!this.canvasStars || !this.canvasResult) return;

    this.ctxStars = this.canvasStars.getContext('2d');

    Canvas.drawStar(this.ctxStars, 300, 150, 'red');
    Canvas.drawStar(this.ctxStars, 450, 250, 'blue');
    Canvas.drawStar(this.ctxStars, 400, 400, 'green');
    Canvas.drawStar(this.ctxStars, 150, 250, 'yellow');
    Canvas.drawStar(this.ctxStars, 200, 400, 'black');

    this.canvasStars.addEventListener('click', (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const imgData = this.ctxStars.getImageData(x, y, 1, 1).data;
      const color = (
        imgData[0] === 0
        && imgData[1] === 0
        && imgData[2] === 0
        && imgData[3] === 0
      ) ? 'white' : `rgb(${imgData[0]}, ${imgData[1]}, ${imgData[2]})`;
      this.canvasResult.style.backgroundColor = color;
    });
  }

  static drawStar(ctx, x, y, color) {
    ctx.beginPath();

    ctx.moveTo(x, y - 50);
    ctx.lineTo(x - 40, y + 50);
    ctx.lineTo(x + 60, y - 10);
    ctx.lineTo(x - 60, y - 10);
    ctx.lineTo(x + 40, y + 50);
    ctx.lineTo(x, y - 50);

    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  static drawStarTwo(ctx, x, y, color) {
    ctx.beginPath();
    for (let i = 0; i < 5; i += 1) {
      ctx.lineTo(
        Math.cos(((18 + i * 72) / 180) * Math.PI) * 50 + x,
        -Math.sin(((18 + i * 72) / 180) * Math.PI) * 50 + y,
      );
      ctx.lineTo(
        Math.cos(((54 + i * 72) / 180) * Math.PI) * 20 + x,
        -Math.sin(((54 + i * 72) / 180) * Math.PI) * 20 + y,
      );
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
}
