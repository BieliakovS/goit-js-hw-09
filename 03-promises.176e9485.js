!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i");const l=document.querySelector(".form");function r(e,o){new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o},i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)):t({position:e,delay:o},i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`))}),o)}))}l.addEventListener("submit",(e=>{e.preventDefault();const o=l.elements.delay,n=l.elements.step,t=l.elements.amount,i=Number(o.value),s=Number(n.value),u=Number(t.value);let a=i;for(let e=1;e<=u;e+=1)1!==e?(a+=s,r(e,a)):r(e,i)})),promise.then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}();
//# sourceMappingURL=03-promises.176e9485.js.map
