/* toggle icon navbar */
var menuIcon = document.querySelector("#menu-icon");
var navbar = document.querySelector(".header__navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*  */
var sections = document.querySelectorAll('section')
var navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach((sec) => {
        var top = window.scrollY
        var offset = sec.offsetTop - 150
        var height = sec.offsetHeight
        var id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active")
                document.querySelector("header nav a[href*=" + id + "]").classList.add('active')
            })
        }
    })

    /* Sticky Navbar */
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scroll > 100)

    /* Menu Icon  Navbar */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
})
ScrollReveal().reveal('.home__content, .about__content-heading', {origin: 'top'})
ScrollReveal().reveal('.about__content', {origin: 'right'})
ScrollReveal().reveal('.expertise__container, .portfolio__container-box, .contact form', {origin: 'bottom'})
ScrollReveal().reveal('.home__content h1, .about__img', {origin: 'left'})

/* Typed */
var typed = new Typed('.home__content-multiple-text', {
    strings: ["VKU student", "member of class 23AI", "child of Quảng Trị"],
    typeSpeed: 100,
    backSpeed: 100,
    delaySpeed: 1000,
    loop: true,
})