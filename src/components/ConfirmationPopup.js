import Popup from "./Popup.js";

export default class ConfirmationPopup extends Popup{
  constructor(popupSelector, confirmationHandler = () => {}) {
    super(popupSelector);
    this._button = this._popup.querySelector('.pop-up__submit');
    this._confirmationHandler = confirmationHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', this._confirmationHandler);
  }

  changeHandler(handler) {
    this._button.removeEventListener('click', this._confirmationHandler);
    this._confirmationHandler = handler;
    this._button.addEventListener('click', this._confirmationHandler);
  }
}
