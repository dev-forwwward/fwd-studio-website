// ---- GSAP INIT
//gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Split text into words and characters
  const heading1Split = new SplitType("h1", { types: "words" });
  const heading2Split = new SplitType("h2", { types: "words, lines" });
  const h2Split = new SplitType(".h2", { types: "words" });
  const heading3Split = new SplitType("h3", { types: "lines" });
  const heading4Split = new SplitType("h4", { types: "lines" });
  const heading5Split = new SplitType("h5", { types: "lines" });
  const subtitleSplit = new SplitType(".fwd-overline", { types: "lines" });

  // Store different types of text in lists
  let heading1 = document.querySelectorAll("h1:not(.fwd-hero-header)");
  let heading2 = document.querySelectorAll("h2");
  let heading3 = document.querySelectorAll("h3");
  let heading4 = document.querySelectorAll("h4");
  let heading5 = document.querySelectorAll(":not(.fwd-collection-grid-wrapper) h5");

  let subtitles = document.querySelectorAll(".fwd-overline");

  let bodiesOfText = document.querySelectorAll(".fwd-text");

  let lineDividers = document.querySelectorAll(".fwd-line-divider");
  let verticalLines = document.querySelectorAll(".fwd-line-vertical");

  // Subtitle - Reveal
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

  // Header 1 - Reveal
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

  // Header 2 - Reveal
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

  // Header 2 (.h2 CLASS) - Reveal
  if (document.querySelector(".h2")) {
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
  }

  // Header 3 - Reveal
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

  // Header 4 - Reveal
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

  // Line Divider - Reveal
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

  buttons.forEach((btn) => {
    let tm = gsap
      .timeline({
        scrollTrigger: {
          trigger: btn,
          start: "bottom 80%",
          toggleActions: "play none play none",
        },
      })
      .fromTo(
        btn,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.35,
          delay: 0.2,
        },
      );
  });

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
            stagger: 0.25,
            delay: 0.6,
          },
        )
        .from(
          sqn.querySelectorAll(".fwd-sequence-el div, .fwd-sequence-el p"),
          {
            opacity: 0,
            y: "20%",
            duration: 0.6,
            ease: "power1.out",
            stagger: 0.15,
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
          delay: 0.25,
        })
        .fromTo(
          tabsqn.querySelectorAll(".fwd-tab-sequence-el"),
          {
            opacity: 0,
            y: "20%",
          },
          {
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

  // Images Reveal
  let imgContainer = document.querySelectorAll(".fwd-image-wrapper");

  imgContainer.forEach((container) => {
    let image = container.querySelector("img");
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

    tl.from(image, 1, {
      xPercent: 100,
      delay: -1,
      duration: 0.5,
      ease: Power4.out,
    });
  });

  // Work Gallery Images Reveal
  let workSection = document.querySelector(".fwd-work-hero");
  let workImgWrapper = document.querySelectorAll(
    ".fwd-collection-grid-image-wrapper",
  );
  if (workImgWrapper) {
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
          //start: "top top",
          toggleActions: "play none play none",
        },
      })
      .fromTo(
        document.querySelectorAll(
          ".fwd-collection-grid-wrapper .line, .fwd-collection-grid-wrapper h5",
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
      )
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

}); //--doc ready