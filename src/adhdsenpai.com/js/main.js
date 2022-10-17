import $ from 'jquery'
window.$ = window.jQuery = $

var numberOfBackgrounds = 22;

function hasWebP() {
    var rv = $.Deferred(),
        img = new Image();
    img.onload = function () { rv.resolve(); };
    img.onerror = function () { rv.reject(); };
    img.src = "https://www.gstatic.com/webp/gallery/1.webp";
    return rv.promise();
}

function setBackground(webPSupport) {
    var wallpaper = Math.floor(Math.random() * numberOfBackgrounds + 1);
    var url = "./backgrounds/" + webPSupport + "/bg" + wallpaper + "." + webPSupport;
    $("body").css("background-image", "url(" + url + ")");
}

jQuery(function () {
    hasWebP().then(function () {
        setBackground("webp");
    }, function () {
        setBackground("jpg");
    });

    $(".main")
        .css({
            "opacity": 0,
            "top": "100%"
        })
        .animate({
            opacity: 1,
            top: 0
        }, {
            queue: false,
            duration: 1250
        });

    $('#avatar').on("click", function () {
        $(this).css({
            "transition": "all .5s ease",
            "rotate": '360deg'
        })
        setTimeout(function () {
            $('#avatar').css({
                "transition": "none",
                "rotate": '0deg'
            })
        }, 500)
    })
});