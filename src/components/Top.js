import React, { Component } from 'react';

import * as common_component  from '../services/common_methods';

import '../styles/top.css';

class Top extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const { totalMoney, rate, assets } = this.props;
    return (
      <div className="top">
        <div className="top-wrapper">
            
          <div className="top-main">
            <div className="top-main-wrapper">
              <img className="top-dollar-image" src={require(`../assets/dollar.png`)} alt="dollar bill" />
              <p className="top-main-wrapper-total">${common_component.abbreviateNumber(totalMoney)}</p>
            </div>
          </div>

          <div className="top-items">
            <div className="top-items-item">
              <p>Rate</p>
              <p>${common_component.abbreviateNumber(rate)}/SEC</p>
            </div>
            <div className="top-items-item">
              <p>Assets</p>
              <p>{common_component.abbreviateNumber(assets)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;