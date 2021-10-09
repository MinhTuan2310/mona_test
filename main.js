const toggleMenu = document.querySelector('.toggle__menu');
const navMenu = document.querySelector('.nav__menu');

function handleShowNavMenu() {
  navMenu.classList.toggle('show');
  toggleMenu.classList.toggle('fa-times');
  toggleMenu.classList.toggle('fa-bars');

  toggleMenu.classList.contains('fa-times') ? toggleMenu.style.color = 'white' : toggleMenu.style.color = 'black';
}

toggleMenu.addEventListener('click', handleShowNavMenu);