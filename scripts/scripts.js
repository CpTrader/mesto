const popupForm = document.querySelector('.popup__form');
const popupTitle = document.querySelector('.profile__name');
const popup = document.querySelector('.popup');
popupEditBtn = document.querySelector('.profile__edit-profile'),
popupClose = document.querySelector('.popup__close-btn'),
popupName = document.querySelector('.popup__input_name_name'),
popupProfession = document.querySelector('.popup__input_name_profession'),
popupSubtitle = document.querySelector('.profile__about');


function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = popupTitle.textContent;
    popupProfession.value = popupSubtitle.textContent;
};

function closePopup() {
    popup.classList.remove('popup_opened');
};



function formSubmitHandler(evt) {
    evt.preventDefault();
    popupTitle.textContent = popupName.value;
    popupSubtitle.textContent = popupProfession.value;
    closePopup();
};

popupForm.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', closePopup);
popupEditBtn.addEventListener('click', openPopup); 