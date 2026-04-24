export function heroShowreelInit() {

    // HERO VIDEO Scroll Interaction
    let videoWrapper = document.querySelector('.hero_video_wrapper');

    if (videoWrapper) {

        setTimeout(() => {

            if (window.innerWidth >= 1024) {

                // animate hero video reveal - only relevant in desktop as it is out of view by default in mobile
                gsap.to(videoWrapper, {
                    delay: .5,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                });

                const videoSection = document.querySelector('#section_video');
                const heroContainer = document.querySelector('.fwd-container.fwd-hero');
                let showreelRefEl = document.querySelector('.showreel_ref');

                const initVideoSize = 288; // 18rem in px
                // map to val 0-1, relative to container
                let mappedVideoSize = (initVideoSize / heroContainer.offsetWidth);

                let currentScaleVal = mappedVideoSize;

                let endY = - videoSection.offsetHeight + Math.abs(window.innerHeight - showreelRefEl.getBoundingClientRect().bottom) - window.scrollY;

                endY = - document.querySelector('.fwd-hero').offsetHeight;
                // let videoEndY = (window.innerHeight - showreelRefEl.getBoundingClientRect().bottom);

                let videoContainer = document.querySelector('.section_hero_followup_container');
                let videoWidth = videoContainer.clientWidth;


                gsap.set('.section_hero_followup_container', {
                    y: endY,
                    // paddingBottom: sectionPaddingBottom
                });

                videoWrapper.style.width = videoWidth.toString() + "px";

                gsap.timeline({
                    scrollTrigger: {
                        trigger: '.fwd-hero',
                        pin: '.section_hero_followup_container',
                        start: "top top",
                        // end: () => `+=${document.querySelector(".section_hero_followup").offsetHeight}`,
                        end: 'bottom top',
                        scrub: true,
                    }
                }).from('.hero_video_container', {
                    // width: () => '18rem',
                    scale: mappedVideoSize,
                    duration: 1,
                    // onComplete: ()=> {
                    //     window.lenis(pause);
                    //     console.log("PAUSING LENIS");
                    //     setTimeout(()=> {
                    //         window.lenis(start);
                    //         console.log("RESUMING LENIS");
                    //     }, 1000);
                    // }
                })

                // ScrollTrigger.create({
                //     trigger: '.section_hero_followup_extra_space',
                //     start: 'top bottom-=5px',
                //     end: '+=200px',
                //     markers: true,
                //     pin: '.section_hero_followup'
                //     // pin: '.section_hero_followup_container',
                // });

                window.addEventListener('resize', () => {
                    endY = document.querySelector('.fwd-hero').offsetHeight;
                    // endY = - videoSection.offsetHeight + Math.abs(window.innerHeight - showreelRefEl.getBoundingClientRect().bottom) - window.scrollY;

                    mappedVideoSize = (initVideoSize / heroContainer.offsetWidth);

                    videoWidth = videoContainer.clientWidth;
                    videoWrapper.style.width = videoWidth.toString() + "px";

                    gsap.set('.section_hero_followup_container', {
                        y: endY,
                    });

                    gsap.set('.hero_video_container', {
                        scale: mappedVideoSize,
                    });

                    console.log("resizing");
                    ScrollTrigger.refresh();
                });

            }
        }, 400);


        // PLAY / PAUSE Feature
        const videoElement = document.getElementById("hero_video");
        const playIcon = document.getElementById("play-icon");
        const pauseIcon = document.getElementById("pause-icon");

        let isFirstClick = true; // Track if this is the first click
        pauseIcon.style.display = "none";

        videoElement.addEventListener("click", function () {
            if (isFirstClick) {

                console.log("this is the video", videoElement);

                // If this is the first click, reset the video and start playing
                videoElement.currentTime = 0;
                // videoElement.muted = false;
                videoElement.play().catch(err => console.error("Playback failed:", err));

                fadeAudioIn(videoElement, 1.5);

                playIcon.style.display = "none";
                pauseIcon.style.display = "flex";

                isFirstClick = false;
            } else {

                if (videoElement.muted) {
                    // videoElement.muted = false;
                    videoElement.play().catch(err => console.error("Playback failed:", err));

                    fadeAudioIn(videoElement, 1.5);

                    playIcon.style.display = "none";
                    pauseIcon.style.display = "flex";
                } else {
                    fadeAudioOut(videoElement, .5);
                    // videoElement.muted = true;

                    // can't pause right away, otherwise audio fade-out won't be heard
                    setTimeout(() => {
                        videoElement.pause();
                    }, 500);

                    playIcon.style.display = "flex";
                    pauseIcon.style.display = "none";
                }
            }

            if (window.innerWidth >= 1024) {
                lenis.scrollTo('#section_video', {
                    duration: 2,
                });
            }
        });

        // SOUND FADE utility functions with gsap
        function fadeAudioIn(videoElement, duration = 0.5) {
            videoElement.muted = false;
            videoElement.volume = 0;

            gsap.to(videoElement, {
                volume: 1,
                duration: duration,
                ease: "power2.inOut"
            });
        }

        function fadeAudioOut(videoElement, duration = 0.5) {
            gsap.to(videoElement, {
                volume: 0,
                duration: duration,
                ease: "power2.inOut",
                onComplete: () => {
                    videoElement.muted = true;
                    videoElement.volume = 1; // Reset for next unmute
                }
            });
        }


        // MOUSE HOVER HANDLER -  Over video
        const videoContainer = document.querySelector('.hero_video_container');
        const videoCursorContainer = document.querySelector('.home-video-cursor');

        const videoCursorButtons = document.querySelectorAll('.hero-video-play-icon-wrapper');

        videoContainer.addEventListener('mouseover', () => {
            videoCursorContainer.classList.add('visible');
        });

        videoContainer.addEventListener('mouseout', () => {
            videoCursorContainer.classList.remove('visible');
        });

    } // if videoWrapper
}
