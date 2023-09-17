import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import css from './animalCard.module.scss';

import Image from 'assets/enimal.png';

const AnimalCard = () => {
  return (
    <div className={css.AnimalCard}>
      <img className={css.AnimalCardImage} src={Image} alt="Тваринка" />
      <div className={css.AnimalCardInformBox}>
        <div className={css.AnimalCardInform}>
          <h4 className={css.AnimalCardName}>Дружок</h4>
          <p className={css.AnimalCardAge}>Вік 1 рік 3 місяці</p>
        </div>
        <a className={css.AnimalCardLink} href="/">
          <AiOutlineRight />
        </a>
      </div>
    </div>
  );
};

export default AnimalCard;
