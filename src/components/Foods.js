import React, { Component } from 'react';
// import config from '../config';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Food from './Food';

class Foods extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {

  }

  itemPurchased = (food) => {
    this.props.onFoodPurchased(food);
  }

  renderFoodItems = () => {
    const { foods, totalMoney, multipleBy } = this.props;
    return foods.map(food => {
      return (
        <Food 
          key={food.displayName} 
          food={food} 
          totalMoney={totalMoney} 
          itemPurchased={this.itemPurchased}
          multipleBy={multipleBy} />
      );
    });
  }

  render() {
    return (
      <div className="foods">
        {this.renderFoodItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods,
    multipleBy: state.multipleBy
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFoodPurchased: (food) => dispatch(actions.foodPurchased(food))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foods);