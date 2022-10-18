import anime from 'animejs'

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
