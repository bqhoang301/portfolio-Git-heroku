/*======================== Menu show Y Hidden ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*======= MENU SHOW =======*/
/*Validate if constant exists*/

if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*======= MENU HIDDEN =======*/
/*Validate if constant exists*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*======================== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Click each nav__link will remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*======================== ACCORDION SKILLS ===============*/


/*======================== QUALIFICATION TABS ===============*/

/*======================== SERVICE MODALS ===============*/

/*======================== PORTFOLIO SWIPER ===============*/

/*======================== TESTIMONIAL ===============*/