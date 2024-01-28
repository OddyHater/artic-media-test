const menuButton = document.querySelector('.header__menu');
const menuCloseButton = document.querySelector('.menu__close-button')
const menuContainer = document.querySelector('.menu');

function handleMenuClick() {
  menuContainer.classList.add('menu_active');
}

function handleCloseClick() {
  menuContainer.classList.remove('menu_active')
}

export function addListeners() {
  menuButton.addEventListener('click', () => {
    handleMenuClick();
  });

  menuCloseButton.addEventListener('click', () => {
    handleCloseClick();
  })
}