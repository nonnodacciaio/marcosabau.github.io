$(document).ready(function () {

    let mywindow = $(window);
    let mypos = mywindow.scrollTop();
    let up = false;
    let newscroll;
    mywindow.scroll(function () {
        newscroll = mywindow.scrollTop();
        if (newscroll > mypos && !up) {
            $('.navbar').stop().fadeOut();
            up = !up;
            console.log(up);
        } else if (newscroll < mypos && up) {
            $('.navbar').stop().fadeIn();
            up = !up;
        }
        mypos = newscroll;
    });

});