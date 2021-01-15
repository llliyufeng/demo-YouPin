//获取nav
let nav = document.getElementsByClassName('nav');
//获取nav中的a
let nav_a=nav[0].getElementsByTagName('a');
//迭代a元素 并在内容后加上|
for(let i=0;i<nav_a.length-1;i++){
 nav_a[i].innerHTML=nav_a[i].innerHTML+'&nbsp&nbsp&nbsp&nbsp|'
}
