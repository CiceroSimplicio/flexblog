let show = true;

const menuSection = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

menuToggle.addEventListener('click', ()=> {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuSection.classList.toggle('on', show);
    show = !show;
})

menuNav.addEventListener('click', ()=> {
    menuSection.classList.remove('on');
    document.body.style.overflow = 'initial';
    show = !show;
})