window.addEventListener('DOMContentLoaded', function () {
    init();
});

function init() {
    initSliders();
}

function initSliders() {
    const indexBannerSlider = document.querySelector('.index-banner__slider');
    if (indexBannerSlider) {
        const indexBannerSwiper = new Swiper(indexBannerSlider.querySelector('.index-banner__swiper'), {
            grabCursor: true,
            // If we need pagination
            pagination: {
                el: indexBannerSlider.querySelector('.index-banner__pag'),
                clickable: true
            },
            // Navigation arrows
            navigation: {
                nextEl: indexBannerSlider.querySelector('.index-banner__next'),
                prevEl: indexBannerSlider.querySelector('.index-banner__prev'),
            },
        });
    }
}

