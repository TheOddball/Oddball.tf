import {animate} from 'animejs';

const wrapper = document.querySelector(".tiles");

let columns = 0,
    rows = 0,
    avatarClicks = 0;

const createTile = () => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map(() => {
        wrapper.appendChild(createTile());
    });
}

const createGrid = () => {
    wrapper.innerHTML = "";

    const size = document.body.clientWidth > 800 ? 60 : 30;

    columns = Math.floor(document.body.clientWidth / size);
    rows = Math.floor(document.body.clientHeight / size);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}

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

createGrid();

window.onresize = () => createGrid();
