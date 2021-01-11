/* This code block creates a nav list dynamically */

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
    navA.setAttribute('id', `${navItem}`);
    const navLink = document.createElement('li');
    navLink.appendChild(navA);
    fragment.appendChild(navLink);
})

navList.appendChild(fragment);


// adding the active class
/* function clickInView () {
    document.addEventListener('click', function (event) {
        if(!event.target.classList.contains('current')) return;
    
        event.target.classList.add('active');
    
        const links = document.querySelectorAll('.current');
    
        for (let i = 0; i < links.length; i++) {
            if(links[i] === event.target) continue;
    
            links[i].classList.remove('active');
        }
    }, false);
} */

/* let mainNavLinks = document.querySelectorAll(".current");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}); */


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

let navLinks = document.querySelectorAll(".current");

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



//actual function is implemeted here

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