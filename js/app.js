// This code block creates a nav list dynamically
const navList = document.querySelector('.nav-menu');
const navMenu = ['Home',
    'About',
    'Plans',
    'Help'];

const fragment = new DocumentFragment();

navMenu.forEach(function (navItem) {
    const navA = document.createElement('a');
    navA.innerHTML = navItem;
    navA.setAttribute('class', 'current');
    //navA.setAttribute('class', 'active');
    navA.setAttribute('href', `#${navItem}`);
    const navLink = document.createElement('li');
    navLink.appendChild(navA);
    fragment.appendChild(navLink);
})

navList.appendChild(fragment);

// this piece of code gives the ability to observe any scrolling activity between the sections
document.addEventListener('DOMContentLoaded', () => {
    let options = {
        root: null,
        rootMargin: "-250px 0px",
        threshold: 0.05
    };
    let observer = new IntersectionObserver(inView, options);
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    })
    
});

// takes a list of all of the nav a tags with a class of .current
let navLinks = document.querySelectorAll(".current");

// this code observes the elements being scrolled
// this is the code block that i'd like to link with the a nav tags so they add a class of ".active" to each tag when that section is in view
function inView(elements) {
    // 4 sections observed
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('active');
        } else {
            element.target.classList.remove('active');
        }
    });
}

/* This code takes the #nav id and applies a css rule that makes the nav sticky when scrolling */
document.addEventListener('scroll', function () {
    const navHeader = document.querySelector('#nav');
    const topOfNav = navHeader.clientHeight;

    function changeNav() {
        if (window.scrollY >= topOfNav - topOfNav + 1) {
            document.body.classList.add('sticky');
        } else {
            document.body.classList.remove('sticky');
        }
    }

    document.addEventListener('scroll', changeNav)
});