import React from 'react';
import css from './location.module.scss';

const Location = () => {
  return (
    <section>
      <div className={'container ' + css.Location}>
        <h2 className={css.LocationTitle}>Локація</h2>
        <iframe
          className={css.LocationMap}
          title="google maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137835.85765316163!2d25.040989455274847!3d48.643793297047004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47312f38c20afcad%3A0xb6d896edea3f318a!2z0JbRg9C60L7Qsiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3ODA1Mw!5e0!3m2!1sru!2sua!4v1694884844798!5m2!1sru!2sua"
          //   width="100%"
          //   height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
