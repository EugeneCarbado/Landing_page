
/* This function checks if an element is in the viewport */
const isInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}

/* This code block creates a nav list dynamically */

const navList = document.querySelector('.nav-menu');
const navMenu = ['Home',
    'About us',
    'Plans',
    'Help'];

const fragment = new DocumentFragment();

navMenu.forEach(function (navItem) {
    const navA = document.createElement('a');
    navA.innerHTML = navItem;
    navA.setAttribute('class', 'current');
    navA.setAttribute('href', `#${navItem}`);
    const navLink = document.createElement('li');
    navLink.appendChild(navA);
    fragment.appendChild(navLink);
})

navList.appendChild(fragment);

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

