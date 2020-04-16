import React, {Component} from "react";
import { connect } from 'react-redux'
import Product from './Product';
import NoResults from './NoResults';
import CategoryList from './CategoryList';
import { showSearch } from '../store/actions/productActions'


class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: this.props.searchTerm,
      category: this.props.category
    }
    this.props.showSearch(true)

    this.searchCategory = this.searchCategory.bind(this)
  }

  componentDidUpdate(nextProps) {

    if (nextProps.searchTerm !== this.state.term) {
      this.setState({term: nextProps.searchTerm})
    }
    if (nextProps.category !== this.props.category) {
      this.setState({category: this.props.category})
    }
  }


  searchCategory(value) {
    if (this.state.category === 'all') {
      return true
    } else {
      return value.category.name === this.state.category
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
      .filter(this.searchCategory)
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
        <div className="products-wrapper">
          <CategoryList />
          {view}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  category: state.category,
  productList: state.products,
  searchTerm: state.searchTerm
});


const mapDispatchToProps = dispatch => ({
  showSearch: (value) => {dispatch(showSearch(value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
