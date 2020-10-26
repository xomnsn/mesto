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
  const placeTemplate = page.querySelector('#place-template').content;

  const viewImagePopup = page.querySelector('.pop-up_func_img-view');
  const viewImageCLoseBtn = viewImagePopup.querySelector('.pop-up__close-button');
  const viewImagePicture = viewImagePopup.querySelector('.image-view__image');
  const viewImageCaption = viewImagePopup.querySelector('.image-view__caption');


  function createPlace(title, imgSrc) {
    const newPlace = placeTemplate.cloneNode(true);
    const placeTitle = newPlace.querySelector('.place__title');
    const placeImg = newPlace.querySelector('.place__picture');
    const likeBtn = newPlace.querySelector('.place__like-button');
    const deleteBtn = newPlace.querySelector('.place__delete-button');
    const picture = newPlace.querySelector('.place__picture');

    likeBtn.addEventListener('click', toggleLike);
    deleteBtn.addEventListener('click', removePlace);
    picture.addEventListener('click', viewImage);

    placeTitle.textContent = title;
    placeImg.src = imgSrc;
    placeImg.alt = title;

    return newPlace;
  }

  function addPlace(newPlace) {
    places.prepend(newPlace);
  }

  function openPopup(popup) {
    popup.classList.add('pop-up_opened');
  }

  function closePopup(popup) {
    popup.classList.remove('pop-up_opened');
  }

  function editUserSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = editUserNameInput.value;
    profileDescription.textContent = editUserDescriptionInput.value;
  }

  function addPlaceSubmitHandler (evt) {
    evt.preventDefault();
    const newPlace = createPlace(addPlaceTitleInput.value, addPlaceSrcInput.value);
    addPlace(newPlace);
  }

  function toggleLike (evt) {
    evt.target.classList.toggle('place__like-button_liked');
  }

  function removePlace (evt) {
    const card = evt.target.closest('.place');
    card.remove();
  }

  function viewImage (evt) {
    const image = evt.target;
    const place = image.closest('.place');
    const title = place.querySelector('.place__title');

    viewImagePicture.src = image.src;
    viewImagePicture.alt = title.textContent;
    viewImageCaption.textContent = title.textContent;

    openPopup(viewImagePopup);
  }

  initialCards.forEach(place => {
    const newPlace = createPlace(place.name, place.link);
    addPlace(newPlace);
  });

  editUserBtn.addEventListener('click', function () {
    editUserNameInput.value = profileName.textContent;
    editUserDescriptionInput.value = profileDescription.textContent;
    openPopup(editUserPopup);
  });

  editUserCLoseBtn.addEventListener('click', function () {
    closePopup(editUserPopup);
  });

  editUserForm.addEventListener('submit', function (evt) {
    editUserSubmitHandler(evt);
    closePopup(editUserPopup);
  });

  addPlaceBtn.addEventListener('click', function () {
    addPlaceTitleInput.value = '';
    addPlaceSrcInput.value = '';
    openPopup(addPlacePopup);
  });

  addPlaceCLoseBtn.addEventListener('click', function () {
    closePopup(addPlacePopup);
  });

  addPlaceForm.addEventListener('submit', function (evt) {
    addPlaceSubmitHandler(evt);
    closePopup(addPlacePopup);
  });

  viewImageCLoseBtn.addEventListener('click', function () {
    closePopup(viewImagePopup);
  });
