(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{246:function(t,e,l){"use strict";l.r(e);var n={props:["paginaAtual","caminho","itens"]},r=l(19),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-end items-center gap-3"},[t.paginaAtual-1>0?l("NuxtLink",{staticClass:"p-2 border border-gray-200",attrs:{title:"Página "+(t.paginaAtual-1),to:{path:t.caminho,query:Object.assign({},t.$route.query,{p:t.paginaAtual-1})}}},[l("svg",{staticClass:"h-5 w-5 inline align-middle",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]):t._e(),t._v(" "),l("span",{staticClass:"p-2 border border-black bg-black text-white"},[t._v("\n    Página atual: "+t._s(t.paginaAtual)+"\n  ")]),t._v(" "),t.itens>=20?l("NuxtLink",{staticClass:"p-2 border border-gray-200",attrs:{title:"Página "+(t.paginaAtual+1),to:{path:t.caminho,query:Object.assign({},t.$route.query,{p:t.paginaAtual+1})}}},[l("svg",{staticClass:"h-5 w-5 inline align-middle",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);