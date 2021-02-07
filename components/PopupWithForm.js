import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.pop-up__form')
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.pop-up__text-input');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues())
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm());
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._submitForm());
  }

  close() {
    super.close();
    this._form.reset();
  }
}
