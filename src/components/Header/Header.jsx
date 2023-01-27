import * as React from "react";
import Logo from "../../Img/logo__camera.png";
import './Header.scss'

const Header = () => {
  return (

      <header className="header">
        <div className="header_logo">
          <img src={Logo} alt="logo camera" className="logo"/>
        </div>
        <div className="header_title">
          <h1 className="header_title-h1"> My memories</h1>
        </div>
      </header>

  );
};
export default Header;
