const modalHTML = `<div class="modal" data-active="false">
  <div class="modal__container">
    <div class="modal__close" id="modal-close"></div>
    <h2 class="modal__heading">
      <small>Zamów <em class="yellow-accent">dziś!</em></small>
    </h2>
    <p class="modal__text">Wybierz pizzę i dostawę.</p>
    <div class="modal__form">
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
        <label class="modal__label" for="modal-delivery"> Dostawa </label>
        <select class="modal__select" id="modal-delivery" required>
          <option value="dostawa">Dostawa (płatność za pobraniem)</option>
          <option value="na-miejscu">Na miejscu</option>
        </select>
      </div>
      <div class="modal__form-group">
        <label class="modal__label" for="modal-name" required> Imię i nazwisko </label>
        <input
          class="modal__input"
          type="text"
          id="modal-full-name"
          placeholder="Imię i nazwisko"
        />
      </div>
      <div class="modal__form-grid">
        <div class="modal__form-group">
          <label class="modal__label" for="modal-street" required> Ulica </label>
          <input class="modal__input" type="text" id="modal-street" placeholder="Ulica" />
        </div>
        <div class="modal__form-group">
          <label class="modal__label" for="modal-house" required> Nr domu </label>
          <input class="modal__input" type="text" id="modal-house" placeholder="Nr domu" />
        </div>
        <div class="modal__form-group">
          <label class="modal__label" for="modal-flat"> Nr mieszkania </label>
          <input class="modal__input" type="text" id="modal-flat" placeholder="Nr mieszkania" />
        </div>
      </div>
      <div class="modal__form-grid">
        <div class="modal__form-group">
          <label class="modal__label" for="modal-code" required> Kod pocztowy </label>
          <input class="modal__input" type="text" id="modal-code" placeholder="Kod pocztowy" />
        </div>
        <div class="modal__form-group">
          <label class="modal__label" for="modal-city" required> Miasto </label>
          <input class="modal__input" type="text" id="modal-city" placeholder="Miasto" />
        </div>
      </div>
      <div class="modal__form-group">
        <label class="modal__label" for="modal-phone" required> Telefon </label>
        <input class="modal__input" type="tel" id="modal-phone" placeholder="Telefon" />
      </div>
      <input type="submit" class="button button--form" id="modal-confirm" value="Potwierdź">
    </div>
  </div>
</div>`;
const modal = document.createElement("div");
modal.innerHTML = modalHTML;
document.body.appendChild(modal);
const openButton = document.querySelector("#modal-open");
const closeButton = modal.querySelector("#modal-close");
const submitButton = modal.querySelector("#modal-confirm");
const openModal = ()=>{
    modal.children[0].dataset.active = "true";
};
const closeModal = ()=>{
    modal.children[0].dataset.active = "false";
};
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("submit", closeModal);

//# sourceMappingURL=index.90050791.js.map
