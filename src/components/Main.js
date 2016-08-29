require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Page from './Page';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="crm">
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
