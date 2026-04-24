export function modalScriptInit() {
    const hasModalButton = document.querySelector(".has-modal-button");
    const modalBtns = document.querySelectorAll(".fwd-button-modal");

    if (modalBtns.length > 0) {

        let originalContainer = document.querySelector(".fwd-landing-form-section > .fwd-container")
        let modalContainer = document.querySelector(".modal-container");
        let modal = null;

        let modalOpen = false;

        modalBtns.forEach((btn) => {
            console.log(btn);
            btn.addEventListener("click", function (e) {

                // prevent button redirect default behaviour
                e.preventDefault();
                e.stopPropagation();

                if (!modalOpen) {
                    modal = document.querySelector(".fwd-landing-form-section .fwd-landing-form-column-container");

                    // modalContainer.querySelector(".fwd-container").appendChild(modal);

                    document.querySelector("body").classList.add("contact-modal-open");

                    // lenis.stop();
                    modalOpen = true;
                }
            });
        });

        // closes modal (and removes created element) when clicking outside of it
        modalContainer.addEventListener("click", function (e) {
            e.stopPropagation();

            if (e.target === modalContainer && modalOpen) {

                // lenis.start();
                modalOpen = false;

                // originalContainer.appendChild(modal);

                document.querySelector("body").classList.remove("contact-modal-open");
            }
        });

        document.querySelector(".fwd-modal-close-btn").addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (modalOpen) {
                // lenis.start();
                modalOpen = false;

                // originalContainer.appendChild(modal);

                document.querySelector("body").classList.remove("contact-modal-open");
            }
        });
    }
}
