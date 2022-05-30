export default class ResizeAnimationStopper {
  constructor() {
    this.resizeTimer;
    this.init();
  }

  init() {
    this.setListener();
  }

  setListener() {
    window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 400);
    });
  }
}

// let resizeTimer;
// window.addEventListener('resize', () => {
//   document.body.classList.add('resize-animation-stopper');
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove('resize-animation-stopper');
//   }, 400);
// });
