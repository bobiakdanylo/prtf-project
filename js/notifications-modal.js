document.querySelector('.notifications-modal-open').addEventListener('click', () => {
    document.querySelector('.notifications').classList.toggle('notifications-visbility');
    document.querySelector('.notifications-modal').classList.toggle('notifications-visbility');
    document.querySelector('.notifications-modal-open').classList.toggle('nav__btn-focused');
})

document.querySelector('.mobile-notifications-modal-open').addEventListener('click', () => {
    document.querySelector('.notifications').classList.toggle('notifications-visbility');
    document.querySelector('.notifications-modal').classList.toggle('notifications-visbility');
    document.querySelector('.notifications-modal-open').classList.toggle('nav__btn-focused');
})


const notificationsModalClose = document.querySelector('.notifications-modal');

document.querySelector('.notifications').addEventListener('click', (e) => {
    const boxChildren = e.composedPath().includes(notificationsModalClose);
    if(!boxChildren && document.querySelector('.notifications-visbility')){
        document.querySelector('.notifications').classList.toggle('notifications-visbility');
        document.querySelector('.notifications-modal').classList.toggle('notifications-visbility');
        document.querySelector('.notifications-modal-open').classList.toggle('nav__btn-focused');
    }
});