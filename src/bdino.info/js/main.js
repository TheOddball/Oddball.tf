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
const windowHeight = window.innerHeight
const mainHeight = document.querySelector('.main').offsetHeight
const top = (windowHeight - mainHeight) + "px"
console.log(top)
anime({
    targets: '.main',
    top: top,
    duration: 1250,
    easing: 'easeOutElastic(8, 4)'
})
