(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6926e194"],{"00ce":function(t,s,i){},"069c":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"guitar"},[t.isShowHome?i("div",{staticClass:"container"},[i("div",{staticClass:"son",on:{click:function(s){return t.toggle("website")}}},[i("span",[t._v("网站")])]),i("div",{staticClass:"son",on:{click:function(s){return t.toggle("train")}}},[i("span",[t._v("练习")])])]):t._e(),t.isShowTrain?i("train",{ref:"train",attrs:{param:t.param},on:{toggleSon:t.toggle}}):t._e()],1)},n=[],e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"train"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("div",{on:{click:t.closeTrain}},[t._v("⬅")]),"train"==t.param?a("span",[t._v("练习")]):t._e(),"website"==t.param?a("span",[t._v("网站")]):t._e(),"study"==t.param?a("span",[t._v("学习")]):t._e()]),"website"==t.param?a("div",[t._m(0)]):t._e(),"train"==t.param?a("div",{staticStyle:{"text-align":"center"}},[t._m(1),a("img",{ref:"disc",staticClass:"autoRotate",attrs:{src:i("9ac7")}}),a("p",{staticStyle:{"padding-top":"1%"}},[t._v("星条旗进行曲")]),a("audio",{attrs:{src:i("8a5f"),controls:"",loop:""},on:{play:t.play,pause:t.pause}})]):t._e()])])},r=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("pre",[t._v("      基础乐理：\n      "),i("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=1512007"}},[t._v("乐理入门篇")]),t._v("\n\n      入门教程：\n      "),i("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=821008"}},[t._v("从零到高手，吉他入门标准教程")]),t._v("\n\n      良心师傅up主：\n      "),i("a",{attrs:{href:"https://space.bilibili.com/326251291?spm_id_from=333.788.b_765f7570696e666f.1"}},[t._v("元子弹吉他")]),t._v("\n      "),i("a",{attrs:{href:"https://space.bilibili.com/188519580"}},[t._v("老默er")]),t._v("\n\n      吉他网站：\n      "),i("a",{attrs:{href:"https://www.jitashe.org/"}},[t._v("吉他社")]),t._v("\n          ")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{"margin-top":"40px"}},[i("a",{attrs:{href:"https://space.bilibili.com/36963051"}},[t._v("我的b站个人主页")])])}],c={name:"Train",components:{},data:function(){return{songUrl:"",isPlaying:!1}},props:{param:{type:String}},methods:{play:function(){this.isPlaying=!0,this.$refs.disc.classList.add("discPlaying")},pause:function(){this.isPlaying=!1,this.$refs.disc.classList.remove("discPlaying")},closeTrain:function(){this.$emit("toggleSon")}}},o=c,l=(i("fd43"),i("2877")),p=Object(l["a"])(o,e,r,!1,null,"7b0e9b58",null),u=p.exports,d={name:"Guitar",components:{Train:u},data:function(){return{isShowTrain:!1,isShowHome:!0,param:""}},methods:{toggleSon:function(){this.isShowTrain=!this.isShowTrain,this.isShowHome=!this.isShowHome},toggle:function(t){this.toggleSon(),this.param="website"==t?"website":"train"==t?"train":"study"==t?"study":""}}},h=d,f=(i("548c"),Object(l["a"])(h,a,n,!1,null,"5dbb1a07",null));s["default"]=f.exports},"2c8b":function(t,s,i){},"548c":function(t,s,i){"use strict";i("2c8b")},"8a5f":function(t,s,i){t.exports=i.p+"media/theStarsAndStripesForever.3e1a5d1d.aac"},"9ac7":function(t,s,i){t.exports=i.p+"img/black.10802c1a.png"},fd43:function(t,s,i){"use strict";i("00ce")}}]);