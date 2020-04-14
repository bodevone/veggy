import React, {Component} from 'react';
// import Counter from './Counter'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
    this.addToCart = this.addToCart.bind(this)
    this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this)

  }

  addToCart(image, name, price, id) {

    let newQuantity = this.state.quantity + 1

    this.setState({
      quantity: newQuantity
    },
    function() {
      let product = {
        image: image,
        name: name,
        price: price,
        id: id,
        quantity: this.state.quantity
      }
      this.props.addToCart(product)
    });
  }

  handleUpdateQuantity(value) {
    this.setState({
      quantity: value
    },
    function() {
      let product = {
        image: this.props.image,
        name: this.props.name,
        price: this.props.price,
        id: this.props.id,
        quantity: this.state.quantity
      }
      this.props.addToCart(product)
    });
  }

  render() {
    let image = this.props.image
    let name = this.props.name
    let price = this.props.price
    let id = this.props.id
    let button = (
      <div className="product-action">
        <button
          type="button"
          // onClick={this.addToCart.bind(this, image, name, price, id)}
        >
          ADD TO CART
        </button>
      </div>
    );

    // if (this.state.quantity <= 0) {
    //   button = 
    // } else {
    //   button = <Counter updateQuantity={this.handleUpdateQuantity}/>
    // }

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

        {button}

      </div>
    );
  }
}

export default Product;