import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor({ imgSrc, title }, popupSelector) {
    super(popupSelector);
    this._pictureEl = this._popup.querySelector(popupSelector + '__image');
    this._titleEl = this._popup.querySelector(popupSelector + '__caption');
    this._imgSrc = imgSrc;
    this._title = title;
  }

  open() {
    this._pictureEl.src = this._imgSrc;
    this._pictureEl.alt = this._title;
    this._titleEl.textContent = this._title;
    super.open();
  }

  close() {
    this._pictureEl.src = '';
    this._pictureEl.alt = '';
    this._titleEl.textContent = '';
    super.close();
  }
}
