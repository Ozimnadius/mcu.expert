window.addEventListener('DOMContentLoaded', function () {
    init();
});

window.addEventListener('resize', function () {
    setOffset();
});

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
        const indexPopularSwiper = new Swiper(indexPopularSlider.querySelector('.swiper'), {
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

    const coursesSlider = document.querySelector('.courses-slider');
    if (coursesSlider) {
        const coursesSwiper = new Swiper(coursesSlider.querySelector('.swiper'), {
            slidesPerView: 4,
            spaceBetween: 40,
            grabCursor: true,
        });
    }

    const reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
        const reviewsSwiper = new Swiper(reviewsSlider.querySelector('.swiper'), {
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
        const clientsSwiper = new Swiper(clientsSlider.querySelector('.swiper'), {
            slidesPerView: 3,
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: clientsSlider.querySelector('.clients-slider__next'),
                prevEl: clientsSlider.querySelector('.clients-slider__prev'),
            },
        });
    }

    const teachersSlider = document.querySelector('.teachers-slider');
    if (teachersSlider) {
        const teachersSwiper = new Swiper(teachersSlider.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: teachersSlider.querySelector('.teachers-slider__next'),
                prevEl: teachersSlider.querySelector('.teachers-slider__prev'),
            },
        });
    }

    const chairsSlider = document.querySelector('.chairs-slider');
    if (chairsSlider) {
        const chairsSwiper = new Swiper(chairsSlider.querySelector('.swiper'), {
            slidesPerView: 3,
            spaceBetween: 40,
        });
    }

    const portfolioSlider = document.querySelector('.portfolio-slider');
    if (portfolioSlider) {
        const portfolioSwiper = new Swiper(portfolioSlider.querySelector('.swiper'), {
            slidesPerView: 3,
            spaceBetween: 40,
        });
    }

    const licensesSlider = document.querySelector('.licenses-slider');
    if (licensesSlider) {
        const licensesSwiper = new Swiper(licensesSlider.querySelector('.swiper'), {
            slidesPerView: 4,
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: licensesSlider.querySelector('.licenses-slider__next'),
                prevEl: licensesSlider.querySelector('.licenses-slider__prev'),
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

    fileChange(e, elem) {

        let parent = elem.closest('.form-file');
        let placeholder = parent.querySelector('.form-file__placeholder');

        if  (elem.files.length>0){
            placeholder.innerHTML = elem.files[0].name;
           parent.classList.add('active');
        } else {
            placeholder.innerHTML = 'Добавить фото';
            parent.classList.remove('active');
        }
    }

}

new Events();





