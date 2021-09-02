let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let tagline = document.querySelector('.tagline')


document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  cursor2.style.left = e.clientX + 'px';
  cursor2.style.top = e.clientY + 'px';
});





