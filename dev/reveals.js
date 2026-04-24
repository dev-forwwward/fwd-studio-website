// ---- GSAP INIT
//gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {

    // Split text into words and characters
    const heading1Split = new SplitType(".fwd-h1", { types: "words, lines" });
    const heading2Split = new SplitType(".fwd-h2", { types: "words, lines" });
    const h2Split = new SplitType(".h2", { types: "words" });
    const heading3Split = new SplitType(".fwd-h3", { types: "lines" });
    const heading4Split = new SplitType(".fwd-h4", { types: "lines" });
    const heading5Split = new SplitType(".fwd-h5", { types: "lines" });
    const subtitleSplit = new SplitType(".fwd-overline", { types: "lines" });

    // Store different types of text in lists
    let heading1 = document.querySelectorAll(".fwd-h1:not(.fwd-hero-header)");
    let heading2 = document.querySelectorAll(".fwd-h2");
    let heading3 = document.querySelectorAll(".fwd-h3");
    let heading4 = document.querySelectorAll(".fwd-h4");
    let heading5 = document.querySelectorAll(":not(.fwd-collection-grid-wrapper) h5");

    let subtitles = document.querySelectorAll(".fwd-overline");

    let bodiesOfText = document.querySelectorAll(".fwd-text");

    let fadeInElements = document.querySelectorAll(".fwd-fade-in");

    let lineDividers = document.querySelectorAll(".fwd-line-divider");
    let verticalLines = document.querySelectorAll(".fwd-line-vertical");

    // preload images
    const preloadImages = new Promise((resolve, reject) => {
        new imagesLoaded(document.querySelectorAll("img"), resolve);
    });

    ScrollTrigger.refresh();

    // Subtitle - Reveal
    if (subtitles) {
        subtitles.forEach((subt) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: subt,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .from(subt, {
                    opacity: 0,
                    y: "80%",
                    delay: 0.4,
                    duration: 0.5,
                    ease: "power2",
                    stagger: { amount: 0.2 },
                });
        });
    }

    // Header 1 - Reveal
    if (heading1) {
        heading1.forEach((h1) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: h1,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .from(h1.querySelectorAll(".word"), {
                    opacity: 0,
                    y: "80%",
                    delay: 0.2,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: { amount: 0.2 },
                });
        });
    }

    // Header 2 - Reveal
    if (heading2) {
        heading2.forEach((h2) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: h2,
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                })
                .from(h2.querySelectorAll(".line"), {
                    opacity: 0,
                    delay: 0.2,
                    y: "80%",
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: { amount: 0.2 },
                })
                .from(
                    h2.querySelectorAll(".word"),
                    {
                        opacity: 0,
                        y: "80%",
                        delay: 0.2,
                        duration: 0.5,
                        ease: "power2",
                        stagger: { amount: 0.35 },
                    },
                    "<",
                );
        });
    }

    // Header 2 (.h2 CLASS) - Reveal
    /*if (document.querySelector(".h2")) {
      console.log(".h2 element found");
      document.querySelectorAll(".h2").forEach((h2Class) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: h2Class,
              start: "top bottom",
              toggleActions: "play none none none",
            },
          })
          .from(
            h2Class.querySelectorAll(".word"),
            {
              opacity: 0,
              y: "80%",
              delay: 0.2,
              duration: 0.5,
              ease: "power2",
              stagger: { amount: 0.35 },
              onComplete: () => {
                console.log(".h2 reveal animation complete");
              }
            },
            "<",
          );
      });
    }*/

    // Header 3 - Reveal
    if (heading3) {
        heading3.forEach((h3) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: h3,
                        start: "bottom bottom",
                        toggleActions: "play none none none",
                        delay: 1,
                    },
                })
                .from(h3.querySelectorAll(".line"), {
                    opacity: 0,
                    y: "150%",
                    delay: 0.2,
                    duration: 0.3,
                    ease: "power3",
                    stagger: { amount: 0.2 },
                });
        });
    }

    // Header 4 - Reveal
    if (heading4) {
        heading4.forEach((h4) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: h4,
                        start: "bottom bottom",
                        toggleActions: "play none none none",
                    },
                })
                .from(h4.querySelectorAll(".line"), {
                    opacity: 0,
                    y: "150%",
                    duration: 0.3,
                    ease: "power3",
                    delay: 0.15,
                    stagger: { amount: 0.2 },
                });
        });
    }

    // Header 5 - Reveal
    /* h5 only being used in Works page; specific animation for it at bottom
    heading5.forEach((h5) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: h5,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        })
        .from(h5.querySelectorAll(".line"), {
          opacity: 0,
          y: "150%",
          duration: 0.3,
          ease: "power3",
          delay: 0.15,
          stagger: { amount: 0.2 },
        });
    });*/

    /*let headings_reveal = gsap.timeline({
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: ".industries",
        scrub: false,
        start: "-50% 0%",
        toggleActions: "play pause resume reverse"
        //markers: true
      }
    });
    headings_reveal
      .from(
        subTitle.lines,
        {
          //opacity: 0,
          y: "80%",
          duration: 0.5,
          stagger: { amount: 1.0 }
        },
        "<"
      )
      .from(
        heading2.words,
        {
          //opacity: 0,
          y: "80%",
          duration: 0.5,
          stagger: { amount: 1.0 }
        },
        ".5"
      );
    */

    // Text/ Descriptions - Reveal
    if (bodiesOfText) {
        bodiesOfText.forEach((text) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: text,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .from(text, {
                    opacity: 0,
                    y: "100%",
                    duration: 0.4,
                    ease: "power3.out",
                    stagger: 0.25,
                    delay: 0.1,
                })
                .from(
                    text.querySelectorAll("p, div"),
                    {
                        opacity: 0,
                        y: "100%",
                        duration: 0.4,
                        ease: "power3.out",
                        stagger: 0.25,
                        delay: 0.1,
                    },
                    "<",
                );
        });
    }

    // Simple Fade-in - Reveal (same as text reveal above, does not include el children)
    if (fadeInElements) {
        fadeInElements.forEach((fadeInEl) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: fadeInEl,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .from(fadeInEl, {
                    opacity: 0,
                    y: "100%",
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.25,
                    delay: 0.25,
                });
        });
    }

    // Line Divider - Reveal
    if (lineDividers) {
        lineDividers.forEach((line) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: line,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .fromTo(
                    line,
                    {
                        width: "0%",
                    },
                    {
                        width: "100%",
                        transformOrigin: "0% 50%",
                        duration: 1.2,
                        delay: 0.5,
                        ease: "power3.out",
                        stagger: 0.15,
                    },
                );
        });
    }

    // Line Vertical - Reveal
    if (verticalLines) {
        verticalLines.forEach((lineV) => {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: lineV,
                        start: "bottom 85%",
                        toggleActions: "play none play none",
                    },
                })
                .fromTo(
                    lineV,
                    {
                        height: "0%",
                    },
                    {
                        height: "100%",
                        transformOrigin: "50% 0%",
                        duration: 1.4,
                        ease: "power3",
                        delay: 0.5,
                    },
                );
        });
    }

    // Buttons - Reveal
    let buttons = document.querySelectorAll(".fwd-button-reveal");

    if (buttons) {
        buttons.forEach((btn) => {
            let tm = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: btn,
                        start: "bottom 80%",
                        toggleActions: "play none play none",
                    },
                })
                .fromTo(btn, {
                    opacity: 0,
                    y: "20%",
                },
                    {
                        opacity: 1,
                        y: "0%",
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.1,
                        delay: 0.2,
                    })
                .fromTo(btn.querySelectorAll("p, div, span"), {
                    opacity: 0,
                    y: "20%",
                },
                    {
                        opacity: 1,
                        y: "0%",
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.1
                    }, "<");
        });
    }

    // Sequence Reveals
    let sequences = document.querySelectorAll(".fwd-sequence");
    if (sequences) {
        sequences.forEach((sqn) => {
            let tm = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: sqn,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .fromTo(
                    sqn.querySelectorAll(".fwd-sequence-el"),
                    {
                        opacity: 0,
                        y: "20%",
                    },
                    {
                        opacity: 1,
                        y: "0%",
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.1,
                        delay: 0.45,
                    },
                )
                .from(
                    sqn.querySelectorAll(".fwd-sequence-el div, .fwd-sequence-el p, .fwd-sequence-el a:not(.fwd-button-reveal)"),
                    {
                        opacity: 0,
                        y: "20%",
                        delay: .15,
                        duration: 0.6,
                        ease: "power1.out",
                        stagger: 0.15
                    },
                    "<",
                );
        });
    }

    let fastSequences = document.querySelectorAll(".fwd-sequence-fast");
    if (fastSequences) {
        fastSequences.forEach((sqn) => {
            let tm = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: sqn,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .fromTo(
                    sqn.querySelectorAll(".fwd-sequence-el"),
                    {
                        opacity: 0,
                        y: "20%",
                    },
                    {
                        opacity: 1,
                        y: "0%",
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.1,
                        delay: 0.4,
                    },
                )
                .from(
                    sqn.querySelectorAll(".fwd-sequence-el div, .fwd-sequence-el p, .fwd-sequence-el a:not(.fwd-button-reveal)"),
                    {
                        opacity: 0,
                        y: "20%",
                        delay: .15,
                        duration: 0.6,
                        ease: "power1.out",
                        stagger: 0.015
                    },
                    "<",
                );
        });
    }

    // Tab Elements Sequence Reveals
    let tabSequences = document.querySelectorAll(".fwd-tab-sequence");
    if (tabSequences) {
        tabSequences.forEach((tabsqn) => {
            let tm = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: tabsqn,
                        start: "top bottom",
                        toggleActions: "play none play none",
                    },
                })
                .from(tabsqn.querySelectorAll(".fwd-tab-sequence-bg"), {
                    width: "0%",
                    duration: 0.6,
                    transformOrigin: "50%",
                    ease: "power3.out",
                    stagger: 0.25,
                    delay: 0.45,
                })
                .fromTo(
                    tabsqn.querySelectorAll(".fwd-tab-sequence-el"),
                    {
                        opacity: 0,
                        y: "20%",
                    },
                    {
                        delay: .2,
                        opacity: 1,
                        y: "0%",
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.25,
                    },
                    "<",
                );
        });
    }

    // meant for button reveals in succession
    /*buttonsGroup.forEach((group) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: group,
            start: "bottom 75%",
            toggleActions: "play none play reverse"
          }
        })
        .fromTo(
          group.querySelectorAll(".fwd-button"),
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.2
          }
        );
    });*/

    // Tab element arrow buttons Reveal
    /*iconsBtns.forEach((iconBtn) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: iconBtn,
            start: "top bottom",
            toggleActions: "play none play reverse"
          }
        })
        .fromTo(
          iconBtn,
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power3"
          }
        );
    });*/

    // wait until promise is fulfilled, then add gsap animations as usual
    Promise.all([preloadImages]).then(() => {

        console.log("running promise callback - all images loaded, adding gsap animations...");

        // Array of images to reveal - Must exclude images in article rich text (another script will process that)
        let imgContainer = document.querySelectorAll(":not(figure.w-richtext-figure-type-image) > .fwd-image-wrapper");

        if (imgContainer) {
            imgContainer.forEach((container) => {

                let image = container.querySelectorAll("img, .fwd-video-container");
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 70%",
                        toggleActions: "play none play none",
                        delay: .4,
                        refreshPriority: 1
                    },
                });

                tl.set(container, { autoAlpha: 1 });

                tl.from(container, 1, {
                    xPercent: -100,
                    ease: Power4.out,
                });

                tl.from(image, 1, {
                    xPercent: 100,
                    delay: -1,
                    duration: 0.5,
                    ease: Power4.out,
                });
            });
        }

        const featWorkSection = document.querySelector(".fwd-section-selected-work");
        const workImgWrapper = document.querySelectorAll(".fwd-collection-grid-image-wrapper");
        const workSection = document.querySelector(".fwd-work-hero");

        // Feat Work Images Reveal (Homepage)
        if (featWorkSection) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featWorkSection,
                    start: "top 45%"
                }
            });

            tl.set(workImgWrapper, { autoAlpha: 1 });

            tl.fromTo(
                workImgWrapper,
                1,
                {
                    //width: "0%",
                    xPercent: -100,
                    opacity: 0,
                },
                {
                    xPercent: 0,
                    opacity: 1,
                    ease: Power4.out,
                },
            );

            tl.fromTo(
                document.querySelectorAll(".fwd-collection-grid-item-image"),
                1,
                {
                    xPercent: 100,
                    opacity: 0,
                },
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: -1,
                    ease: Power4.out,
                },
            );

            gsap
                .timeline({
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: workSection,
                        delay: .25,
                        refreshPriority: 1,
                        onEnter: () => {
                            ScrollTrigger.refresh();
                        },
                        //start: "top top",
                        toggleActions: "play none play none",
                    },
                })
                .fromTo(
                    document.querySelectorAll(".fwd-collection-grid-title-wrapper"),
                    {
                        opacity: 0,
                        yPercent: 8,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        delay: 1,
                        duration: 1.5,
                        stagger: 0.1,
                        ease: Power4.out,
                    },
                    "<",
                );
        }

        // Work Gallery Images Reveal


        if (workImgWrapper && workSection) {
            let tl = gsap.timeline({
                delay: 1,
                /*scrollTrigger: {
                  trigger: workSection,
                  //start: "top top",
                  toggleActions: "play none play none",
                },*/
            });

            tl.set(workImgWrapper, { autoAlpha: 1 });

            tl.fromTo(
                workImgWrapper,
                1,
                {
                    //width: "0%",
                    xPercent: -100,
                    opacity: 0,
                },
                {
                    xPercent: 0,
                    opacity: 1,
                    ease: Power4.out,
                },
            );

            tl.fromTo(
                document.querySelectorAll(".fwd-collection-grid-item-image"),
                1,
                {
                    xPercent: 100,
                    opacity: 0,
                },
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: -1,
                    ease: Power4.out,
                },
            );

            gsap
                .timeline({
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: workSection,
                        delay: .25,
                        refreshPriority: 1,
                        onEnter: () => {
                            ScrollTrigger.refresh();
                        },
                        //start: "top top",
                        toggleActions: "play none play none",
                    },
                })
                /*.fromTo(
                  document.querySelectorAll(
                    ".fwd-collection-grid-wrapper .line, .fwd-collection-grid-wrapper h5:not(.fwd-h1, .fwd-h2, .fwd-h3, .fwd-h4, .fwd-h5)",
                  ),
                  {
                    opacity: 0,
                    y: "8%",
                  },
                  {
                    opacity: 1,
                    y: "0%",
                    duration: 1.5,
                    stagger: 0.1,
                    ease: Power4.out,
                  },
                )*/
                .fromTo(
                    document.querySelectorAll(".fwd-collection-grid-title-wrapper"),
                    {
                        opacity: 0,
                        yPercent: 8,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        delay: 1,
                        duration: 1.5,
                        stagger: 0.1,
                        ease: Power4.out,
                    },
                    "<",
                );
        }

        // for images we want to reaveal on page load (no scrolltrigger needed)
        let instantRevealImg = document.querySelectorAll(".fwd-image-wrapper-auto");
        if (instantRevealImg) {
            instantRevealImg.forEach((container) => {

                let image = container.querySelectorAll("img");
                let tl = gsap.timeline();

                tl.set(container, { autoAlpha: 1 });

                tl.from(container, 1, {
                    xPercent: -100,
                    ease: Power4.out,
                });

                tl.from(image, 1, {
                    xPercent: 100,
                    delay: -1,
                    duration: 0.5,
                    ease: Power4.out,
                });
            });
        }

        ScrollTrigger.refresh();

    }); //--promise


    // Webflow Landing
    if (document.querySelector(".fwd-landing-hero") && window.innerWidth >= 991) {
        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector(".fwd-landing-hero"),
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        }
        ).to(".fwd-landing-hero-img-container:nth-child(1) img", {
            yPercent: - 90
        })
            .to(".fwd-landing-hero-img-container:nth-child(2) img", {
                yPercent: - 200
            }, "<")
            .to(".fwd-landing-hero-img-container:nth-child(3) img", {
                yPercent: - 40
            }, "<")
            .to(".fwd-landing-hero-img-container:nth-child(4) img", {
                yPercent: - 140
            }, "<")
            .to(".fwd-landing-hero-img-container:nth-child(5) img", {
                yPercent: - 100
            }, "<");
    }

    let beyondSection = document.querySelector(".fwd-beyond-section");

    if (beyondSection) {
        let beyondTexts = document.querySelectorAll(".fwd-beyond-section .fwd-h1-style");

        beyondTexts.forEach((text) => {
            ScrollTrigger.create({
                trigger: text,
                start: 'top 50%',
                end: 'top 38%',
                onEnter: () => {
                    text.classList.add("highlight-text");
                },
                onLeave: () => {
                    text.classList.remove("highlight-text");
                },
                onEnterBack: () => {
                    text.classList.add("highlight-text");
                },
                onLeaveBack: () => {
                    text.classList.remove("highlight-text");
                }
            });
        });
    }


    // temporary animation for Outstanding Websites page hero
    if (document.querySelector(".fwd-landing-hero-corporate")) {

        gsap.registerPlugin(MotionPathPlugin);

        const stairsContainer = document.querySelector(".fwd-stairs-container-holder");

        if (stairsContainer.classList.contains("fwd-animate")) {

            let startDelay = 2.5;

            // stairs animation
            gsap.timeline()
                .from(".fwd-landing-hero-corporate .fwd-stairs, .fwd-landing-hero-corporate .stairs-corner", {
                    yPercent: 105,
                    delay: startDelay,
                    duration: 1.5,
                    stagger: .05,
                    ease: "power3.out"
                })
                .from(".fwd-landing-hero-corporate .stairs-corner", {
                    y: "50svh",
                    opacity: 0,
                    duration: 1.55,
                    stagger: .05,
                    ease: "power3.out"
                }, "<")
                .from(".fwd-landing-hero-corporate .fwd-stairs-text-block .fwd-corporate-text", {
                    opacity: 0,
                    duration: 1.25,
                    stagger: .25,
                    ease: "power3.out"
                }, "<");

            // star path animation
            const stairsPath = document.querySelector("#stairs-path");
            const pathLength = stairsPath.getTotalLength();

            gsap.set(stairsPath, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength
            });

            gsap.timeline()
                .to(".star-illustration", {
                    delay: startDelay,
                    opacity: 1,
                    duration: .5,
                })
                .to(".star-illustration", {
                    motionPath: {
                        path: "#stairs-path",
                        align: "#stairs-path",
                        autoRotate: true,
                        alignOrigin: [0.5, .75]
                    },
                    transformOrigin: "50% 25%",
                    duration: 3,
                    ease: "power1.inOut"
                }, "<")
                .from(".star-illustration svg", {
                    rotation: -360,
                    duration: 3,
                    ease: "power1.inOut"
                }, "<")
                .to(stairsPath, {
                    strokeDashoffset: 0,
                    duration: 3,
                    ease: "power1.inOut"
                }, "<");
        } // if animate

        gsap.from(".fwd-webflow-corporate, .fwd-clutch-corporate", {
            delay: 3,
            yPercent: 10,
            opacity: 0,
            duration: 1,
            stagger: .25,
            ease: "power4.out"
        });

        const stairsTop = document.querySelector(".fwd-stairs-section-top");
        const stairsBottom = document.querySelector(".fwd-stairs-section-bottom");

        if (stairsTop) {
            gsap.from(stairsTop.querySelectorAll(".stairs-discovery"), {
                height: "0vh",
                duration: 1.25,
                stagger: -.02,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: stairsTop,
                    start: "top 95%",
                    scrub: false
                }
            });
        }
        if (stairsBottom) {
            gsap.from(stairsBottom.querySelectorAll(".stairs-discovery"), {
                height: "0vh",
                duration: 1.25,
                stagger: -.02,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: stairsBottom,
                    start: "top bottom",
                    scrub: false
                }
            });
        }
    }

    // Counter Number Rotation Reveal
    const statsCollection = document.querySelector(".fwd-stats-collection");

    if (statsCollection) {

        // first separate numeric text and wrap in span for each text block
        const statsItems = document.querySelectorAll(".fwd-stats-collection-item");
        statsItems.forEach((item) => {
            let itemH2 = item.querySelector(".fwd-landing-success-stories-header");
            itemH2.innerHTML = itemH2.textContent.replace(/(\d+)/g, '<span>$1</span>');

            // add two span duplicates for animation
            let h2Span = item.querySelector(".fwd-landing-success-stories-header span");
            let clone1 = h2Span.cloneNode(true);
            clone1.classList.add("span-clone");

            let value = parseInt(h2Span.textContent);
            //h2Span.textContent = 0;

            let clone2 = clone1.cloneNode(true);

            // append duplicates
            // itemH2.appendChild(clone1);
            // itemH2.appendChild(clone2);

        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".fwd-stats-collection",
                start: "top bottom",
                scrub: false
            }
        }).from(".fwd-landing-success-stories-header span", {
            textContent: 0,
            duration: 2,
            ease: "power1.in",
            snap: { textContent: 1 },
            stagger: {
                each: .25,
                onUpdate: function () {
                    this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
                },
            },
        })
            .from(".fwd-stats-collection .fwd-landing-text", {
                opacity: 0,
                y: "50%",
                duration: 1,
                ease: "power3.out",
                stagger: 0.45,
                delay: 1
            }, "<");


        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // statsItems.forEach((item) => {

        // });
        var counterLimit = parseInt(document.querySelector(".fwd-landing-success-stories-header span").textContent);

        var counter = 0;
        var n0 = document.querySelector(".fwd-landing-success-stories-header span:nth-child(2)");
        var n1 = document.querySelector(".fwd-landing-success-stories-header span:nth-child(3)");

        //countUp(counter, counterLimit, n0, n1);

        function countUp(counter, counterLimit, n0, n1) {
            if (counter <= counterLimit) {
                counter++;

                gsap.to(n0, {
                    delay: .1,
                    duration: .01,
                    yPercent: 100,
                    //delay: 0.01,
                    //ease: Power1.easeOut,
                    onComplete: () => swapNodes(counter, counterLimit, n0, n1)
                });
                gsap.to(n1, {
                    delay: .1,
                    duration: .01,
                    yPercent: 0,
                    //delay: 0.01,
                    //ease: Power1.easeOut,
                    // onComplete: ()=> swapNodes(counter, counterLimit, n0, n1)
                });
            }

            n1.textContent = counter;

        }

        function swapNodes(counter, counterLimit, n0, n1) {
            n0.textContent = counter;
            gsap.set(n0, { yPercent: -100, onComplete: () => countUp(counter, counterLimit, n0, n1) });
            gsap.set(n1, { yPercent: -100, onComplete: () => countUp(counter, counterLimit, n0, n1) });

        }

    }

    ScrollTrigger.refresh();


}); //--doc ready