"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/compute-scroll-into-view";
exports.ids = ["vendor-chunks/compute-scroll-into-view"];
exports.modules = {

/***/ "(ssr)/./node_modules/compute-scroll-into-view/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compute: () => (/* binding */ r)\n/* harmony export */ });\nconst t=t=>\"object\"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||\"hidden\"!==t)&&(\"visible\"!==t&&\"clip\"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},r=(e,r)=>{var i,s,d,h;if(\"undefined\"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p=\"function\"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError(\"Invalid target\");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k=\"start\"===f||\"nearest\"===f?x-T:\"end\"===f?I+F:x+v/2-T+F,D=\"center\"===u?R+E/2-V+B:\"end\"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if(\"if-needed\"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F=\"offsetWidth\"in e?e.offsetWidth-e.clientWidth-a-p:0,V=\"offsetHeight\"in e?e.offsetHeight-e.clientHeight-g-W:0,S=\"offsetWidth\"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X=\"offsetHeight\"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T=\"start\"===f?k:\"end\"===f?k-H:\"nearest\"===f?o(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B=\"start\"===u?D:\"center\"===u?D-b/2:\"end\"===u?D-b:o(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else{T=\"start\"===f?k-r-g:\"end\"===f?k-s+W+V:\"nearest\"===f?o(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B=\"start\"===u?D-d-a:\"center\"===u?D-(d+l/2)+F/2:\"end\"===u?D-i+p+F:o(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B}L.push({el:e,top:T,left:B})}return L};//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBIQUEwSCwrREFBK0QsaUNBQWlDLGdEQUFnRCxhQUFhLDhEQUE4RCxJQUFJLGdEQUFnRCxTQUFTLGFBQWEsS0FBSyx3RUFBd0UsS0FBSyxTQUFTLHlHQUF5Ryx3QkFBd0IsNENBQTRDLFdBQVcsWUFBWSx5Q0FBeUMsTUFBTSxzRUFBc0UscUNBQXFDLCtDQUErQyxpRUFBaUUsUUFBUSxLQUFLLFdBQVcsRUFBRSxpQkFBaUIsVUFBVSxNQUFNLDJGQUEyRix5SkFBeUosb0JBQW9CLFNBQVMsK0NBQStDLDRCQUE0Qiw4QkFBOEIsTUFBTSxtQ0FBbUMsT0FBTyxpS0FBaUssS0FBSyx3R0FBd0csV0FBVyxZQUFZLFdBQVcsS0FBSyxjQUFjLCtDQUErQywyQkFBMkIsNEVBQTRFLGtLQUFrSyxZQUFZLDRPQUE0TyxzTUFBc00sS0FBSyxpTEFBaUwsTUFBTSx5QkFBeUIsR0FBRyxtSUFBbUksUUFBUSxrQkFBa0IsRUFBRSxVQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZvbHVudGVlci1hcHAvLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXguanM/Y2ZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0PXQ9Plwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10JiYxPT09dC5ub2RlVHlwZSxlPSh0LGUpPT4oIWV8fFwiaGlkZGVuXCIhPT10KSYmKFwidmlzaWJsZVwiIT09dCYmXCJjbGlwXCIhPT10KSxuPSh0LG4pPT57aWYodC5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fHQuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl7Y29uc3Qgbz1nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCk7cmV0dXJuIGUoby5vdmVyZmxvd1ksbil8fGUoby5vdmVyZmxvd1gsbil8fCh0PT57Y29uc3QgZT0odD0+e2lmKCF0Lm93bmVyRG9jdW1lbnR8fCF0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpcmV0dXJuIG51bGw7dHJ5e3JldHVybiB0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50fWNhdGNoKHQpe3JldHVybiBudWxsfX0pKHQpO3JldHVybiEhZSYmKGUuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHxlLmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpfSkodCl9cmV0dXJuITF9LG89KHQsZSxuLG8sbCxyLGkscyk9PnI8dCYmaT5lfHxyPnQmJmk8ZT8wOnI8PXQmJnM8PW58fGk+PWUmJnM+PW4/ci10LW86aT5lJiZzPG58fHI8dCYmcz5uP2ktZStsOjAsbD10PT57Y29uc3QgZT10LnBhcmVudEVsZW1lbnQ7cmV0dXJuIG51bGw9PWU/dC5nZXRSb290Tm9kZSgpLmhvc3R8fG51bGw6ZX0scj0oZSxyKT0+e3ZhciBpLHMsZCxoO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudClyZXR1cm5bXTtjb25zdHtzY3JvbGxNb2RlOmMsYmxvY2s6ZixpbmxpbmU6dSxib3VuZGFyeTphLHNraXBPdmVyZmxvd0hpZGRlbkVsZW1lbnRzOmd9PXIscD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2E6dD0+dCE9PWE7aWYoIXQoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdGFyZ2V0XCIpO2NvbnN0IG09ZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHc9W107bGV0IFc9ZTtmb3IoO3QoVykmJnAoVyk7KXtpZihXPWwoVyksVz09PW0pe3cucHVzaChXKTticmVha31udWxsIT1XJiZXPT09ZG9jdW1lbnQuYm9keSYmbihXKSYmIW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXx8bnVsbCE9VyYmbihXLGcpJiZ3LnB1c2goVyl9Y29uc3QgYj1udWxsIT0ocz1udWxsPT0oaT13aW5kb3cudmlzdWFsVmlld3BvcnQpP3ZvaWQgMDppLndpZHRoKT9zOmlubmVyV2lkdGgsSD1udWxsIT0oaD1udWxsPT0oZD13aW5kb3cudmlzdWFsVmlld3BvcnQpP3ZvaWQgMDpkLmhlaWdodCk/aDppbm5lckhlaWdodCx7c2Nyb2xsWDp5LHNjcm9sbFk6TX09d2luZG93LHtoZWlnaHQ6dix3aWR0aDpFLHRvcDp4LHJpZ2h0OkMsYm90dG9tOkksbGVmdDpSfT1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHt0b3A6VCxyaWdodDpCLGJvdHRvbTpGLGxlZnQ6Vn09KHQ9Pntjb25zdCBlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybnt0b3A6cGFyc2VGbG9hdChlLnNjcm9sbE1hcmdpblRvcCl8fDAscmlnaHQ6cGFyc2VGbG9hdChlLnNjcm9sbE1hcmdpblJpZ2h0KXx8MCxib3R0b206cGFyc2VGbG9hdChlLnNjcm9sbE1hcmdpbkJvdHRvbSl8fDAsbGVmdDpwYXJzZUZsb2F0KGUuc2Nyb2xsTWFyZ2luTGVmdCl8fDB9fSkoZSk7bGV0IGs9XCJzdGFydFwiPT09Znx8XCJuZWFyZXN0XCI9PT1mP3gtVDpcImVuZFwiPT09Zj9JK0Y6eCt2LzItVCtGLEQ9XCJjZW50ZXJcIj09PXU/UitFLzItVitCOlwiZW5kXCI9PT11P0MrQjpSLVY7Y29uc3QgTD1bXTtmb3IobGV0IHQ9MDt0PHcubGVuZ3RoO3QrKyl7Y29uc3QgZT13W3RdLHtoZWlnaHQ6bix3aWR0aDpsLHRvcDpyLHJpZ2h0OmksYm90dG9tOnMsbGVmdDpkfT1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2lmKFwiaWYtbmVlZGVkXCI9PT1jJiZ4Pj0wJiZSPj0wJiZJPD1IJiZDPD1iJiZ4Pj1yJiZJPD1zJiZSPj1kJiZDPD1pKXJldHVybiBMO2NvbnN0IGg9Z2V0Q29tcHV0ZWRTdHlsZShlKSxhPXBhcnNlSW50KGguYm9yZGVyTGVmdFdpZHRoLDEwKSxnPXBhcnNlSW50KGguYm9yZGVyVG9wV2lkdGgsMTApLHA9cGFyc2VJbnQoaC5ib3JkZXJSaWdodFdpZHRoLDEwKSxXPXBhcnNlSW50KGguYm9yZGVyQm90dG9tV2lkdGgsMTApO2xldCBUPTAsQj0wO2NvbnN0IEY9XCJvZmZzZXRXaWR0aFwiaW4gZT9lLm9mZnNldFdpZHRoLWUuY2xpZW50V2lkdGgtYS1wOjAsVj1cIm9mZnNldEhlaWdodFwiaW4gZT9lLm9mZnNldEhlaWdodC1lLmNsaWVudEhlaWdodC1nLVc6MCxTPVwib2Zmc2V0V2lkdGhcImluIGU/MD09PWUub2Zmc2V0V2lkdGg/MDpsL2Uub2Zmc2V0V2lkdGg6MCxYPVwib2Zmc2V0SGVpZ2h0XCJpbiBlPzA9PT1lLm9mZnNldEhlaWdodD8wOm4vZS5vZmZzZXRIZWlnaHQ6MDtpZihtPT09ZSlUPVwic3RhcnRcIj09PWY/azpcImVuZFwiPT09Zj9rLUg6XCJuZWFyZXN0XCI9PT1mP28oTSxNK0gsSCxnLFcsTStrLE0rayt2LHYpOmstSC8yLEI9XCJzdGFydFwiPT09dT9EOlwiY2VudGVyXCI9PT11P0QtYi8yOlwiZW5kXCI9PT11P0QtYjpvKHkseStiLGIsYSxwLHkrRCx5K0QrRSxFKSxUPU1hdGgubWF4KDAsVCtNKSxCPU1hdGgubWF4KDAsQit5KTtlbHNle1Q9XCJzdGFydFwiPT09Zj9rLXItZzpcImVuZFwiPT09Zj9rLXMrVytWOlwibmVhcmVzdFwiPT09Zj9vKHIscyxuLGcsVytWLGssayt2LHYpOmstKHIrbi8yKStWLzIsQj1cInN0YXJ0XCI9PT11P0QtZC1hOlwiY2VudGVyXCI9PT11P0QtKGQrbC8yKStGLzI6XCJlbmRcIj09PXU/RC1pK3ArRjpvKGQsaSxsLGEscCtGLEQsRCtFLEUpO2NvbnN0e3Njcm9sbExlZnQ6dCxzY3JvbGxUb3A6aH09ZTtUPTA9PT1YPzA6TWF0aC5tYXgoMCxNYXRoLm1pbihoK1QvWCxlLnNjcm9sbEhlaWdodC1uL1grVikpLEI9MD09PVM/MDpNYXRoLm1heCgwLE1hdGgubWluKHQrQi9TLGUuc2Nyb2xsV2lkdGgtbC9TK0YpKSxrKz1oLVQsRCs9dC1CfUwucHVzaCh7ZWw6ZSx0b3A6VCxsZWZ0OkJ9KX1yZXR1cm4gTH07ZXhwb3J0e3IgYXMgY29tcHV0ZX07Ly8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\n");

/***/ })

};
;