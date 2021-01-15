"use strict";

//获取nav
var nav = document.getElementsByClassName('nav'); //获取nav中的a

var nav_a = nav[0].getElementsByTagName('a'); //迭代a元素 并在内容后加上|

for (var i = 0; i < nav_a.length - 1; i++) {
  nav_a[i].innerHTML = nav_a[i].innerHTML + '&nbsp&nbsp&nbsp&nbsp|';
}
//# sourceMappingURL=base.dev.js.map
