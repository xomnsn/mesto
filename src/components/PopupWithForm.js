import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, handleFormSubmit, handleInitialValue = () => {}) {
    super(popupSelector);
    this._formEl = this._popup.querySelector('.pop-up__form');
    this._inputList = this._formEl.querySelectorAll('.pop-up__text-input');
    this._submitBtn = this._formEl.querySelector('.pop-up__submit');
    this._submitBtnText = this._submitBtn.textContent;
    this._handleFormSubmit = handleFormSubmit;
    this._handleInitialValue = handleInitialValue;
    this._handleSubmit = this._handleSubmit.bind(this);
    this._restoreBtnText = this._restoreBtnText.bind(this);
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  _restoreBtnText() {
    this._submitBtn.textContent = this._submitBtnText;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitBtn.textContent = "Сохранение..."
    this._handleFormSubmit(this._getInputValues(), this._restoreBtnText);
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
