!function(){const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let n=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(()=>{t.style.backgroundColor=r(),n=setInterval((()=>{t.style.backgroundColor=r()}),1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(n),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.448d4da6.js.map
