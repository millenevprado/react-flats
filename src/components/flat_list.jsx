import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    props.flats.map(flat => <Flat name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} key={flat.name} />)
  );
};

export default FlatList;
