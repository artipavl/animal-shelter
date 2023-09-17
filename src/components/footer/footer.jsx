import React from 'react';
import css from './footer.module.scss';
import Logo from 'components/logo/logo';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <div className={'container ' + css.FooterContainer}>
        <div className={css.FooterLogoPosition}>
          <Logo />
          <div className={css.FooterSocial}>
            <p className={css.FooterSocialTitle}>
              Приєднутесь до нас в соціальних мережах
            </p>
            <ul className={css.FooterSocialList}>
              <li>
                <a className={css.FooterSocialLink} href="/">
                  <BsFacebook size={32} />
                </a>
              </li>
              <li>
                <a className={css.FooterSocialLink} href="/">
                  <RiInstagramFill size={32} />
                </a>
              </li>
              <li>
                <a className={css.FooterSocialLink} href="/">
                  <BsTelegram size={32} />
                </a>
              </li>
            </ul>
          </div>
          <ul className={css.FooterLinkList}>
            <li>
              <p className={css.FooterP}>Допомогти матеріально:</p>
            </li>
            <li>
              <p className={css.FooterP}>ГО “ХАТИНА”</p>
            </li>
            <li>
              <p className={css.FooterP}>ЄДРПОУ: 123456789</p>
            </li>
            <li>
              <p className={css.FooterP}>Карта Приватбанку</p>
            </li>
            <li>
              <p className={css.FooterP}>4141 2929 4646 1111</p>
            </li>
            <li>
              <p className={css.FooterP}>Прокопів Петро Павлович</p>
            </li>
          </ul>
        </div>
        <div className={css.FooterLinkPosition}>
          <ul className={css.FooterLinkList}>
            <li>
              <a className={css.FooterLink} href="/">
                Про нас
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Наші умови
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Наша команда
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Історія створення
              </a>
            </li>
          </ul>
          <ul className={css.FooterLinkList}>
            <li>
              <a className={css.FooterLink} href="/">
                Вірні друзі
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Обрати друга
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Щасливчики
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Стати волонтером
              </a>
            </li>
          </ul>
          <ul className={css.FooterLinkList}>
            <li>
              <a className={css.FooterLink} href="/">
                Локаця
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Контакти
              </a>
            </li>
            <li>
              <a className={css.FooterLink} href="/">
                Інормація
              </a>
            </li>
          </ul>
          <ul className={css.FooterLinkList}>
            <li>
              <p className={css.FooterP}>Допомогти матеріально:</p>
            </li>
            <li>
              <p className={css.FooterP}>ГО “ХАТИНА”</p>
            </li>
            <li>
              <p className={css.FooterP}>ЄДРПОУ: 123456789</p>
            </li>
            <li>
              <p className={css.FooterP}>Карта Приватбанку</p>
            </li>
            <li>
              <p className={css.FooterP}>4141 2929 4646 1111</p>
            </li>
            <li>
              <p className={css.FooterP}>Прокопів Петро Павлович</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={'container ' + css.FooterGuard}>
        <center>
          <p>Всі права захищено reserved@hatyna.ua</p>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
