import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import config from '../config';

import MultipleByItem from './MultipleByItem';

class MultipleBy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      multipleByOptions: config.multipleByOptions
    }
  }

  componentDidMount() {

  }

  multipleByItemClickHandler = (value) => {
    this.props.onMultipleByChange(value);
  }

  renderMultipleByOptions = () => {
    return this.state.multipleByOptions.map(multipleByOption => {
      return (
        <MultipleByItem 
          key={multipleByOption} 
          multipleBy={this.props.multipleBy} 
          multipleByItemClickHandler={this.multipleByItemClickHandler} 
          value={multipleByOption} />
      );
    });
  }

  render() {
    return (
      <div className="multiple-by-items">

        {this.renderMultipleByOptions()}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    multipleBy: state.multipleBy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMultipleByChange: (value) => dispatch(actions.multipleByChange(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleBy);