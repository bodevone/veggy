import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="brand">
            <img
              className="logo"
              src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
              alt="Veggy Brand Logo"
            />
          </div>

          <div className="search">
            <a className="mobile-search" href="#">
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                alt="search"
              />
            </a>
            <form action="#" method="get" className={"search-form"}>
              <a className="back-button" href="#">
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                  alt="back"
                />
              </a>
              <input
                type="search"
                ref="searchBox"
                placeholder="Search for Vegetables and Fruits"
                className="search-keyword"
              />
              <button className="search-button" type="submit" />
            </form>
          </div>

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
            <a
              className="cart-icon"
              href="#"
              ref="cartButton"
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                alt="Cart"
              />
              <span className="cart-count">{this.props.totalItems}</span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
