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
