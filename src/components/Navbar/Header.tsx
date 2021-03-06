import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import "./Header.scss";
import SearchBox from "./SearchBox";
import { BiMenu, BiX } from "react-icons/bi";


const Header = () => {

const [isHamburgerOpen, setHamburgerOpen] = useState(false);

const getNavStyle = () => {
  let style = " nav-items"
  style += isHamburgerOpen ? style+"--visible" : style+"--hidden"
  return style;
}

const getHamburgerIcon: JSX.Element = isHamburgerOpen ? <BiX fontSize={30}/>: <BiMenu fontSize={30} />

  return (
    <div className="header">
      <div className="hamburger" onClick={()=> setHamburgerOpen(!isHamburgerOpen)}>
        {getHamburgerIcon}
      </div>
      <div className="logo">
        <NavLink to="/">
          <img src="images/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <nav className={getNavStyle()}>
        <ul>
          <NavLink
            className="item"
            to="/mens"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            <li>MEN</li>
          </NavLink>
          <NavLink
            className="item"
            to="/womens"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            <li>WOMENS</li>
          </NavLink>
          <NavLink
            className="item"
            to="/accessories"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            <li>ACCESSORIES</li>
          </NavLink>
          <NavLink
            className="item"
            to="/shoes"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            <li>SHOES</li>
          </NavLink>
          <NavLink
            className="item item--sale"
            to="/sale"
            activeStyle={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
          >
            <li>SALE</li>
          </NavLink>
        </ul>
      </nav>

      <div className="right-side-options">
          <SearchBox/>
          <Cart />
        <div className="language"></div>
      </div>
    </div>
  );
};

export default Header;
