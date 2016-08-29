require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Page from '../Page';

class CrmComponent extends React.Component {
  render() {
    return (
      <Page heading="crm">
        <h1>This code include the CRM data</h1>
      </Page>
    );
  }
}

CrmComponent.defaultProps = {
};

export default CrmComponent;
