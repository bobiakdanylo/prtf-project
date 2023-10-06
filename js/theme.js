function darkMode() {
    const components = {
        body: document.querySelector('body'),
        header: document.querySelector('.header'),
        logo: document.querySelector('.logo'),
        searchInput: document.querySelector('.search__input'),
        searchBtn: document.querySelector('.search__btn'),
        navBtn: document.querySelector('.nav__list'),
        sidebarItem: document.querySelector('.sidebar__list'),
        offersBtn: document.querySelector('.offers-slider'),
        content: document.querySelector('.content'),
        cards: document.querySelector('.recommendations__list'),
        infoList: document.querySelector('.info__list'),
        themeSwitcher: document.querySelector('.theme-svg'),
        themeSwitcherL: document.querySelector('.theme-svg-dflt'),
        contentTitle: document.querySelector('.content__title'),
        auth: document.querySelector('.auth__modal-box'),
        notificationsBox: document.querySelector('.notifications'),
        cart: document.querySelector('.cart-modal'),
        mobileModal: document.querySelector('.mobile-modal')
    }
    
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);

    components.body.classList.toggle('dark-mode-body', !wasDarkmode);
    components.header.classList.toggle('dark-mode-header', !wasDarkmode);
    components.logo.classList.toggle('dark-mode-logo', !wasDarkmode);
    components.searchInput.classList.toggle('dark-mode-search', !wasDarkmode);
    components.searchBtn.classList.toggle('dark-mode-search-btn', !wasDarkmode);
    components.navBtn.classList.toggle('dark-mode-nav-btns', !wasDarkmode);
    components.sidebarItem.classList.toggle('dark-mode-sidebar-items', !wasDarkmode);
    components.offersBtn.classList.toggle('dark-mode-offers-btn', !wasDarkmode);
    components.content.classList.toggle('dark-mode-content', !wasDarkmode);
    components.cards.classList.toggle('dark-mode-cards', !wasDarkmode);
    components.infoList.classList.toggle('dark-mode-info-list', !wasDarkmode);
    components.themeSwitcher.classList.toggle('display-none', wasDarkmode);
    components.themeSwitcherL.classList.toggle('display-none', !wasDarkmode);
    components.contentTitle.classList.toggle('dark-mode-content-title', !wasDarkmode);
    components.auth.classList.toggle('dark-mode-auth', !wasDarkmode);
    components.notificationsBox.classList.toggle('dark-mode-notifications', !wasDarkmode);
    components.cart.classList.toggle('dark-mode-cart', !wasDarkmode);
    components.mobileModal.classList.toggle('dark-mode-mobile-modal', !wasDarkmode);
};

document.querySelector('.theme-switcher-js').addEventListener('click', darkMode);
document.querySelector('.mobile-theme-switcher-js').addEventListener('click', darkMode);

function onLoad(){
    const components = {
        body: document.querySelector('body'),
        header: document.querySelector('.header'),
        logo: document.querySelector('.logo'),
        searchInput: document.querySelector('.search__input'),
        searchBtn: document.querySelector('.search__btn'),
        navBtn: document.querySelector('.nav__list'),
        sidebarItem: document.querySelector('.sidebar__list'),
        offersBtn: document.querySelector('.offers-slider'),
        content: document.querySelector('.content'),
        cards: document.querySelector('.recommendations__list'),
        infoList: document.querySelector('.info__list'),
        themeSwitcher: document.querySelector('.theme-svg'),
        themeSwitcherL: document.querySelector('.theme-svg-dflt'),
        contentTitle: document.querySelector('.content__title'),
        auth: document.querySelector('.auth__modal-box'),
        notificationsBox: document.querySelector('.notifications'),
        cart: document.querySelector('.cart-modal'),
        mobileModal: document.querySelector('.mobile-modal')
    }

    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', wasDarkmode);

    components.body.classList.toggle('dark-mode-body', wasDarkmode);
    components.header.classList.toggle('dark-mode-header', wasDarkmode);
    components.logo.classList.toggle('dark-mode-logo', wasDarkmode);
    components.searchInput.classList.toggle('dark-mode-search', wasDarkmode);
    components.searchBtn.classList.toggle('dark-mode-search-btn', wasDarkmode);
    components.navBtn.classList.toggle('dark-mode-nav-btns', wasDarkmode);
    components.sidebarItem.classList.toggle('dark-mode-sidebar-items', wasDarkmode);
    components.offersBtn.classList.toggle('dark-mode-offers-btn', wasDarkmode);
    components.content.classList.toggle('dark-mode-content', wasDarkmode);
    components.cards.classList.toggle('dark-mode-cards', wasDarkmode);
    components.infoList.classList.toggle('dark-mode-info-list', wasDarkmode);
    components.themeSwitcher.classList.toggle('display-none', !wasDarkmode);
    components.themeSwitcherL.classList.toggle('display-none', wasDarkmode);
    components.contentTitle.classList.toggle('dark-mode-content-title', wasDarkmode);
    components.auth.classList.toggle('dark-mode-auth', wasDarkmode);
    components.notificationsBox.classList.toggle('dark-mode-notifications', wasDarkmode);
    components.cart.classList.toggle('dark-mode-cart', wasDarkmode);
    components.mobileModal.classList.toggle('dark-mode-mobile-modal', wasDarkmode);
}

document.addEventListener('DOMContentLoaded', onLoad);
