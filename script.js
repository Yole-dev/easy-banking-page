'use strict';

//navbar toggle variable and functions
const openNav = document.querySelector('.openNav');
const closeNav = document.querySelector('.closeNav');
const navBar = document.querySelector('.navBar');
const navHeader = document.querySelector('.navHeader');

openNav.addEventListener('click', function() {
    closeNav.classList.remove('hide');
    openNav.classList.add('hide');
    navBar.style.display = 'flex';
});

closeNav.addEventListener('click', function() {
    closeNav.classList.add('hide');
    openNav.classList.remove('hide');
    navBar.style.display = 'none';
});

// default style

// window.onload = function() {
//     navBar.style.display = 'none';
// };