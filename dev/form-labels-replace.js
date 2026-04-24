document.addEventListener("DOMContentLoaded", () => {

    // UNUSED CODE **
    // this script was previously working with every form submit button.
    // on submit, all (same) forms in the page have their name and email inputs filled.

    // this code was made to bypass a previous limitation where one single form could 
    // not be submitted if other form fields were empty

    // click event in submit button (all forms - modal and otherwise)
    let formSubmitBtn = document.querySelectorAll(".fwd-landing-send-btn");
    formSubmitBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();

            let fieldsAreEmpty = false;

            // store submission input values
            let nameField = e.target.closest("form").querySelector("input.fwd-text-field[type='text']").value;
            let emailField = e.target.closest("form").querySelector("input.fwd-text-field[type='email']").value;

            if (nameField === "" || emailField === "") {
                fieldsAreEmpty = true;
            }
            console.log(nameField, emailField);

            // go through every form name and email input fields and fill them with the previous values
            document.querySelectorAll("input.fwd-text-field[type='text']").forEach((input) => {
                if (input.value != nameField) {
                    input.value = nameField;
                }
            });

            document.querySelectorAll("input.fwd-text-field[type='email']").forEach((input) => {
                if (input.value != emailField) {
                    input.value = emailField;
                }
            });

            // clear fields shortly after submitting
            if (!fieldsAreEmpty) {
                setTimeout(()=> {
                    document.querySelectorAll("input.fwd-text-field[type='text'], input.fwd-text-field[type='email']").forEach((input) => {
                        input.value = "";
                    });
                }, 3000);
            }

            // close modal if it was open (means the user clicked the submit button in the modal form)
            if (modal) {
                // wait 4.5 seconds before closing
                // (must animate before form reset - this is set in WF)
                setTimeout(function () {
                    document.querySelector(".fwd-modal-close-btn").click();
                }, 6000);
            }
        });
    });

});