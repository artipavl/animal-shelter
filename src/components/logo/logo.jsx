import React from 'react';
import css from './logo.module.scss';
import logo from 'assets/Logo.png';

const Logo = ({ variable = false }) => {
  return (
    <a className={css.Logo} href="/">
      <img className={css.LogoImg} src={logo} alt="logo" />
      <div className={variable && css.LogoTitleBox}>
        <p className={css.LogoTitle}>ХАТИНА</p>
        <p className={css.LogoSubTitle}>притулок для тварин</p>
      </div>
    </a>
  );
};

export default Logo;
