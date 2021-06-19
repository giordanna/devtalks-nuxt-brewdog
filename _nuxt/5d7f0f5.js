(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,6,7],{241:function(e,t,n){"use strict";n.r(t);var r={props:["cerveja"]},l=n(19),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",{staticClass:"font-bold"},[e._v("ABV")]),e._v("\n  "+e._s(e.cerveja.abv?e.cerveja.abv:"???")+"% |\n  "),n("strong",{staticClass:"font-bold"},[e._v("IBU")]),e._v("\n  "+e._s(e.cerveja.ibu?e.cerveja.ibu:"???")+" |\n  "),n("strong",{staticClass:"font-bold"},[e._v("EBC")]),e._v("\n  "+e._s(e.cerveja.ebc?e.cerveja.ebc+" ("+(e.cerveja.ebc>=20?"escura":"clara")+")":"???")+"\n")])}),[],!1,null,null,null);t.default=component.exports},244:function(e,t,n){"use strict";n.r(t);var r=n(19),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"h-8 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 68 68"}},[t("path",{attrs:{d:"M36.176 54.7C37.389 56.059 38.733 57.299 40.198 58.402C38.843 61.808 36.718 64.887 33.91 67.394C31.104 64.888 28.972 61.813 27.615 58.409C29.083 57.304 30.43 56.062 31.644 54.701C31.985 54.995 32.32 55.296 32.677 55.575L33.91 56.539L35.142 55.575C35.5 55.295 35.835 54.995 36.176 54.7ZM46.236 57.483C48.324 54.295 49.587 50.722 49.998 47.034C47.855 46.126 45.856 44.975 44.038 43.603C42.873 46.626 41.168 49.419 39.01 51.887C41.013 54.172 43.45 56.078 46.236 57.483ZM36.472 34.841C35.936 35.168 35.393 35.483 34.834 35.774L33.91 36.256L32.985 35.774C32.426 35.483 31.882 35.168 31.346 34.84C30.156 36.997 28.716 38.983 27.03 40.731C28.309 44.801 30.65 48.483 33.909 51.395C37.168 48.484 39.514 44.806 40.792 40.735C39.104 38.986 37.663 36.999 36.472 34.841ZM17.823 47.033C18.236 50.722 19.496 54.296 21.584 57.483C24.371 56.077 26.805 54.17 28.808 51.885C26.652 49.417 24.949 46.623 23.784 43.601C21.966 44.975 19.967 46.125 17.823 47.033ZM28.087 32.506C26.273 31.003 24.642 29.279 23.25 27.359C20.108 29.427 16.629 30.801 12.967 31.466C12.83 35.633 13.78 39.787 15.801 43.552C21.128 41.424 25.441 37.524 28.087 32.506ZM39.731 32.507C42.378 37.525 46.691 41.424 52.018 43.551C54.039 39.787 54.994 35.632 54.857 31.466C51.193 30.801 47.712 29.427 44.57 27.358C43.178 29.28 41.546 31.004 39.731 32.507ZM35.91 6.032V2C35.91 0.896 35.014 0 33.91 0C32.806 0 31.91 0.896 31.91 2V6.032C20.299 6.996 11.005 16.248 10 27.847C14.569 27.456 18.871 25.784 22.545 22.951L24.305 21.594L25.47 23.487C27.57 26.9 30.473 29.728 33.91 31.718C37.347 29.728 40.251 26.9 42.35 23.487L43.514 21.594L45.274 22.951C48.95 25.784 53.251 27.457 57.82 27.847C56.816 16.249 47.521 6.997 35.91 6.032Z"}})])}),[],!1,null,null,null);t.default=component.exports},248:function(e,t,n){"use strict";n.r(t);var r={props:["cerveja"]},l=n(19),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"text-center mb-8"},[n("img",{staticClass:"block mx-auto h-52 md:h-96 mb-3",attrs:{src:e.cerveja.image_url?e.cerveja.image_url:"no-image-placeholder.png",alt:e.cerveja.name},on:{error:function(e){e.target.src="no-image-placeholder.png"}}}),e._v(" "),n("h1",{staticClass:"font-black text-xl md:text-5xl uppercase mb-1"},[e._v("\n    "+e._s(e.cerveja.name)+"\n  ")]),e._v(" "),n("h2",{staticClass:"italic font-light mb-3"},[e._v("\n    "+e._s(e.cerveja.tagline)+"\n  ")]),e._v(" "),n("CervejaValores",{attrs:{cerveja:e.cerveja}}),e._v(" "),e._l(Math.ceil(e.cerveja.ibu/10),(function(e){return n("HopIcon",{key:e,staticClass:"inline-block text-seagreen-600"})})),e._v(" "),n("p",{staticClass:"my-3 text-left text-sm md:text-base"},[e._v("\n    "+e._s(e.cerveja.description)+"\n  ")]),e._v(" "),n("p",{staticClass:"\n      text-left text-blue-600 text-xs\n      md:text-sm\n      my-1\n      font-bold\n      block\n      mx-auto\n    "},[e._v("\n    "+e._s(e.cerveja.contributed_by)+" | Primeira Fabricação:\n    "+e._s(e.cerveja.first_brewed)+"\n  ")])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CervejaValores:n(241).default,HopIcon:n(244).default,Header:n(112).default})},249:function(e,t,n){"use strict";n.r(t);var r={props:["cerveja"],methods:{unidade:function(e){switch(e){case"grams":return"g";case"celsius":return"Cº";case"litres":return"litros";case"kilograms":return"kg";default:return e[0]}},adiciona:function(e){switch(e){case"start":return"Início";case"middle":return"Meio";case"end":return"Fim";case"dry hop":return"Dry Hop";default:return e}},utilidade:function(e){switch(e){case"bitter":return"amargor";case"flavour":return"sabor";default:return e}}}},l=n(19),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Dica")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.cerveja.brewers_tips)+"\n    ")])]),e._v(" "),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},[n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Densidades")]),e._v(" "),n("ul",{staticClass:"list-disc ml-4"},[n("li",[e._v("Original: "+e._s((e.cerveja.target_og-1e3)/10)+" %")]),e._v(" "),n("li",[e._v("Final: "+e._s((e.cerveja.target_fg-1e3)/10)+" %")])])]),e._v(" "),n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Malte(s)")]),e._v(" "),n("ul",{staticClass:"list-disc ml-4"},e._l(e.cerveja.ingredients.malt,(function(t){return n("li",{key:t.name},[e._v("\n          "+e._s(t.amount.value)+" "+e._s(e.unidade(t.amount.unit))+" de\n          "),n("strong",{staticClass:"font-bold"},[e._v(e._s(t.name))])])})),0)]),e._v(" "),n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Lúpulo(s)")]),e._v(" "),n("ul",{staticClass:"list-disc ml-4"},e._l(e.cerveja.ingredients.hops,(function(t,r){return n("li",{key:r},[e._v("\n          "+e._s(e.adiciona(t.add))+": "+e._s(t.amount.value)+"\n          "+e._s(e.unidade(t.amount.unit))+" de\n          "),n("strong",{staticClass:"font-bold"},[e._v(e._s(t.name))]),e._v(" para\n          "+e._s(e.utilidade(t.attribute))+"\n        ")])})),0)]),e._v(" "),n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Fermento")]),e._v(" "),n("p",[e._v(e._s(e.cerveja.ingredients.yeast))])]),e._v(" "),n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Volume")]),e._v(" "),n("ul",{staticClass:"list-disc ml-4"},[n("li",[e._v("\n          Fervura: "+e._s(e.cerveja.boil_volume.value)+"\n          "+e._s(e.unidade(e.cerveja.boil_volume.unit))+"\n        ")]),e._v(" "),n("li",[e._v("\n          Final: "+e._s(e.cerveja.volume.value)+"\n          "+e._s(e.unidade(e.cerveja.volume.unit))+"\n        ")])])]),e._v(" "),n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Método")]),e._v(" "),n("ul",{staticClass:"list-disc ml-4"},[n("li",[e._v("\n          Brassagem(s):\n          "),n("ul",{staticClass:"list-disc ml-4"},e._l(e.cerveja.method.mash_temp,(function(t,r){return n("li",{key:r},[e._v("\n              "+e._s(t.temp.value)+"\n              "+e._s(e.unidade(t.temp.unit))+" por\n              "+e._s(t.duration)+" minutos\n            ")])})),0)]),e._v(" "),n("li",[e._v("\n          Fermentação: "+e._s(e.cerveja.method.fermentation.temp.value)+"\n          "+e._s(e.unidade(e.cerveja.method.fermentation.temp.unit))+"\n        ")]),e._v(" "),e.cerveja.method.twist?n("li",[e._v("\n          Mistura: "+e._s(e.cerveja.method.twist)+"\n        ")]):e._e()])]),e._v(" "),n("section",{staticClass:"my-5"},[n("h3",{staticClass:"font-bold text-xl md:text-2xl mb-3"},[e._v("Combina com")]),e._v(" "),n("ul",{staticClass:"list-disc ml-4"},e._l(e.cerveja.food_pairing,(function(t){return n("li",{key:t},[e._v("\n          "+e._s(t)+"\n        ")])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},251:function(e,t,n){"use strict";n.r(t);var r=n(7),l=(n(48),n(34),{head:function(){return{title:this.cerveja.name,meta:[{hid:"description",name:"description",content:this.cerveja.tagline},{hid:"og:title",property:"og:title",content:this.cerveja.name},{hid:"og:description",property:"og:description",content:this.cerveja.tagline},{hid:"og:image",property:"og:image",content:this.cerveja.image_url}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,l=e.error,t.prev=1,t.next=4,n.$get("/beers/".concat(r.id));case 4:return c=t.sent,t.abrupt("return",{cerveja:c[0]});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",l({statusCode:404}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},data:function(){return{cerveja:null}}}),c=n(19),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("CervejaDetalhesHeader",{attrs:{cerveja:e.cerveja}}),e._v(" "),n("CervejaDetalhes",{attrs:{cerveja:e.cerveja}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CervejaDetalhesHeader:n(248).default,CervejaDetalhes:n(249).default})}}]);