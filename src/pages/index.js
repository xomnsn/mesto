import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import ConfirmationPopup from "../components/ConfirmationPopup";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api";
import FormValidator from "../components/FormValidator.js";
import {
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

function createCard(data, currentUserId) {
  const card = new Card({
    data: data,
    handleLikeClick: (cardId, likes, updateLikes, toggleLike) => {
      if (!likes.map(user => user._id).includes(currentUserId)) {
        api.likeCard(cardId)
          .then(card => {
            updateLikes(card.likes);
            toggleLike();
          })
          .catch(err => console.log(err + ' Не удалось поставить лайк.'));
      } else {
        api.unlikeCard(cardId)
          .then(card => {
            updateLikes(card.likes);
            toggleLike();
          })
          .catch(err => console.log(err + ' Не удалось снять лайк.'));
      }
    },
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleDeleteClick: (cardId, removeCard) => {
      confirmDeletePopup.changeHandler(() => {
        api.deleteCard(cardId)
          .then(() => {
            removeCard();
            confirmDeletePopup.close();
          })
          .catch(err => console.log(err + ' Не удалось удалить карточку.'));
      });
      confirmDeletePopup.open();
    }
  }, placeTemplateSelector);
  return card.generateCard(currentUserId);
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
const userInfo = new UserInfo({
  nameSelector: profileNameSelector,
  bioSelector: profileBioSelector,
  avatarSelector: profilePictureSelector,
});
const cardSection = new Section(
  {
    items: [],
    renderer: (item) => {
      const card = createCard(item, currentUserId);
      cardSection.addItem(card);
    }
  },
  cardContainerSelector
);
const popupWithImage = new PopupWithImage(imagePopupSelector);
const confirmDeletePopup = new ConfirmationPopup(confirmDeletePopupSelector);
const editAvatarPopup = new PopupWithForm(
  editAvatarPopupSelector,
  (inputValues, restoreBtnText) => {
    api.changeAvatar({ avatar: inputValues.link })
      .then((user) => {
        userInfo.setAvatarSrc(user.avatar);
        editAvatarPopup.close();
      })
      .catch(err => console.log(err + ' Не удалось обновить аватар.'))
      .finally(restoreBtnText);
  },
  () => {
    editAvatarInput.value = userInfo.getAvatarSrc();
  }
);
const editInfoPopup = new PopupWithForm(
  editUserPopupSelector,
  (inputValues, restoreBtnText) => {
    api.editUser(inputValues)
      .then(data => {
        userInfo.setUserInfo(data);
        editInfoPopup.close();
      })
      .catch(err => console.log(err + ' Не удалось изменить данные пользователя.'))
      .finally(restoreBtnText);
  },
  () => {
    const info = userInfo.getUserInfo();
    editUserNameInput.value = info.name;
    editUserBioInput.value = info.about;
  });
const addCardPopup = new PopupWithForm(
  addCardPopupSelector,
  (inputValues, restoreBtnText) => {
    api.addCard(inputValues)
      .then(data => {
        const card = createCard(data, currentUserId);
        cardSection.addItemAsFirst(card);
        addCardPopup.close();
      })
      .catch(err => console.log(err + ' Не удалось добавить карточку.'))
      .finally(restoreBtnText);
  });

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

const api = new Api(apiConfig);
let currentUserId;

const userDataPromise = api.getUser();
const initialCardsPromise = api.getInitialCards();

Promise.all([userDataPromise, initialCardsPromise])
  .then(res => {
    const userData = res[0];
    const cards = res[1];

    currentUserId = userData._id;

    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
    userInfo.setAvatarSrc(userData.avatar);

    cardSection.items = cards;
    cardSection.renderItems();
  })
  .catch(err => console.log(err));


enableValidation(VALIDATION_CONFIG);
