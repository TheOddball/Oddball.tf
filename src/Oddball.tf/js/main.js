import $ from 'jquery'
window.$ = window.jQuery = $
import anime from 'animejs'

const wrapper = document.getElementById("tiles");

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

createGrid();

window.onresize = () => createGrid();

jQuery(function () {
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
            "transition": "all .4s ease",
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