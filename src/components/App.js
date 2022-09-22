import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
// import * as common_methods from '../services/common_methods';

import Top from './Top';
import Bottom from './Bottom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalMoney: 1
    }
  }

  componentDidMount() {
    // check if store is valid in local storage - and if so - insert to store
    // const gameData = localStorage.getItem('gameData');
    // if (gameData) {
    //   this.props.onRetrievedDataFromStorage(gameData);
    // }
  }

  componentWillUnmount() {
    // save to local storage current store
    // const gameData = this.props.state;
    // localStorage.setItem('gameData', gameData);
  }

  render() {
    return (
      <div className="container">

        <Top {...this.props} />

        <Bottom {...this.props} />
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
    totalMoney: state.totalMoney,
    assets: state.assets,
    rate: state.rate,
    foods: state.rate,
    multipleBy: state.rate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRetrievedDataFromStorage: (gameData) => dispatch(actions.retrievedDataFromStorage(gameData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);