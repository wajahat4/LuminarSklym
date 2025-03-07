class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

// Google Maps APIs
// function initMap() {
//     var location = {
//         lat: 36.778259,
//         lng: -119.417931
//     }
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: location
//     });

// }
const scroll = new SmoothScroll('#navbar a[href*="#"]', {
    speed: 500

});
alert("Welcome! For Landing to The Page. You Can Play Background Music at buttom of page..Thanks....")

//Hamburger Menu
// function onClickMenu() {
//     document.getElementById("menu").classList.toggle("change");
//     document.getElementById("nav").classList.toggle("change");

//     document.getElementById("menu-bg").classList.toggle("change-bg");
// }
// function preset() {
//     document.getElementById("effect").classList.toggle('change-effect');
// }
// //Smooth Scrolling
// $('#navbar a').on('click', function(event) {
//     if (this.hash !== '') {
//         event.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//                 scrollTop: $(hash).offset().top - 100
//             },
//             800
//         );
//     }
// });
// Option 2 - jQuery Smooth Scrolling
// $('#home a').on('click', function(e) {
//     if (this.hash !== '') {
//         e.preventDefault();

//         const hash = this.hash;

//         $('html, body')
//             .animate({
//                 scrollTop: $(hash).offset().top
//             }, 800);
//     }
// });
$(window).on('load', function() {
    $(".load-wrapper").fadeOut('slow')
});