import{Q as o,h as u,v as f,l as v,C as d,R as l,S as i,D as h,T as m}from"./CChhudFR.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),h()&&(d(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};
