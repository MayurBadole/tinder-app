import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
      <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png"
        alt="tinder-logo"
      />
    <IconButton>
      <ForumIcon fontSize='large' className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
