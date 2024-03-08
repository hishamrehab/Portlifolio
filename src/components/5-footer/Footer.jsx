import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Users</a>
        </li>
      </ul>

      <p>Thanks for visiting my website.</p>
    </footer>
  );
};

export default Footer;
