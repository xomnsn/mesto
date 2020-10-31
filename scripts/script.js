  const page = document.querySelector('.page')
  const editUserBtn = page.querySelector('.profile__edit-button');
  const addPlaceBtn = page.querySelector('.profile__add-button');
  const profileName = page.querySelector('.profile__name');
  const profileDescription = page.querySelector('.profile__description');

  const editUserPopup = page.querySelector('.pop-up_func_edit');
  const editUserForm = editUserPopup.querySelector('.pop-up__form');
  const editUserNameInput = editUserForm.querySelector('.pop-up__text-input_type_name');
  const editUserDescriptionInput = editUserForm.querySelector('.pop-up__text-input_type_description');

  const addPlacePopup = page.querySelector('.pop-up_func_add');
  const addPlaceForm = addPlacePopup.querySelector('.pop-up__form');
  const addPlaceTitleInput = addPlacePopup.querySelector('.pop-up__text-input_type_title');
  const addPlaceSrcInput = addPlacePopup.querySelector('.pop-up__text-input_type_src');

  const places = page.querySelector('.places__elements');
  const placeTemplate = page.querySelector('#place-template').content;

  const viewImagePopup = page.querySelector('.pop-up_func_img-view');
  const viewImagePicture = viewImagePopup.querySelector('.image-view__image');
  const viewImageCaption = viewImagePopup.querySelector('.image-view__caption');

  const popups = Array.from(document.querySelectorAll('.pop-up'));


  function createPlace(title, imgSrc) {
    const newPlace = placeTemplate.cloneNode(true);
    const placeTitle = newPlace.querySelector('.place__title');
    const placeImg = newPlace.querySelector('.place__picture');
    const likeBtn = newPlace.querySelector('.place__like-button');
    const deleteBtn = newPlace.querySelector('.place__delete-button');

    likeBtn.addEventListener('click', toggleLike);
    deleteBtn.addEventListener('click', removePlace);
    placeImg.addEventListener('click', () => viewImage(title, imgSrc));

    placeTitle.textContent = title;
    placeImg.src = imgSrc;
    placeImg.alt = title;

    return newPlace;
  }

  function addPlace(newPlace) {
    places.prepend(newPlace);
  }

  function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.pop-up_opened');
      closePopup(openedPopup);
    }
  }

  function openPopup(popup) {
    popup.classList.add('pop-up_opened');
    document.addEventListener('keydown', closePopupOnEsc);
  }

  function closePopup(popup) {
    popup.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', closePopupOnEsc);
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

  function viewImage (title, imgSrc) {
    viewImagePicture.src = imgSrc;
    viewImagePicture.alt = title;
    viewImageCaption.textContent = title;

    openPopup(viewImagePopup);
  }

  function setPopupListeners(popup) {
    const popupCLoseBtn = popup.querySelector('.pop-up__close-button')

    popup.addEventListener('click', function (evt) {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      }
    });

    popupCLoseBtn.addEventListener('click', function () {
      closePopup(popup);
    });
  }

  initialCards.forEach(place => {
    const newPlace = createPlace(place.name, place.link);
    addPlace(newPlace);
  });

  popups.forEach((popup) => setPopupListeners(popup));

  editUserBtn.addEventListener('click', function () {
    editUserNameInput.value = profileName.textContent;
    editUserDescriptionInput.value = profileDescription.textContent;
    openPopup(editUserPopup);
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

  addPlaceForm.addEventListener('submit', function (evt) {
    addPlaceSubmitHandler(evt);
    closePopup(addPlacePopup);
  });
