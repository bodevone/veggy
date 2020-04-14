import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { getProducts } from './store/actions/productActions'
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';


class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
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
