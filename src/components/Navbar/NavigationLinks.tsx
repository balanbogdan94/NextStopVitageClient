import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavigationLinksProps {
  onButtonPressed? : CallableFunction
}

const NavigationLinks: FC<NavigationLinksProps> = ({onButtonPressed}) => {
  const onClickEvent = () => {
    if(onButtonPressed)
    {
      onButtonPressed()
    }
  }

  return (
    <nav>
      <ul>
        <NavLink
          className="item"
          to="/mens"
          onClick = {onClickEvent}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <li>MEN</li>
        </NavLink>

        <NavLink
          className="item"
          to="/womens"
          onClick = {onClickEvent}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <li>WOMENS</li>
        </NavLink>

        <NavLink
          className="item"
          to="/accessories"
          onClick = {onClickEvent}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <li>ACCESSORIES</li>
        </NavLink>

        <NavLink
          className="item"
          to="/shoes"
          onClick = {onClickEvent}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <li>SHOES</li>
        </NavLink>
        
        <NavLink
          className="item item--sale"
          to="/sale"
          onClick = {onClickEvent}
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <li>SALE</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
