import React from 'react';
import Card from './Card';
import data1 from '../dataMockup';

const CardList1 = () => {
  const art1 = data1.slice(0, 3);
  return (
    <>
      {art1.map((item, i) => (
        <Card key={i} article={i} art={item} />
      ))}
    </>
  );
};

export default CardList1;
