var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var l=t("iQIUW");const r=document.querySelector(".form");function i(e,o){new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o},l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)):t({position:e,delay:o},l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`))}),o)}))}r.addEventListener("submit",(e=>{e.preventDefault();const o=r.elements.delay,n=r.elements.step,t=r.elements.amount,l=Number(o.value),s=Number(n.value),u=Number(t.value);let a=l;for(let e=1;e<=u;e+=1)1!==e?(a+=s,i(e,a)):i(e,l)})),promise.then((e=>{console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=03-promises.db1da917.js.map
