import React, {Component} from "react";
import { connect } from 'react-redux'
import Product from './Product';
import Header from './Header';



class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {term: this.props.searchTerm}
    this.searchProduct = this.searchProduct.bind(this)
  }

  searchProduct(term) {
    this.setState({term: term})
  }


  render() {
    let productsData;

    let term = this.state.term

    function searchingFor(term) {
      return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }

    productsData = this.props.productList
      .filter(searchingFor(term))
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
    return (
      <div>
        <Header search={this.searchProduct} fromShop={true} />
        <div className="products-wrapper">{view}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  productList: state.products,
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Products);
