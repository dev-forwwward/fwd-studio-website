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
            const servicesListItems = document.querySelectorAll(".services-list-item-text-container");
            const fixedContentList = document.querySelectorAll(".services-list-item-fixed-content-container");

            servicesListItems.forEach((item, i) => {

                const titleEl = item.querySelector("h2");
                const numberEl = item.querySelector(".number-container");
                const titleSplit = new SplitType(titleEl, { types: "lines, chars" });
                const textBlock = fixedContentList[i].querySelector(".services-list-item-fixed-content_text_block");

                gsap.timeline({
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
                            fixedContentList[i].classList.remove("active");
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
                        delay: .2,
                        opacity: 0,
                        filter: "blur(12px)",
                        duration: .25
                    })
                    .from(titleSplit.chars, {
                        stagger: .015,
                        opacity: 0,
                        filter: "blur(12px)",
                        duration: .32
                    }, "<")
                    .from(textBlock, {
                        delay: .2,
                        opacity: 0,
                        duration: .4,
                    }, "<")
                    .from({}, {
                        duration: .65
                    }).to(textBlock, {
                        opacity: 0,
                        duration: .1,
                    });
            });
        }
    }); // fonts loader
}