import React, { useState, useEffect } from "react";

const Navbar = ({ handleLogout }) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <div className={`navbar-main ${show && "navbar-background"}`}>
      <img
        className="navbar-logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix logo"
      />
      <img
        onClick={handleLogout}
        className="navbar-icon"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="Netflix smiley"
      />
    </div>
  );
};

export default Navbar;
