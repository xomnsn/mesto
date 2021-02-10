import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._pictureEl = this._popup.querySelector('.image-view__image');
    this._titleEl = this._popup.querySelector('.image-view__caption');
  }

  open(title, imgSrc) {
    this._pictureEl.src = imgSrc;
    this._pictureEl.alt = title;
    this._titleEl.textContent = title;
    super.open();
  }
}
