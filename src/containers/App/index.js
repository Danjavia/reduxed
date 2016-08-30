import React from 'react';
import GifsTemp from '../../components/Home';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps)(App);
