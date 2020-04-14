import React from "react";

function Footer() {
  return (
    <footer>
      <p className="footer-links">
        <a href="https://github.com/bodevone">
          View Source on Github
        </a>
        <span> / </span>
        <a href="https://github.com/bodevone">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://github.com/bodevone">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="https://github.com/bodevone">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} <strong>Veggy</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
