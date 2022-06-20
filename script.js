$(document).ready(function () {
    var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var up = false;
    var newscroll;
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