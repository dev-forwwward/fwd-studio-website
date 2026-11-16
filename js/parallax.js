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
                        .to(item, {
                            yPercent: () => {
                                let yVal = -item.offsetHeight * window.innerHeight / 100 * .04;
                                if (window.innerWidth < 480) {
                                    yVal = -item.offsetHeight * window.innerHeight / 100 * .1;
                                }
                                return yVal
                            },
                            ease: "none"
                        });
                    // .fromTo(item, {
                    //     yPercent: () => {
                    //         // let yVal = item.offsetHeight * window.innerHeight / 100 * .04;
                    //         let yVal = 0;
                    //         return yVal
                    //     }
                    // }, {
                    //     yPercent: () => {
                    //         let yVal = -item.offsetHeight * window.innerHeight / 100 * .04;
                    //         if (window.innerWidth < 480) {
                    //             yVal = -item.offsetHeight * window.innerHeight / 100 * .1;
                    //         }
                    //         return yVal
                    //     },
                    //     ease: "none"
                    // });
                });

            }
        });
    }
}