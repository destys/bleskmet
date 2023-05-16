const products = document.querySelectorAll('.product'),
    popupTitle = document.querySelector('#quick-preview .product-popup__title'),
    popupPrice = document.querySelector('#quick-preview .product-popup__price'),
    popupExcerpt = document.querySelector('#quick-preview .product-popup__excerpt'),
    popupImage = document.querySelector('#quick-preview .product-popup__image img'),
    popupChars = document.querySelector('#quick-preview .product-popup__characteristics')

if (products.length) {
    products.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('footer-product__quickshow')) {
                const product = {
                    id: item.dataset.id,
                    title: item.querySelector('.product__title').innerText,
                    image: item.querySelector('.product__image img').dataset.src,
                    price: item.querySelector('.footer-product__cost').innerHTML,
                    excerpt: item.querySelector('.product__subtitle').innerHTML,
                    characteristics: item.querySelector('.product__characteristics').innerHTML
                }

                popupTitle.innerHTML = product.title;
                popupPrice.innerHTML = product.price;
                popupExcerpt.innerHTML = product.excerpt;
                popupImage.src = product.image;
                popupChars.innerHTML = product.characteristics
            }
        })
    })
}