import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import ConfirmationPopup from "../components/ConfirmationPopup";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Avatar from "../components/Avatar.js";
import Section from "../components/Section.js";
import Api from "../components/Api";
import FormValidator from "../components/FormValidator.js";
import {
  INITIAL_CARDS,
  VALIDATION_CONFIG,
  placeTemplateSelector,
  cardContainerSelector,
  profileNameSelector,
  profileBioSelector,
  profilePictureSelector,
  editUserBtnSelector,
  editAvatarBtnSelector,
  addPlaceBtnSelector,
  imagePopupSelector,
  confirmDeletePopupSelector,
  editUserPopupSelector,
  editAvatarPopupSelector,
  addCardPopupSelector,
  editUserNameInputSelector,
  editUserBioInputSelector,
  editAvatarInputSelector,
  apiConfig
} from "../utils/constants.js";

import './index.css';

function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteClick: (card) => {
      confirmDeletePopup.changeHandler(() => {
        card.remove();
        confirmDeletePopup.close();
      });
      confirmDeletePopup.open();
    }
  }, placeTemplateSelector);
  return card.generateCard();
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const formValidator = new FormValidator(config, formElement);
    formValidator.enableValidation();
  });
}

const editUserBtn = document.querySelector(editUserBtnSelector);
const editAvatarBtn = document.querySelector(editAvatarBtnSelector);
const addPlaceBtn = document.querySelector(addPlaceBtnSelector);
const editUserNameInput = document.querySelector(editUserNameInputSelector);
const editUserBioInput = document.querySelector(editUserBioInputSelector);
const editAvatarInput = document.querySelector(editAvatarInputSelector);

const api = new Api(apiConfig);

const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  bioSelector: profileBioSelector
});
const avatar = new Avatar(profilePictureSelector);
const cardSection = new Section(
  {
    items: INITIAL_CARDS,
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    }
  },
  cardContainerSelector
);
const popupWithImage = new PopupWithImage(imagePopupSelector);
const confirmDeletePopup = new ConfirmationPopup(confirmDeletePopupSelector);
const editAvatarPopup = new PopupWithForm(
  editAvatarPopupSelector,
  (inputValues) => {
    avatar.setSrc(inputValues.link);
    editAvatarPopup.close();
  },
  () => {
    editAvatarInput.value = avatar.getSrc();
  }
);
const editInfoPopup = new PopupWithForm(
  editUserPopupSelector,
  (inputValues) => {
    userInfo.setUserInfo(inputValues);
    editInfoPopup.close();
  },
  () => {
    const info = userInfo.getUserInfo();
    editUserNameInput.value = info.name;
    editUserBioInput.value = info.bio;
  });
const addCardPopup = new PopupWithForm(
  addCardPopupSelector,
  (inputValues) => {
    const card = createCard(inputValues);
    cardSection.addItemAsFirst(card);
    addCardPopup.close();
  });

cardSection.renderItems();

editInfoPopup.setEventListeners();
editAvatarPopup.setEventListeners();
confirmDeletePopup.setEventListeners();
popupWithImage.setEventListeners();
addCardPopup.setEventListeners();

editUserBtn.addEventListener('click', () => {
  editInfoPopup.open();
});
editAvatarBtn.addEventListener('click', () => {
  editAvatarPopup.open();
});
addPlaceBtn.addEventListener('click', () => {
  addCardPopup.open();
});


enableValidation(VALIDATION_CONFIG);
