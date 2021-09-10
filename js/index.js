// const links = document.querySelectorAll('.offcanvas-link')
// const close = document.querySelector('.btn-close')
// for(let i=0; i < links.length; i++){
//   links[i].addEventListener('click',() => {close.click()}
// }

document.addEventListener("DOMContentLoaded", function(){
   var links = document.querySelectorAll(".offcanvas-link");
   for(var x=0; x<links.length; x++){
      links[x].onclick = function(){
         document.querySelector("button.btn-close").click();
      }
   }
});
