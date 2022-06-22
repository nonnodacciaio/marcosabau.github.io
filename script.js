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
        } else if (newscroll < mypos && up) {
            $('.navbar').stop().fadeIn();
            up = !up;
        }
        mypos = newscroll;
    });

    $.fn.showTime = function () {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let time = hour + ":" + min + ":" + sec;
        $(".clock").text(time);
        setTimeout($.fn.showTime, 1000);
    }

    $.fn.showTime();

});