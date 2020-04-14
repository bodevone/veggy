import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { searchProduct } from '../store/actions/productActions'


class Header extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(e) {
    // this.props.searchProduct(e.target.value)
    this.props.search(e.target.value)
  }
  
  render() {
    const search = (
      <div className="search">
        <div className="mobile-search" href="#">
          <img
            src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
            alt="search"
          />
        </div>
        <form action="#" method="get" className={"search-form"}>
          <div className="back-button" href="#">
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
              alt="back"
            />
          </div>
          <input
            type="search"
            ref="searchBox"
            placeholder="Search for Vegetables and Fruits"
            onChange={this.handleSearch}
            className="search-keyword"
          />
          <button className="search-button" type="submit" />
        </form>
      </div>
    )

    return (
      <header>
        <div className="container">
          <Link to="/">
            <div className="brand">
              <img
                className="logo"
                src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
                alt="Veggy Brand Logo"
              />
            </div>
          </Link>
          
          {this.props.fromShop && search}
          <div className="cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>No. of items</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.totalItems}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.totalPrice}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/cart">
              <div
                className="cart-icon"
                href="#"
                ref="cartButton"
              >
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                  alt="Cart"
                />
                <span className="cart-count">{this.props.totalItems}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  totalItems: state.totalItems,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  searchProduct: (term) => {dispatch(searchProduct(term))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


