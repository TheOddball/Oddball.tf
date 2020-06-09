import $ from 'jquery'
window.$ = window.jQuery = $

var isGameOpen;

function showGame() {
    var milagame = $('#milaGame');
    milagame.show();

    setTimeout(function() {
        milagame.css('opacity', '1');
    }, 100);

    isGameOpen = true;

    $(document).mouseup(function(e) {
        if (!milagame.is(e.target) && milagame.has(e.target).length === 0 && isGameOpen == true) {
            hideGame();
        }
    });
}

function hideGame() {
    var milagame = $('#milaGame');
    milagame.css('opacity', '0');

    setTimeout(function() {
        milagame.hide();
    }, 100);
    isGameOpen = false;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

$(document).ready(function() {
    $(".main")
        .css({
            "opacity": 0,
            "top": 500
        })
        .animate({
            opacity: 1,
            top: 0
        }, {
            queue: false,
            duration: 1000
        });

    if (getQueryVariable("game") == "true") {
        showGame();
    }
});