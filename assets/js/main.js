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



/*======================== ACCORDION SKILLS ===============*/


/*======================== QUALIFICATION TABS ===============*/

/*======================== SERVICE MODALS ===============*/