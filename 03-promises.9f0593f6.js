var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form");function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.addEventListener("submit",(e=>{e.preventDefault();const t=i.elements.delay,n=i.elements.step,o=i.elements.amount;let s=Number(t.value);const u=Number(n.value),a=Number(o.value);let d=[];for(let e=0;e<a;e+=1)l(e+1,s).then((t=>{r.Notify.success(`✅ Fulfilled promise ${e+1} in ${d[e]}ms`)})).catch((t=>{r.Notify.failure(`❌ Rejected promise ${e+1} in ${d[e]}ms`)})),d.push(s+=u);e.target.reset()}));
//# sourceMappingURL=03-promises.9f0593f6.js.map