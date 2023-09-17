import React from 'react';
import css from './backgraund.module.scss';

const red = 'var(--red-40-bg, rgba(239, 57, 89, 0.40))';
const blue = 'var(--blue-40-bg, rgba(74, 134, 255, 0.4))';

const Backgraund = () => {
  return (
    <>
      {/* <div className={css.One}></div>
       */}
      <Pinc color={blue} position={{ top: 0, left: 0 }} />
      <Pinc color={red} position={{ top: '400px', right: 0 }} />
      <Pinc color={blue} position={{ top: '300px', left: ' 50%' }} />
      <Pinc color={blue} position={{ top: '1300px', right: 0 }} />
      <Pinc color={red} position={{ top: '1200px', left: 0 }} />
      <Pinc color={red} position={{ top: '2300px', right: 0 }} />
      <Pinc color={blue} position={{ top: '2200px', left: 0 }} />
      <Pinc color={blue} position={{ top: '3300px', right: 0 }} />
      <Pinc color={red} position={{ top: '3200px', left: 0 }} />
      <Pinc color={red} position={{ top: '4300px', right: 0 }} />
      <Pinc color={blue} position={{ top: '4200px', left: 0 }} />
      <Pinc color={blue} position={{ top: '5300px', right: 0 }} />
      <Pinc color={red} position={{ top: '5200px', left: 0 }} />
      <Pinc color={red} position={{ top: '6300px', right: 0 }} />
      <Pinc color={blue} position={{ top: '6200px', left: 0 }} />
    </>
  );
};

export default Backgraund;

const Pinc = ({ color, position }) => {
  return (
    <div
      style={{
        background: color,

        ...position,
      }}
      className={css.Pinc}
    ></div>
  );
};
