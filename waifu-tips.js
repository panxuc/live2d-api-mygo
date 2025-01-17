/*!
 * Live2D API feat. MyGO!!!!!
 * https://github.com/panxuc/live2d-api-mygo
 */
!function(){"use strict";let e,t=parseInt(localStorage.getItem("modelId")||"0",10),o=parseInt(localStorage.getItem("modelTexturesId")||"0",10);function s(){return null===t|void 0===t|NaN===t&&i(),t}function n(){return null===o|void 0===o|NaN===o&&i(),o}function i(){t=0,o=0,localStorage.setItem("modelId","0"),localStorage.setItem("modelTexturesId","0")}function c(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}function a(t,o,s){if(!t||sessionStorage.getItem("waifu-text")&&sessionStorage.getItem("waifu-text")>s)return;e&&(clearTimeout(e),e=null),t=c(t),sessionStorage.setItem("waifu-text",s);const n=document.getElementById("waifu-tips");n.innerHTML=t,n.classList.add("waifu-tips-active"),e=setTimeout((()=>{sessionStorage.removeItem("waifu-text"),n.classList.remove("waifu-tips-active")}),o)}console.log("modelId",t),console.log("modelTexturesId",o);class l{constructor(e){let{apiPath:t,cdnPath:o}=e;this.cdnPath=o}async loadModelList(){const e=await fetch(`${this.cdnPath}model_list.json`);this.modelList=await e.json()}async loadModel(e,t,o){localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",t),console.log(`Live2D 模型 ${e}-${t} 开始加载`),a(o,4e3,10),this.modelList||await this.loadModelList();const s=this.modelList.models[e][t];loadlive2d("live2d",`${this.cdnPath}model/${s}/model.json`)}async loadOtherModel(){var e;this.modelList||await this.loadModelList(),e=s()+1>=this.modelList.models.length?0:s()+1,t=e,localStorage.setItem("modelId",e.toString()),this.loadModel(s(),n(),this.modelList.messages[s()])}async loadOtherTextureModel(){var e;this.modelList||await this.loadModelList(),e=n()+1>=this.modelList.models[s()].length?0:n()+1,o=e,localStorage.setItem("modelTexturesId",e.toString()),this.loadModel(s(),n(),this.modelList.messages[s()])}}const d={hitokoto:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>',callback:function(){fetch("https://v1.hitokoto.cn").then((e=>e.json())).then((e=>{const t=`这句一言来自 <span>「${e.from}」</span>，是 <span>${e.creator}</span> 在 hitokoto.cn 投稿的。`;a(e.hitokoto,6e3,9),setTimeout((()=>{a(t,4e3,9)}),6e3)}))}},"switch-model":{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>',callback:()=>{}},"switch-texture":{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64l0 48c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l38.7 0c16.3 0 30-12.3 31.8-28.5L318.2 304l1.8 0c17.7 0 32-14.3 32-32l0-48c0-35.3-28.7-64-64-64l-64 0zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"/></svg>',callback:()=>{}},photo:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M220.6 121.2L271.1 96 448 96l0 96-114.8 0c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24L64 192l0-64 128 0c9.9 0 19.7-2.3 28.6-6.8zM0 128L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L271.1 32c-9.9 0-19.7 2.3-28.6 6.8L192 64l-32 0 0-16c0-8.8-7.2-16-16-16L80 32c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>',callback:()=>{Live2D.captureName="photo.png",Live2D.captureFrame=!0}},info:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',callback:()=>{open("https://github.com/stevenjoezhang/live2d-widget")}},quit:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>',callback:()=>{localStorage.setItem("waifu-display",Date.now()),document.getElementById("waifu").style.bottom="-500px",setTimeout((()=>{document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")}),3e3)}}};function m(e){const t=new l(e);function o(e){let t,o,n=!1,i=e.message.default[s()];window.addEventListener("mousemove",(()=>n=!0)),window.addEventListener("keydown",(()=>n=!0)),setInterval((()=>{n?(n=!1,clearInterval(t),t=null):t||(t=setInterval((()=>{a(i,6e3,9)}),2e4))}),1e3),window.addEventListener("mouseover",(t=>{for(let{selector:n,text:i}of e.mouseover)if(t.target.closest(n)){if(o===n)return;return o=n,i=c(i[s()]),i=i.replace("{text}",t.target.innerText),void a(i,4e3,8)}})),window.addEventListener("click",(t=>{for(let{selector:o,text:n}of e.click)if(t.target.closest(o))return n=c(n[s()]),n=n.replace("{text}",t.target.innerText),void a(n,4e3,8)})),e.seasons.forEach((({date:e,text:t})=>{const o=new Date,n=e.split("-")[0],a=e.split("-")[1]||n;n.split("/")[0]<=o.getMonth()+1&&o.getMonth()+1<=a.split("/")[0]&&n.split("/")[1]<=o.getDate()&&o.getDate()<=a.split("/")[1]&&(t=(t=c(t[s()])).replace("{year}",o.getFullYear()),i.push(t))}));const l=()=>{};console.log("%c",l),l.toString=()=>{a(e.message.console[s()],6e3,9)},window.addEventListener("copy",(()=>{a(e.message.copy[s()],6e3,9)})),window.addEventListener("visibilitychange",(()=>{document.hidden||a(e.message.visibilitychange[s()],6e3,9)}))}localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n            <div id="waifu-tips"></div>\n            <canvas id="live2d" width="800" height="800"></canvas>\n            <div id="waifu-tool"></div>\n        </div>'),setTimeout((()=>{document.getElementById("waifu").style.bottom=0}),0),function(){d["switch-model"].callback=()=>t.loadOtherModel(),d["switch-texture"].callback=()=>t.loadOtherTextureModel(),Array.isArray(e.tools)||(e.tools=Object.keys(d));for(let t of e.tools)if(d[t]){const{icon:e,callback:o}=d[t];document.getElementById("waifu-tool").insertAdjacentHTML("beforeend",`<span id="waifu-tool-${t}">${e}</span>`),document.getElementById(`waifu-tool-${t}`).addEventListener("click",o)}}(),null===s()&&i(),t.loadModel(s(),n()),fetch(e.waifuPath).then((e=>e.json())).then(o)}window.initWidget=function(e,t){"string"==typeof e&&(e={waifuPath:e,apiPath:t}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n            <span>看板娘</span>\n        </div>');const o=document.getElementById("waifu-toggle");o.addEventListener("click",(()=>{o.classList.remove("waifu-toggle-active"),o.getAttribute("first-time")?(m(e),o.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout((()=>{document.getElementById("waifu").style.bottom=0}),0))})),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(o.setAttribute("first-time",!0),setTimeout((()=>{o.classList.add("waifu-toggle-active")}),0)):m(e)}}();