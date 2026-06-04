/* ===================================
   AOS Animation
=================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


/* ===================================
   Swiper Gallery
=================================== */

const swiper = new Swiper(".mySwiper", {

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

});


/* ===================================
   WhatsApp Form
=================================== */

const form = document.getElementById("whatsappForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        const name =
            inputs[0].value;

        const phone =
            inputs[1].value;

        const details =
            inputs[2].value;

        const message =

`طلب خدمة جديد

الاسم:
${name}

رقم الهاتف:
${phone}

تفاصيل الطلب:
${details}

تم الإرسال من موقع أصول للخدمات والاستشارات الحكومية`;

        const whatsappUrl =
        `https://wa.me/201116922660?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );

    });

}


/* ===================================
   Counter Animation
=================================== */

const counters =
document.querySelectorAll(".counter");

const speed = 50;

function startCounters(){

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        const updateCount = () => {

            const count =
            +counter.innerText;

            const increment =
            target / speed;

            if(count < target){

                counter.innerText =
                Math.ceil(count + increment);

                setTimeout(
                    updateCount,
                    30
                );

            }else{

                counter.innerText =
                target;

            }

        };

        updateCount();

    });

}


/* ===================================
   Run Counter On Scroll
=================================== */

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(".stats-section");

    if(!statsSection) return;

    const sectionTop =
    statsSection.offsetTop - 400;

    if(
        window.scrollY > sectionTop &&
        !counterStarted
    ){

        startCounters();

        counterStarted = true;

    }

});


/* ===================================
   Navbar Scroll Effect
=================================== */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.classList.add("shadow-lg");

    }else{

        navbar.classList.remove("shadow-lg");

    }

});


/* ===================================
   Smooth Scroll
=================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ===================================
   Current Year In Footer
=================================== */

const year =
document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}


/* ===================================
   Loading Complete
=================================== */

window.addEventListener("load", () => {

    console.log(
        "OSOUL Website Loaded Successfully"
    );

});
