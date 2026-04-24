document.addEventListener("DOMContentLoaded", () => {
    let packsSection = document.querySelector(".fwd-packs-section");

    if (packsSection) {
        let modalBtns = packsSection.querySelectorAll("a");
        let originalContainer = document.querySelector(".fwd-landing-form-section > .fwd-container")
        let modalContainer = document.querySelector(".modal-container");
        let modal = null;

        let modalOpen = false;

        modalBtns.forEach((btn) => {
            btn.addEventListener("click", function (e) {

                // prevent button redirect default behaviour
                e.preventDefault();

                if (!modalOpen) {
                    modal = document.querySelector(".fwd-landing-form-section .fwd-landing-form-column-container");

                    modalContainer.querySelector(".fwd-container").appendChild(modal);

                    document.querySelector("body").classList.add("contact-modal-open");

                    lenis.stop();
                    modalOpen = true;
                }
            });
        });

        // closes modal (and removes created element) when clicking outside of it
        modalContainer.addEventListener("click", function (e) {
            if (e.target === modalContainer && modalOpen) {

                lenis.start();
                modalOpen = false;

                originalContainer.appendChild(modal);

                document.querySelector("body").classList.remove("contact-modal-open");
            }
        });

        document.querySelector(".fwd-modal-close-btn").addEventListener("click", function () {
            if (modalOpen) {
                lenis.start();
                modalOpen = false;

                originalContainer.appendChild(modal);

                document.querySelector("body").classList.remove("contact-modal-open");
            }
        });


        // click event in submit button (in modal)
        document.querySelector(".fwd-landing-send-btn").addEventListener("click", function () {
            if (modal) {
                // wait 4.5 seconds before closing
                // (must animate before form reset - this is set in WF)
                setTimeout(function () {
                    document.querySelector(".fwd-modal-close-btn").click();
                }, 6000);
            }
        });
    }
});