//-------------------
// PROJECTS LIST

let revealJump = 2;
let initialReveal = 10;
let i = 0;

export function projectListInit() {
  let cases = document.querySelectorAll(".fwd-collection-grid-item");

  // convert faq rows node list into array
  let casesArray = Array.prototype.slice.call(cases);

  if (cases) {
    caseListInit();
  }

  function caseListInit() {
    i = 0;

    // update cases list elements after filtering
    cases = document.querySelectorAll(".fwd-collection-grid-item");
    casesArray = Array.prototype.slice.call(cases);

    // Hide every Project that's not the first x number of rows (x = initialReveal)
    cases.forEach((el) => {
      if (i >= initialReveal) {
        el.classList.add("fwd-visibility-hidden");
      } else {
        i++;
      }
    });
  }

  const loadMoreBtn = document.querySelector(".fwd-load-more");
  const showLessBtn = document.querySelector(".fwd-show-less");

  let filterBtn = document.querySelectorAll(".fwd-filter-tag");
  // note: filterBtn also includes the Clear button

  let filterClearC = document.querySelector(".fwd-clear");
  let filterClearBtn;

  if (filterClearC) {
    filterClearBtn = filterClearC.querySelector(".fwd-button");
  }

  if (filterBtn && filterClearC) {
    // filter buttons click event - add click event to each filter
    filterBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();

        // remove selection from Clear by default
        filterClearBtn.classList.remove("fwd-selected");

        for (let i = 0; i < filterBtn.length; i++) {
          // check for clicked btn
          if (filterBtn[i] == btn) {
            // differentiate between clear btn and regular filter btn
            // this is because the HTML structure is different for clear
            // so we have to first select its <a> element to then add the selection class
            if (filterBtn[i] == filterClearC) {
              filterClearBtn.classList.add("fwd-selected");

              // prevent scroll to top default
              e.preventDefault();
            } else {
              filterBtn[i].classList.add("fwd-selected");
            }
          } else {
            // if element wasn't clicked on, remove the selection class, in case it has it
            filterBtn[i].classList.remove("fwd-selected");
          }
        }

        // expand all content on filter select
        loadMoreContent();
        window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      });
    });
  }

  if (loadMoreBtn) {
    // add event listener to 'load more' btn
    loadMoreBtn.addEventListener("click", function () {
      loadMoreContent();
    });
  }

  function loadMoreContent() {
    // iterate through the following next x amount (x = revealJump) cases
    // and reveal them if they exist
    for (let j = 0; j < revealJump; j++) {
      if (casesArray[i]) {
        casesArray[i].classList.remove("fwd-visibility-hidden");
        i++;
      }
    }

    // if all cases revealed, revert
    if (i > casesArray.length - 1) {
      //hide this button, reveal "Show less"
      loadMoreBtn.classList.add("fwd-hidden");
      showLessBtn.classList.remove("fwd-hidden");
    }
  }

  if (showLessBtn) {
    // add event listener to 'show less' btn
    showLessBtn.addEventListener("click", function () {
      hideContent();
    });
  }

  function hideContent() {
    caseListInit();

    //hide this button, reveal "Load more"
    loadMoreBtn.classList.remove("fwd-hidden");
    showLessBtn.classList.add("fwd-hidden");
  }

  // listen for project list opacity changes (means project list change)
  // run reveal sequence if true
  const workImgWrapper = document.querySelectorAll(".fwd-collection-grid-image-wrapper");

  if (workImgWrapper.length > 0) {

    let elRevealed = false;
    var observer = new MutationObserver(function (mutations) {

      mutations.forEach(function (mutation) {
        if (targetNode.style.opacity <= 0) {
          elRevealed = true;

          if (workImgWrapper && elRevealed) {
            elRevealed = false;

            let tl = gsap.timeline({
              defaults: { overwrite: true },
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

            tl.fromTo(".fwd-collection-grid-item-image", 1, {
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
                defaults: { overwrite: true },
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
                  duration: 1.2,
                  stagger: 0.05,
                  ease: Power4.out,
                },
              )
              .fromTo(".fwd-work-page", {
                opacity: 0,
                yPercent: 8,
              },
                {
                  opacity: 1,
                  yPercent: 0,
                  delay: 0.5,
                  duration: 1.2,
                  stagger: 0.1,
                  ease: Power4.out,
                },
                "<",
              );
          }
        }
      });
    });

    // Notify me of style changes
    var observerConfig = {
      attributes: true,
      attributeFilter: ["style"],
    };

    var targetNode = document.querySelector(".fwd-collection-grid.w-dyn-items");

    if (targetNode) {
      observer.observe(targetNode, observerConfig);
    }
  }
}
