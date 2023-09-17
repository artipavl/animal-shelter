import React, { useState } from 'react';

import css from './language.module.scss';

const Language = () => {
  const [language, setLanguage] = useState('UA');
  return (
    <div className={css.LanguageBox}>
      <select
        name="select"
        className={css.Language}
        value={language}
        onChange={e => setLanguage(e.target.value)}
      >
        <option value="UA">UA</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
};

export default Language;
