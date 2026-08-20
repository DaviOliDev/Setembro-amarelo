const links = document.querySelectorAll('.nav-inner a');

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