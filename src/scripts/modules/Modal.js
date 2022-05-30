import modalHTML from './ModalHTML';

export default class Modal {
  static modalHTML = modalHTML;

  constructor() {
    this.init();
  }

  init() {
    this.addModalToDOM();
    this.selectElements();
    this.setListeners();
  }

  addModalToDOM() {
    this.modal = document.createElement('div');
    this.modal.innerHTML = Modal.modalHTML;
    document.body.appendChild(this.modal);
  }

  selectElements() {
    this.openButton = document.querySelector('#modal-open');
    this.closeButton = this.modal.querySelector('#modal-close');
    this.submitButton = this.modal.querySelector('#modal-confirm');
    this.backdropElement = this.modal.querySelector('#modal-backdrop');
  }

  openModal() {
    this.modal.children[0].dataset.active = 'true';
  }

  closeModal() {
    this.modal.children[0].dataset.active = 'false';
  }

  setListeners() {
    this.openButton.addEventListener('click', () => this.openModal());
    this.closeButton.addEventListener('click', () => this.closeModal());
    this.backdropElement.addEventListener('click', () => this.closeModal());
    this.submitButton.addEventListener('submit', e => {
      e.preventDefault();
      alert('Dziękujemy za zamówienie! Zadzwonimy do Ciebie wkrótce!');
      this.closeModal();
    });
  }
}
