$(document)
    .ready(function () {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        });

        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        });

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });

        // active shape
        $('.shape').shape();

        // show dropdown on hover
        $('.main.menu  .ui.dropdown').dropdown({
            on: 'hover'
        });

        //$('.fade')
        //    .transition('fade')
        //    .transition('fade', '2000ms')
        //;

        setInterval(flip, 3000);
    });

const flip = function() {
    $('.shape').shape('flip right');
}