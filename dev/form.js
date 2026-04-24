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


// FORM ID REWRITE TEST
const formIdField = document.querySelector("#formID");

// check if cookie already exists before creating it
if (!getSessionIdCookie()) {
    // set sessionId var for current session
    setSessionIdCookie(generateUniqueSessionId());
}

// if formId field exists, set its value to the sessionId
if (formIdField) {
    alert("Adding sessionId to formID field");
    formIdField.value = getSessionIdCookie();
}


// generates unique id based on timestamp combined with a random string
function generateUniqueSessionId() {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substr(2, 9);
    return `session_${timestamp}_${randomString}`;
}

// set unique ID to sessionId var
function setSessionIdCookie(sessionId) {
    document.cookie = `sessionId=${sessionId}; path=/;`;
}

// fectches sessionId from cookie
function getSessionIdCookie() {
    const name = "sessionId=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}



// var $form = $("form");
// $.validator.addMethod("letters", function (value, element) {
//   return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
// });
// $.validator.addMethod("customEmail", function (value, element) {
//   return (
//     this.optional(element) || /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value)
//   );
// });

// $form.validate({
//   rules: {
//     youremail: {
//       required: true,
//       email: true,
//       customEmail: true // Add the customEmail validation
//     },    
//     youremail2: {
//       required: true,
//       email: true,
//       customEmail: true // Add the customEmail validation
//     }
//   },
//   messages: {
//     youremail:
//       "Please specify a valid email address using the format user@example.com",
//     youremail2:
//       "Please specify a valid email address using the format user@example.com",

//   }
// });