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
  addCardPopupSelector
} from "../utils/constants.js";

function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: (cardData) => {
      const popup = new PopupWithImage(cardData, imagePopupSelector);
      popup.setEventListeners();
      popup.open();
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

cardSection.renderItems();

const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  bioSelector: profileBioSelector
});

editUserBtn.addEventListener('click', () => {
  const editInfoPopup = new PopupWithForm(
    editUserPopupSelector,
    (evt, inputValues) => {
      evt.preventDefault();
      userInfo.setUserInfo(inputValues);
      editInfoPopup.close();
    },
    (form) => {
      const info = userInfo.getUserInfo();
      const editUserNameInput = form.querySelector('.pop-up__text-input_type_name');
      const editUserBioInput = form.querySelector('.pop-up__text-input_type_description');
      editUserNameInput.value = info.name;
      editUserBioInput.value = info.bio;
    });
  editInfoPopup.open();
});

addPlaceBtn.addEventListener('click', () => {
  const addCardPopup = new PopupWithForm(
    addCardPopupSelector,
    (evt, inputValues) => {
      evt.preventDefault();
      const card = createCard(inputValues);
      cardSection.addItem(card);
      addCardPopup.close();
    },
    (form) => {
      form.reset();
    });
  addCardPopup.open();
})

enableValidation(VALIDATION_CONFIG);
