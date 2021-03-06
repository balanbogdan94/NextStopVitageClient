import React, { useState } from "react";
import SearchIcon from "material-ui/svg-icons/action/search";
import { IconButton } from "material-ui";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./SearchBox.scss"
import { Redirect, useHistory } from "react-router-dom";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serachedText, setSearchedText] = useState("");
  const searchInput = React.useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  const HandleOnButtonTap = () => {
    searchInput.current?.focus();
    setIsOpen(!isOpen);
    history.push('/search?word='+serachedText);
  }

  const getInputStyle = () => {
      let style = " search-box-container__input"
      style += isOpen ? style+"--open" : style+"--closed"
      return style;
  }

  return (
    <div className="search-box-container">
      <input
        className={getInputStyle()}
        ref={searchInput}
        onBlur={() => setIsOpen(false)}
        onKeyPress = {(e) => e.key === 'Enter' ? HandleOnButtonTap() : ""}
        onChange={e => setSearchedText(e.target.value)}
      />
      <MuiThemeProvider>
        <IconButton
          className= "search-box-container__button"
          onClick={() => HandleOnButtonTap()}
        >
          <SearchIcon />
        </IconButton>
      </MuiThemeProvider>
    </div>
  );
};
export default SearchBox;
