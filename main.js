const toggleMenu = document.querySelector('.toggle__menu');
const navMenu = document.querySelector('.nav__menu');
const liElementList = document.querySelectorAll('.nav__menu li');

// toggle__menu's event click
function handleShowNavMenu() {
  navMenu.classList.toggle('show');
  toggleMenu.classList.toggle('fa-times');
  toggleMenu.classList.toggle('fa-bars');
  toggleMenu.classList.contains('fa-times') ? toggleMenu.style.color = 'white' : toggleMenu.style.color = 'black';
}

toggleMenu.addEventListener('click', handleShowNavMenu);

// remove class show when click on li;
liElementList.forEach(liElement => {
  liElement.addEventListener('click', () => {
    navMenu.classList.remove('show');
    toggleMenu.classList.remove('fa-times','fa-bars');
    toggleMenu.classList.add('fa-bars');
    toggleMenu.classList.contains('fa-times') ? toggleMenu.style.color = 'white' : toggleMenu.style.color = 'black';
  })
});


