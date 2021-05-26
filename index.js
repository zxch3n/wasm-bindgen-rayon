(()=>{"use strict";var e={m:{},u:e=>e+".index.js"};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href;const t=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.thrown"),s=e=>"object"==typeof e&&null!==e||"function"==typeof e,o=new Map([["proxy",{canHandle:e=>s(e)&&e[t],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize:e=>(e.start(),u(e))}],["throw",{canHandle:e=>s(e)&&a in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function i(e,n=self){n.addEventListener("message",(function r(s){if(!s||!s.data)return;const{id:o,type:u,path:l}=Object.assign({path:[]},s.data),p=(s.data.argumentList||[]).map(h);let m;try{const n=l.slice(0,-1).reduce(((e,t)=>e[t]),e),r=l.reduce(((e,t)=>e[t]),e);switch(u){case"GET":m=r;break;case"SET":n[l.slice(-1)[0]]=h(s.data.value),m=!0;break;case"APPLY":m=r.apply(n,p);break;case"CONSTRUCT":m=function(e){return Object.assign(e,{[t]:!0})}(new r(...p));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;i(e,n),m=function(e,t){return d.set(e,t),e}(t,[t])}break;case"RELEASE":m=void 0;break;default:return}}catch(e){m={value:e,[a]:0}}Promise.resolve(m).catch((e=>({value:e,[a]:0}))).then((e=>{const[t,a]=g(e);n.postMessage(Object.assign(Object.assign({},t),{id:o}),a),"RELEASE"===u&&(n.removeEventListener("message",r),c(n))}))})),n.start&&n.start()}function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e,t){return p(e,[],t)}function l(e){if(e)throw new Error("Proxy has been released and is not useable")}function p(e,t=[],a=function(){}){let s=!1;const o=new Proxy(a,{get(n,a){if(l(s),a===r)return()=>f(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{c(e),s=!0}));if("then"===a){if(0===t.length)return{then:()=>o};const n=f(e,{type:"GET",path:t.map((e=>e.toString()))}).then(h);return n.then.bind(n)}return p(e,[...t,a])},set(n,r,a){l(s);const[o,i]=g(a);return f(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:o},i).then(h)},apply(r,a,o){l(s);const i=t[t.length-1];if(i===n)return f(e,{type:"ENDPOINT"}).then(h);if("bind"===i)return p(e,t.slice(0,-1));const[c,u]=m(o);return f(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(h)},construct(n,r){l(s);const[a,o]=m(r);return f(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},o).then(h)}});return o}function m(e){const t=e.map(g);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const d=new WeakMap;function g(e){for(const[t,n]of o)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},d.get(e)||[]]}function h(e){switch(e.type){case"HANDLER":return o.get(e.name).deserialize(e.value);case"RAW":return e.value}}function f(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}const y=document.getElementById("canvas"),{width:b,height:w}=y,E=y.getContext("2d"),v=document.getElementById("time"),S=u(new Worker(new URL(new URL(e.p+e.u(413),e.b)),{type:void 0})),A={async onclick(e){let{rawImageData:t,time:n}=await S({type:e.target.id,width:b,height:w,maxIterations:1e3});v.value=`${n.toFixed(2)} ms`;const r=new ImageData(t,b,w);E.putImageData(r,0,0)},disabled:!1};Object.assign(document.getElementById("singleThread"),A),(async e=>{try{return"undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])).then((e=>{e&&Object.assign(document.getElementById("multiThread"),A)}))})();