import React from 'react';

import css from './hero.module.scss';

import dog from 'assets/dog.png';

const Hero = () => {
  return (
    <section>
      <div className={'container ' + css.Hero}>
        <h1 className={css.HeroTitle}>
          Цим оченятам дуже потрібні любов і турбота
        </h1>
        <p className={css.HeroSubTitle}>
          Вірний друг радітиме тобі завжди. Йому потрібно дуже мало - теплий дім
          та дбайливий господар
        </p>
        <img className={css.HeroImage} src={dog} alt="Собака" />
        <button className={css.HeroButton} type="button">
          Обрати
        </button>
      </div>
    </section>
  );
};

export default Hero;
