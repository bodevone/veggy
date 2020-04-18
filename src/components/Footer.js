import React from "react";

function Footer() {
  return (
    <footer>
      <p className="footer-links">
        <a href="https://github.com/bodevone/veggy">
          Github Source Code
        </a>
        <span> / </span>
        <a href="https://github.com/sivadass/react-shopping-cart">
          Thanks to sivadass
        </a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} <strong>Veggy</strong>
      </p>
    </footer>
  );
};

export default Footer;
