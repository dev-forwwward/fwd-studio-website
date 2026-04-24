export function formInit() {
    const formEl = document.querySelector('form');
    if (formEl) {
        $("form").each(function (e) {
            $.validator.addMethod("letters", function (value, element) {
                return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
            });
            $.validator.addMethod("customEmail", function (value, element) {
                return (
                    this.optional(element) || /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value)
                );
            });
            $(this).validate({
                rules: {
                    youremail: {
                        required: true,
                        email: true,
                        customEmail: true, // Add the customEmail validation
                    }
                },
                messages: {
                    youremail:
                        "Please specify a valid email address using the format user@example.com"
                },
                errorPlacement: function (error, element) {
                    error.insertAfter(element); // Ensures errors appear below the correct field
                    setTimeout(() => {
                        error[0].classList.add("show");
                    }, 80);
                },
            });
        });
    }
}
