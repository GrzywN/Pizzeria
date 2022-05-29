const modalHTML = `<div class="modal" data-active="false">
  <div class="modal__container">
    <div class="modal__close" id="modal-close"></div>
    <h2 class="modal__heading">
      <small>Zamów <em class="yellow-accent">dziś!</em></small>
    </h2>
    <p class="modal__text">Wybierz pizzę i podaj swój adres, aby cieszyć się pizzą już za chwilę w twoim domu!</p>
    <form class="modal__form" action="" method="get">
      <div class="modal__form-group">
        <label class="modal__label" for="modal-pizza"> Pizza </label>
        <select class="modal__select" id="modal-pizza" required>
          <option value="margarita">Margarita</option>
          <option value="hawai">Hawai</option>
          <option value="salami">Salami</option>
          <option value="capriciosa">Capriciosa</option>
          <option value="funghi">Funghi</option>
          <option value="quattro formaggi">Quattro formaggi</option>
        </select>
      </div>
      <div class="modal__form-group">
        <label class="modal__label" for="modal-name"> Imię i nazwisko </label>
        <input
          class="modal__input"
          type="text"
          id="modal-full-name"
          placeholder="Imię i nazwisko"
          required
        />
      </div>
      <div class="modal__form-grid">
        <div class="modal__form-group">
          <label class="modal__label" for="modal-street"> Ulica </label>
          <input class="modal__input" type="text" id="modal-street" placeholder="Ulica" required />
        </div>
        <div class="modal__form-group">
          <label class="modal__label" for="modal-house"> Nr domu </label>
          <input class="modal__input" type="text" id="modal-house" placeholder="Nr domu" required />
        </div>
        <div class="modal__form-group">
          <label class="modal__label" for="modal-flat"> Nr mieszkania </label>
          <input class="modal__input" type="text" id="modal-flat" placeholder="Nr mieszkania" />
        </div>
      </div>
      <div class="modal__form-grid">
        <div class="modal__form-group">
          <label class="modal__label" for="modal-code"> Kod pocztowy </label>
          <input class="modal__input" type="text" id="modal-code" placeholder="Kod pocztowy" required />
        </div>
        <div class="modal__form-group">
          <label class="modal__label" for="modal-city"> Miasto </label>
          <input class="modal__input" type="text" id="modal-city" placeholder="Miasto" required />
        </div>
      </div>
      <div class="modal__form-group">
        <label class="modal__label" for="modal-phone"> Telefon </label>
        <input class="modal__input" type="text" id="modal-phone" placeholder="Telefon" required />
      </div>
      <input type="submit" class="button button--form" id="modal-confirm" value="Potwierdź">
    </form>
  </div>
</div>
<div class="modal__backdrop" id="modal-backdrop"></div>
`;
const modal = document.createElement("div");
modal.innerHTML = modalHTML;
document.body.appendChild(modal);
const openButton = document.querySelector("#modal-open");
const closeButton = modal.querySelector("#modal-close");
const submitButton = modal.querySelector("#modal-confirm");
const backdropElement = modal.querySelector("#modal-backdrop");
const openModal = ()=>{
    modal.children[0].dataset.active = "true";
};
const closeModal = ()=>{
    modal.children[0].dataset.active = "false";
};
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
backdropElement.addEventListener("click", closeModal);
submitButton.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Dzi\u0119kujemy za zam\xf3wienie! Zadzwonimy do Ciebie wkr\xf3tce!");
    closeModal();
});

//# sourceMappingURL=contact.90050791.js.map
