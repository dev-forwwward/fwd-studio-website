//-------------------
// TAB HOVER (Industries)
export function tabHoverInit() {
  const industriesTab = document.querySelectorAll(".fwd-industries-tab");
  const tabPane = document.querySelector(".fwd-industries-tabs-wrapper .fwd-tab-pane");

  if (industriesTab && tabPane) {
    let div = document.createElement("div");
    div.classList.add("fwd-tab-padding-div");
    document.querySelector(".fwd-industries-tabs-wrapper .tabs-content").insertBefore(div, tabPane);

    let currentTab = null;
    let prevTab = currentTab;

    industriesTab.forEach((tabEl) => {
      tabEl.addEventListener("mouseover", (e) => {
        //prevTab = currentTab;
        //currentTab = tabEl;

        //document.querySelector(".fwd-industries-tabs-wrapper .w--tab-active").classList.add("fwd-image-wrapper");

        tabEl.click();

        /*if (currentTab != prevTab) {
          let tl = gsap.timeline();

          tl.set(
            document.querySelector(
              ".fwd-industries-tabs-wrapper .w--tab-active",
            ),
            { autoAlpha: 1 },
          );

          tl.fromTo(
            document.querySelector(".w--tab-active"),
            {
              xPercent: -100,
            },
            {
              xPercent: 0,
              ease: Power4.out,
            },
            ">",
          ).fromTo(
            document.querySelector(".w--tab-active img"),
            {
              xPercent: 100,
            },
            {
              xPercent: 0,
              duration: 0.5,
              ease: Power4.out,
              onComplete: () => {
                console.log("FINISHED SEQUENCE 2");
              },
            },
            "<",
          );
        }*/
      });
    });
  }
}
