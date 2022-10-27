import anime from 'animejs'

const wrapper = document.querySelector(".tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
    toggled = !toggled;

    document.body.classList.toggle("toggled");
}

const handleOnClick = index => {
    toggle();

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(25, {
            grid: [columns, rows],
            from: index
        })
    });
}

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.style.opacity = toggled ? 0 : 1;

    tile.onclick = () => handleOnClick(index);

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
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

const animateAvatar = anime({
    targets: '.avatar',
    rotate: '1turn',
    duration: 2200,
    loop: 1,
    autoplay: false
})

document.querySelector('.avatar').onclick = animateAvatar.play

anime({
    targets: '.main',
    opacity: 1,
    translateY: '0%',
    duration: 1500,
    easing: 'easeOutElastic(3, 1.2)'
})

createGrid();

window.onresize = () => createGrid();
