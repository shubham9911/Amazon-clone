import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';



function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=''
        />
      </Link>
      
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLine1">hello Guest</span>
          <span className="header_optionLine2">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Returns</span>
          <span className="header_optionLine2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Your</span>
          <span className="header_optionLine2">Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_optionLine2 header_basketCount">{basket?.length}</span>
          </div>
        </Link>

        
      </div>
    </div>
  );
}

export default Header;
