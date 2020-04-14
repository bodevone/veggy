import React, {Component} from "react";
import Product from './Product';

class Products extends Component {

  render() {
    let productsData;

    productsData = this.props.productList
      .map(product => {
        return (
          <Product
            addToCart={this.props.addToCart}
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={product.id}
          />
        );
      })
    const view = <div className="products">{productsData}</div>
    return <div className="products-wrapper">{view}</div>;
  }
}

export default Products;
