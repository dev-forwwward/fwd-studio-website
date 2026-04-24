console.log("Running DEV scripts");
//Smopothscroller
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
    autoSleep: 60
});

// disable browser scroll restoration default
if (history.scrollRestoration || window.history.scrollRestoration || 'scrollRestoration' in history) {
    history.scrollRestoration = "manual";
    window.history.scrollRestoration = "manual";
}

let goingToAnchor = false;

let lenis;

document.addEventListener("DOMContentLoaded", () => {

    // check if loading from URL with anchor mention
    if (window.location.href.indexOf("#") > -1) {
        goingToAnchor = true;
    } else {
        // reset anchor checker boolean
        goingToAnchor = false;
    }

    // Show Loader and Cursor Container on page load
    if (document.querySelector(".fwd-cursor-container")) {
        document.querySelector(".fwd-cursor-container").style.display = "block";
    }
    if (document.querySelector(".fwd-loader")) {
        document.querySelector(".fwd-loader").style.display = "block";
    }

    //--------------------------------------------------------------
    // Home Services Accordion Interaction - 1st tab open by default
    if (document.querySelector(".fwd-services-dropdown")) {
        $(".collection-item:first-child .item_accordion_approach .fwd-services-dropdown-toggle").addClass("w--open");
        $(".collection-item:first-child .item_accordion_approach .fwd-services-dropdown-toggle").attr('aria-expanded', 'true');
        $(".collection-item:first-child .item_accordion_approach nav").addClass("w--open");

        $(".fwd-dropdown-wrap").on("click", function () {
            $(".collection-item:first-child .item_accordion_approach .fwd-services-dropdown-toggle").removeClass("w--open");
            $(".collection-item:first-child .item_accordion_approach nav").removeClass("w--open");
        });
    }
    //-----------------------------------------------
    // Lenis Smooth Scroll Setup
    lenis = new Lenis();
    //lenis.on("scroll", (e) => {});

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    //-----------------------------------------------

    // Hide hero content container
    let heroContentContainer = document.querySelector(".fwd-container.fwd-hero");
    if (heroContentContainer) {
        heroContentContainer.style.opacity = 0;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ---- Hero Animation - Removes overflow-hidden class after completion  //
    ///////////////////////////////////////////////////////////////////////////
    // looks for opacity change in canvas container element (last element animation of sequence)

    let target = document.querySelector(".fwd-hero-canvas-container");

    // loader elements observer (keeps page overflow hidden until done)
    var observer = new MutationObserver(function () {
        if (target.style.opacity >= 1) {
            observer.disconnect();

            setTimeout(() => {
                document.querySelector("body").classList.remove("overflow-hidden");
            }, 1100);

            setTimeout(() => {
                loader.remove();
            }, 5000);
        }
    });

    //-----------------------------------------------
    // Session Storage

    // get session storage var - this var is initialized the moment a tab is opened for the first time
    let sessionInit = sessionStorage.getItem("sessionInit");
    let loader = document.querySelector(".fwd-loader");

    // check if storage var exists - if it doesn't, then this is the first time the tab is loaded
    // show intro loader and init observer
    if (sessionInit == null && target) {
        observer.observe(target, { attributes: true, attributeFilter: ["style"] });

        sessionStorage.setItem("sessionInit", true);

        // Reveal hero content (timed)
        navbarReveal(2.4);
        heroContentReveal(2.8);
    } else {
        navbarReveal(0.2);

        if (loader) {
            document.querySelector("body").classList.remove("overflow-hidden");
            loader.style.display = "none";
            loader.remove();

            // Reveal hero content
            heroContentReveal(0.25);
        }
    }

    // NAVBAR REVEAL
    function navbarReveal(seconds) {
        gsap.from(document.querySelectorAll(".fwd-navbar-el"), {
            opacity: 0,
            y: "20%",
            stagger: 0.1,
            duration: 0.45,
            delay: seconds,
        });
    }

    // HERO REVEAL
    function heroContentReveal(seconds) {
        // Hero Content Reveal

        if (heroContentContainer) {
            let tma = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: heroContentContainer,
                        start: "bottom bottom",
                        toggleActions: "play none play reverse",
                    },
                })
                .to(heroContentContainer, {
                    opacity: 1,
                    delay: seconds,
                })
                .from(
                    heroContentContainer.querySelectorAll(".word"),
                    {
                        opacity: 0,
                        y: "100%",
                        duration: 0.5,
                        ease: "power3.out",
                        stagger: 0.1,
                    },
                    "<",
                )
                .from(
                    heroContentContainer.querySelector(".fwd-button"),
                    {
                        opacity: 0,
                        x: "-20%",
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.5,
                    },
                    "<",
                )
                .from(
                    heroContentContainer.querySelector(
                        ".fwd-webflow-specialists-wrapper",
                    ),
                    {
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        delay: 0.5,
                        onComplete: () => {
                            if (sessionInit === null) {
                                document.querySelector("body").classList.remove("overflow-hidden");
                            }
                        }
                    },
                    "<",
                );
        }
    }

    //-----------------------------------------------
    // Cursor Interaction

    let cursor = document.querySelector(".fwd-cursor");

    // Remove Arrow icon for now
    if (cursor) {
        cursor.querySelector("img").remove();
    }

    let mouseTranslateX = 30;
    let mouseTranslateY = 20;

    // Cursor size increase on hover
    let ball = cursor;
    let cursorDefaultText = "Enter";
    let hoverAreas = document.querySelectorAll(".fwd-hover-area");

    mouseFollowerInit();

    // Text change for swiper interaction
    let swiperHoverText = "Swipe";

    function mouseFollowerInit() {

        hoverAreas = document.querySelectorAll(".fwd-hover-area");

        window.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                duration: 0.8,
                x: e.clientX - mouseTranslateX,
                y: e.clientY - mouseTranslateY,
                delay: 0.01,
                ease: Power4.easeOut,
                //opacity: 1
            });
        });

        if (hoverAreas) {
            cursorHoverListener(hoverAreas);
        }
    }

    function cursorHoverListener(elements) {
        elements.forEach((area) => {
            // on entering hover area
            area.addEventListener("mouseenter", (e) => {
                ball.classList.add("hovering");

                if (area.classList.contains("swiper-slide")) {
                    cursor.querySelector(".fwd-cursor-text").innerHTML = swiperHoverText;
                }

                if (area.parentNode.getAttribute("locked") == "1") {
                    area.classList.add("locked");
                    cursor
                        .querySelector(".fwd-cursor-text")
                        .classList.add("smaller-text");
                    cursor.querySelector(".fwd-cursor-text").innerHTML =
                        "Password Protected";
                }
            });

            // on leaving hover area
            area.addEventListener("mouseleave", (e) => {
                ball.classList.remove("hovering");
                area.classList.remove("locked");
                cursor
                    .querySelector(".fwd-cursor-text")
                    .classList.remove("smaller-text");
                cursor.querySelector(".fwd-cursor-text").innerHTML = cursorDefaultText;
            });
        });
    }

    //--hover area

    // Update footer date
    let spanInstances = document.querySelectorAll(".fwd-current-year");

    spanInstances.forEach((span) => {
        span.innerHTML = new Date().getFullYear();
    });

    // Remove preloader
    if (document.querySelector(".hide-page")) {
        window.setTimeout(function () {
            document.querySelector(".hide-page").classList.add("show-page");

            window.setTimeout(() => {
                document.querySelector(".hide-page").classList.remove("show-page");
                document.querySelector(".hide-page").classList.remove("hide-page");
            }, 500);

            // reset scroll position on load, after allowing page overflow
            // but *only* if URL has no anchor mention
            if (!goingToAnchor) {
                document.querySelector("html").scroll(0, 0);
                window.scroll(0, 0);
                lenis.scrollTo(0, { immediate: true });
            }
        }, 150);
    }

}); //--doc ready