import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleFormSubmit, handleInitialValue = () => {}) {
    super(popupSelector);
    this._formEl = this._popup.querySelector('.pop-up__form');
    this._inputList = this._formEl.querySelectorAll('.pop-up__text-input');
    this._handleFormSubmit = handleFormSubmit;
    this._handleInitialValue = handleInitialValue;
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._formEl.addEventListener('submit', this._handleSubmit);
  }

  open() {
    this._handleInitialValue();
    super.open();
  }

  close() {
    this._formEl.reset();
    super.close();
  }
}
