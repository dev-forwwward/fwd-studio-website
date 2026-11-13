export function parallaxInit() {

    const parallaxContainer = document.querySelectorAll("[parallax-container]");
    if (parallaxContainer.length > 0) {

        parallaxContainer.forEach((container) => {
            const parallaxItems = container.querySelectorAll("[parallax-item]");
            if (parallaxItems.length > 0) {

                parallaxItems.forEach((item) => {
                    gsap.fromTo(item, {
                        yPercent: ()=> {
                            let yVal = -item.offsetHeight * window.innerHeight / 100 * .015;
                            return yVal
                        }
                    },{
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        },
                        yPercent: ()=> {
                            let yVal = item.offsetHeight * window.innerHeight / 100 * .08;
                            if(window.innerWidth < 480) {
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