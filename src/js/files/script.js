// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================

// Catalog menu 

const catalogItems = document.querySelectorAll('.catalog-header__item');
const catalogSubMenus = document.querySelectorAll('.submenu-catalog-header__list');

if (catalogItems.length && catalogSubMenus.length) {

    catalogItems[0].classList.add('_active');
    catalogSubMenus[0].classList.add('_active');

    catalogItems.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            catalogItems.forEach(item => {
                item.classList.remove('_active');
            })
            catalogSubMenus.forEach(item => {
                item.classList.remove('_active');
            })
            item.classList.add('_active');
            catalogSubMenus[index].classList.add('_active');
        })
    })
}

//========================================================================================================================================================

// Show sidebar

const sidebarOpen = document.querySelector('.sidebar__open');
const sidebar = document.querySelector('.sidebar');

if (sidebar && sidebarOpen) {
    sidebarOpen.addEventListener('click', () => {
        document.body.classList.toggle('open-sidebar');
    })
}

//========================================================================================================================================================
// Cart update

const cartItems = document.querySelectorAll('.woocommerce-cart-form__cart-item');

if (cartItems.length) {
    const updateCart = () => {
        document.querySelector('button[name=update_cart]').removeAttribute('disabled');
        document.querySelector('button[name=update_cart]').click();
    }
    cartItems.forEach(item => {
        const itemQtyInput = item.querySelector('.quantity__input input');
        const btnMinus = item.querySelector('.quantity__button_minus');
        const btnPlus = item.querySelector('.quantity__button_plus');
        itemQtyInput.addEventListener('input', updateCart);
        btnMinus.addEventListener('click', updateCart);
        btnPlus.addEventListener('click', updateCart);
    })
}