import React from 'react';

import css from './language.module.css';

const Language = () => {
  return (
    <div className={css.LanguageBox}>
      <select name="select" className={css.Language}>
        <option value="UA">UA</option>
        <option value="EN" selected>
          EN
        </option>
      </select>
    </div>
  );
};

export default Language;
