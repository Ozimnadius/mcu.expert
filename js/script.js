window.addEventListener('DOMContentLoaded', function () {
    init();
});

window.addEventListener('resize', function () {
    setOffset();
})

function init() {
    initSliders();
    setOffset();
    indexProfileItems();
}

function initSliders() {
    const indexBannerSlider = document.querySelector('.index-banner__slider');
    if (indexBannerSlider) {
        const indexBannerSwiper = new Swiper(indexBannerSlider.querySelector('.swiper'), {
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

    const indexPopularSlider = document.querySelector('.index-popular__slider');
    if (indexPopularSlider) {
        const indexBannerSwiper = new Swiper(indexPopularSlider.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 40,
            grabCursor: true,
            // Navigation arrows
            navigation: {
                nextEl: indexPopularSlider.querySelector('.index-popular__next'),
                prevEl: indexPopularSlider.querySelector('.index-popular__prev'),
            },
        });
    }

    const reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
        const indexBannerSwiper = new Swiper(reviewsSlider.querySelector('.swiper'), {
            slidesPerView: 3,
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: reviewsSlider.querySelector('.reviews-slider__next'),
                prevEl: reviewsSlider.querySelector('.reviews-slider__prev'),
            },
        });
    }

    const clientsSlider = document.querySelector('.clients-slider');
    if (clientsSlider) {
        const indexBannerSwiper = new Swiper(clientsSlider.querySelector('.swiper'), {
            slidesPerView: 3,
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: clientsSlider.querySelector('.clients-slider__next'),
                prevEl: clientsSlider.querySelector('.clients-slider__prev'),
            },
        });
    }
}


function setOffset() {
    let offset = document.querySelector('.offset__width').offsetLeft;
    document.body.style.setProperty('--offset', `${offset}px`);
}

function indexProfileItems() {
    const imgs = document.querySelectorAll('.index-profile__img');
    const items = document.querySelectorAll('.index-profile__item');

    $('.index-profile__item').hover(function () {

        if (this.classList.contains('active')) {
            return ''
        }

        let index = Array.from(items).indexOf(this);
        imgs.forEach(i => {
            i.classList.remove('active');
        });
        items.forEach(i => {
            i.classList.remove('active');
        });
        imgs[index].classList.add('active');
        this.classList.add('active');

    }, function () {

    });
}

class Events {
    constructor() {

        this.events = new Set();
        document.querySelectorAll(`[data-event]`).forEach(i => {
            i.dataset.event.split(',').forEach((event) => {
                let [eventType, eventName] = event.split('.');

                if (!this[eventName]) return;

                this.events.add(eventType);
            });
        });


        document.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
    }

    init() {

        const body = document.querySelector("body");

        this.events.forEach((type) => {

            body.addEventListener(type, (e) => {
                const target = e.target.closest(`[data-event]`);
                if (!target) return;

                target.dataset.event.split(',').forEach((event) => {
                    let [eventType, eventName] = event.split('.');

                    if (type !== eventType || !this[eventName]) return;

                    this[eventName].call(this, e, target);
                });
            });
        });

    }

    openMenu(e, elem) {
        e.preventDefault();
        console.log('Open menu');
        // console.log(this);
        // console.log(e);
        // console.log(elem);
    }

    openForm(e, elem) {
        e.preventDefault();
        console.log('Open Form');
        // console.log(this);
        // console.log(e);
        // console.log(elem);
    }

    sendForm(e, elem) {
        e.preventDefault();
        console.log('Send form');
        // console.log(this);
        console.log(e);
        // console.log(elem);
    }

    inputChange(e, elem) {
        e.preventDefault();
        console.log('Change input');
        // console.log(this);
        console.log(e);
        // console.log(elem);
    }
}

new Events();





