function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},n=i.parcelRequire4323;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},i.parcelRequire4323=n),n.register("27Lyk",(function(e,i){var r,s;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>s),(t=>s=t));var n={};r=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)n[e[i]]=t[e[i]]},s=function(t){var e=n[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("27Lyk").register(JSON.parse('{"7GeUN":"index.25a6e38a.js","jE0tl":"boom.054127e7.png"}'));var o;o=new URL(n("27Lyk").resolve("jE0tl"),import.meta.url).toString();const h=document.getElementById("canvas1"),a=h.getContext("2d");h.width=500,h.height=700;const d=[];let l=h.getBoundingClientRect();const u=function(t){const e=new Image;return e.src=t,e}(e(o));class f{constructor(t,e){this.spritesWidth=200,this.spritesHeight=179,this.width=.7*this.spritesWidth,this.height=.7*this.spritesHeight,this.x=t,this.y=e,this.sound=new Audio,this.sound.src="../sounds/fire-impact-1.mp3",this.frame=0,this.image=u,this.timer=0,this.angle=6.2*Math.random()}update(){0===this.frame&&this.sound.play(),this.timer++,this.timer%10==0&&this.frame++}draw(){a.save(),a.translate(this.x,this.y),a.rotate(this.angle),a.drawImage(this.image,this.spritesWidth*this.frame,0,this.spritesWidth,this.spritesHeight,0-.5*this.width,0-.5*this.height,this.width,this.height),a.restore()}}window.addEventListener("click",(function(t){!function(t){let e=t.x-l.left,i=t.y-l.top;d.push(new f(e,i))}(t)})),function t(){a.clearRect(0,0,h.width,h.height);for(let t=0;t<d.length;t++)d[t].update(),d[t].draw(),d[t].frame>5&&(d.splice(t,1),t--);requestAnimationFrame(t)}();
//# sourceMappingURL=index.25a6e38a.js.map