!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";if("undefined"==typeof window||!("document"in window))return{};
var t=function(t,e,n){e=e||999,n||0===n||(n=9);var o,i=function(t){o=t},r=document.documentElement,c=function(){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t?t:document.body)["scroll-behavior"]},u=function()
{return t?t.scrollTop:window.scrollY||r.scrollTop},f=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||r.clientHeight},l=function(e){return t?e.offsetTop:e.getBoundingClientRect().top+u()-r.offsetTop},a=function(){clearTimeout(o),i(0)},
d=function(n,o,l){if(a(),c())(t||window).scrollTo(0,n),l&&l();else{var d=u(),s=Math.max(n,0)-d;o=o||Math.min(Math.abs(s),e);var m=(new Date).getTime();!function e()
  {i(setTimeout(function(){var n=Math.min(((new Date).getTime()-m)/o,1),i=Math.max(Math.floor(d+s*(n<.5?2*n*n:n*(4-2*n)-1)),0);t?t.scrollTop=i:window.scrollTo(0,i),
    n<1&&f()+i<(t||r).scrollHeight?e():(setTimeout(a,99),l&&l())},9))}()}},s=function(t,e,o){d(l(t)-n,e,o)},m=function(t,e,o){var i=t.getBoundingClientRect().height,
      r=l(t),c=r+i,a=f(),m=u(),h=m+a;r-n<m||i+n>a?s(t,e,o):c+n>h?d(c-a+n,e,o):o&&o()},h=function(t,e,n,o){
        d(Math.max(l(t)-f()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},w=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{
          setup:w,to:s,toY:d,intoView:m,center:h,stop:a,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{
            history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(t){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;
            if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),
              c=document.getElementById(r);c&&(t.preventDefault(),e.to(c),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});
