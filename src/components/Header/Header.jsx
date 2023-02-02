import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Img/logo__camera.png";


const Header = () => {
  return (

      <header className="header">
        <div className="header_logo">
          <Link to='/'>
          <img src={Logo} alt="logo camera" className="logo"/>
          </Link>
        </div>
        <div className="header_title">
          <Link to='/favorites'>
            <h1 className="header_title-h1"> My memories</h1>
          </Link>
        </div>
      </header>

  );
};
export default Header;
