export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._src = data.link;
    this._cardSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._element = null;
    this._titleEl = null;
    this._pictureEl = null;
    this._likeBtnEl = null;
    this._deleteBtnEl = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);
  }

  _getElements(card) {
    this._titleEl = card.querySelector('.place__title');
    this._pictureEl = card.querySelector('.place__picture');
    this._likeBtnEl = card.querySelector('.place__like-button');
    this._deleteBtnEl = card.querySelector('.place__delete-button');
  }

  _toggleLike (evt) {
    evt.target.classList.toggle('place__like-button_liked');
  }

  _removePlace (evt) {
    const card = evt.target.closest('.place');
    card.remove();
  }

  _setEventListeners() {
    this._likeBtnEl.addEventListener('click', this._toggleLike);
    this._deleteBtnEl.addEventListener('click', this._removePlace);
    this._pictureEl.addEventListener('click', () => this._handleCardClick(this._name, this._src));
  }

  generateCard() {
    this._element = this._getTemplate();
    this._getElements(this._element);

    this._titleEl.textContent = this._name;
    this._pictureEl.src = this._src;
    this._pictureEl.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
