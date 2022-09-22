import React, { Component } from 'react';

// import * as actions from '../actions/index';

import MultipleBy from './MultipleBy';
import Foods from './Foods';

import '../styles/bottom.css';
import '../styles/foods.css';

class Bottom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      multipleBy: 1
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="bottom">
        <div className="bottom-wrapper">
          <MultipleBy />
          <Foods totalMoney={this.props.totalMoney} />
        </div>
      </div>
    );
  }
}

export default Bottom;