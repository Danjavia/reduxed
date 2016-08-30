require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const GiftTemp = ({gifs}) => {
  const giftItems = gifs.map((gif) => {
    return (
      <li key={gif.id}><img src={gif.url} alt=""/></li>
    );
  });

  return (
    <ul className="list">{giftItems}</ul>
  );
}

export default GiftTemp;
