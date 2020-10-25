const initialCards = [
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

const page = document.querySelector('.page')
const editUserBtn = page.querySelector('.profile__edit-button');
const addPlaceBtn = page.querySelector('.profile__add-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');

const editUserPopup = page.querySelector('.pop-up_func_edit');
const editUserCLoseBtn = editUserPopup.querySelector('.pop-up__close-button');
const editUserForm = editUserPopup.querySelector('.pop-up__form');
const editUserNameInput = editUserForm.querySelector('.pop-up__text-input_type_name');
const editUserDescriptionInput = editUserForm.querySelector('.pop-up__text-input_type_description');

const addPlacePopup = page.querySelector('.pop-up_func_add');
const addPlaceCLoseBtn = addPlacePopup.querySelector('.pop-up__close-button');
const addPlaceForm = addPlacePopup.querySelector('.pop-up__form');
const addPlaceTitleInput = addPlacePopup.querySelector('.pop-up__text-input_type_title');
const addPlaceSrcInput = addPlacePopup.querySelector('.pop-up__text-input_type_src');

const places = page.querySelector('.places__elements');
const placeTemplate = places.querySelector('#place-template').content;


function addPlace(title, imgSrc) {
  const newPlace = placeTemplate.cloneNode(true);
  const placeTitle = newPlace.querySelector('.place__title');
  const placeImg = newPlace.querySelector('.place__picture');

  placeTitle.textContent = title;
  placeImg.src = imgSrc;
  placeImg.alt = title;

  places.prepend(newPlace);
}

function onEditBtn() {
  editUserNameInput.value = profileName.textContent;
  editUserDescriptionInput.value = profileDescription.textContent;
  editUserPopup.classList.add('pop-up_opened');
}

function onAddBtn() {
  addPlacePopup.classList.add('pop-up_opened');
}

function onClosePopup(evt) {
  const popup = evt.target.closest('.pop-up')
  popup.classList.remove('pop-up_opened');
}

function editUserSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = editUserNameInput.value;
  profileDescription.textContent = editUserDescriptionInput.value;
  onClosePopup(evt);
}

function addPlaceSubmitHandler (evt) {
  evt.preventDefault();
  addPlace(addPlaceTitleInput.value, addPlaceSrcInput.value);
  onClosePopup(evt);
}

initialCards.forEach(place => addPlace(place.name, place.link));

editUserBtn.addEventListener('click', onEditBtn);
editUserCLoseBtn.addEventListener('click', onClosePopup);
editUserForm.addEventListener('submit', editUserSubmitHandler);

addPlaceBtn.addEventListener('click', onAddBtn);
addPlaceCLoseBtn.addEventListener('click', onClosePopup);
addPlaceForm.addEventListener('submit', addPlaceSubmitHandler);
