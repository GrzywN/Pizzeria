const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const backdrop = document.getElementById('backdrop');

let isMenuExpanded = false;

const toggleNavMenu = () => {
  isMenuExpanded = !isMenuExpanded;
  hamburger.dataset.expanded = `${isMenuExpanded}`;
  hamburger.ariaExpanded = `${isMenuExpanded}`;
  nav.dataset.expanded = `${isMenuExpanded}`;
};

const toggleMenuOn = () => {
  return isMenuExpanded ? toggleNavMenu() : null;
};

hamburger.addEventListener('click', toggleNavMenu);
backdrop.addEventListener('click', toggleMenuOn);

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});
