let nav_as=document.getElementsByClassName('nav')[0];
let product_a=nav_as.getElementsByTagName('a')[1];
let product=document.getElementsByClassName('products')[0];
product_a.onmouseover=function(){
  product.style.display="block";
};
product_a.onmouseleave=function(){
  setTimeout(function(){
    product.style.display="none";
  },1000)
}
product.onmousemove=function(){
  setTimeout(function(){
    product.style.display="block";

  },1010)
}
product.onmouseleave=function(){
  setTimeout(function(){
    product.style.display="none";
  },1020)
}
