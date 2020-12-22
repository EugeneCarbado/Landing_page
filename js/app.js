document.addEventListener('scroll', function() {
    const navHeader = document.querySelector('#nav');
    const topOfNav = navHeader.clientHeight;

    function changeNav() {
        if(window.scrollY >= topOfNav) {
            document.body.classList.add('sticky');
        } else {
            document.body.classList.remove('sticky');
        }
    }

    document.addEventListener('scroll', changeNav)
})