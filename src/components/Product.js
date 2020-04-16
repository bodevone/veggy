import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/productActions'

import Counter from './Counter'

class Product extends Component {
  constructor(props) {
    super(props);
    let counter = false
    if (this.props.cart[this.props.id]) {
      counter = true
    }
    let quantity = 0
    if (counter) {
      quantity = this.props.cart[this.props.id].quantity
    }
    this.state = {
      counter: counter,
      quantity: quantity
    }
    
    this.addToCart = this.addToCart.bind(this)
    this.changeCounter = this.changeCounter.bind(this)
    this.newQuantity = this.newQuantity.bind(this)

  }

  addToCart(product) {
    this.props.addToCart(product)
    if (!this.state.counter) {
      this.setState({counter: true})
    }
  }

  changeCounter() {
    this.setState({counter: false})
  }

  newQuantity(quantity) {
    this.setState({quantity: quantity})
  }

  render() {

    let image = this.props.image
    let name = this.props.name
    let price = this.props.price
    let id = this.props.id
    let quantity_type = this.props.quantity_type
    let quantity_single = this.props.quantity_single
    let product = {
      image: image,
      name: name,
      price: price,
      id: id,
      quantity_type: quantity_type,
      quantity_single: quantity_single
    }

    let type = ' шт'
    if (quantity_type === 'kg') {
      type = ' кг'
    }
    let single = quantity_single + type



    let button = (
      <div className="product-action">
        <button
          type="button"
          onClick={this.addToCart.bind(this, product)}
        >
          ADD TO CART
        </button>
      </div>
    );
    let counter
    if (this.props.fromCart) {
      counter = <Counter product={product} fromCart={this.props.fromCart} callNewCart={this.props.callNewCart} newQuantity={this.newQuantity}/>
    } else {
      counter = <Counter product={product} changeCounter={this.changeCounter} fromCart={this.props.fromCart} newQuantity={this.newQuantity}/>
    }

    return (
      <div className="product">
        <div className="product-image">
          <img
            src={"http://localhost:1337" + image}
            alt={name}
          />
        </div>
        <h4 className="product-name">{name}</h4>
        <h4 className="product-name">{this.state.counter ? ' ‏‏‎ ' : single}</h4>
        <p className="product-price">{(this.state.quantity * price) || price}</p>

        {this.state.counter ? counter : button}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => {dispatch(addToCart(product))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
