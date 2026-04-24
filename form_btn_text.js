export function formBtnTextInit() {
    let formBtns = document.querySelectorAll(".fwd-landing-send-btn");

    if (formBtns.length > 0) {
        formBtns.forEach((btn) => {
            if (btn.hasAttribute('disabled') || btn.disabled) {
                let btnText = btn.value;

                // replace default text with placeholder load text
                btn.value = "Please wait...";

                // callback function that will be called when mutations are observed
                const callback = function (mutationsList) {
                    for (let mutation of mutationsList) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
                            if (!btn.hasAttribute('disabled')) {
                                // after the 'disabled' attribute is removed, this means the button is ready to be used
                                // repalce its inner text with the default value
                                btn.value = btnText;
                            }
                        }
                    }
                };

                // observer instance linked to the callback function
                const observer = new MutationObserver(callback);

                // observe each button for mutations
                observer.observe(btn, { attributes: true });
            }
        });
    }
}
