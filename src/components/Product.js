import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/productActions'

import Counter from './Counter'

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: false
    }
    
    this.addToCart = this.addToCart.bind(this)
    this.changeCounter = this.changeCounter.bind(this)
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

  render() {

    let image = this.props.image
    let name = this.props.name
    let price = this.props.price
    let id = this.props.id
    let product = {
      image: image,
      name: name,
      price: price,
      id: id
    }

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

    let counter = <Counter product={product} changeCounter={this.changeCounter}/>

    return (
      <div className="product">
        <div className="product-image">
          <img
            src={image}
            alt={name}
          />
        </div>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">{price}</p>

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
