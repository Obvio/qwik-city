import{t as ie,j as G,k as j,Q as Z,r as $,m as ee,l as te,n as W,o as le,q as ce,v as ue,w as P,x as b,y as de,z as _e,A as me,B as fe,c as pe,C as ve,d as ye,D as he,R as Se,e as Ce,f as Ee,h as ge,i as we}from"./q-C2zdlHP2.js";import{u as oe,j as ne,k as qe,n as be,l as Le,m as Re,o as Ie,g as H,p as De,h as z,i as y,r as Pe,d as Ae,q as M,S as ke,s as Te}from"./q-Eo_y5XTU.js";import{_ as A}from"./q-uemlvruI.js";const xe=":root{view-transition-name:none}";const Ue=()=>A(()=>import("./q-DxJZs23z.js"),[]),B=[["/",[Ue,()=>A(()=>import("./q-D3nzWkwA.js"),[])]]],J=[];const X=!0;const Oe=async(u,n)=>{const[h,E,s,g]=oe(),{type:i="link",forceReload:m=u===void 0,replaceState:f=!1,scroll:w=!0}=typeof n=="object"?n:{forceReload:n};if(typeof u=="number"){history.go(u);return}const l=s.value.dest,o=u===void 0?l:ie(u,g.url);if(!G(o,l)){location.href=o.href;return}if(!m&&j(o,l)){{i==="link"&&o.href!==location.href&&history.pushState(null,"",o);const p=document.getElementById(Z)??document.documentElement;$(i,o,new URL(location.href),p,ee()),i==="popstate"&&(window._qCityScrollEnabled=!0)}return}return s.value={type:i,dest:o,forceReload:m,replaceState:f,scroll:w},te(o,ne()),W(B,J,X,o.pathname),h.value=void 0,g.isNavigating=!0,new Promise(p=>{E.r=p})},He=({track:u})=>{const[n,h,E,s,g,i,m,f,w,l,o]=oe();async function p(){var Y;const[d,L]=u(()=>[l.value,n.value]),re=qe(""),R=o.url,_=L?"form":d.type,se=d.replaceState;let r,I,V=null,k;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let T=W(B,J,X,r.pathname);k=ne();const x=I=await te(r,k,{action:L,clearCache:!0});if(!x){l.untrackedValue={type:_,dest:r};return}const U=x.href,O=new URL(U,r);le(O,r)||(r=O,T=W(B,J,X,r.pathname));try{V=await T}catch{window.location.href=U;return}}if(V){const[T,x,U,O]=V,D=U,ae=D[D.length-1];o.prevUrl=R,o.url=r,o.params={...x},l.untrackedValue={type:_,dest:r};const q=ce(I,o,D,re);h.headings=ae.headings,h.menu=O,E.value=be(D),s.links=q.links,s.meta=q.meta,s.styles=q.styles,s.scripts=q.scripts,s.title=q.title,s.frontmatter=q.frontmatter;{w.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;_==="popstate"&&(F=ee());const S=document.getElementById(Z)??document.documentElement;(d.scroll&&(!d.forceReload||!j(r,R))&&(_==="link"||_==="popstate")||_==="form"&&!j(r,R))&&(document.__q_scroll_restore__=()=>$(_,r,R,S,F));const K=I==null?void 0:I.loaders,e=window;if(K&&Object.assign(m,K),ue.clear(),!e._qCitySPA){if(e._qCitySPA=!0,history.scrollRestoration="manual",e.addEventListener("popstate",()=>{e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),i(location.href,{type:"popstate"})}),e.removeEventListener("popstate",e._qCityInitPopstate),e._qCityInitPopstate=void 0,!e._qCityHistoryPatch){e._qCityHistoryPatch=!0;const a=history.pushState,v=history.replaceState,C=t=>(t===null||typeof t>"u"?t={}:(t==null?void 0:t.constructor)!==Object&&(t={_data:t}),t._qCityScroll=t._qCityScroll||b(S),t);history.pushState=(t,c,Q)=>(t=C(t),a.call(history,t,c,Q)),history.replaceState=(t,c,Q)=>(t=C(t),v.call(history,t,c,Q))}document.body.addEventListener("click",a=>{if(a.defaultPrevented)return;const v=a.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const C=v.getAttribute("href"),t=new URL(location.href),c=new URL(C,t);if(G(c,t)&&j(c,t)){if(a.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==t.href&&history.pushState(null,"",c),e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),P({...b(S),x:0,y:0}),location.reload();return}i(v.getAttribute("href"))}}}),document.body.removeEventListener("click",e._qCityInitAnchors),e._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(e._qCityScrollEnabled&&document.visibilityState==="hidden"){const a=b(S);P(a)}},{passive:!0}),document.removeEventListener("visibilitychange",e._qCityInitVisibility),e._qCityInitVisibility=void 0),e.addEventListener("scroll",()=>{e._qCityScrollEnabled&&(clearTimeout(e._qCityScrollDebounce),e._qCityScrollDebounce=setTimeout(()=>{const a=b(S);P(a),e._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",e._qCityInitScroll),e._qCityInitScroll=void 0,(Y=e._qCityBootstrap)==null||Y.remove(),e._qCityBootstrap=void 0,de.resolve()}if(_!=="popstate"){e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce);const a=b(S);P(a)}_e(window,_,R,r,se),Le(k).then(()=>{var C;me(k).setAttribute("q:route",T);const v=b(S);P(v),e._qCityScrollEnabled=!0,o.isNavigating=!1,(C=f.r)==null||C.call(f)})}}}p()},je=u=>{Re(M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=fe();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const h=Ie("url");if(!h)throw new Error("Missing Qwik URL Env Data");const E=new URL(h),s=H({url:E,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),g={},i=De(H(n.response.loaders,{deep:!1})),m=z({type:"initial",dest:E,forceReload:!1,replaceState:!1,scroll:!0}),f=H(pe),w=H({headings:void 0,menu:void 0}),l=z(),o=n.response.action,p=o?n.response.loaders[o]:void 0,d=z(p?{id:o,data:n.response.formData,output:{result:p,status:n.response.status}}:void 0),L=M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[d,g,m,s]);return y(ve,w),y(ye,l),y(he,f),y(Se,s),y(Ce,L),y(Ee,i),y(ge,d),y(we,m),Pe(M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[d,w,l,f,n,L,i,g,u,m,s])),Ae(ke,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:Te,s_02wMImzEAbk:He,s_RPDJAz33WLA:xe,s_TxCFOy819ag:je,s_fX0bDjeJa0E:Oe},Symbol.toStringTag,{value:"Module"}));export{Te as _hW,He as s_02wMImzEAbk,xe as s_RPDJAz33WLA,je as s_TxCFOy819ag,Oe as s_fX0bDjeJa0E};
