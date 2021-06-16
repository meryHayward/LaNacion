import React from 'react';
import Card from './Card';
import data2 from '../dataMockup';

const CardList2 = () => {
  const art2 = data2.splice(-4, 1);
  return (
    <>
      {art2.map((item, i) => (
        <Card key={i} article={i} art={item} />
      ))}
    </>
  );
};

export default CardList2;
