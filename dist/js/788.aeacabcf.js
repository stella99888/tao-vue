"use strict";(self["webpackChunktao_vue"]=self["webpackChunktao_vue"]||[]).push([[788],{1788:function(t,a,e){e.r(a),e.d(a,{default:function(){return i}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"random"},[t._v(" random "),a("div",[t._v(t._s(t.value))]),a("el-button",{on:{click:t.getRandom}},[t._v("更新")]),a("el-button",{on:{click:t.getDomClass}},[t._v("改变classList")])],1)},s=[],l={data(){return{value:"1",arr:[1,2,3,4,5]}},methods:{getDomClass(){let t=document.querySelector("div");t.classList.add("active")},getRandom(){if(0===this.arr.length)throw Error("数组已清空");const t=Math.floor(Math.random()*this.arr.length);this.value=this.arr[t],this.arr.splice(t,1)}}},n=l,o=e(1656),u=(0,o.A)(n,r,s,!1,null,null,null),i=u.exports}}]);
//# sourceMappingURL=788.aeacabcf.js.map