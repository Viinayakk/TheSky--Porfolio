import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "/Images/menu_open.svg";
import menu_close from "/Images/menu_close.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <AnchorLink href="#">
            <h2>
               THE <span>SKY.</span>
            </h2>
          </AnchorLink>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li>
            <AnchorLink href="#" className="nav-link">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about" className="nav-link">About Me</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#work" className="nav-link">My Work</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" className="nav-link">Contact</AnchorLink>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="connect-me">
            <a
              href="https://wa.me/919321120345"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Connect With Me</span>
              <i className="fa-brands fa-whatsapp connect-whatsapp-icon"></i>
            </a>
          </div>
          <a
            href="https://www.instagram.com/bhupendra_prajapati_2.0/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-instagram-btn"
            title="Instagram"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <img
          src={showMenu ? menu_close : menu_open}
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
          alt="menu"
        />

        {/* Mobile Dropdown */}
        {showMenu && (
          <ul className="mobile-menu">
            <li><AnchorLink href="#" onClick={closeMenu}>Home</AnchorLink></li>
            <li><AnchorLink href="#about" onClick={closeMenu}>About Me</AnchorLink></li>
            <li><AnchorLink href="#work" onClick={closeMenu}>My Work</AnchorLink></li>
            <li><AnchorLink href="#contact" onClick={closeMenu}>Contact</AnchorLink></li>
            <li>
              <a
                href="https://www.instagram.com/skyeditz.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-instagram-link"
                onClick={closeMenu}
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
