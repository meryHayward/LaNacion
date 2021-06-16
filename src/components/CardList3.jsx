import React from 'react';
import Card from './Card';
import data3 from '../dataMockup';

const CardList3 = () => {
  const art3 = data3.slice(3, 5);

  return (
    <>
      {art3.map((item, i) => (
        <Card key={i} article={i} art={item} />
      ))}
    </>
  );
};

export default CardList3;
