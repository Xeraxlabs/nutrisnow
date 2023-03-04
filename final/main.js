// Animated hamburger menu starts here

let hamburgerdiv = document.querySelector(".hamburger")
let backdropdiv = document.querySelector(".backdrop")
let navCon = document.querySelector(".mobile-nav-container ")


function toggleClassName() {
    hamburgerdiv.classList.toggle('crossburger')
    navCon.classList.toggle('show-mobile-navcontainer')
    backdropdiv.classList.toggle('showbackdrop')
}

hamburgerdiv.addEventListener("click", toggleClassName)
backdropdiv.addEventListener("click", toggleClassName)
// Animated hamburger menu ends here

// Widnow onscroll starts implementation

window.addEventListener("scroll", () => {
    let nav = document.querySelector(".header-nav");
    let scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 1) {
        nav.classList.add("header-nav-sticky")
    }
    else {
        nav.classList.remove("header-nav-sticky")
    }
})

// Widnow onscroll ends implementation



// Swiper js implementation starts here

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    loop: true, autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

// Swiper js implementation ends here
