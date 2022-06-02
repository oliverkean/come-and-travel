// menu toggler
function toggleMobileMenu(menu){
    menu.classList.toggle('open')
}

//scroll icons
window.addEventListener('scroll', scroll_reveal)
    function scroll_reveal(){
        var reveals_icon = document.querySelectorAll('.scroll_reveal')

        for(var i = 0; i < reveals_icon.length; i++){

            var windowheight = window.innerHeight
            var revealtop = reveals_icon[i].getBoundingClientRect().top
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals_icon[i].classList.add('active')
            }
        }
    }
