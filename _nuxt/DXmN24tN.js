import{h as v,a7 as k,l as N,a6 as j,ai as P,ay as D,n as L,a5 as F,az as I,v as M}from"./CChhudFR.js";function B(t,i){if(typeof t!="string")throw new TypeError("argument str must be a string");const n={},e=i||{},r=e.decode||z;let a=0;for(;a<t.length;){const o=t.indexOf("=",a);if(o===-1)break;let s=t.indexOf(";",a);if(s===-1)s=t.length;else if(s<o){a=t.lastIndexOf(";",o-1)+1;continue}const u=t.slice(a,o).trim();if(e!=null&&e.filter&&!(e!=null&&e.filter(u))){a=s+1;continue}if(n[u]===void 0){let c=t.slice(o+1,s).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),n[u]=K(c,r)}a=s+1}return n}function z(t){return t.includes("%")?decodeURIComponent(t):t}function K(t,i){try{return i(t)}catch{return t}}const g=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function A(t,i,n){const e=n||{},r=e.encode||encodeURIComponent;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!g.test(t))throw new TypeError("argument name is invalid");const a=r(i);if(a&&!g.test(a))throw new TypeError("argument val is invalid");let o=t+"="+a;if(e.maxAge!==void 0&&e.maxAge!==null){const s=e.maxAge-0;if(Number.isNaN(s)||!Number.isFinite(s))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(s)}if(e.domain){if(!g.test(e.domain))throw new TypeError("option domain is invalid");o+="; Domain="+e.domain}if(e.path){if(!g.test(e.path))throw new TypeError("option path is invalid");o+="; Path="+e.path}if(e.expires){if(!H(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(o+="; HttpOnly"),e.secure&&(o+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return e.partitioned&&(o+="; Partitioned"),o}function H(t){return Object.prototype.toString.call(t)==="[object Date]"||t instanceof Date}const E=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function x(t,i){i?i={...E,...i}:i=E;const n=R(i);return n.dispatch(t),n.toString()}const $=Object.freeze(["prototype","__proto__","constructor"]);function R(t){let i="",n=new Map;const e=r=>{i+=r};return{toString(){return i},getContext(){return n},dispatch(r){return t.replacer&&(r=t.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const a=Object.prototype.toString.call(r);let o="";const s=a.length;s<10?o="unknown:["+a+"]":o=a.slice(8,s-1),o=o.toLowerCase();let u=null;if((u=n.get(r))===void 0)n.set(r,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return e("buffer:"),e(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](r):t.ignoreUnknown||this.unkown(r,o);else{let c=Object.keys(r);t.unorderedObjects&&(c=c.sort());let l=[];t.respectType!==!1&&!O(r)&&(l=$),t.excludeKeys&&(c=c.filter(f=>!t.excludeKeys(f)),l=l.filter(f=>!t.excludeKeys(f))),e("object:"+(c.length+l.length)+":");const d=f=>{this.dispatch(f),e(":"),t.excludeValues||this.dispatch(r[f]),e(",")};for(const f of c)d(f);for(const f of l)d(f)}},array(r,a){if(a=a===void 0?t.unorderedArrays!==!1:a,e("array:"+r.length+":"),!a||r.length<=1){for(const u of r)this.dispatch(u);return}const o=new Map,s=r.map(u=>{const c=R(t);c.dispatch(u);for(const[l,d]of c.getContext())o.set(l,d);return c.toString()});return n=o,s.sort(),this.array(s,!1)},date(r){return e("date:"+r.toJSON())},symbol(r){return e("symbol:"+r.toString())},unkown(r,a){if(e(a),!!r&&(e(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return e("error:"+r.toString())},boolean(r){return e("bool:"+r)},string(r){e("string:"+r.length+":"),e(r)},function(r){e("fn:"),O(r)?this.dispatch("[native]"):this.dispatch(r.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),t.respectFunctionProperties&&this.object(r)},number(r){return e("number:"+r)},xml(r){return e("xml:"+r.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(r){return e("regex:"+r.toString())},uint8array(r){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return e("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return e("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return e("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return e("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return e("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return e("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return e("url:"+r.toString())},map(r){e("map:");const a=[...r];return this.array(a,t.unorderedSets!==!1)},set(r){e("set:");const a=[...r];return this.array(a,t.unorderedSets!==!1)},file(r){return e("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(t.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(r){return e("bigint:"+r.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const U="[native code] }",V=U.length;function O(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-V)===U}function J(t,i,n={}){return t===i||x(t,n)===x(i,n)}function p(t){if(typeof t!="object")return t;var i,n,e=Object.prototype.toString.call(t);if(e==="[object Object]"){if(t.constructor!==Object&&typeof t.constructor=="function"){n=new t.constructor;for(i in t)t.hasOwnProperty(i)&&n[i]!==t[i]&&(n[i]=p(t[i]))}else{n={};for(i in t)i==="__proto__"?Object.defineProperty(n,i,{value:p(t[i]),configurable:!0,enumerable:!0,writable:!0}):n[i]=p(t[i])}return n}if(e==="[object Array]"){for(i=t.length,n=Array(i);i--;)n[i]=p(t[i]);return n}return e==="[object Set]"?(n=new Set,t.forEach(function(r){n.add(p(r))}),n):e==="[object Map]"?(n=new Map,t.forEach(function(r,a){n.set(p(a),p(r))}),n):e==="[object Date]"?new Date(+t):e==="[object RegExp]"?(n=new RegExp(t.source,t.flags),n.lastIndex=t.lastIndex,n):e==="[object DataView]"?new t.constructor(p(t.buffer)):e==="[object ArrayBuffer]"?t.slice(0):e.slice(-6)==="Array]"?new t.constructor(t):t}const q={path:"/",watch:!0,decode:t=>D(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))},b=window.cookieStore;function G(t,i){var u;const n={...q,...i};n.filter??(n.filter=c=>c===t);const e=T(n)||{};let r;n.maxAge!==void 0?r=n.maxAge*1e3:n.expires&&(r=n.expires.getTime()-Date.now());const a=r!==void 0&&r<=0,o=p(a?void 0:e[t]??((u=n.default)==null?void 0:u.call(n))),s=r&&!a?Q(o,r,n.watch&&n.watch!=="shallow"):v(o);{let c=null;try{!b&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${t}`))}catch{}const l=()=>{n.readonly||J(s.value,e[t])||(Y(t,s.value,n),e[t]=p(s.value),c==null||c.postMessage({value:n.encode(s.value)}))},d=h=>{var y;const w=h.refresh?(y=T(n))==null?void 0:y[t]:n.decode(h.value);f=!0,s.value=w,e[t]=p(w),L(()=>{f=!1})};let f=!1;const m=!!j();if(m&&k(()=>{f=!0,l(),c==null||c.close()}),b){const h=w=>{const y=w.changed.find(_=>_.name===t);y&&d({value:y.value})};b.addEventListener("change",h),m&&k(()=>b.removeEventListener("change",h))}else c&&(c.onmessage=({data:h})=>d(h));n.watch?N(s,()=>{f||l()},{deep:n.watch!=="shallow"}):l()}return s}function T(t={}){return B(document.cookie,t)}function X(t,i,n={}){return i==null?A(t,i,{...n,maxAge:-1}):A(t,i,n)}function Y(t,i,n={}){document.cookie=X(t,i,n)}const C=2147483647;function Q(t,i,n){let e,r,a=0;const o=n?v(t):{value:t};return j()&&k(()=>{r==null||r(),clearTimeout(e)}),P((s,u)=>{n&&(r=N(o,u));function c(){a=0,clearTimeout(e);const l=i-a,d=l<C?l:C;e=setTimeout(()=>{if(a+=d,a<i)return c();o.value=void 0,u()},d)}return{get(){return s(),o.value},set(l){c(),o.value=l,u()}}})}const Z="auth_token",S="http://localhost:8000/api",ee=F("auth",()=>{const t=G(Z),i=v(!1),n=v(null),e=I();M(()=>{var s;t.value?(i.value=!0,n.value=((s=t.value.user)==null?void 0:s.name)||null):(i.value=!1,n.value=null)});async function r(s){try{const{name:u,email:c,password:l,confirmPassword:d}=s,f=u.trim()===""?"Пользователь":u,m=await $fetch(S+"/auth/register",{method:"POST",body:{name:f,email:c,password:l,password_confirmation:d}});t.value=m,await e.push("/")}catch(u){console.error(u)}}async function a(s){var u;try{const{email:c,password:l}=s,d=await $fetch(S+"/auth/login",{method:"POST",body:{email:c,password:l}});t.value=d,n.value=((u=d.user)==null?void 0:u.name)||null,console.log(t.value),await e.push("/")}catch(c){console.error(c)}}async function o(){var s;try{(s=t.value)!=null&&s.token&&await $fetch(S+"/auth/logout",{method:"GET",headers:{Authorization:`Bearer ${t.value.token}`}}),t.value=null,n.value=null}catch(u){console.error(u)}}return{isAuthed:i,userName:n,register:r,login:a,logout:o}});export{ee as u};