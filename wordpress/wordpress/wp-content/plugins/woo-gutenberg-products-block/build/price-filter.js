this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var c,a,i=t[0],l=t[1],s=t[2],b=0,f=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={11:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;return o.push([624,2,1,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},17:function(e,t){!function(){e.exports=this.wp.compose}()},2:function(e,t){!function(){e.exports=this.wp.components}()},20:function(e,t){!function(){e.exports=this.React}()},21:function(e,t){!function(){e.exports=this.wp.url}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},26:function(e,t,n){"use strict";var c=n(0),r=n(2),o=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 22.41"},Object(c.createElement)("g",null,Object(c.createElement)("g",null,Object(c.createElement)("path",{d:"M16.55 0H1.75C.56 0 0 .52 0 1.68v9.24c0 1.15.56 1.92 1.75 1.92H2V4.76a2.51 2.51 0 0 1 2.74-2.68H18v-.4A1.51 1.51 0 0 0 16.55 0z"}),Object(c.createElement)("path",{d:"M19.54 3.11H4.74C3.55 3.11 3 3.64 3 4.79V14c0 1.19.55 2 1.74 2H5V7.88A2.51 2.51 0 0 1 7.73 5.2H21v-.41a1.51 1.51 0 0 0-1.46-1.68z"}),Object(c.createElement)("path",{d:"M22.53 6.23H7.73C6.54 6.23 6 6.75 6 7.91v9.24c0 1.15.56 1.92 1.75 1.92h7a.59.59 0 0 1 .32.11l1.61 1.15 2.83 2a.31.31 0 0 0 .18.05.3.3 0 0 0 .31-.3v-2.73a.3.3 0 0 1 .28-.28h2.31A1.47 1.47 0 0 0 24 17.6V7.91a1.52 1.52 0 0 0-1.47-1.68z"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M10.2 10.92l1.06-2.14 1.05 2.14 2.37.35-1.71 1.66.4 2.36-2.11-1.11-.17.09-.52.27-.51.26-.92.49.18-1.02.09-.57.1-.56.03-.21-1.71-1.66 2.37-.35zM21.46 14.25h-4.4a.69.69 0 0 1-.69-.69.68.68 0 0 1 .69-.68h4.4a.68.68 0 0 1 .69.68.69.69 0 0 1-.69.69zM21.46 11.19h-4.4a.69.69 0 1 1 0-1.37h4.4a.69.69 0 1 1 0 1.37z"}))))})},a=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fillRule:"nonzero",d:"M21.913 7.0946H2.0254c-1.1708 0-2.0984.9908-2.0205 2.16l.741 11.0724c.0714 1.0638.9552 1.8892 2.0206 1.8892h18.4054c1.0654 0 1.9492-.8254 2.0205-1.8892l.7411-11.0724c.0779-1.1692-.8497-2.16-2.0205-2.16zm-8.8006-4.6573h5.987c1.119 0 2.0255.9065 2.0255 2.0254v.934H2.8103V2.0255C2.8103.9064 3.7168 0 4.8357 0h6.2513c1.119 0 2.0254.9065 2.0254 2.0254v.4119zm-7.0589 11.619a.926.926 0 1 1 0-1.852h11.8297a.926.926 0 1 1 0 1.852H6.0535z"}))})},i=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M22 7.5H2c-1.2 0-2.1 1-2 2.2l.7 11.1c.1 1.1 1 1.9 2 1.9h18.5c1.1 0 2-.8 2-1.9L24 9.6c.1-1.1-.9-2.1-2-2.1zM13.1 2.8v-.4c0-1.1-.9-2-2-2H4.8c-1.1 0-2 .9-2 2v3.4h18.4v-1c0-1.1-.9-2-2-2h-6.1z"}),Object(c.createElement)("path",{fill:"#fff",d:"M14.4 18.7L12 17.4l-2.4 1.3.5-2.6-1.9-1.9 2.6-.4 1.2-2.4 1.2 2.4 2.6.4-1.9 1.9z"}))})},l=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M21.5,0h-9.3L0.8,11.4c-1,1-1,2.6,0,3.6L9,23.2c1,1,2.6,1,3.6,0c0,0,0,0,0,0L24,11.9V2.5C24,1.1,22.9,0,21.5,0z"}),Object(c.createElement)("circle",{fill:"#fff",cx:"18.1",cy:"5.8",r:"2.5"}),Object(c.createElement)("path",{fill:"#fff",d:"M5.8,10.5C5.8,10,6,9.6,6.3,9.2s0.8-0.5,1.3-0.5c0.6,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3V11 c0,0.5-0.2,1-0.5,1.3s-0.8,0.5-1.3,0.5c-0.6,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V10.5z M7,11c0,0.2,0.1,0.4,0.2,0.6 s0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.6v-0.4c0-0.2-0.1-0.4-0.2-0.6S7.9,9.7,7.7,9.7c-0.2,0-0.4,0.1-0.5,0.2 S7,10.3,7,10.5V11z M8,16.8l-0.8-0.4l4.2-6.7l0.8,0.4L8,16.8z M9.9,15.3c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5 c0.6,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v0.4c0,0.5-0.2,0.9-0.5,1.3s-0.8,0.5-1.3,0.5c-0.6,0-1-0.2-1.4-0.5s-0.5-0.8-0.5-1.3V15.3z  M11,15.8c0,0.2,0.1,0.4,0.2,0.6s0.3,0.2,0.5,0.2c0.5,0,0.7-0.3,0.7-0.8v-0.4c0-0.2-0.1-0.4-0.2-0.6s-0.3-0.2-0.5-0.2 s-0.4,0.1-0.5,0.2S11,15.1,11,15.3V15.8z"}))})},s=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 23"},Object(c.createElement)("path",{d:"M13.0993 2.41207V2.01231C13.0993 0.912976 12.1999 0.0135193 11.1005 0.0135193H4.80435C3.70501 0.0135193 2.80556 0.912976 2.80556 2.01231V5.41026H21.1944V4.5108C21.1944 3.41147 20.295 2.51201 19.1957 2.51201H13.0993V2.41207Z"}),Object(c.createElement)("path",{d:"M8.60759 11.3092C7.50759 12.4092 7.50759 14.2092 8.60759 15.3092C9.70759 16.4092 11.5076 16.4092 12.6076 15.3092C13.7076 14.2092 13.7076 12.4092 12.6076 11.3092C11.5076 10.2092 9.70759 10.2092 8.60759 11.3092Z"}),Object(c.createElement)("path",{d:"M22.0076 7.10919H2.00759C0.80759 7.10919 -0.0924101 8.10919 0.00758988 9.30919L0.70759 20.4092C0.80759 21.5092 1.70759 22.3092 2.70759 22.3092H21.2076C22.3076 22.3092 23.2076 21.5092 23.2076 20.4092L24.0076 9.30919C24.1076 8.10919 23.1076 7.10919 22.0076 7.10919ZM16.5076 20.2092L13.4076 17.1092V16.5092L13.3076 16.4092C11.7076 17.8092 9.30759 17.7092 7.80759 16.2092C6.20759 14.6092 6.20759 12.0092 7.80759 10.4092C9.40759 8.80919 12.0076 8.80919 13.6076 10.4092C15.1076 11.9092 15.2076 14.3092 13.8076 15.9092L13.9076 16.0092H14.4076L17.5076 19.1092L16.5076 20.2092Z"}))})},u=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M21.45,0H12.14L.75,11.4A2.55,2.55,0,0,0,.75,15L9,23.25a2.55,2.55,0,0,0,3.61,0L24,11.86V2.55A2.55,2.55,0,0,0,21.45,0Z"}),Object(c.createElement)("circle",{fill:"#fff",cx:"18.07",cy:"5.75",r:"2.47"}),Object(c.createElement)("path",{fill:"#fff",d:"M9.27,9.53c-.14-.53.19-.85.72-.72l3.17.82a1.83,1.83,0,0,1,1.21,1.21L15.19,14c.13.53-.19.86-.72.72l-3.17-.81a1.9,1.9,0,0,1-1.22-1.22Z"}),Object(c.createElement)("path",{fill:"#fff",d:"M14.14,15.71a.52.52,0,0,1,.26,1L12.09,19a1.94,1.94,0,0,1-1.68.46l-3.16-.81a.52.52,0,0,1-.26-1L9.3,15.36A1.93,1.93,0,0,1,11,14.9Z"}),Object(c.createElement)("path",{fill:"#fff",d:"M8.29,9.86a.52.52,0,0,0-1-.26L5,11.91a1.94,1.94,0,0,0-.46,1.68l.81,3.16a.52.52,0,0,0,1,.26L8.64,14.7A1.93,1.93,0,0,0,9.1,13Z"}))})},b=function(){return Object(c.createElement)(r.Icon,{className:"material-icon",icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(c.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}))})},f=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"#1E8CBE",d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},p=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"#6C7781",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))})},d=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M2.3,17.3h9.3c0.1,0,0.3,0,0.4,0.1l5.9,4.2c0.3,0.2,0.7,0,0.7-0.3v-3.7c0-0.2,0.2-0.4,0.4-0.4H22 c1.1,0,2-0.9,2-2V2.5c0-1.2-0.7-2.2-2-2.2H2.3C0.7,0.2,0,0.9,0,2.5v12.3C0,16.3,0.7,17.3,2.3,17.3z"}),Object(c.createElement)("polygon",{fill:"#ffffff",points:"8.8,12.1 6.5,10.9 4.1,12.1 4.5,9.5 2.6,7.6 5.3,7.2 6.5,4.8 7.6,7.2 10.3,7.6 8.4,9.5"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M20.7,7.9h-7c-0.5,0-0.9-0.4-0.9-0.9S13.2,6,13.7,6h7c0.5,0,0.9,0.4,0.9,0.9S21.2,7.9,20.7,7.9z"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M20.7,11.5h-7c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h7c0.5,0,0.9,0.4,0.9,0.9S21.2,11.5,20.7,11.5z"}))})},m=function(e){var t=e.className;return Object(c.createElement)(r.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 23"},Object(c.createElement)("path",{d:"M21.9943 7.0957H2.00638C0.807102 7.0957 -0.0923543 8.0951 0.0075853 9.29437L0.707162 20.3877C0.807102 21.487 1.70656 22.2865 2.70595 22.2865H21.1948C22.2941 22.2865 23.1936 21.487 23.1936 20.3877L23.9931 9.29437C24.093 8.0951 23.0936 7.0957 21.9943 7.0957Z"}),Object(c.createElement)("path",{d:"M13.0921 2.39855V1.99879C13.0921 0.899456 12.1926 0 11.0933 0H4.7971C3.69777 0 2.79831 0.899456 2.79831 1.99879V5.39674H21.1872V4.49728C21.1872 3.39795 20.2877 2.49849 19.1884 2.49849H13.0921V2.39855Z"}),Object(c.createElement)("path",{fill:"white",d:"M8.63115 17.126L6.5415 15.9449L4.361 17.126L4.72442 14.6729L2.99819 13.0376L5.45125 12.6742L6.5415 10.4937L7.5409 12.6742L9.99396 13.0376L8.26773 14.6729L8.63115 17.126Z"}),Object(c.createElement)("path",{fill:"white",d:"M19.1907 13.5918H12.9899C12.547 13.5918 12.1926 13.1921 12.1926 12.6924C12.1926 12.1927 12.547 11.7929 12.9899 11.7929H19.1907C19.6336 11.7929 19.9879 12.1927 19.9879 12.6924C19.9879 13.1921 19.6336 13.5918 19.1907 13.5918Z"}),Object(c.createElement)("path",{fill:"white",d:"M19.1907 17.1897H12.9899C12.547 17.1897 12.1926 16.7899 12.1926 16.2902C12.1926 15.7905 12.547 15.3907 12.9899 15.3907H19.1907C19.6336 15.3907 19.9879 15.7905 19.9879 16.2902C19.9879 16.7899 19.6336 17.1897 19.1907 17.1897Z"}))})},h=function(){return Object(c.createElement)(r.Icon,{className:"material-icon",icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(c.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})},g=n(14),v=n.n(g),O=(n(3),function(e){var t=e.size,n=void 0===t?20:t,o=e.className;return Object(c.createElement)(r.Icon,{className:v()("woo-icon",o),icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:n,width:Math.floor(1.67*n),viewBox:"0 0 245 145"},Object(c.createElement)("path",{fill:"#96588A",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(c.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))})}),j=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("mask",{id:"money-mask",width:"20",height:"14",x:"2",y:"5",maskUnits:"userSpaceOnUse"},Object(c.createElement)("path",{fill:"#fff",fillRule:"evenodd",d:"M2 5v14h20V5H2zm5 12c0-1.657-1.343-3-3-3v-4c1.657 0 3-1.343 3-3h10c0 1.657 1.343 3 3 3v4c-1.657 0-3 1.343-3 3H7zm7-5c0-1.7-.9-3-2-3s-2 1.3-2 3 .9 3 2 3 2-1.3 2-3z",clipRule:"evenodd"})),Object(c.createElement)("g",{mask:"url(#money-mask)"},Object(c.createElement)("path",{d:"M0 0h24v24H0z"})))})},w=function(){return Object(c.createElement)(r.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(c.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(c.createElement)("g",{mask:"url(#external-mask)"},Object(c.createElement)("path",{d:"M0 0h24v24H0z"})))})};n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return p})),n.d(t,"m",(function(){return d})),n.d(t,"l",(function(){return m})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return O})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return w}))},31:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},33:function(e,t){!function(){e.exports=this.wp.data}()},37:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},4:function(e,t){!function(){e.exports=this.lodash}()},44:function(e,t,n){"use strict";var c=n(7),r=n.n(c),o=n(27),a=n.n(o),i=n(37),l=n(33),s=n(0),u=Object(s.createContext)("page"),b=function(){return Object(s.useContext)(u)},f=(u.Provider,n(31)),p=n.n(f),d=function(e){var t=Object(s.useRef)();return p()(e,t.current)||(t.current=e),t.current};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}var h=function(e){var t=b();return e=e||t,[Object(l.useSelect)((function(t){return t(i.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),Object(l.useDispatch)(i.QUERY_STATE_STORE_KEY).setValueForQueryContext]},g=function(e,t,n){var c=b();n=n||c;var r=Object(l.useSelect)((function(c){return c(i.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),o=Object(l.useDispatch)(i.QUERY_STATE_STORE_KEY).setQueryValue;return[r,Object(s.useCallback)((function(t){o(n,e,t)}),[n,e])]},v=function(e,t){var n=b(),c=h(t=t||n),o=a()(c,2),i=o[0],l=o[1],u=d(e),f=Object(s.useRef)(!1);return Object(s.useEffect)((function(){l(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{},u)),f.current=!0}),[u]),f.current?[i,l]:[e,l]},O=function(e){var t=e.namespace,n=e.resourceName,c=e.resourceValues,r=void 0===c?[]:c,o=e.query,a=void 0===o?{}:o,u=e.shouldSelect,b=void 0===u||u;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var f=Object(s.useRef)({results:[],isLoading:!0}),p=d(a),m=d(r),h=Object(l.useSelect)((function(e){if(!b)return null;var c=e(i.COLLECTIONS_STORE_KEY),r=[t,n,p,m];return{results:c.getCollection.apply(c,r),isLoading:!c.hasFinishedResolution("getCollection",r)}}),[t,n,m,p,b]);return null!==h&&(f.current=h),f.current};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t={namespace:"/wc/store",resourceName:"products"},n=O(w({},t,{query:e})),c=n.results,r=n.isLoading;return{products:c,totalProducts:function(e,t){var n=t.namespace,c=t.resourceName,r=t.resourceValues,o=void 0===r?[]:r,a=t.query,s=void 0===a?{}:a;if(!n||!c)throw new Error("The options object must have valid values for the namespace and the resource name properties.");var u=d(s),b=d(o),f=Object(l.useSelect)((function(t){var r=t(i.COLLECTIONS_STORE_KEY),o=[e,n,c,u,b];return{value:r.getCollectionHeader.apply(r,o),isLoading:r.hasFinishedResolution("getCollectionHeader",o)}}),[e,n,c,b,u]),p=f.value,m=f.isLoading;return{value:p,isLoading:void 0===m||m}}("x-wp-total",w({},t,{query:e})).value,productsLoading:r}},_=n(20),y=function(e,t){var n=Object(_.useRef)();return Object(_.useEffect)((function(){n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,n.current]),n.current};n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return E})),n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return y}))},5:function(e,t,n){"use strict";var c=n(6),r=Object(c.getSetting)("enableReviewRating",!0),o=Object(c.getSetting)("showAvatars",!0),a=Object(c.getSetting)("max_columns",6),i=Object(c.getSetting)("min_columns",1),l=Object(c.getSetting)("default_columns",3),s=Object(c.getSetting)("max_rows",6),u=Object(c.getSetting)("min_rows",1),b=Object(c.getSetting)("default_rows",2),f=Object(c.getSetting)("min_height",500),p=Object(c.getSetting)("default_height",500),d=Object(c.getSetting)("placeholderImgSrc",""),m=(Object(c.getSetting)("thumbnail_size",300),Object(c.getSetting)("isLargeCatalog")),h=Object(c.getSetting)("limitTags"),g=Object(c.getSetting)("hasProducts",!0),v=Object(c.getSetting)("hasTags",!0),O=Object(c.getSetting)("homeUrl",""),j=Object(c.getSetting)("productCount",0),w=Object(c.getSetting)("attributes",[]),E=Object(c.getSetting)("wcBlocksAssetUrl",""),_={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")};n.d(t,"e",(function(){return r})),n.d(t,"s",(function(){return o})),n.d(t,"l",(function(){return a})),n.d(t,"n",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"p",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"o",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"q",(function(){return d})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return h})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return O})),n.d(t,"r",(function(){return j})),n.d(t,"a",(function(){return w})),n.d(t,"t",(function(){return E})),n.d(t,"f",(function(){return _}))},50:function(e,t,n){"use strict";var c=n(16),r=n.n(c),o=n(10),a=n.n(o),i=n(15),l=n.n(i),s=n(11),u=n.n(s),b=n(12),f=n.n(b),p=n(8),d=n.n(p),m=n(13),h=n.n(m),g=n(0),v=n(4),O=n(14),j=n.n(O),w=n(2),E=n(17),_=(n(98),function(e){function t(){var e;return a()(this,t),(e=u()(this,f()(t).apply(this,arguments))).onClick=e.onClick.bind(d()(e)),e}return h()(t,e),l()(t,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,c=n.label,o=n.checked,a=n.instanceId,i=n.className,l=n.help,s=n.options,u=n.value,b="inspector-toggle-button-control-".concat(a);return l&&(e=Object(v.isFunction)(l)?l(o):l),Object(g.createElement)(w.BaseControl,{id:b,help:e,className:j()("components-toggle-button-control",i)},Object(g.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},c),Object(g.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},s.map((function(e,n){var o={};return u===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isDefault=!0,o["aria-pressed"]=!1),Object(g.createElement)(w.Button,r()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":c+": "+e.label},o),e.label)}))))}}]),t}(g.Component));t.a=Object(E.withInstanceId)(_)},52:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t){!function(){e.exports=this.wc.wcSettings}()},60:function(e,t,n){"use strict";var c=n(10),r=n.n(c),o=n(15),a=n.n(o),i=n(11),l=n.n(i),s=n(12),u=n.n(s),b=n(8),f=n.n(b),p=n(13),d=n.n(p),m=n(7),h=n.n(m),g=n(0),v=n(20),O=(n(3),n(1)),j=n(5),w=function(e){var t=e.imageUrl,n=void 0===t?"".concat(j.t,"img/block-error.svg"):t,c=e.header,r=void 0===c?Object(O.__)("Oops!","woo-gutenberg-products-block"):c,o=e.text,a=void 0===o?Object(O.__)("There was an error with loading this content.","woo-gutenberg-products-block"):o,i=e.errorMessage;return Object(g.createElement)("div",{className:"wc-block-error"},n&&Object(g.createElement)("img",{className:"wc-block-error__image",src:n,alt:""}),Object(g.createElement)("div",{className:"wc-block-error__content"},r&&Object(g.createElement)("p",{className:"wc-block-error__header"},r),a&&Object(g.createElement)("p",{className:"wc-block-error__text"},a),i&&Object(g.createElement)("p",{className:"wc-block-error__message"},i)))},E=(n(118),function(e){function t(){var e,n;r()(this,t);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return n=l()(this,(e=u()(t)).call.apply(e,[this].concat(o))),h()(f()(n),"state",{hasError:!1}),n}return d()(t,e),a()(t,[{key:"render",value:function(){var e=this.props,t=e.header,n=e.imageUrl,c=e.showErrorMessage,r=e.text,o=this.state,a=o.errorMessage;return o.hasError?Object(g.createElement)(w,{errorMessage:c?a:null,header:t,imageUrl:n,text:r}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{errorMessage:e.message,hasError:!0}}}]),t}(v.Component));E.defaultProps={showErrorMessage:!1};t.a=E},613:function(e,t,n){var c=n(614);"string"==typeof c&&(c=[[e.i,c,""]]);var r={insert:"head",singleton:!1};n(38)(c,r);c.locals&&(e.exports=c.locals)},614:function(e,t,n){},624:function(e,t,n){"use strict";n.r(t);var c=n(16),r=n.n(c),o=n(0),a=n(1),i=n(25),l=n(52),s=n(2),u=n(5),b=n(83),f=n(88),p=n(7),d=n.n(p),m=n(27),h=n.n(m),g=n(44),v=(n(3),n(14)),O=n.n(v),j=(n(611),function(e,t,n,c,r){var o=parseInt(e[0],10)||t,a=parseInt(e[1],10)||c;return t>o&&(o=t),n<=o&&(o=n-c),t>=a&&(a=t+c),n<a&&(a=n),!r&&o>=a&&(o=a-c),r&&a<=o&&(a=o+c),[o,a]}),w=n(86),E=function(e){var t=e.disabled,n=e.onClick;return Object(o.createElement)("button",{type:"submit",className:"wc-block-price-filter__button wc-block-form-button",disabled:t,onClick:n},Object(a.__)("Go","woo-gutenberg-products-block"))};E.defaultProps={disabled:!1};var _=E,y=function(e){var t=e.minPrice,n=e.maxPrice;return t||n?Object(o.createElement)("div",{className:"wc-block-price-filter__range-text"},Object(a.sprintf)(Object(a.__)("Price: %s — %s","woo-gutenberg-products-block"),t,n)):null},k=function(e){var t=e.disabled,n=e.onBlur,c=e.onChange,r=e.minPrice,i=e.maxPrice;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input","aria-label":Object(a.__)("Filter products by minimum price","woo-gutenberg-products-block"),onChange:c,onBlur:n,disabled:t,value:r}),Object(o.createElement)("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input","aria-label":Object(a.__)("Filter products by maximum price","woo-gutenberg-products-block"),onChange:c,onBlur:n,disabled:t,value:i}))};k.defaultProps={disabled:!1,onBlur:function(){},onChange:function(){}};var C=k,x=function(e){var t=e.minPrice,n=e.maxPrice,c=e.minConstraint,r=e.maxConstraint,i=e.onChange,l=void 0===i?function(){}:i,s=e.step,u=void 0===s?10:s,b=e.currencySymbol,f=void 0===b?"$":b,p=e.priceFormat,d=void 0===p?"%1$s%2$s":p,m=e.showInputFields,g=void 0===m||m,v=e.showFilterButton,E=void 0!==v&&v,k=e.isLoading,x=void 0!==k&&k,M=e.onSubmit,L=void 0===M?function(){}:M,S=Object(o.useRef)(),z=Object(o.useRef)(),H=Object(o.useState)(Object(w.a)(t,d,f)),P=h()(H,2),N=P[0],V=P[1],F=Object(o.useState)(Object(w.a)(n,d,f)),I=h()(F,2),B=I[0],R=I[1];Object(o.useEffect)((function(){V(Object(w.a)(t,d,f))}),[t,d,f]),Object(o.useEffect)((function(){R(Object(w.a)(n,d,f))}),[n,d,f]);var T=Object(o.useMemo)((function(){return isFinite(c)&&isFinite(r)}),[c,r]),D=Object(o.useMemo)((function(){return isFinite(t)&&isFinite(n)&&T?{"--low":Math.round((t-c)/(r-c)*100)-.5+"%","--high":Math.round((n-c)/(r-c)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,n,c,r,T]),A=Object(o.useCallback)((function(e){if(!x&&T){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,c=S.current.offsetWidth,o=S.current.value,a=z.current.offsetWidth,i=z.current.value,l=c*(o/r),s=a*(i/r);Math.abs(n-l)>Math.abs(n-s)?(S.current.style.zIndex=20,z.current.style.zIndex=21):(S.current.style.zIndex=21,z.current.style.zIndex=20)}}),[x,r,T]),U=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),a=e.target.value,i=j(o?[a,n]:[t,a],c,r,u,o);l([parseInt(i[0],10),parseInt(i[1],10)])}),[t,n,c,r,u]),Y=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__amount--min"),a=e.target.value.replace(/[^0-9.-]+/g,""),i=j(o?[a,n]:[t,a],c,r,u,o);l([parseInt(i[0],10),parseInt(i[1],10)]),V(Object(w.a)(parseInt(i[0],10),d,f)),R(Object(w.a)(parseInt(i[1],10),d,f))}),[t,n,c,r,u]),Z=Object(o.useCallback)((function(e){var t=e.target.value.replace(/[^0-9.-]+/g,"");e.target.classList.contains("wc-block-price-filter__amount--min")?V(Object(w.a)(t,d,f)):R(Object(w.a)(t,d,f))}),[d,f]),Q=O()("wc-block-price-filter",g&&"wc-block-price-filter--has-input-fields",E&&"wc-block-price-filter--has-filter-button",x&&"is-loading",!T&&"is-disabled");return Object(o.createElement)("div",{className:Q},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper",onMouseMove:A,onFocus:A},!x&&T&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress",style:D}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min","aria-label":Object(a.__)("Filter products by minimum price","woo-gutenberg-products-block"),value:t||0,onChange:U,step:u,min:c,max:r,ref:S}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max","aria-label":Object(a.__)("Filter products by maximum price","woo-gutenberg-products-block"),value:n||0,onChange:U,step:u,min:c,max:r,ref:z}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls"},g?Object(o.createElement)(C,{disabled:x||!T,onChange:Z,onBlur:Y,minPrice:N,maxPrice:B}):Object(o.createElement)(y,{minPrice:N,maxPrice:B}),E&&Object(o.createElement)(_,{disabled:x||!T,onClick:L})))},M=n(6),L=n(645),S=n(60);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.attributes,n=e.isPreview,c=void 0!==n&&n,r=Object(g.d)("min_price"),a=h()(r,2),i=a[0],l=a[1],s=Object(g.d)("max_price"),u=h()(s,2),b=u[0],f=u[1],p=Object(g.c)(),d=h()(p,1)[0],m=Object(g.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:H({},d,{min_price:void 0,max_price:void 0,orderby:void 0,order:void 0,per_page:void 0,page:void 0,calculate_price_range:!0})}),v=m.results,O=m.isLoading,j=Object(o.useState)(),w=h()(j,2),E=w[0],_=w[1],y=Object(o.useState)(),k=h()(y,2),C=k[0],z=k[1],P=Object(o.useState)(),N=h()(P,2),V=N[0],F=N[1],I=Object(o.useState)(),B=h()(I,2),R=B[0],T=B[1],D=Object(g.b)(V),A=Object(g.b)(R),U=Object(L.a)((function(){Z()}),500),Y=h()(U,1)[0],Z=Object(o.useCallback)((function(){l(E===V?void 0:E),f(C===R?void 0:C)}),[E,C,V,R]),Q=Object(o.useCallback)((function(e){e[0]!==E&&_(e[0]),e[1]!==C&&z(e[1])}),[V,R,E,C]);if(Object(o.useEffect)((function(){Y()}),[E,C]),Object(o.useEffect)((function(){i!==E&&_(Number.isFinite(i)?i:V),b!==C&&z(Number.isFinite(b)?b:R)}),[i,b,V,R]),Object(o.useEffect)((function(){if(!O){var e=v.min_price,t=v.max_price;isNaN(e)?F(null):F(10*Math.floor(parseInt(e,10)/10)),isNaN(t)?T(null):T(10*Math.ceil(parseInt(t,10)/10))}}),[O,v]),Object(o.useEffect)((function(){(void 0===E||V>E||E===D)&&_(V)}),[V]),Object(o.useEffect)((function(){(void 0===C||R<C||C===A)&&z(R)}),[R]),!O&&(null===V||null===R||V===R))return null;var q="h".concat(t.headingLevel);return Object(o.createElement)(S.a,null,!c&&t.heading&&Object(o.createElement)(q,null,t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(x,{minConstraint:V,maxConstraint:R,minPrice:E,maxPrice:C,step:10,currencySymbol:M.CURRENCY.symbol,priceFormat:M.CURRENCY.price_format,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:Q,onSubmit:Z,isLoading:O})))},N=(n(613),n(26)),V=n(50);Object(i.registerBlockType)("woocommerce/price-filter",{title:Object(a.__)("Filter Products by Price","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(N.e,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block"),supports:{},example:{},attributes:{showInputFields:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},heading:{type:"string",default:Object(a.__)("Filter by price","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},edit:function(e){var t,n,c=e.attributes,r=e.setAttributes,i="h".concat(c.headingLevel);return Object(o.createElement)(o.Fragment,null,0===u.r?Object(o.createElement)(s.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(N.e,null),label:Object(a.__)("Filter Products by Price","woo-gutenberg-products-block"),instructions:Object(a.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(a.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woo-gutenberg-products-block")),Object(o.createElement)(s.Button,{className:"wc-block-price-slider__add_product_button",isDefault:!0,isLarge:!0,href:Object(b.a)("post-new.php?post_type=product")},Object(a.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(N.b,null)),Object(o.createElement)(s.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(a.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)(o.Fragment,null,(t=c.showInputFields,n=c.showFilterButton,Object(o.createElement)(l.InspectorControls,{key:"inspector"},Object(o.createElement)(s.PanelBody,{title:Object(a.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(V.a,{label:Object(a.__)("Price Range","woo-gutenberg-products-block"),value:t?"editable":"text",options:[{label:Object(a.__)("Editable","woo-gutenberg-products-block"),value:"editable"},{label:Object(a.__)("Text","woo-gutenberg-products-block"),value:"text"}],onChange:function(e){return r({showInputFields:"editable"===e})}}),Object(o.createElement)(s.ToggleControl,{label:Object(a.__)("Filter button","woo-gutenberg-products-block"),help:n?Object(a.__)("Results will only update when the button is pressed.","woo-gutenberg-products-block"):Object(a.__)("Results will update when the slider is moved.","woo-gutenberg-products-block"),checked:n,onChange:function(){return r({showFilterButton:!n})}}),Object(o.createElement)("p",null,Object(a.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(f.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:c.headingLevel,onChange:function(e){return r({headingLevel:e})}})))),Object(o.createElement)(i,null,Object(o.createElement)(l.PlainText,{className:"wc-block-attribute-filter-heading",value:c.heading,onChange:function(e){return r({heading:e})}})),Object(o.createElement)(s.Disabled,null,Object(o.createElement)(P,{attributes:c,isPreview:!0}))))},save:function(e){var t=e.attributes,n={"data-showinputfields":t.showInputFields,"data-showfilterbutton":t.showFilterButton,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",r()({className:"is-loading"},n),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(1),r=n(6),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.CURRENCY.price_format,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.CURRENCY.symbol;if(""===e||void 0===e)return"";var o=parseInt(e,10),a=Object(c.sprintf)(t,n,o),i=document.createElement("textarea");return i.innerHTML=a,i.value}},88:function(e,t,n){"use strict";var c=n(10),r=n.n(c),o=n(15),a=n.n(o),i=n(11),l=n.n(i),s=n(12),u=n.n(s),b=n(13),f=n.n(b),p=n(0),d=n(4),m=n(1),h=n(2);function g(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(p.createElement)(h.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(p.createElement)(h.Path,{d:n[t]})):null}var v=function(e){function t(){return r()(this,t),l()(this,u()(t).apply(this,arguments))}return f()(t,e),a()(t,[{key:"createLevelControl",value:function(e,t,n){var c=e===t;return{icon:Object(p.createElement)(g,{level:e}),title:Object(m.sprintf)(Object(m.__)("Heading %d"),e),isActive:c,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,c=void 0===n||n,r=t.minLevel,o=t.maxLevel,a=t.selectedLevel,i=t.onChange;return Object(p.createElement)(h.Toolbar,{isCollapsed:c,icon:Object(p.createElement)(g,{level:a}),controls:Object(d.range)(r,o).map((function(t){return e.createLevelControl(t,a,i)}))})}}]),t}(p.Component);t.a=v}});