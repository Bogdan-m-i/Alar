(()=>{var t,e={3549:()=>{function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(){var e=document.querySelector(".tabs");if(e){var n=e.querySelector(".tabs__control"),r=t(e.querySelectorAll(".tabs__tab")),a=t(e.querySelectorAll("[data-target]"));r[0].classList.add("active"),a[0].classList.add("active"),n.addEventListener("click",(function(t){var e,n=t.target.closest("[data-target]"),i=null==n?void 0:n.dataset.target;i&&(null===(e=a.find((function(t){return t.classList.contains("active")})))||void 0===e||e.classList.remove("active"),n.classList.add("active"),r.forEach((function(t){t.id===i?t.classList.add("active"):t.classList.remove("active")})))}))}}()},2203:(t,e,n)=>{"use strict";n(1800),n(3549);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvasStars=document.querySelector("#stars"),this.canvasResult=document.querySelector("#result")}var e,n,a;return e=t,a=[{key:"drawStar",value:function(t,e,n,r){t.beginPath(),t.moveTo(e,n-50),t.lineTo(e-40,n+50),t.lineTo(e+60,n-10),t.lineTo(e-60,n-10),t.lineTo(e+40,n+50),t.lineTo(e,n-50),t.closePath(),t.fillStyle=r,t.fill()}},{key:"drawStarTwo",value:function(t,e,n,r){t.beginPath();for(var a=0;a<5;a+=1)t.lineTo(50*Math.cos((18+72*a)/180*Math.PI)+e,50*-Math.sin((18+72*a)/180*Math.PI)+n),t.lineTo(20*Math.cos((54+72*a)/180*Math.PI)+e,20*-Math.sin((54+72*a)/180*Math.PI)+n);t.closePath(),t.fillStyle=r,t.fill()}}],(n=[{key:"init",value:function(){var e=this;this.canvasStars&&this.canvasResult&&(this.ctxStars=this.canvasStars.getContext("2d"),t.drawStar(this.ctxStars,300,150,"red"),t.drawStar(this.ctxStars,450,250,"blue"),t.drawStar(this.ctxStars,400,400,"green"),t.drawStar(this.ctxStars,150,250,"yellow"),t.drawStar(this.ctxStars,200,400,"black"),this.canvasStars.addEventListener("click",(function(t){var n=t.offsetX,r=t.offsetY,a=e.ctxStars.getImageData(n,r,1,1).data,i=0===a[0]&&0===a[1]&&0===a[2]&&0===a[3]?"white":"rgb(".concat(a[0],", ").concat(a[1],", ").concat(a[2],")");e.canvasResult.style.backgroundColor=i})))}}])&&r(e.prototype,n),a&&r(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,c,"next",t)}function c(t){i(o,r,a,s,c,"throw",t)}s(void 0)}))}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r,a,i,c,l;return e=t,n=null,r=[{key:"getData",value:(l=o(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"GET"});case 2:return n=t.sent,r=n.json(),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)}))),function(t){return l.apply(this,arguments)})},{key:"postData",value:(c=o(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("POST",e,n);case 1:case"end":return t.stop()}}),t)}))),function(t,e){return c.apply(this,arguments)})},{key:"putData",value:(i=o(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("PUT",e,n);case 1:case"end":return t.stop()}}),t)}))),function(t,e){return i.apply(this,arguments)})},{key:"deleteData",value:(a=o(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("DELETE",e);case 1:case"end":return t.stop()}}),t)}))),function(t){return a.apply(this,arguments)})}],n&&s(e.prototype,n),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.table=document.querySelector(".table"),this.table&&(this.body=this.table.querySelector(".table__body"),this.data=[],this.clickHandlerBind=this.clickHandler.bind(this))}var e,n,r,a,i;return e=t,n=[{key:"init",value:(a=regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.table){e.next=2;break}return e.abrupt("return");case 2:return this.table.addEventListener("click",this.clickHandlerBind),e.next=5,c.getData("/assets/json/contacts.json");case 5:this.data=e.sent,this.data.forEach((function(e){n.body.insertAdjacentHTML("beforeend",t.getRowTemplate(e))}));case 7:case"end":return e.stop()}}),e,this)})),i=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=a.apply(t,e);function o(t){d(i,n,r,o,s,"next",t)}function s(t){d(i,n,r,o,s,"throw",t)}o(void 0)}))},function(){return i.apply(this,arguments)})},{key:"clickHandler",value:function(e){var n=e.target.closest("form.table__row"),r=n.querySelector('[data-role="save"]'),a=n.querySelector('[data-role="edit"]'),i=n.querySelector('[data-role="delete"]');if(null!=a&&a.contains(e.target))e.preventDefault(),a.style.display="none",r.style.display=null,t.inputsEnable(n);else if(null!=r&&r.contains(e.target))if(e.preventDefault(),n.checkValidity()){var o=new FormData(n),s=JSON.stringify(Object.fromEntries(o));if(n.removeEventListener("input",t.checkInputStatus),"new-contact"===n.id){var u=Object.fromEntries(o);return u.id=Math.floor(666*Math.random()),this.body.insertAdjacentHTML("beforeend",t.getRowTemplate(u)),c.postData("contacts",s),void n.reset()}c.putData("contacts/".concat(o.get("id")),s),t.inputsDisable(n),a.style.display=null,r.style.display="none"}else l(n.querySelectorAll("input:invalid")).forEach((function(e){t.checkInputStatus(e)})),n.addEventListener("input",t.checkInputStatus);else if(null!=i&&i.contains(e.target)){e.preventDefault();var d=new FormData(n);c.deleteData("contacts/".concat(d.get("id"))),n.remove()}}},{key:"destroy",value:function(){this.table.removeEventListener("click",this.clickHandlerBind)}}],r=[{key:"checkInputStatus",value:function(t){var e=t.target||t,n=e.closest(".input"),r=n.querySelector(".input__error");e.checkValidity()?n.classList.remove("invalid"):(n.classList.add("invalid"),e.validity.patternMismatch?r.innerText="Bad format":e.validity.valueMissing?r.innerText="Enter value":e.validity.tooShort&&(r.innerText="Value too short"))}},{key:"inputsDisable",value:function(t){l(t.querySelectorAll('input:not([type="hidden"])')).forEach((function(t){t.disabled=!0}))}},{key:"inputsEnable",value:function(t){l(t.querySelectorAll("input")).forEach((function(t){t.disabled=!1}))}},{key:"getRowTemplate",value:function(t){return'\n      <form class="table__row">\n        <div class="table__col">\n          <div class="input">\n            <input name="name" value="'.concat(t.name,'" required="" disabled="">\n            <div class="input__error"></div>\n          </div>\n        </div>\n        <div class="table__col">\n          <div class="input">\n            <input name="phone" value="').concat(t.phone,'" pattern="^[+]{0,1}[0-9\\-]+$" minlength="6" maxlength="16" required="" disabled="">\n            <div class="input__error"></div>\n          </div>\n        </div>\n        <div class="table__col">\n          <input type="hidden" value="').concat(t.id,'" name="id">\n          <button class="table__row-btn btn" data-role="edit">\n            <svg class="svg-icon icon-edit">\n              <use xlink:href="/assets/img/icons/sprite.svg#edit"></use>\n            </svg>\n          </button>\n          <button class="table__row-btn btn btn_success" data-role="save" type="submit" style="display:none;">\n            <svg class="svg-icon icon-edit">\n              <use xlink:href="/assets/img/icons/sprite.svg#save"></use>\n            </svg>\n          </button>\n          <button class="table__row-btn btn btn_danger" data-role="delete">\n            <svg class="svg-icon icon-edit">\n              <use xlink:href="/assets/img/icons/sprite.svg#delete"></use>\n            </svg>\n          </button>\n        </div>\n      </form>\n    ')}}],n&&f(e.prototype,n),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();(new a).init(),(new v).init()},1800:(t,e,n)=>{var r;(r=n(5896)).keys().forEach(r)},1199:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={id:"add-usage",viewBox:"0 0 24 24",url:n.p+"./assets/img/icons/sprite.svg#add",toString:function(){return this.url}}},4961:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={id:"delete-usage",viewBox:"0 0 24 24",url:n.p+"./assets/img/icons/sprite.svg#delete",toString:function(){return this.url}}},2625:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={id:"edit-usage",viewBox:"0 0 24 24",url:n.p+"./assets/img/icons/sprite.svg#edit",toString:function(){return this.url}}},5641:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={id:"reset-usage",viewBox:"0 0 24 24",url:n.p+"./assets/img/icons/sprite.svg#reset",toString:function(){return this.url}}},740:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r={id:"save-usage",viewBox:"0 0 24 24",url:n.p+"./assets/img/icons/sprite.svg#save",toString:function(){return this.url}}},5896:(t,e,n)=>{var r={"./add.svg":1199,"./delete.svg":4961,"./edit.svg":2625,"./reset.svg":5641,"./save.svg":740};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id=5896}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,a,i)=>{if(!n){var o=1/0;for(u=0;u<t.length;u++){for(var[n,a,i]=t[u],s=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={826:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,[o,s,c]=n,l=0;if(o.some((e=>0!==t[e]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(c)var u=c(r)}for(e&&e(n);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.O(void 0,[202],(()=>r(1202)));var a=r.O(void 0,[202],(()=>r(2203)));a=r.O(a)})();