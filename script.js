
// menu toggle
let show = true;

const menuSection = document.getElementById('menu');
const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

menuToggle.addEventListener('click', ()=> {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuSection.classList.toggle('on', show);
    show = !show;
});

menuNav.addEventListener('click', ()=> {
    menuSection.classList.remove('on');
    document.body.style.overflow = 'initial';
    show = !show;
});


// scroll
const menuNavScroll = document.querySelectorAll('.menu-nav a[href^="#"]');

menuNavScroll.forEach(item => {
    item.addEventListener('click', scrollPara);
});

function scrollPara(evento) {
    evento.preventDefault();
    console.log(evento);
    const para = scrollParaOtopoPeloId(evento.target)

    scrollParaPosicao(para);
};

function scrollParaOtopoPeloId(elemento) {
    const id = elemento.getAttribute('href');
    return document.querySelector(id).offsetTop;
};

function scrollParaPosicao(para) {
    window.scroll({
        top: para,
        behavior: 'smooth'
    });
};