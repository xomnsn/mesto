export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector('.pop-up__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleBtnClose = this._handleBtnClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleBtnClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('pop-up')) {
      this.close();
    }
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._closeBtn.removeEventListener('click', this._handleBtnClose);
    this._popup.removeEventListener('click', this._handleOverlayClose);
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._closeBtn.addEventListener('click', this._handleBtnClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
  }

  open() {
    this.setEventListeners();
    this._popup.classList.add('pop-up_opened');
  }

  close() {
    this._popup.classList.remove('pop-up_opened');
    this._removeEventListeners();
  }
}
