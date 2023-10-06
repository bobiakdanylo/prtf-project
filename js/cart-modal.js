document.querySelector('.cart-modal-open').addEventListener('click', () => {
    document.querySelector('.cart').classList.remove('visibility-hidden');
    document.querySelector('.cart').classList.add('cart-opened');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.cart-modal-open').classList.toggle('nav__btn-focused');
})

document.querySelector('.mobile-cart-modal-open').addEventListener('click', () => {
    document.querySelector('.cart').classList.remove('visibility-hidden');
    document.querySelector('.cart').classList.add('cart-opened');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.cart-modal-open').classList.toggle('nav__btn-focused');
})

document.querySelector('.cart-modal-close').addEventListener('click', () => {
    document.querySelector('.cart').classList.add('visibility-hidden');
    document.querySelector('.cart').classList.remove('cart-opened');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.cart-modal-open').classList.toggle('nav__btn-focused');
})

document.querySelector('.goods__btn-cnt').addEventListener('click', () => {
    document.querySelector('.cart').classList.add('visibility-hidden');
    document.querySelector('.cart').classList.remove('cart-opened');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.cart-modal-open').classList.toggle('nav__btn-focused');
})  

window.addEventListener('keyup', (e) => {
    if(e.key === 'Escape' && document.querySelector('.cart-opened')){
        document.querySelector('.cart').classList.add('visibility-hidden');
        document.querySelector('.cart').classList.remove('cart-opened');
        document.body.classList.toggle('modal-overflow');
        document.querySelector('.cart-modal-open').classList.toggle('nav__btn-focused');
    }
});

const cartBox = document.querySelector('.cart-modal');

document.querySelector('.cart').addEventListener('click', (e) => {
    const cartChildren = e.composedPath().includes(cartBox);
    if(!cartChildren && document.querySelector('.cart-opened')){
        document.querySelector('.cart').classList.add('visibility-hidden');
        document.querySelector('.cart').classList.remove('cart-opened');
        document.body.classList.toggle('modal-overflow');
        document.querySelector('.cart-modal-open').classList.toggle('nav__btn-focused');
    }
});