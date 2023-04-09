'use strict';

//navbar toggle variable and functions
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');
const navBar = document.querySelector('.navBar');
const navHeader = document.querySelector('.navHeader');
const heroImage = document.querySelector('.heroImage');

openNav.addEventListener('click', function() {
    closeNav.classList.remove('hide');
    openNav.classList.add('hide');
    navBar.style.display = 'flex';
    heroImage.style.opacity = '0';
});

closeNav.addEventListener('click', function() {
    closeNav.classList.add('hide');
    openNav.classList.remove('hide');
    navBar.style.display = 'none';
    heroImage.style.opacity = '1';
});

// for desktop navbar hover effects
const home = document.querySelector('.home');
const homeDrop = document.querySelector('.homeDrop');

const about = document.querySelector('.about');
const aboutDrop = document.querySelector('.aboutDrop');

const contact = document.querySelector('.contact');
const contactDrop = document.querySelector('.contactDrop');

const blog = document.querySelector('.blog');
const blogDrop = document.querySelector('.blogDrop');

const careers = document.querySelector('.careers');
const careersDrop = document.querySelector('.careersDrop');

home.addEventListener('mouseover', function() {
    homeDrop.style.opacity = '1';
});

home.addEventListener('mouseout', function() {
    homeDrop.style.opacity = '0';
});

about.addEventListener('mouseover', function() {
    aboutDrop.style.opacity = '1';
});

about.addEventListener('mouseout', function() {
    aboutDrop.style.opacity = '0';
});

contact.addEventListener('mouseover', function() {
    contactDrop.style.opacity = '1';
});

contact.addEventListener('mouseout', function() {
    contactDrop.style.opacity = '0';
});

blog.addEventListener('mouseover', function() {
    blogDrop.style.opacity = '1';
});

blog.addEventListener('mouseout', function() {
    blogDrop.style.opacity = '0';
});

careers.addEventListener('mouseover', function() {
    careersDrop.style.opacity = '1';
});

careers.addEventListener('mouseout', function() {
    careersDrop.style.opacity = '0';
});




// default style

// window.onload = function() {
//     navBar.style.display = 'none';
// };