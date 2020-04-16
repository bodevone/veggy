import React, {Component} from "react";
import { connect } from 'react-redux'
import Product from './Product';
import NoResults from './NoResults';
import { showSearch } from '../store/actions/productActions'




class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {term: this.props.searchTerm}
    this.props.showSearch(true)
  }

  componentDidUpdate(nextProps) {
    if (nextProps.searchTerm !== this.state.term) {
      this.setState({term: nextProps.searchTerm})
    }
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
            image={product.image[0].url}
            id={product.id}
            quantity_single={product.quantity}
            quantity_type={product.quantity_type.name}
            fromCart={false}
          />
        );
    })
    let view
    if (productsData.length <= 0 && term) {
      view = <NoResults></NoResults>
    } else {
      view = <div className="products">{productsData}</div>
    }
    return (
      <div>
        <div className="products-wrapper">{view}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  productList: state.products,
  searchTerm: state.searchTerm
});


const mapDispatchToProps = dispatch => ({
  showSearch: (value) => {dispatch(showSearch(value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
