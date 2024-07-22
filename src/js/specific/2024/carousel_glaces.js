document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector('.carafes-xsell__splide')) {
        const splide = new Splide('.carafes-xsell__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 5,
            perMove: 1,
            pagination: false,
            gap: '1rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                    },
                    1023: {
                        perPage: 4,
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
        });
        splide.mount();
    }
    if(document.querySelector('.tasse-mug__splide')) {
        const splide1 = new Splide('.tasse-mug__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 3,
            perMove: 1,
            pagination: false,
            gap: '1rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                    },
                    1024: {
                        perPage: 3,
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
        });
        splide1.mount();
    }
    if(document.querySelector('.eaux-fruits__splide')) {
        const splide1 = new Splide('.eaux-fruits__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 4,
            perMove: 1,
            pagination: false,
            gap: '1rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                    },
                    1024: {
                        perPage: 4,
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
        });
        splide1.mount();
    }
    if(document.querySelector('.belles-decouvertes__splide')) {
        const splide2 = new Splide('.belles-decouvertes__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 4,
            perMove: 1,
            pagination: false,
            gap: '1rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                    },
                    1024: {
                        perPage: 4,
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
        });
        splide2.mount();
    }
    if(document.querySelector('.best-sellers__splide')) {
        const splide3 = new Splide('.best-sellers__splide', {
            type: 'loop',
            arrows: true,
            autoplay: true,
            speed: 1000,
            easing: 'ease',
            perPage: 4,
            perMove: 1,
            pagination: false,
            gap: '1rem',
                breakpoints: {
                    767: {
                        perPage: 2,
                    },
                    1024: {
                        perPage: 4,
                    },
                },
            classes: {
                arrows: 'splide__arrows custom__arrows',
                arrow : 'splide__arrow custom__arrow',
                prev  : 'splide__arrow--prev custom__prev',
                next  : 'splide__arrow--next custom__next',
            },
        });
        splide3.mount();
    }
})