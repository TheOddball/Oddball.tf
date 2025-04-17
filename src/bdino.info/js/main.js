import {animate} from 'animejs'

const numberOfBackgrounds = 22;
const wallpaper = Math.floor(Math.random() * numberOfBackgrounds + 1);
const url = "./backgrounds/webp/bg" + wallpaper + ".webp";
let avatarClicks = 0;
document.querySelector('body').style.backgroundImage = "url(" + url + ")"

const animateAvatar = animate('.avatar',{
    rotate: '1turn',
    duration: 1000,
    autoplay: false,
    ease: 'inOutElastic(.5, 1.6)'
})

const handleAvatarClick = () => {
    if (avatarClicks === 0){animateAvatar.play()}else{animateAvatar.restart()}
    avatarClicks++;
}
document.querySelector('.avatar').onclick = handleAvatarClick;

let link = document.querySelectorAll('.lnk');
for (let i of link) {
    i.addEventListener('mouseenter', () => {
        animate(i, {
            scale: 1.075,
            duration: 300,
        })
    });
    i.addEventListener('mouseleave', () => {
        animate(i, {
            scale: 1,
            duration: 300
        })
    });
}

animate('.main',{
    opacity: 1,
    translateY: '0%',
    duration: 1500,
    ease: 'outElastic(1, 1.2)'
})
