(function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"===typeof exports?exports:e)[o]=n[o]}})(self,(function(){return function(){"use strict";var e={154:function(e,t,n){var o=n(751),a=n(422),r=n(641),i=n(953),l=n(33),s=n(518),u=n(232),c=n(978),f=n(92),d=n(643),p=n.n(d);const v=e=>((0,r.Qi)("data-v-2499bed7"),e=e(),(0,r.jt)(),e),g=v((()=>(0,r.Lk)("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"},null,-1))),y={class:"fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20"},h={class:"relative"},b={class:"hit-post_title"},m={class:"hit-content"},w={key:1,class:"p-4 text-sm text-gray-500"};var x={__name:"SearchWidget",props:{appId:{type:String,required:!0},apiKey:{type:String,required:!0},indexName:{type:String,required:!0}},setup(e){const t=e,n=p()(t.appId,t.apiKey),o=n.initIndex(t.indexName),a=(0,i.KR)(!0),d=(0,i.KR)(""),v=(0,i.KR)([]),x=async()=>{if(""!==d.value){const{hits:e}=await o.search(d.value);v.value=e}else v.value=[]};function k(e){e&&(window.location=e.url)}return(0,r.wB)(d,x),console.log("widget on"),(e,t)=>((0,r.uX)(),(0,r.Wv)((0,i.R1)(u.O),{show:a.value,as:"template",onAfterLeave:t[3]||(t[3]=e=>d.value=""),appear:""},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(c.lG),{class:"relative z-10",onClose:t[2]||(t[2]=e=>a.value=!1)},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(u._),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,r.k6)((()=>[g])),_:1}),(0,r.Lk)("div",y,[(0,r.bF)((0,i.R1)(u._),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(c.Lj),{class:"mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"},{default:(0,r.k6)((()=>[(0,r.bF)((0,i.R1)(f.G3),{"onUpdate:modelValue":k},{default:(0,r.k6)((()=>[(0,r.Lk)("div",h,[(0,r.bF)((0,i.R1)(s.A),{class:"pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,r.bF)((0,i.R1)(f.oK),{class:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",onChange:t[0]||(t[0]=e=>d.value=e.target.value),onBlur:t[1]||(t[1]=e=>d.value="")})]),v.value.length>0?((0,r.uX)(),(0,r.Wv)((0,i.R1)(f.Kc),{key:0,static:"",class:"max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(v.value,(e=>((0,r.uX)(),(0,r.Wv)((0,i.R1)(f.jO),{key:e.objectID,value:e,as:"template"},{default:(0,r.k6)((({active:t})=>[(0,r.Lk)("li",{class:(0,l.C4)(["cursor-default select-none px-4 py-2",t&&"bg-indigo-600 text-white"])},[(0,r.Lk)("div",b,(0,l.v_)(e.post_title),1),(0,r.Lk)("div",m,(0,l.v_)(e.content),1)],2)])),_:2},1032,["value"])))),128))])),_:1})):(0,r.Q3)("",!0),""!==d.value&&0===v.value.length?((0,r.uX)(),(0,r.CE)("p",w,"No results found.")):(0,r.Q3)("",!0)])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1},8,["show"]))}},k=n(262);const _=(0,k.A)(x,[["__scopeId","data-v-2499bed7"]]);var j=_;console.log("element.js geladen");const O=(0,o.Ef)(j),R=(0,a.A)(O,j);customElements.get("search-widget")?console.log('Web-Komponente "search-widget" bereits definiert.'):(customElements.define("search-widget",R),console.log('Web-Komponente "search-widget" definiert.'))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.j=853}(),function(){var e={853:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(o);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkalgolia_widget"]=self["webpackChunkalgolia_widget"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(154)}));return o=n.O(o),o}()}));
//# sourceMappingURL=element.js.map