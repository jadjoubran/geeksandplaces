!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=2)}([function(e,t){!function(){"use strict";function e(e){e.preventDefault(),n.classList.add("show"),o.classList.add("show")}function t(){n.classList.remove("show"),o.classList.remove("show")}for(var n=document.getElementById("subscribe-modal"),o=document.getElementById("subscribe-overlay"),c=document.querySelectorAll(".js-subscribe"),r=0;r<c.length;++r)c[r].addEventListener("click",e);window.fetch||function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.defer=!0,e.src="/js/unfetch.polyfill.js",e.onload=function(){window.fetch=unfetch},window.document.body.appendChild(e)}(),document.getElementById("subscribe-form").addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("subscribe-email").value;t&&(document.getElementById("submit").innerHTML="One moment..",fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})}).then(function(){document.getElementById("submit").innerHTML="Subscribe",document.getElementById("subscribe-pre").style.display="none",document.getElementById("subscribe-post").style.display="block",document.getElementById("subscribe-emailContainer").style.display="none"}).catch(function(){document.getElementById("submit").innerHTML="Subscribe",alert("An error has occurred! Please try again")}))}),document.getElementById("subscribe-close").addEventListener("click",t)}()},function(e,t){},function(e,t,n){n(0),e.exports=n(1)}]);