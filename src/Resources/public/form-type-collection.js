!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="Cb5Y")}({Cb5Y:function(e,t){window.addEventListener("DOMContentLoaded",(function(e){document.querySelectorAll("[data-ea-collection-property]").forEach((function(e){var t=e.querySelector("button.property-collection-add-button");null!==t&&n.handleAddButton(t,e)}))}));var n={handleAddButton:function(e,t){e.addEventListener("click",(function(){var e=parseInt(t.dataset.numItems),n=e+1,r=t.dataset.formTypeNamePlaceholder,o=new RegExp(r+"label__","g"),u=new RegExp(r,"g"),a=t.dataset.prototype.replace(o,n).replace(u,n);t.dataset.numItems=++e,t.querySelector(".form-widget .form-widget-compound > div").innerHTML+=a,window.dispatchEvent(new Event("ea.collection.item-added"))}))}}}});