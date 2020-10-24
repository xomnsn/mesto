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

  onClosePopup(evt);
}

editUserBtn.addEventListener('click', onEditBtn);
editUserCLoseBtn.addEventListener('click', onClosePopup);
editUserForm.addEventListener('submit', editUserSubmitHandler);

addPlaceBtn.addEventListener('click', onAddBtn);
addPlaceCLoseBtn.addEventListener('click', onClosePopup);
addPlaceForm.addEventListener('submit', addPlaceSubmitHandler);
