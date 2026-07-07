export function servicesInit() {
    // Services page - listing
    const servicesList = document.querySelector(".services-list-item-fixed-content-container");
    if (servicesList) {
        const servicesListItems = document.querySelectorAll(".services-list-item-text-container");
        const fixedContentList = document.querySelectorAll(".services-list-item-fixed-content-container");

        servicesListItems.forEach((item, i) => {

            const titleEl = item.querySelector("h2");
            const titleSplit = new SplitType(titleEl, { types: "chars" });
            const textBlock = fixedContentList[i].querySelector(".services-list-item-fixed-content_text_block");

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    markers: true,
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
            }).from(titleSplit.chars, {
                stagger: .02,
                opacity: 0,
                filter: "blur(12px)",
                duration: .6
            })
            .from(textBlock, {
                delay: .45,
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
}