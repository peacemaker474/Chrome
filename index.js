const title = document.querySelector("#title");

const CLICKED_CLSSA = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLSSA);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();