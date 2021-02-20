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
export const profilePictureSelector = '.profile__avatar';
export const editUserBtnSelector = '.profile__edit-user-info';
export const editAvatarBtnSelector = '.profile__edit-avatar';
export const addPlaceBtnSelector = '.profile__add-button';
export const imagePopupSelector = '.pop-up_func_img-view';
export const confirmDeletePopupSelector = '.pop-up_func_confirm';
export const editUserPopupSelector = '.pop-up_func_edit';
export const editAvatarPopupSelector = '.pop-up_func_edit-avatar';
export const addCardPopupSelector = '.pop-up_func_add';
export const editUserNameInputSelector = '.pop-up__text-input_type_name';
export const editUserBioInputSelector = '.pop-up__text-input_type_description';
export const editAvatarInputSelector = '.pop-up__text-input_type_avatar-src';

export const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/cards',
  token: '2d2f4b16-010b-47cb-9a21-aefcdcfade4d'
}
