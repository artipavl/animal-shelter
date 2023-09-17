import React from 'react';
import css from './help.module.scss';

const Help = () => {
  return (
    <section>
      <div className={'container'}>
        <h2 className={css.HelpTitle}>Як допомогти</h2>
        <div className={css.HelpBox}>
          <h3 className={css.HelpBoxTitle}>Бажаєте допомогти притулку?</h3>
          <p className={css.HelpBoxText}>
            Перейдіть за посиланням та заповніть форму <br />
            Ми з вами обов’язково звяжемось
          </p>
          <a className={css.HelpBoxLink} href="/">
            Зв'яжіться з нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default Help;
