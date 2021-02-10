export const INITIAL_CARDS = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const VALIDATION_CONFIG = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__text-input',
  submitButtonSelector: '.pop-up__submit',
  inactiveButtonClass: 'pop-up__submit_disabled',
  inputErrorClass: 'pop-up__text-input_invalid',
  errorClass: 'pop-up__input-error_active'
}


export const placeTemplateSelector = '#place-template';
export const cardContainerSelector = '.places__elements';
export const profileNameSelector = '.profile__name';
export const profileBioSelector = '.profile__description';
export const editUserBtnSelector = '.profile__edit-button';
export const addPlaceBtnSelector = '.profile__add-button';
export const imagePopupSelector = '.pop-up_func_img-view';
export const editUserPopupSelector = '.pop-up_func_edit';
export const addCardPopupSelector = '.pop-up_func_add';
export const editUserNameInputSelector = '.pop-up__text-input_type_name';
export const editUserBioInputSelector = '.pop-up__text-input_type_description';

