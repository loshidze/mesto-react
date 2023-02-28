import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getCards()])
      .then(([profileData, cards]) => {
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return(
    <main className="content">
        <section className="profile">
          <div className="profile__cover" onClick={onEditAvatar}><img className="profile__image" src={userAvatar} alt="аватарка"/></div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={onEditProfile} aria-label="редактировать профиль" type="button" className="profile__button-info"></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} aria-label="добавить картинку" type="button" className="profile__button-add"></button>
        </section>
        <section className="gallery" aria-label="галерея">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} />
          ))}

        </section>
      </main>
  )
}

export default Main