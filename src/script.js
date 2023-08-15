window.addEventListener("DOMContentLoaded", function () {
    init();
});

window.addEventListener("resize", function () {
    setOffset();
    setProductTabsHeight();
});

function init() {
    initSliders();
    setOffset();
    indexProfileItems();
    setProductTabsHeight();
    initUi();
    initContent();
}

function initSliders() {
    const indexBannerSlider = document.querySelector(".index-banner__slider");
    if (indexBannerSlider) {
        const indexBannerSwiper = new Swiper(
            indexBannerSlider.querySelector(".swiper"),
            {
                grabCursor: true,
                // If we need pagination
                pagination: {
                    el: indexBannerSlider.querySelector(".index-banner__pag"),
                    clickable: true,
                },
                // Navigation arrows
                navigation: {
                    nextEl: indexBannerSlider.querySelector(".index-banner__next"),
                    prevEl: indexBannerSlider.querySelector(".index-banner__prev"),
                },
            }
        );
    }

    const indexPopularSlider = document.querySelector(".index-popular__slider");
    if (indexPopularSlider) {
        const indexPopularSwiper = new Swiper(
            indexPopularSlider.querySelector(".swiper"),
            {
                slidesPerView: "auto",
                spaceBetween: 10,
                grabCursor: true,
                // Navigation arrows
                navigation: {
                    nextEl: indexPopularSlider.querySelector(".index-popular__next"),
                    prevEl: indexPopularSlider.querySelector(".index-popular__prev"),
                },
                breakpoints: {
                    // when window width is >= 768px
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                    },
                    // when window width is >= 1920px
                    1920: {
                        slidesPerView: "auto",
                        spaceBetween: 40,
                    },
                },
            }
        );
    }

    const coursesSlider = document.querySelector(".courses-slider");
    if (coursesSlider) {
        const coursesSwiper = new Swiper(coursesSlider.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            grabCursor: true,
            // Navigation arrows
            navigation: {
                nextEl: coursesSlider.querySelector(".courses-slider__next"),
                prevEl: coursesSlider.querySelector(".courses-slider__prev"),
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 1440px
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },

                // when window width is >= 1920px
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    }

    const reviewsSlider = document.querySelector(".reviews-slider");
    if (reviewsSlider) {
        const reviewsSwiper = new Swiper(reviewsSlider.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: reviewsSlider.querySelector(".reviews-slider__next"),
                prevEl: reviewsSlider.querySelector(".reviews-slider__prev"),
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                // when window width is >= 1440px
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    }

    const clientsSlider = document.querySelector(".clients-slider");
    if (clientsSlider) {
        const clientsSwiper = new Swiper(clientsSlider.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: clientsSlider.querySelector(".clients-slider__next"),
                prevEl: clientsSlider.querySelector(".clients-slider__prev"),
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                // when window width is >= 1440px
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    }

    const teachersSlider = document.querySelector(".teachers-slider");
    if (teachersSlider) {
        const teachersSwiper = new Swiper(teachersSlider.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: teachersSlider.querySelector(".teachers-slider__next"),
                prevEl: teachersSlider.querySelector(".teachers-slider__prev"),
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: "auto",
                    spaceBetween: 40,
                },
            },
        });
    }

    const chairsSlider = document.querySelector(".chairs-slider");
    if (chairsSlider) {
        const chairsSwiper = new Swiper(chairsSlider.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    }

    const portfolioSlider = document.querySelector(".portfolio-slider");
    if (portfolioSlider) {
        const portfolioSwiper = new Swiper(
            portfolioSlider.querySelector(".swiper"),
            {
                slidesPerView: "auto",
                spaceBetween: 10,
                breakpoints: {
                    // when window width is >= 768px
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1920px
                    1920: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                },
            }
        );
    }

    const licensesSlider = document.querySelector(".licenses-slider");
    if (licensesSlider) {
        const licensesSwiper = new Swiper(licensesSlider.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: licensesSlider.querySelector(".licenses-slider__next"),
                prevEl: licensesSlider.querySelector(".licenses-slider__prev"),
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    }

    const coursesBtns = document.querySelector(".courses__btns");
    if (coursesBtns) {
        const btns = document.querySelectorAll(".courses__btn");
        const tabs = document.querySelectorAll(".courses__tab");
        const clientsSwiper = new Swiper(coursesBtns.querySelector(".swiper"), {
            slidesPerView: "auto",
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: coursesBtns.querySelector(".courses__next"),
                prevEl: coursesBtns.querySelector(".courses__prev"),
            },
            on: {
                click: function (swiper, event) {
                    let target = event.target;
                    if (target.classList.contains("courses__btn")) {
                        let index = Array.from(btns).indexOf(target);
                        let activeTab = tabs[index];

                        btns.forEach((i) => {
                            i.classList.remove("active");
                        });
                        tabs.forEach((i) => {
                            i.classList.remove("active");
                        });

                        target.classList.add("active");
                        activeTab.classList.add("active");
                    }
                },
            },
            breakpoints: {
                // when window width is >= 1024px
                1024: {
                    spaceBetween: 20,
                },
            },
        });
    }

    const productSlider = document.querySelector(".product-slider");
    if (productSlider) {
        const reviewsSwiper = new Swiper(productSlider.querySelector(".swiper"), {
            slidesPerView: 'auto',
            spaceBetween: 10,
            // Navigation arrows
            navigation: {
                nextEl: productSlider.querySelector(".product-slider__next"),
                prevEl: productSlider.querySelector(".product-slider__prev"),
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },

        });
    }
}

