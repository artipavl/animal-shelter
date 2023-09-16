import React from 'react';
import css from './button.module.scss';

const Button = ({ title }) => {
  return <button className={css.Button} type="button">{title}</button>;
};

export default Button;
