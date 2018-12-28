var bgs = [
	"./img/site/backgrounds/bg.",
	"./img/site/backgrounds/bg1.",
	"./img/site/backgrounds/bg2.",
	"./img/site/backgrounds/bg3.",
	"./img/site/backgrounds/bg4.",
	"./img/site/backgrounds/bg5.",
	"./img/site/backgrounds/bg6."
];

function hasWebP() {
	var rv = $.Deferred(), img = new Image();
	img.onload = function() { rv.resolve(); };
	img.onerror = function() { rv.reject(); };
	img.src = "https://www.gstatic.com/webp/gallery/1.webp";
	return rv.promise();
}

function setBackground(webPSupport) {
	var wallpaper = bgs[Math.floor(Math.random() * bgs.length)];
	$("body").css("background-image", "url("+wallpaper+webPSupport+")");
}

$(document).ready(function () {
	hasWebP().then(function() {
		setBackground("webp");
	}, function() {
		setBackground("jpg");
	});

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
});