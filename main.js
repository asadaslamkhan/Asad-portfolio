// toggle button
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})
// change background header
const scrollHeader = () => {
    const header = document.getElementById("navbar")

    if (this.scrollY >= 50) {
        header.classList.add("border-b", "border-[#64F3AA]")
    } else {
        header.classList.remove("border-b", "border-[#64F3AA]")
    }
}
window.addEventListener("scroll", scrollHeader)

// scrollup arrow button
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")

    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll", scrollUp)

// Scroll sections active link
const activeLink = () => {
    const section = document.querySelectorAll('section')
    const navlinks = document.querySelectorAll(".nav-link")

    let current = "home"

    section.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })

    navlinks.forEach(item => {
        item.classList.remove("active")
        if (item.href.includes(current)) {
            item.classList.remove("active")

        }
    })
}

window.addEventListener("scroll", activeLink)

// scroll reveal animation
document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 300,
        reset: true
    });

    sr.reveal(`.home__data, .skills__top, .portfolio__top, .contact__top, .nav__top`)
    sr.reveal(`.home__image`, { delay: 500, scale: 0.5 });

    sr.reveal(`.service-card`, { interval: 100 })

    sr.reveal(`.about__item__1-content, .about__item__2-img`, { origin: "right" });
    sr.reveal(`.about__item__2-content, .about__item__1-img`, { origin: "left" });
    sr.reveal(`.about__item__3-content`, { origin: "left" });
    sr.reveal(`.about__item__3-img`, { origin: "right" });
    sr.reveal(`.about__dowload-btn`, { origin: "right" });
    sr.reveal(`.nav__top`, { origin: "left", reset: false });
    sr.reveal(`.top__icons`, { origin: "left" });
    sr.reveal(`.navbar__top`, { origin: "right" });
    sr.reveal(`.about__sendme-btn`, { origin: "top" })









});




// Emailjs
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_2z09lur"
    const templateID = "template_cob1ilm"

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            Swal.fire({
                title: "Good job!",
                text: "Successfully Submitted.",
                icon: "success"
            });
        })
        .catch((error) => console.log(error));
}



