import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { getProducts } from './store/actions/productActions'
import Store from './components/Store';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Store} />
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
