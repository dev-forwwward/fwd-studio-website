export function servicesInit() {
    document.fonts.ready.then(() => {

        // Services page - hero
        const servicesHero = document.querySelector(".fwd-services-section-hero");

        if (servicesHero) {
            const heroImgs = servicesHero.querySelectorAll("img");

            // Reveal
            gsap.timeline()
                .from(heroImgs, {
                    delay: .55,
                    yPercent: 10,
                    opacity: 0,
                    duration: .8,
                    ease: "power2.out",
                    stagger: .15

                })
                .from('.services_hero_title_text', {
                    delay: .4,
                    yPercent: 35,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: .1
                }, "<")
                .from('.services_bg_text_container', {
                    opacity: 0,
                    duration: .8,
                    stagger: .2,
                    ease: "power2.out",
                }, "<");

            // Hero Out
            gsap.timeline({
                scrollTrigger: {
                    trigger: servicesHero,
                    start: "bottom 98%",
                    end: "bottom top",
                    scrub: true,
                },
                defaults: { overwrite: true }
            })
                .to('.services_main_hero_bg_container', {
                    yPercent: -50,
                    duration: .8,
                    ease: "linear",
                })
                .to('.services_hero_bg_detail', {
                    yPercent: -5,
                    ease: "linear",
                }, "<")
                .to('.services_bg_text_container', {
                    yPercent: -100,
                    ease: "linear",
                }, "<");

        }


        // Services page - listing
        const servicesList = document.querySelector(".services-list-item-fixed-content-container");
        if (servicesList) {
            const servicesListItems = document.querySelectorAll(".services-list-item-container .services-list-item-text-container");
            const fixedContentList = document.querySelectorAll(".services-list-item-fixed-content-container");


            // desktop
            if (window.innerWidth > 991) {
                servicesListItems.forEach((item, i) => {

                    const titleEl = item.querySelector("h2");
                    const numberEl = item.querySelector(".number-container");
                    const titleSplit = new SplitType(titleEl, { types: "lines, chars" });
                    const textBlock = fixedContentList[i].querySelector(".services-list-item-fixed-content_text_block");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                            // markers: true,
                            onEnter: () => {
                                const prevActive = servicesList.querySelector('.active');
                                if (prevActive && i != 0) {
                                    prevActive.classList.remove("active");
                                }
                                fixedContentList[i].classList.add("active");
                            },
                            onLeave: () => {
                                if (i != 2) {
                                    fixedContentList[i].classList.remove("active");
                                }
                            },
                            onEnterBack: () => {
                                const prevActive = servicesList.querySelector('.active');
                                if (prevActive) {
                                    prevActive.classList.remove("active");
                                }
                                fixedContentList[i].classList.add("active");
                            },
                            onLeaveBack: () => {
                                if (i != 0) {
                                    fixedContentList[i].classList.remove("active");
                                }
                            }
                        }
                    })
                        .from(numberEl, {
                            delay: .05,
                            opacity: 0,
                            filter: "blur(12px)",
                            duration: .25
                        })
                        .from(titleSplit.chars, {
                            stagger: .012,
                            opacity: 0,
                            filter: "blur(12px)",
                            duration: .32
                        }, "<")
                        .from(textBlock, {
                            delay: .32,
                            opacity: 0,
                            duration: .2,
                        }, "<")
                        .from({}, {
                            duration: .8
                        });

                    // fade-out all text blocks on leave except for last one
                    if (i < 2) {
                        tl.to(textBlock, {
                            opacity: 0,
                            duration: .1,
                        }, "-=.2");
                    }
                }); // desktop interaction
            } else {
                // tablet & mobile

                const servicesSlideTextList = document.querySelectorAll('.services-list-item-fixed-content_text_block');
                servicesSlideTextList.forEach((item, i) => {

                    const titleEl = item.querySelector("h2");
                    const numberEl = item.querySelector(".number-container");
                    const titleSplit = new SplitType(titleEl, { types: "lines, chars" });
                    const textBlock = item.querySelector("p");

                    const lastBlock = document.querySelector(".services-list-item-text-container.last");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top 98%",
                            end: "bottom top",
                            scrub: 1,
                            // markers: true,
                        }
                    })
                        .from(numberEl, {
                            opacity: 0,
                            filter: "blur(12px)",
                            duration: .25
                        })
                        .from(titleSplit.chars, {
                            stagger: .012,
                            opacity: 0,
                            filter: "blur(12px)",
                            duration: .32
                        }, "<")
                        .from(textBlock, {
                            delay: .32,
                            opacity: 0,
                            duration: .2,
                        }, "<")
                        .from({}, {
                            duration: .5
                        })
                        .to(textBlock, {
                            opacity: 0,
                            duration: .4,
                        }, "-=.2");
                });
            }
        }
    }); // fonts loader
}