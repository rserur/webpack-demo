webpackJsonp([0,2],{0:function(e,t,n){n(1),n(34);var r=n(38);document.body.appendChild(r())},34:function(e,t,n){var r=n(35);"string"==typeof r&&(r=[[e.id,r,""]]);n(37)(r,{});r.locals&&(e.exports=r.locals)},35:function(e,t,n){t=e.exports=n(36)(),t.push([e.id,"body{background:#fff8dc;font-family:Helvetica,Arial,'sans-serif'}",""])},36:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},37:function(e,t,n){function addStylesToDom(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(addStyle(o.parts[a],t))}else{for(var s=[],a=0;a<o.parts.length;a++)s.push(addStyle(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function listToStyles(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],l=o[3],f={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(f):t.push(n[i]={id:i,parts:[f]})}return t}function insertStyleElement(e,t){var n=a(),r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function removeStyleElement(e){e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function createStyleElement(e){var t=document.createElement("style");return t.type="text/css",insertStyleElement(e,t),t}function createLinkElement(e){var t=document.createElement("link");return t.rel="stylesheet",insertStyleElement(e,t),t}function addStyle(e,t){var n,r,o;if(t.singleton){var i=l++;n=s||(s=createStyleElement(t)),r=applyToSingletonTag.bind(null,n,i,!1),o=applyToSingletonTag.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=createLinkElement(t),r=updateLink.bind(null,n),o=function(){removeStyleElement(n),n.href&&URL.revokeObjectURL(n.href)}):(n=createStyleElement(t),r=applyToTag.bind(null,n),o=function(){removeStyleElement(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function applyToSingletonTag(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function applyToTag(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function updateLink(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var r={},o=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},i=o(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),a=o(function(){return document.head||document.getElementsByTagName("head")[0]}),s=null,l=0,f=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=i()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=listToStyles(e);return addStylesToDom(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i],s=r[a.id];s.refs--,o.push(s)}if(e){var l=listToStyles(e);addStylesToDom(l,t)}for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete r[s.id]}}}};var u=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},38:function(e,t){e.exports=function(){var e=document.createElement("h1");return e.innerHTML="Hello world",e}}});
//# sourceMappingURL=app.js.map