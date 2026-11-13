export function parallaxInit() {

    const parallaxContainer = document.querySelectorAll("[parallax-container]");
    if (parallaxContainer.length > 0) {

        parallaxContainer.forEach((container) => {
            const parallaxItems = container.querySelectorAll("[parallax-item]");
            if (parallaxItems.length > 0) {

                parallaxItems.forEach((item) => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        },
                    })
                        .fromTo(item, {
                            yPercent: () => {
                                let yVal = -item.offsetHeight * window.innerHeight / 100 * .02;
                                return yVal
                            }
                        }, {
                            yPercent: () => {
                                let yVal = item.offsetHeight * window.innerHeight / 100 * .1;
                                if (window.innerWidth < 480) {
                                    yVal = item.offsetHeight * window.innerHeight / 100 * .25;
                                }
                                return yVal
                            },
                            ease: "none"
                        });
                });

            }
        });
    }
}