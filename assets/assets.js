// Menú responsive
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Animaciones al aparecer
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
},{threshold:0.12});

document.querySelectorAll('.section .card, .benefit, .acc details').forEach((el)=>{
  el.classList.add('hidden');
  observer.observe(el);
});
