export default class Navigation {
  constructor({ nav, hamburger, backdrop }) {
    this.isMenuExpanded = false;
    this.nav = document.getElementById(nav);
    this.hamburger = document.getElementById(hamburger);
    this.backdrop = document.getElementById(backdrop);
    this.init();
  }

  init() {
    this.setListeners();
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
    this.hamburger.dataset.expanded = `${this.isMenuExpanded}`;
    this.hamburger.ariaExpanded = `${this.isMenuExpanded}`;
    this.nav.dataset.expanded = `${this.isMenuExpanded}`;
  }

  toggleMenuOn() {
    return this.isMenuExpanded ? this.toggleMenu() : null;
  }

  setListeners() {
    this.hamburger.addEventListener('click', () => this.toggleMenu());
    this.backdrop.addEventListener('click', () => this.toggleMenuOn());
  }
}
