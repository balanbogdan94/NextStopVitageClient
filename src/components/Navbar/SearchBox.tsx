import React, { useContext, useState } from "react";
import "./SearchBox.scss"
import { Redirect, useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { SideMenuContext } from "../../context/SideMenuContext";

const SearchBox = () => {
  const {setIsOpen} = useContext(SideMenuContext);
  const [serachedText, setSearchedText] = useState("");
  const searchInput = React.useRef<HTMLInputElement | null>(null);
  const history = useHistory();

  const HandleOnButtonTap = () => {
    searchInput.current?.focus();
    setIsOpen(false);
    history.push('/search?word='+serachedText);
  }


  return (
    <div className="search-box-container">
      <input
        placeholder="Search in the shop... "
        className="input"
        ref={searchInput}
        onBlur={() => setIsOpen(false)}
        onKeyPress = {(e) => e.key === 'Enter' ? HandleOnButtonTap() : ""}
        onChange={e => setSearchedText(e.target.value)}
      />
      <button onClick={HandleOnButtonTap}><BiSearch fontSize={18}/></button>
    </div>
  );
};
export default SearchBox;
