import React from "react";
import { Link } from "gatsby";
import logo from "../assets/logo.svg";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="mdx logo" />
          </Link>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  );
};

export default Navbar;