import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.name}
          index={index}
          selected={flat.name === props.selectedFlat.name}
          selectFlat={props.selectFlat}
        />
      );
    })
  );
};

export default FlatList;