function setOffset() {
    let offset = document.querySelector(".offset__width").offsetLeft;
    document.body.style.setProperty("--offset", `${offset}px`);
}

function setProductTabsHeight() {
    let tabs = document.querySelector(".product-tabs");
    if (tabs) {
        let height = 0;

        tabs.querySelectorAll(".product-tabs__tab").forEach((i) => {
            height = i.offsetHeight > height ? i.offsetHeight : height;
        });

        tabs.style.setProperty("--tabsHeight", `${height}px`);

        if (window.matchMedia("(max-width: 767.98px)").matches) {
            tabs.querySelectorAll(".product-tabs__input").forEach((i) => {
                i.type = "checkbox";
            });

            tabs.querySelectorAll(".product-tabs__tab").forEach((i) => {
                let tabHeight = i.querySelector(".product-tabs__content").offsetHeight;
                i.style.setProperty("--tabHeight", `${tabHeight}px`);
            });
        } else {
            tabs.querySelectorAll(".product-tabs__tab").forEach((i) => {
                height = i.offsetHeight > height ? i.offsetHeight : height;
            });
            tabs.style.setProperty("--tabsHeight", `${height}px`);
        }
    }
}

function indexProfileItems() {
    const imgs = document.querySelectorAll(".index-profile__img");
    const items = document.querySelectorAll(".index-profile__item");

    $(".index-profile__item").hover(
        function () {
            if (this.classList.contains("active")) {
                return "";
            }

            let index = Array.from(items).indexOf(this);
            imgs.forEach((i) => {
                i.classList.remove("active");
            });
            items.forEach((i) => {
                i.classList.remove("active");
            });
            imgs[index].classList.add("active");
            this.classList.add("active");
        },
        function () {
        }
    );
}

function initTelMask() {
    $('input[type="tel"]').inputmask("+7(999)-999-99-99");
}

function initUi() {
    initTelMask();

    $(".form__select").selectize();
}

function initContent() {
    let content = document.querySelector('.content');
    if (content) {
        let yotube = content.querySelectorAll('a[data-fancybox="yt"]');
    }
}

