export function servicesInit() {
    // Services page - listing
    const servicesList = document.querySelector(".services-list-item-fixed-content-container");
    if (servicesList) {
        const servicesListItems = document.querySelectorAll(".services-list-item-text-container");
        const fixedContentList = document.querySelectorAll(".services-list-item-fixed-content-container");

        servicesListItems.forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 70%",
                end: "bottom top",
                scrub: true,
                markers: true,
                onEnter: () => {
                    const prevActive = servicesList.querySelector('.active');
                    if (prevActive) {
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
                    fixedContentList[i].classList.remove("active");
                }
            });
        });
    }
}