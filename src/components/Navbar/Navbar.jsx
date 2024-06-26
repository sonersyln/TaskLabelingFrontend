import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle, IoIosMenu, IoIosLogIn } from "react-icons/io";
import { NavDropdown } from "react-bootstrap";
import "./navbar.css";
import { useAuth } from '../../pages/Auth/AuthContext';
import logo from "../../assets/images/logo.png";

const NewNavbar = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [header, setHeader] = useState("header addBg");
  const { token, logout } = useAuth();

  useEffect(() => {
    const addBg = () => {
      if (window.scrollY >= 0) {
        setHeader("header addBg");
      }
    };
    window.addEventListener("scroll", addBg);
    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  return (
    <>
      <div className={header}>
        <div className="logoDiv">
          <Link to="/" className="link">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem"></li>
          </ul>
          <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
        </div>

        <div className="signUp flex">
          <Link to="/" className="link">
            Anasayfa
          </Link>
          {token ? (
            <>
              <NavDropdown className="textAction text" title="Profil" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logout} className="lang-item">
                  Çıkış Yap
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <Link className="text btn" to="/sign-in">
              Giriş Yap
            </Link>
          )}
          <IoIosMenu className="icon toggleNavbarIcon" onClick={showNavbar} />
        </div>
      </div>
    </>
  );
};

export default NewNavbar;
