//-------------------
// NAVIGATION

document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector(".fwd-menu-hamburger-wapper");
  let navBar = document.querySelector(".fwd-navbar");

  if (burger) {
    burger.addEventListener("click", function () {
      console.log("Burger menu click");

      navBar.classList.toggle("is-open");
      document.querySelector("body").classList.toggle("overflow-hidden");
    });
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 769) {
      document.querySelector("body").classList.remove("overflow-hidden");
      navBar.classList.remove("is-open");
    }
  });

}); //--doc ready
