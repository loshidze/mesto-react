import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonSubmit={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input" id="avatarlink" type="url" name="avatarlink" placeholder="Ссылка на картинку" required/>
          <span className="avatarlink-error popup__input-text-error"></span>
        </PopupWithForm>
        <PopupWithForm name={'profile'} title={'Редактировать профиль'} buttonSubmit={'Сохранить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input" id="contentname" type="text" name="contentname" placeholder="Имя" minlength="2" maxlength="40" required/>
          <span className="contentname-error popup__input-text-error"></span>
          <input className="popup__input" id="occupation" type="text" name="occupation" placeholder="Вид деятельности" minlength="2" maxlength="200" required/>
          <span className="occupation-error popup__input-text-error"></span>
        </PopupWithForm>
        <PopupWithForm name={'card'} title={'Новое место'} buttonSubmit={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input" id="cardname" type="text" name="cardname" placeholder="Название" minlength="2" maxlength="30" required/>
          <span className="cardname-error popup__input-text-error"></span>
          <input className="popup__input" id="link" type="url" name="link" placeholder="Ссылка на картинку" required/>
          <span className="link-error popup__input-text-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
    // <div className="page">
    //   <Header />
    //   <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
    //   <Footer />
    //   <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonSubmit={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
    //     <input className="popup__input" id="avatarlink" type="url" name="avatarlink" placeholder="Ссылка на картинку" required/>
    //     <span className="avatarlink-error popup__input-text-error"></span>
    //   </PopupWithForm>
    //   <PopupWithForm name={'profile'} title={'Редактировать профиль'} buttonSubmit={'Сохранить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
    //     <input className="popup__input" id="contentname" type="text" name="contentname" placeholder="Имя" minlength="2" maxlength="40" required/>
    //     <span className="contentname-error popup__input-text-error"></span>
    //     <input className="popup__input" id="occupation" type="text" name="occupation" placeholder="Вид деятельности" minlength="2" maxlength="200" required/>
    //     <span className="occupation-error popup__input-text-error"></span>
    //   </PopupWithForm>
    //   <PopupWithForm name={'card'} title={'Новое место'} buttonSubmit={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
    //     <input className="popup__input" id="cardname" type="text" name="cardname" placeholder="Название" minlength="2" maxlength="30" required/>
    //     <span className="cardname-error popup__input-text-error"></span>
    //     <input className="popup__input" id="link" type="url" name="link" placeholder="Ссылка на картинку" required/>
    //     <span className="link-error popup__input-text-error"></span>
    //   </PopupWithForm>
    //   <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    // </div>
  );
}

export default App;
