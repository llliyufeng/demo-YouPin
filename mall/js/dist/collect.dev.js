"use strict";

var box = document.getElementsByClassName('collect_box');
var collect_box = box[0]; // console.log(collect_box);  //collect_box

var small = collect_box.children[0]; //samll_img

var small_img = small.children[0].children; //获取mask

var mask = small.children[1]; //big_img

var big_box = collect_box.children[1]; //获取大图

var big_img = big_box.children[0];
console.log(big_img); //img
//注意：一定要注意获取设置显示和隐藏的img的位置
// console.log(big_box);//collect_box_img
//获取samll_box

var small_box = document.getElementsByClassName('collect_box_small')[0]; //注册鼠标移入事件

small.onmouseover = function () {
  //显示遮挡层
  mask.style.display = 'block'; //显示放大图

  big_box.style.display = 'block';
}; //注册鼠标移出事件


small.onmouseout = function () {
  //隐藏遮挡层
  mask.style.display = 'none';
  big_box.style.display = 'none';
}; //设置鼠标移动效果 --- mask


small.onmousemove = function (e) {
  //鼠标此时的可视区域的横坐标和纵坐标
  var x = e.clientX - mask.offsetWidth / 2;
  var y = e.clientY - mask.offsetHeight / 2; //横坐标的最小值

  x = x < 120 ? 120 : x; //纵坐标的最小值

  y = y < 120 ? 120 : y; //横坐标最大值

  x = x > small.offsetWidth + 100 ? small.offsetWidth + 100 : x; //纵坐标最大值

  y = y > small.offsetHeight ? small.offsetHeight : y; //给遮挡层横纵坐标赋值

  mask.style.left = x + "px";
  mask.style.top = y - 100 + "px"; // 遮挡层的移动距离/大图的移动距离=遮挡层的移动范围/大图的移动范围  --- 是一个比例关系
  //大图的移动距离 = 遮挡层的移动距离*大图的移动范围/遮挡层的移动范围
  //大图的横向最大移动距离

  var big_max = big_img.offsetWidth - big_box.offsetWidth; //大图横向移动坐标

  var big_img_moveX = x * big_max / (small.offsetWidth - mask.offsetWidth); //大图纵向移动坐标

  var big_img_moveY = y * big_max / (small.offsetWidth - mask.offsetWidth); //设置图片移动

  big_img.style.marginLeft = -big_img_moveX + 65 + "px";
  big_img.style.marginTop = -big_img_moveY + 68 + "px";
};
//# sourceMappingURL=collect.dev.js.map
