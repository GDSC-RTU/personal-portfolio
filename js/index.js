let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let tagline = document.querySelector('.tagline')
const scrollTop = document.querySelector(".scrollTop");

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  cursor2.style.left = e.clientX + 'px';
  cursor2.style.top = e.clientY + 'px';
});

tagline.addEventListener('mouseover', () => {
  cursor.classList.add('taglineHover')
  cursor2.style.display = 'none'
})

tagline.addEventListener('mouseleave', () => {
  cursor.classList.remove('taglineHover')
  cursor2.style.display = 'block'
})

scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
})