class Events {
    constructor() {
        this.events = new Set();
        document.querySelectorAll(`[data-event]`).forEach((i) => {
            i.dataset.event.split(",").forEach((event) => {
                let [eventType, eventName] = event.split(".");

                if (!this[eventName]) return;

                this.events.add(eventType);
            });
        });
        this.events.add("change");

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

                target.dataset.event.split(",").forEach((event) => {
                    let [eventType, eventName] = event.split(".");

                    if (type !== eventType || !this[eventName]) return;

                    this[eventName].call(this, e, target);
                });
            });
        });
    }

    openMmenu(e, elem) {
        e.preventDefault();
        document.querySelector(".mmenu").classList.add("active");
        document.querySelector("body").classList.add("fancybox-active");
    }

    closeMmenu(e, elem) {
        e.preventDefault();
        document.querySelector(".mmenu").classList.remove("active");
        document.querySelector("body").classList.remove("fancybox-active");
    }

    nextMmenu(e, elem) {
        e.preventDefault();
        elem.nextElementSibling.classList.add("active");
    }

    backMmenu(e, elem) {
        e.preventDefault();
        elem.closest(".mmenu__submenu").classList.remove("active");
    }

    sendForm(e, elem) {
        e.preventDefault();

        fetch(elem.action, {
            method: "POST",
            body: new FormData(elem),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status) {
                    $.fancybox.close();
                    $.fancybox.open(
                        elem.querySelector("template").content.cloneNode(true)
                    );
                    elem.reset();
                }
            })
            .catch((err) => {
                console.log("Fetch Error :-S", err);
            });
    }

    fileChange(e, elem) {
        let parent = elem.closest(".form-file");
        let placeholder = parent.querySelector(".form-file__placeholder");

        if (elem.files.length > 0) {
            placeholder.innerHTML = elem.files[0].name;
            parent.classList.add("active");
        } else {
            placeholder.innerHTML = "Добавить фото";
            parent.classList.remove("active");
        }
    }

    loadMore(e, elem) {
        e.preventDefault();

        let container = document.querySelector(elem.dataset.target);

        fetch(elem.action, {
            method: "POST",
            body: new FormData(elem),
        })
            .then((response) => response.json())
            .then(function (data) {
                container.insertAdjacentHTML("beforeend", data.html);
            })
            .catch((err) => {
                console.log("Fetch Error :-S", err);
            });
    }

    courseAccordionToggle(e, elem) {
        e.preventDefault();
        let parent = elem.closest(".course-faq__item");
        let desc = parent.querySelector(".course-faq__desc");
        parent.style.setProperty("--height", `${desc.offsetHeight}px`);
        parent.classList.toggle("active");
        elem.classList.toggle("active");
    }

    servicesAccordionToggle(e, elem) {
        e.preventDefault();
        let parent = elem.closest(".services-list__item");
        let desc = parent.querySelector(".services-list__desc");
        parent.style.setProperty("--height", `${desc.offsetHeight}px`);
        parent.classList.toggle("active");
        elem.classList.toggle("active");
    }

    openForm(e, elem) {
        e.preventDefault();

        fetch(elem.action, {
            method: "POST",
            body: new FormData(elem),
        })
            .then((response) => response.json())
            .then(function (data) {
                if (data.status) {
                    $.fancybox.open(data.html);
                    initTelMask();
                    $.fancybox.getInstance().current.$content[0].insertAdjacentHTML('afterBegin',`<input type="hidden" name="link" value="${window.location.href}">`)
                }
            })
            .catch((err) => {
                console.log("Fetch Error :-S", err);
            });
    }

    goTo(e, elem) {
        e.preventDefault();

        document.querySelector(elem.dataset.to).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    switchTab(e, elem) {
        e.preventDefault();

        let target = elem;

        document.querySelector(target.dataset.to).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        document.querySelectorAll('.product-tabs__input').forEach((i, x) => {
            i.checked = (x == (target.dataset.tab - 1));
        });
    }

    openPay(e, elem) {
        e.preventDefault();
        let root = elem.closest(elem.dataset.eventRoot);
        let form = root.querySelector('.form-popup').cloneNode(true);

        $.fancybox.open(form);
    }
}

new Events();
