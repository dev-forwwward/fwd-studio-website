export function swiperInit() {
    //-------------------
    // SWIPER

    const sliderComponents = document.querySelectorAll(".slider-main_component");
    if (sliderComponents.length > 0) {
        $(".slider-main_component").each(function (index) {
            // console.log("running SWIPER JS "+ $(this).find(".swiper")[0]);
            let loopMode = false;
            /*
            if ($(this).attr("loop-mode") === "true") {
              loopMode = true;
            }
            */
            let sliderDuration = 300;
            if ($(this).attr("slider-duration") !== undefined) {
                sliderDuration = +$(this).attr("slider-duration");
            }

            const swiperMainTestimonialsHomepage = new Swiper($(this).find(".swiper.is-slider-main-testimonials")[0], {
                speed: sliderDuration,
                loop: loopMode,
                autoHeight: false,
                centeredSlides: loopMode,
                followFinger: true,
                freeMode: false,
                slideToClickedSlide: false,
                slidesPerView: "auto",
                spaceBetween: "16px",
                rewind: false,
                mousewheel: {
                    forceToAxis: true,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    // mobile landscape
                    480: {
                        slidesPerView: "auto",
                        spaceBetween: "16px",
                        //spaceBetween: "4%",
                    },
                    // tablet
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: "16px",
                        //spaceBetween: "4%",
                    },
                    // desktop
                    992: {
                        slidesPerView: "auto",
                        spaceBetween: "48px",
                        //spaceBetween: "2%",
                    },
                },
                slideActiveClass: "is-active",
                slideDuplicateActiveClass: "is-active",
            });

            const swiperTestimonials = new Swiper($(this).find(".swiper.is-testimonials-slider")[0], {
                speed: sliderDuration,
                loop: false,
                autoHeight: false,
                centeredSlides: loopMode,
                followFinger: true,
                freeMode: false,
                slideToClickedSlide: false,
                slidesPerView: "1.2",
                spaceBetween: "16px",
                rewind: false,
                mousewheel: {
                    forceToAxis: true,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    // mobile landscape
                    480: {
                        slidesPerView: "1.2",
                        spaceBetween: "16px",
                        //spaceBetween: "4%",
                    },
                    // tablet
                    768: {
                        slidesPerView: "2.2",
                        spaceBetween: "16px",
                        //spaceBetween: "4%",
                    },
                    // desktop
                    992: {
                        slidesPerView: "3.2",
                        spaceBetween: "48px",
                        //spaceBetween: "2%",
                    },
                },
                slideActiveClass: "is-active",
                slideDuplicateActiveClass: "is-active",
            });

            const cases = new Swiper($(this).find(".swiper.is-slider-main-case")[0], {
                speed: sliderDuration,
                loop: loopMode,
                autoHeight: false,
                centeredSlides: loopMode,
                followFinger: true,
                freeMode: false,
                slideToClickedSlide: false,
                slidesPerView: "auto",
                spaceBetween: "16px",
                rewind: false,
                mousewheel: {
                    forceToAxis: true,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    // mobile landscape
                    480: {
                        slidesPerView: "auto",
                        spaceBetween: "16px",
                    },
                    // tablet
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: "16px",
                    },
                    // desktop
                    992: {
                        slidesPerView: "auto",
                        spaceBetween: "48px",
                    },
                },
                slideActiveClass: "is-active",
                slideDuplicateActiveClass: "is-active",
            });


            const mktLp = new Swiper($(this).find(".swiper.is-slider-mkt-lp")[0], {
                speed: sliderDuration,
                loop: loopMode,
                autoHeight: false,
                centeredSlides: loopMode,
                followFinger: true,
                freeMode: false,
                slideToClickedSlide: false,
                slidesPerView: 1.2,
                spaceBetween: "16px",
                rewind: false,
                mousewheel: {
                    forceToAxis: true,
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                breakpoints: {
                    // mobile landscape
                    480: {
                        slidesPerView: 1.2,
                        spaceBetween: "16px",
                    },
                    // tablet
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: "16px",
                    },
                    // desktop
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: "48px",
                    },
                },
                slideActiveClass: "is-active",
                slideDuplicateActiveClass: "is-active",
            });

        }); //-- each .slider-main_component
    }
}
