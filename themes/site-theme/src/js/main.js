import styles from './../css/main.css';
import ScrollReveal from 'scrollreveal';
import flickity from 'flickity';
import MicroModal from 'micromodal';

// mobile menu toggle

var openmenu = document.querySelector('.mobile-menu-button');
var mobilemenu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');

openmenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
};

var closemenu = document.querySelector('.close-menu');

closemenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
};

// END

// init micromodal's js

MicroModal.init();

// END

// Reveal sections on scroll

// DEVELE page

ScrollReveal().reveal('.fadeOnScroll')

// END