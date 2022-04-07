menu = document.querySelector('#menu-btn');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav= document.querySelector('.rightNav');

menu.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
