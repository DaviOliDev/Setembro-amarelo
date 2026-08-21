const links = document.querySelectorAll('.nav-inner ul > li:not(.ajuda) a');

links.forEach(link => {
    link.addEventListener('click', () => {

        links.forEach(l => l.classList.remove('ativo'));

        link.classList.add('ativo');
    });
});

const botaoMenu = document.getElementById('botao-menu');
const menuLista = document.getElementById('menu-lista');

botaoMenu.addEventListener('click', () => {
    menuLista.classList.toggle('aberto');
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('rolou');
    } else {
        navbar.classList.remove('rolou');
    }
});