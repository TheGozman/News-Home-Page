const hamMenu = document.querySelector(`.hamburger`);
const closeMenu = document.querySelector(`.close`);
const nav = document.querySelector(`nav`);
const backdrop = document.querySelector(`.backdrop`);

/////////////////////////////////////////////////

const displayItems = () => {
    nav.classList.add(`open`);
    backdrop.classList.add(`open`);
}

const HideItems = () => {
    nav.classList.remove(`open`);
    backdrop.classList.remove(`open`);
}

hamMenu.addEventListener(`click`, () => {
    displayItems();
})

closeMenu.addEventListener(`click`, () => {
    HideItems();
})