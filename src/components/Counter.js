import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../store/actions/productActions'


class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.cart[this.props.product.id].quantity
    }

    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }



  handleAdd(product) {
    this.props.addToCart(product)
    this.setState({quantity: this.props.cart[product.id].quantity})
  }

  handleRemove(product) {
    this.props.removeFromCart(product)
    if (!this.props.cart[product.id]) {
      if (this.props.fromCart) {
        this.props.callNewCart()
      } else {
        this.props.changeCounter()
      }
    } else {
      this.setState({quantity: this.props.cart[product.id].quantity})
    }
  }

  render() {
    let product = this.props.product

    return (
      <div className="stepper-input">
        <div href="" className="decrement" onClick={this.handleRemove.bind(this, product)}>
          –
        </div>
        <div className="quantity">{this.state.quantity}</div>
        <div href="" className="increment" onClick={this.handleAdd.bind(this, product)}>
          +
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => {dispatch(addToCart(product))},
  removeFromCart: (product) => {dispatch(removeFromCart(product))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
