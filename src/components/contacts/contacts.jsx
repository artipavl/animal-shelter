import React from 'react';
import css from './contacts.module.scss';
import Image from 'assets/contacts.png';

const Contacts = () => {
  return (
    <section>
      <div className={'container'}>
        <h2 className={css.ContactsTitle}>Наші контакти</h2>
        <div className={css.ContactsBox}>
          <div className={css.ContactsInformation}>
            <h3 className={css.ContactsInformationTitle}>
              У вас є питання? <br />
              Зв'яжіться з нами:
            </h3>
            <ul className={css.ContactsInformationList}>
              <li className={css.ContactsInformationItem}>
                <h4 className={css.ContactsInformationItemTitle}>Адреса</h4>
                <a className={css.ContactsInformationItemLink} href="/">
                  cмт. Жук
                  <br />
                  м. Івано-Франківська область
                </a>
              </li>
              <li className={css.ContactsInformationItem}>
                <h4 className={css.ContactsInformationItemTitle}>Телефон</h4>
                <div className={css.ContactsInformationItemLinkBox}>
                  <a
                    className={css.ContactsInformationItemLink}
                    href="tel::+380991234567"
                  >
                    +38 (099) 123 45 67
                  </a>
                  <a
                    className={css.ContactsInformationItemLink}
                    href="tel:+380881234567"
                  >
                    +38 (088) 123 45 67
                  </a>
                </div>
              </li>
              <li className={css.ContactsInformationItem}>
                <h4 className={css.ContactsInformationItemTitle}>
                  Електронна адреса
                </h4>
                <a
                  className={css.ContactsInformationItemLink}
                  href="mailto:hatyna@gmail.com"
                >
                  hatyna@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <img className={css.ContactsImage} src={Image} alt="Ми" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
