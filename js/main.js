var bgs = [
    './img/site/backgrounds/bg.jpg',
    './img/site/backgrounds/bg1.jpg',
    './img/site/backgrounds/bg2.jpg',
    './img/site/backgrounds/bg3.jpg',
    './img/site/backgrounds/bg4.png',
    './img/site/backgrounds/bg5.jpg',    
]

$(document).ready(function () {
    $('.main')
        .css({
            'opacity': 0,
            'top': 500
        })
        .animate({
            opacity: 1,
            top: 0
        }, {
            queue: false,
            duration: 1000
        });
    var wallpaper = bgs[Math.floor(Math.random() * bgs.length)];
    $('body').css("background-image", "url("+wallpaper+")")
});