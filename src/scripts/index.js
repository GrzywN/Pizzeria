import Navigation from './modules/Navigation';
import Modal from './modules/Modal';
import ResizeAnimationStopper from './modules/ResizeAnimationStopper';
import LocationMap from './modules/LocationMap';
import ImageSlider from './modules/ImageSlider';

// Nawigacja
const navElements = { nav: 'nav', hamburger: 'hamburger', backdrop: 'backdrop' };
const nav = new Navigation(navElements);

// Modal
const modal = new Modal();

// ResizeAnimationStopper
const resizeAnimationStopper = new ResizeAnimationStopper();

// Mapa
if (document.getElementById('map') != null) {
  const markerCoordinates = [50.815347, 19.107427];
  const popupMessage = 'Pizzeria Karola';

  const locationMap = new LocationMap(markerCoordinates, popupMessage);
}

// Slider
if (document.getElementById('slider') != null) {
  const imageSlider = new ImageSlider();
}
