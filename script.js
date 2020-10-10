const page = document.querySelector('.page')
const editBtn = page.querySelector('.profile__edit-button');
const profileName = page.querySelector('.profile__name');
const profileDescription = page.querySelector('.profile__description');
const popup = page.querySelector('.pop-up');
const popupCloseBtn = popup.querySelector('.pop-up__close-button');
const form = popup.querySelector('.pop-up__form');
const popupNameInput = form.querySelector('.pop-up__name');
const popupDescriptionInput = form.querySelector('.pop-up__description');

function onEditBtn() {
  popupNameInput.value = profileName.textContent;
  popupDescriptionInput.value = profileDescription.textContent;
  popup.classList.add('pop-up_opened');
}

function onCloseBtn() {
  popup.classList.remove('pop-up_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescription.textContent = popupDescriptionInput.value;
  onCloseBtn();
}

editBtn.addEventListener('click', onEditBtn);
popupCloseBtn.addEventListener('click', onCloseBtn);
form.addEventListener('submit', formSubmitHandler);
