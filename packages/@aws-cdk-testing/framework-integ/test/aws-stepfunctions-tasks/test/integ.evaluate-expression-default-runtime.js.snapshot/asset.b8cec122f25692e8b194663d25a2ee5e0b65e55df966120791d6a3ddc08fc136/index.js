"use strict";var o=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var c=(e,n)=>{for(var s in n)o(e,s,{get:n[s],enumerable:!0})},l=(e,n,s,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of a(n))!p.call(e,r)&&r!==s&&o(e,r,{get:()=>n[r],enumerable:!(t=i(n,r))||t.enumerable});return e};var g=e=>l(o({},"__esModule",{value:!0}),e);var y={};c(y,{handler:()=>u});module.exports=g(y);function x(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}async function u(e){console.log("Event: %j",{...e,ResponseURL:"..."});let n=Object.entries(e.expressionAttributeValues).reduce((s,[t,r])=>s.replace(new RegExp(x(t),"g"),JSON.stringify(r)),e.expression);return console.log(`Expression: ${n}`),[eval][0](n)}0&&(module.exports={handler});
