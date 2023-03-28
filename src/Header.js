import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
const Header = () => {
  return (
    <div className="header">
      <PersonIcon fontSize="large" className="header__icon" />
      <img
        className="header__logo"
        src="https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png"
        alt="tinder-logo"
      />

      <ForumIcon fontSize='large' className="header_icon" />
    </div>
  );
};

export default Header;
