export default class Card {
  constructor({ data, handleLikeClick, handleCardClick, handleDeleteClick }, templateSelector) {
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._name = data.name;
    this._src = data.link;
    this._likes = data.likes;
    this._cardSelector = templateSelector;
    this._handleLikeClick = handleLikeClick;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._removeCard = this._removeCard.bind(this);
    this._updateLikes = this._updateLikes.bind(this);
    this._toggleLike = this._toggleLike.bind(this);

    this._element = null;
    this._titleEl = null;
    this._pictureEl = null;
    this._likeBtnEl = null;
    this._likeCountEl = null;
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
    this._likeCountEl = card.querySelector('.place__like-count');
    this._deleteBtnEl = card.querySelector('.place__delete-button');
  }

  _toggleLike() {
    this._likeBtnEl.classList.toggle('place__like-button_liked');
  }

  _updateLikes(likes) {
    this._likes = likes;
    this._likeCountEl.textContent = this._likes.length;
  }

  _removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeBtnEl.addEventListener('click', () => this._handleLikeClick(
      this._id,
      this._likes,
      this._updateLikes,
      this._toggleLike));
    this._deleteBtnEl.addEventListener('click', () => this._handleDeleteClick(this._id, this._removeCard));
    this._pictureEl.addEventListener('click', () => this._handleCardClick(this._name, this._src));
  }

  generateCard(currentUserId = '') {
    this._element = this._getTemplate();
    this._getElements(this._element);

    this._titleEl.textContent = this._name;
    this._pictureEl.src = this._src;
    this._pictureEl.alt = this._name;
    this._likeCountEl.textContent = this._likes.length;

    if (currentUserId !== this._ownerId) {
      this._deleteBtnEl.remove();
    }

    if (this._likes.map(user => user._id).includes(currentUserId)) {
      this._toggleLike();
    }

    this._setEventListeners();

    return this._element;
  }
}
