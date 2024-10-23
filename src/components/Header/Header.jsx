import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.scss";

const Header = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  };

  const handleLinkClick = (e) => {
    // Rimuove la classe 'active' da tutti i link nella lista di navigazione
    document.querySelectorAll(".st-nav-list a").forEach((el) => {
      el.classList.remove("active");
    });

    // Aggiunge la classe 'active' solo al link cliccato
    e.currentTarget.classList.add("active");

    // Chiude il menu mobile se necessario
    setMobileToggle(false);
  };

  return (
    <header className={`st-site-header st-style1 st-sticky-header`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <Link className="st-site-branding" to="/" id="hero">
                <img src="/images/logo.jpg" alt="SimoBaraFoto" />
              </Link>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul
                  className="st-nav-list st-onepage-nav"
                  style={{ display: `${mobileToggle ? "block" : "none"}` }}
                >
                  <li>
                    <ScrollLink
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="resume"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Resume
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Portfolio
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={handleLinkClick}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
                <div
                  className={`st-munu-toggle ${
                    mobileToggle ? "st-toggle-active" : ""
                  } `}
                  onClick={handleToggleMenu}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
