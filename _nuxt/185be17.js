(window.webpackJsonp=window.webpackJsonp||[]).push([[9,26],{317:function(t,e,r){"use strict";r.r(e);var n={name:"TitleSubCard",props:{title:{type:String,required:!1},description:{type:String,required:!1}}},o=(r(325),r(30)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titleSubCard-container"},[n("div",{staticClass:"titleSubCard"},[n("h4",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"descriptiont"},[n("img",{attrs:{src:r(205)}}),t._v(" "),n("p",[t._v(t._s(t.description))])])])])}),[],!1,null,"55fe83f8",null);e.default=component.exports},319:function(t,e,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("580a4552",content,!0,{sourceMap:!1})},325:function(t,e,r){"use strict";r(319)},326:function(t,e,r){var n=r(57)(!1);n.push([t.i,".titleSubCard-container[data-v-55fe83f8]{display:flex;justify-content:flex-end}.titleSubCard-container .titleSubCard[data-v-55fe83f8]{display:flex;flex-direction:column;align-items:flex-end}.titleSubCard-container h4[data-v-55fe83f8]{font-size:1.063rem;color:#fff;text-align:right;min-width:300px}.titleSubCard-container .descriptiont[data-v-55fe83f8]{display:flex;flex-direction:row-reverse;margin-top:5px}.titleSubCard-container .descriptiont img[data-v-55fe83f8]{height:15px;width:15px;margin-left:5px}.titleSubCard-container .descriptiont p[data-v-55fe83f8]{font-size:.75rem;color:var(--gray-1)}",""]),t.exports=n},334:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("51ba4a70",content,!0,{sourceMap:!1})},347:function(t,e,r){"use strict";r.r(e);var n={name:"IconListCard",components:{TitleSubCard:r(317).default},props:{link:{type:String,required:!1,default:"/"},iconAlt:{type:String,required:!1},title:{type:String,required:!0,default:"Title"},description:{type:String,required:!0,default:"Description"}}},o=(r(363),r(30)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iconListCard-container"},[n("a",{staticClass:"iconListCard",attrs:{href:t.link,target:"_blank"}},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:r(217),alt:t.iconAlt}})]),t._v(" "),n("TitleSubCard",{staticClass:"titleSubCard",attrs:{title:t.title,description:t.description}})],1)])}),[],!1,null,"1812a167",null);e.default=component.exports;installComponents(component,{TitleSubCard:r(317).default})},363:function(t,e,r){"use strict";r(334)},364:function(t,e,r){var n=r(57)(!1);n.push([t.i,".iconListCard-container[data-v-1812a167]{display:flex;justify-content:flex-end}.iconListCard-container .iconListCard[data-v-1812a167]{display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:center;text-decoration:none}.iconListCard-container .iconListCard .icon[data-v-1812a167]{display:flex;align-items:center;justify-content:center;height:50px;width:50px;border-radius:5px;background-color:#fff}.iconListCard-container .iconListCard .icon img[data-v-1812a167]{height:30px;width:30px}.iconListCard-container .iconListCard .titleSubCard[data-v-1812a167]{margin-right:15px}",""]),t.exports=n}}]);