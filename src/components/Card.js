import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <figure className="gallery__item">
      <img onClick={handleClick} className="gallery__image" src={card.link} alt={card.name}/>
      <button className="gallery__button-delete" aria-label="удалить" type="button"></button>
      <figcaption className="gallery__caption">
        <p className="gallery__item-title">{card.name}</p>
        <div className="gallery__likes-container">
          <button aria-label="оценить" type="button" className="gallery__button-like"></button>
          <p className="gallery__likes-quantity">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card