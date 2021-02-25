import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import emily from "../../head.png";

const Navbar = () => {
  const [isblackNav, setIsBlackNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 120 ? setIsBlackNav(true) : setIsBlackNav(false);
    });
  }, []);

  return (
    <div className={`${classes.Navbar} ${isblackNav && classes.blackNav}`}>
      <img
        className={classes.Navbar_logo}
        src="https://img.icons8.com/color/64/000000/netflix.png"
        alt=""
      />
      <div className={classes.Navbar_ava}>
        <img className={classes.Navbar_ava_img} src={emily} alt="Emily" />
      </div>
    </div>
  );
};

export default Navbar;
