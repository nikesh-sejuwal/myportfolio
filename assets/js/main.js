// Hamburger

// Sticky menu background
window.addEventListener("scroll", function () {
   if (window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.7;
   } else {
      document.querySelector("#navbar").style.opacity = 1;
   }
});

// Smooth Scrolling
$(".nav-item, .mobile-btn").on("click", function (event) {
   if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
         {
            scrollTop: $(hash).offset().top - 100,
         },
         {
            duration: 1500,
            easing: "swing",
         }
      );
   }
});

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
// const mobile_men = document.querySelector(".mobile-na");
mobile_menu.addEventListener("click", function () {
   menu_btn.classList.toggle("is-active");
   mobile_menu.classList.toggle("is-active");
   //  mobile_men.classList.toggle("is-active");
});

menu_btn.addEventListener("click", function () {
   menu_btn.classList.toggle("is-active");
   mobile_menu.classList.toggle("is-active");
   //  mobile_men.classList.toggle("is-active");
});

// text
const text = document.querySelector(".typed-output");

function loadedtext() {
   setTimeout(() => {
      text.textContent = "Web Developer";
      text.classList.add("fade-in");
   }, 0);
   setTimeout(() => {
      text.textContent = "Mobile App Developer";
      text.classList.add("fade-in");
   }, 4000);
}

loadedtext();
setInterval(loadedtext, 8000);
