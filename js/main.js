$(document).ready(function(){
    $('.main')
        .css({'opacity': 0,'top': 500})
        .animate(
            {opacity: 1, top: 0},
            {queue: false, duration: 1000}
        );
});