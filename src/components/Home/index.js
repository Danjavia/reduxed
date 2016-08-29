require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router';

import Page from '../Page';

let yeomanImage = require('../../images/yeoman.png');

class HomeComponent extends React.Component {
  render() {
    return (
      <Page heading="home">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <h1>This is the home coders</h1>
        <Link to="/crm">Goto crn</Link>
      </Page>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
