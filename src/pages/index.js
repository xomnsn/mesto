import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import {
  INITIAL_CARDS,
  VALIDATION_CONFIG,
  placeTemplateSelector,
  cardContainerSelector,
  profileNameSelector,
  profileBioSelector,
  editUserBtnSelector,
  addPlaceBtnSelector,
  imagePopupSelector,
  editUserPopupSelector,
  addCardPopupSelector,
  editUserNameInputSelector,
  editUserBioInputSelector
} from "../utils/constants.js";

import './index.css';

function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    }}, placeTemplateSelector);
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
const addPlaceBtn = document.querySelector(addPlaceBtnSelector);
const editUserNameInput = document.querySelector(editUserNameInputSelector);
const editUserBioInput = document.querySelector(editUserBioInputSelector);

const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  bioSelector: profileBioSelector
});
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
popupWithImage.setEventListeners();
addCardPopup.setEventListeners();

editUserBtn.addEventListener('click', () => {
  editInfoPopup.open();
});

addPlaceBtn.addEventListener('click', () => {
  addCardPopup.open();
})

enableValidation(VALIDATION_CONFIG);
