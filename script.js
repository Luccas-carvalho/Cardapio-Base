let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show;

});


const menuCarToggle = document.querySelector('.bi.bi-cart2'); // Ícone do carrinho
const closeCartIcon = document.querySelector('.bi.bi-arrow-left'); // Ícone para fechar o carrinho
const carrinho = document.querySelector('.carrinho'); // Seção do carrinho

menuCarToggle.addEventListener('click', () => {
    carrinho.classList.toggle('show'); // Exibir/ocultar o carrinho ao clicar no ícone do carrinho
});

closeCartIcon.addEventListener('click', () => {
    carrinho.classList.remove('show'); // Oculta o carrinho ao clicar no ícone de fechar
});

