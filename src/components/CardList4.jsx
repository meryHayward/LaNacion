import React from 'react';
import Card from './Card';
import data4 from '../dataMockup';

const CardList4 = () => {
  const art4 = data4.slice(13, 15);
  return (
    <>
      {art4.map((item, i) => (
        <Card key={i} article={i} art={item} />
      ))}
    </>
  );
};

export default CardList4;
