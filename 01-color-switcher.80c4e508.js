let e;const t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{e||(t.disabled=!0,d.disabled=!1,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))})),d.addEventListener("click",(()=>{e&&(clearInterval(e),e=null,t.disabled=!1,d.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.80c4e508.js.map