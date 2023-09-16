import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import css from './header.module.scss';
import Logo from 'components/logo/logo';
import ButtonHelp from 'components/buttonHelp/buttonHelp';
import Language from 'components/language/language';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className={css.Header}>
      <div className={'container ' + css.HeaderContainer}>
        <Logo variable />
        <div className={css.NavBox}>
          <nav className={isMenu ? css.Nav + ' ' + css.NavOpen : css.Nav}>
            <ul className={css.NavList}>
              <li>
                <a href="/" className={css.NavLink + ' ' + css.NavLinkActive}>
                  Домашня
                </a>
              </li>
              <li>
                <a href="/" className={css.NavLink}>
                  Про нас
                </a>
              </li>
              <li>
                <a href="/" className={css.NavLink}>
                  Вірні друзі
                </a>
              </li>
              <li>
                <a href="/" className={css.NavLink}>
                  Наші умови
                </a>
              </li>
              <li>
                <a href="/" className={css.NavLink}>
                  Локація
                </a>
              </li>
              <li>
                <a href="/" className={css.NavLink}>
                  Контакти
                </a>
              </li>
              <li>
                <Language />
              </li>
            </ul>
          </nav>
          <div className="mobailNone">
            <Language />
          </div>
          <ButtonHelp />
          <button
            className={css.MenuButton}
            type="button"
            onClick={() => setIsMenu(state => !state)}
          >
            {isMenu ? (
              <IoClose size={40} fill="#ef3959" />
            ) : (
              <RxHamburgerMenu size={40} fill="inherit" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
