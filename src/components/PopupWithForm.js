import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleFormSubmit, handleInitialValue) {
    super(popupSelector);
    this._formEl = this._popup.querySelector('.pop-up__form')
    this._handleFormSubmit = handleFormSubmit;
    this._handleInitialValue = handleInitialValue;
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._formEl.querySelectorAll('.pop-up__text-input');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  _handleSubmit(evt) {
    this._handleFormSubmit(evt, this._getInputValues());
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._formEl.removeEventListener('submit', this._handleSubmit);
  }

  setEventListeners() {
    super.setEventListeners();
    this._formEl.addEventListener('submit', this._handleSubmit);
  }

  open() {
    this._handleInitialValue(this._formEl);
    super.open();
  }
}
