import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import "./Header.scss";
import SearchBox from "./SearchBox";
import { BiMenu, BiX } from "react-icons/bi";
import { SideMenuContext } from "../../SideMenuContext";
// import NavigationLinks from "./NavigationLinks";

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SideMenuContext);

  return (
    <div className="header-container">
      <div
        className="hamburger-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BiX fontSize={30} /> : <BiMenu fontSize={30} />}
      </div>
      <div className="logo">
        <NavLink to="/">
          <img src="images/logo.png" alt="Logo" />
        </NavLink>
      </div>
      {/* <NavigationLinks  /> */}
      <div className="cart">
        <Cart />
      </div>
      <div className="search-container">
        <SearchBox />
      </div>
    </div>
  );
};

export default Header;
