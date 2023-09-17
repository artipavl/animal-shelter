import React from 'react';
import css from './friend.module.scss';
import Button from 'components/button/button';
import AnimalCard from 'components/animalCard/animalCard';

const Friend = () => {
  return (
    <section>
      <div className={'container ' + css.Friend}>
        <h2 className={css.FriendTitle}>Як допомогти</h2>
        <h3 className={css.FriendSubTitle}>
          Не купуй – прихисти, адже справжня дружба не продається!
        </h3>
        <div className={css.FriendBox}>
          <ul className={css.FriendList}>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
            <li>
              <AnimalCard />
            </li>
          </ul>
        </div>
        <Button title={'Показати більше'} />
      </div>
    </section>
  );
};

export default Friend;
