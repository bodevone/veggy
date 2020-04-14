import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from './store/actions/productActions'
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';


class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Products productList={this.props.products}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => {dispatch(getProducts())}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
