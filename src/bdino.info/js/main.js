import anime from 'animejs'

const numberOfBackgrounds = 22;
const wallpaper = Math.floor(Math.random() * numberOfBackgrounds + 1);
const url = "./backgrounds/webp/bg" + wallpaper + ".webp";
document.querySelector('body').style.backgroundImage = "url(" + url + ")"

const animateAvatar = anime({
    targets: '.avatar',
    rotate: '1turn',
    duration: 2500,
    loop: 1,
    autoplay: false
})

document.querySelector('.avatar').onclick = animateAvatar.play

anime({
    targets: '.main',
    opacity: 1,
    top: '0',
    duration: 2500,
    easing: 'easeOutElastic(3, 1)'
})
