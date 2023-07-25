function clickMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector.('.icon').scr = fa-solid fa-bars;
     } else {
            menuMobile.classList.add('open')

     }
}