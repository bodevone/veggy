import React, {Component} from "react";
import { connect } from 'react-redux'
import Product from './Product';


class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cartList: this.props.cartList
    }
    this.callNewCart = this.callNewCart.bind(this)
  }

  callNewCart() {
    this.setState({cartList: this.props.cartList})
  }
  render() {
    let productsData;

    productsData = Object.keys(this.state.cartList)
      .map(id => {
        return (
          <Product
            key={id}
            price={this.props.cartList[id].price}
            name={this.props.cartList[id].name}
            image={this.props.cartList[id].image}
            id={this.props.cartList[id].id}
            fromCart={true}
            callNewCart={this.callNewCart}
          />
        );
      })
    const view = <div className="products">{productsData}</div>
    return <div className="products-wrapper">{view}</div>;
  }
}

const mapStateToProps = state => ({
  cartList: state.cart
});

export default connect(mapStateToProps)(Cart);
