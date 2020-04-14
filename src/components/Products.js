import React, {Component} from "react";
import { connect } from 'react-redux'
import Product from './Product';


class Products extends Component {

  render() {
    let productsData;

    productsData = this.props.productList
      .map(product => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={product.id}
            fromCart={false}
          />
        );
      })
    const view = <div className="products">{productsData}</div>
    return <div className="products-wrapper">{view}</div>;
  }
}

const mapStateToProps = state => ({
  productList: state.products
});

export default connect(mapStateToProps)(Products);
