import React, { useEffect, useState } from "react";
import "./Navbar.css";
import blackLogo from "../../assets/logo-black-background.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const navLinks = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "About",
      link: "#fh5co-about",
    },
    {
      label: "My Resume",
      link: "#fh5co-resume",
    },
    {
      label: "Projects",
      link: "#fh5co-work",
    },
    {
      label: "Contact",
      link: "#contact-me",
    },
  ];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div
      className={
        scrolled ? "navbar-container scrolled-navbar" : "navbar-container"
      }
    >
      <div className="logo-container">
        <img src={blackLogo} alt="logo" />
        <p className="logo-text">
          Abhishek <span>| Portfolio</span>
        </p>
      </div>
      <div className="nav-menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <i
          className={toggleMenu ? "fa fa-times" : "fa fa-bars"}
          aria-hidden="true"
        ></i>
      </div>
      <ul
        className={`nav-link-container ${
          toggleMenu ? "show-menu" : "hide-menu"
        }`}
      >
        {navLinks.map((navLink, index) => (
          <li
            key={`${navLink.label}-${index}`}
            className={activeTab === navLink.label ? "active-tab" : ""}
            onClick={() => {
              setActiveTab(navLink.label);
              setToggleMenu(!toggleMenu);
            }}
          >
            <a
              href={navLink.link}
              className={
                activeTab === navLink.label ? "nav-label-active" : "nav-label"
              }
            >
              {navLink.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
