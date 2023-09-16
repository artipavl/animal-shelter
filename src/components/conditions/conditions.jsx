import React from 'react';
import css from './conditions.module.scss';
import Image1 from 'assets/conditions/1.png';
import Image2 from 'assets/conditions/2.png';
import Image3 from 'assets/conditions/3.png';

const Conditions = () => {
  return (
    <section>
      <div className={'container ' + css.Conditions}>
        <h2 className={css.ConditionsTitle}>Наші умови</h2>
        <ul className={css.ConditionsList}>
          <li className={css.ConditionsItem}>
            <div>
              <h3 className={css.ConditionsItemTitle}>Лише власник</h3>
              <p className={css.ConditionsItemText}>
                Собаку чи кота віддаємо лише в руки майбутньому власнику{' '}
              </p>
            </div>

            <img className={css.ConditionsItemImg} src={Image3} alt="Пес" />
          </li>
          <li className={css.ConditionsItem}>
            <div>
              <h3 className={css.ConditionsItemTitle}>Тварина для сім'ї</h3>
              <p className={css.ConditionsItemText}>
                Творинки не для утримання на ланцюгу, охорони підприєства чи
                самовигулу
              </p>
            </div>
            <img className={css.ConditionsItemImg} src={Image2} alt="Пес" />
          </li>
          <li className={css.ConditionsItem}>
            <div>
              <h3 className={css.ConditionsItemTitle}>Відповідальність</h3>
              <p className={css.ConditionsItemText}>
                Не забирайте тварину з притулку, якщо не готові про неї
                піклуватись
              </p>
            </div>
            <img className={css.ConditionsItemImg} src={Image1} alt="Пес" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Conditions;
