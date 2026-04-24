document.addEventListener("DOMContentLoaded", () => {
    let fbShare = document.querySelectorAll(".social-facebook");
    let twShare = document.querySelectorAll(".social-twitter");
    let liShare = document.querySelectorAll(".social-linkedin");
    let copyShare = document.querySelectorAll(".social-copy");

    // check if share button (type) exists
    if (fbShare) {

        // add click event listener to each one
        fbShare.forEach((shareBtn) => {
            shareBtn.addEventListener("click", function (e) {
                // prevent default <a> redirect
                e.preventDefault();

                // redirect location to facebook share url + article url
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + escape(window.location.href) + "&t=" + document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'); return false;
            });
        });
    }

    // check if share button (type) exists
    if (twShare) {

        // add click event listener to each one
        twShare.forEach((shareBtn) => {
            shareBtn.addEventListener("click", function (e) {
                // prevent default <a> redirect
                e.preventDefault();

                // share message for twitter
                let t = "#forwwwardstudio" +"\n";
                window.open('https://twitter.com/share?url=' + encodeURIComponent(location.href) + '&text=' + encodeURIComponent(t), 'twitsharer', 'toolbar=0,status=0,width=626,height=436');
            });
        });
    }

    // check if share button (type) exists
    if (liShare) {

        // add click event listener to each one
        liShare.forEach((shareBtn) => {
            shareBtn.addEventListener("click", function (e) {
                // prevent default <a> redirect
                e.preventDefault();

                window.open('https://www.linkedin.com/sharing/share-offsite/?url={'+location.href+'}');
            });
        });
    }

    // check if share button (type) exists
    if (copyShare) {

        // add click event listener to each one
        copyShare.forEach((shareBtn) => {
            shareBtn.addEventListener("click", function (e) {
                // prevent default <a> redirect
                e.preventDefault();

                // copy to clipboard
                navigator.clipboard.writeText(location.href);
            });
        });
    }

}); //--doc ready