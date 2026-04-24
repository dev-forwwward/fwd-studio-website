document.addEventListener("DOMContentLoaded", () => {

    console.log("running article reveals js");
    const heading1Split = new SplitType(".fwd-article-content-section .w-richtext h1, .fwd-article-content-section .w-richtext h2, .fwd-article-content-section .w-richtext h3, .fwd-article-content-section .w-richtext h4, .fwd-article-content-section .w-richtext h5", { types: "words, lines" });

    let articleHeaders = document.querySelectorAll(".fwd-article-content-section .w-richtext h1, .fwd-article-content-section .w-richtext h2, .fwd-article-content-section .w-richtext h3, .fwd-article-content-section .w-richtext h4, .fwd-article-content-section .w-richtext h5");
    let articleParagraphs = document.querySelectorAll(".fwd-article-content-section .w-richtext p");
    let articleImages = document.querySelectorAll(".fwd-article-content-section .w-richtext img");

    // headers animation
    articleHeaders.forEach((articleH) => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: articleH,
                    start: "top bottom",
                    toggleActions: "play none play none",
                },
            })
            .from(articleH, {
                opacity: 0,
                y: "80%",
                delay: 0.2,
                duration: 0.5,
                ease: "power3.out",
                stagger: { amount: 0.2 },
            });
    });



    // paragraphs animation
    articleParagraphs.forEach((articleP) => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: articleP,
                    start: "top bottom",
                    toggleActions: "play none play none",
                },
            })
            .from(articleP, {
                opacity: 0,
                y: "100%",
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.25,
                delay: 0.1,
            });
    });

    // image animation
    articleImages.forEach((articleImg) => {
        let container = articleImg.parentElement;
        container.classList.add("fwd-image-wrapper");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 90%",
                toggleActions: "play none play none",
            },
        });

        tl.set(container, { autoAlpha: 1 });

        tl.from(container, 1, {
            xPercent: -100,
            ease: Power4.out,
        });

        tl.from(articleImg, 1, {
            xPercent: 100,
            delay: -1,
            duration: 0.5,
            ease: Power4.out,
        });
    });
});