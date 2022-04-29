(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33fcabc9"],{"3da5":function(n,e,t){},4715:function(n,e,t){"use strict";t("a420")},"52d8":function(n,e,t){},"7d50":function(n,e,t){"use strict";t("3da5")},9661:function(n,e,t){"use strict";t("98b4")},"98b4":function(n,e,t){},a420:function(n,e,t){},a88a:function(n,e,t){"use strict";t("ec6c")},cbb9:function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"note"},[t("ul",[t("li",[t("BuildNodeJS")],1),t("li",[t("InstallNRMandCNPM")],1),t("li",[t("Reorder")],1),t("li",[t("methods-and-computed")],1)])])},r=[],o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"buildNodeJS"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("NodeJS运行环境搭建")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v('搭建方式一:\n    1.官网下载.msi安装包: https://nodejs.org/zh-cn/\n    2.全程下一步\n    3.重启\n    4.在命令行工具中输入 node -v\n\n搭建方式二:\n    1.官网下载.zip安装包: https://nodejs.org/zh-cn/\n    2.解压下载好的安装包\n    3.在"高级系统设置"中手动配置环境变量\n    4.在命令行工具中输入 node -v\n\n搭建方式三:\n    1.下载NVM: https://github.com/coreybutler/nvm-windows\n    2.在D盘创建dev目录\n    3.在Dev目中中创建两个子目录nvm和node, 并且把nvm包解压进去nvm目录中\n    4.在install.cmd文件上面右键选择【以管理员身份运行】\n        在终端中直接按下回车\n        将弹出的文件另存为到NVM目录\n        打开settings.txt文件. 修改\n        root: D:\\dev\\nvm\n        path: D:\\dev\\node\n    6.配置环境变量\n        NVM_HOME: D:\\dev\\nvm\n        NVM_SYMLINK: D:\\dev\\node\n        在Path中添加 %NVM_HOME% %NVM_SYMLINK%\n    7.在命令行工具中输入 nvm version\n\n      NVM常用命令\n      - nvm list 查看当前安装的Node.js所有版本\n      - nvm install 版本号 安装指定版本的Node.js\n      - nvm uninstall 版本号 卸载指定版本的Node.js\n      - nvm use 版本号 选择指定版本的Node.js\n      ')])])},i=[],a={name:"BuildNodeJS",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},c=a,h=(t("9661"),t("2877")),l=Object(h["a"])(c,o,i,!1,null,"bef70ed6",null),d=l.exports,v=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"installNRMandCNPM"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("安装使用NRM、CNPM")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("1.什么是nrm?\n\n\n    由于npm默认去国外下载资源, 所以对于国内开发者来说下载会比较慢\n    所以就有人写了一个nrm工具, 允许你将资源下载地址从国外切换到国内\n\n    npm install -g nrm   安装NRM\n    nrm --version 查看是否安装成功\n    nrm ls    查看允许切换的资源地址\n    nrm use taobao  将下载地址切换到淘宝\n\n    PS:淘宝资源地址和国外的地址内容完全同步,淘宝镜像与官方同步频率目前为\n    10分钟一次以保证尽量与官方服务同步\n\n\n2.什么是cnpm?\n\n\n    由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢\n    cnpm 就是将下载源从国外切换到国内下载, 只不过是将所有的指令从npm变为cnpm而已\n\n    npm install -g cnpm --registry=https://registry.npm.taobao.org  安装CNPM\n    cnpm -v  查看是否安装成功\n    使用方式同npm, 例如: npm install jquery 变成cnpm install jquery 即可\n          ")])])},u=[],w={name:"InstallNRMandCNPM",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},m=w,p=(t("ebbe"),Object(h["a"])(m,v,u,!1,null,"2d1a32cc",null)),S=p.exports,f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"reorder"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("排序")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("1.快速排序\n    function quickSort(arr){\n          if(arr.length<1){\n              return arr;\n    }\n    var pivotIndex=Math.floor(arr.length/2);//找到那个基准数\n    var pivot=arr.splice(pivotIndex,1)[0]; //取出基准数，并去除，splice返回值为数组。\n    var left=[];\n    var right=[];\n    for(var i=0;i< arr.length;i++){\n        if(arr[i]< pivot){\n              left.push(arr[i]);\n        }else{\n            right.push(arr[i]);\n        }\n    }\n    return quickSort(left).concat([pivot],quickSort(right)); //加入基准数\n  }\n    arr=[4,2,6,12,66,9];\n    console.log(quickSort(arr)); //[2,4,6,9,12,66]\n\n\n2.冒泡排序\n    var arr1=[4,22,1,6,3,7,2];\n    for(var i=1;i<=arr1.length-1;i++){\n        for(var j=0;j<=arr1.length-i-1;j++){\n            if(arr1[j]>=arr1[j+1]){\n              var temp=arr1[j];\n              arr1[j]=arr1[j+1];\n              arr1[j+1]=temp;\n              }\n        }\n    }\n    console.log(arr1);\n\n\n3.计数排序\n    function countingSort(iArr, max) {\n      var n = iArr.length;\n      var oArr = [];\n      // 创建长度max的数组，填充0\n      var C = [];\n      for(var i = 0; i <= max; i++){\n              C[i] = 0;\n    }\n    // 遍历输入数组，填充C\n    for(var j = 0; j < n; j++){\n          C[iArr[j]]++;\n    }\n    // 遍历C，输出数组\n    for(var k = 0; k <= max; k++){\n    // 按顺序将值推入输出数组，并在比较后将对应标志位减1\n        while(C[k]-- > 0){\n          oArr.push(k);\n        }\n    }\n    return oArr;\n    }\n\n    countingSort([2, 1, 3, 1, 5], 5);\n    // 输出[1, 1, 2, 3, 5]\n  ")])])},N=[],g={name:"Reorder",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},_=g,b=(t("4715"),Object(h["a"])(_,f,N,!1,null,"b3bec8c4",null)),M=b.exports,j=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"date-format"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("Methods/Computed")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("     computed 具有缓存功能，在系统刚运行的时候调用一次。\n     只有当计算结果发生变化才会被调用我们在长度框与宽度框更改值的时候每次更改\n     computed 都会被调用一次，很浪费资源。计算就要返回一个计算的结果\n\n     用 methods 方法编写的逻辑运算，在调用时 add() 一定要加“()”，\n     methods 里面写的多位方法，调用方法一定要有（）。\n     methods方法页面刚加载时调用一次，以后只有被调用的时候才会被调用。\n\n    在哪些情况下更适合使用 computed ？\n        一般使用简单的表达式对内容进行简单的转换与使用过滤器对内容进行简单的转换用的比较多。\n\n    对比computed 和 methods：\n\n        computed计算的结果如果不发生改变就不会触发result这个函数。\n        而methods中一般都是定义的需要事件触发的一些函数。每次只要触发事件，就会执行对应的方法。如果把computed中的方法写到method中会浪费性能。\n\n        computed必须返回一个值页面绑定的才能取得值，\n        而methods中可以只执行逻辑代码，可以有返回值，也可以没有。\n      ")])])},x=[],C={name:"MethodsAndComputed",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},k=C,y=(t("7d50"),Object(h["a"])(k,j,x,!1,null,"671ffe91",null)),R=y.exports,A={name:"Note",components:{BuildNodeJS:d,InstallNRMandCNPM:S,Reorder:M,MethodsAndComputed:R},data:function(){return{}},methods:{}},P=A,E=(t("a88a"),Object(h["a"])(P,s,r,!1,null,"354b7672",null));e["default"]=E.exports},ebbe:function(n,e,t){"use strict";t("52d8")},ec6c:function(n,e,t){}}]);