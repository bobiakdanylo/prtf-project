document.querySelector('.auth-modal-open').addEventListener('click', () => {
    document.querySelector('.auth').classList.toggle('visibility-hidden');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.auth-modal-open').classList.toggle('nav__btn-focused');
})

document.querySelector('.mobile-auth-modal-open').addEventListener('click', () => {
    document.querySelector('.auth').classList.toggle('visibility-hidden');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.auth-modal-open').classList.toggle('nav__btn-focused');
})

document.querySelector('.auth-modal-close').addEventListener('click', () => {
    document.querySelector('.auth').classList.toggle('visibility-hidden');
    document.body.classList.toggle('modal-overflow');
    document.querySelector('.auth-modal-open').classList.toggle('nav__btn-focused');
})

window.addEventListener('keyup', (e) => {
    if(e.key === 'Escape' && document.querySelector('.auth')){
    document.querySelector('.auth').classList.add('visibility-hidden');
    document.body.classList.remove('modal-overflow');
    document.querySelector('.auth-modal-open').classList.remove('nav__btn-focused');
    }
});

const authBox = document.querySelector('.auth__modal-box');

document.querySelector('.auth').addEventListener('click', (e) => {
    const authChildren = e.composedPath().includes(authBox);
    if(!authChildren && document.querySelector('.auth')){
        document.querySelector('.auth').classList.toggle('visibility-hidden');
        document.body.classList.toggle('modal-overflow');
        document.querySelector('.auth-modal-open').classList.toggle('nav__btn-focused');
    }
});

document.querySelector('.auth__btn').addEventListener('click', () => {
    document.querySelector('.auth__title-sgn').classList.toggle('display-none');
    document.querySelector('.auth__title-lgn').classList.toggle('display-none');
    document.querySelector('.auth__btn').classList.toggle('current-color');
    document.querySelector('.switcher-js').classList.toggle('current-color');
    document.querySelector('.auth__sgn-switch-block').classList.toggle('display-none');
    document.querySelector('.auth__lgn-switch-block').classList.toggle('display-none');
})

document.querySelector('.switcher-js').addEventListener('click', () => {
    document.querySelector('.auth__title-sgn').classList.toggle('display-none');
    document.querySelector('.auth__title-lgn').classList.toggle('display-none');
    document.querySelector('.auth__btn').classList.toggle('current-color');
    document.querySelector('.switcher-js').classList.toggle('current-color');
    document.querySelector('.auth__sgn-switch-block').classList.toggle('display-none');
    document.querySelector('.auth__lgn-switch-block').classList.toggle('display-none');
})