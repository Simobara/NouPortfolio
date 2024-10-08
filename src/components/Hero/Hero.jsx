import PropTypes from "prop-types";
import "./Hero.scss";
import parser from "html-react-parser";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Hero = ({ data, socialData }) => {
  const { subTitle, designation, imgLink, title, bgImgLink } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector(".st-hero-wrap .st-hero-img");
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="st-hero-wrap">
      <div className="st-height-b80 st-height-lg-b80"></div>
      <div
        className="st-hero st-style1 st-bg"
        style={{ backgroundImage: `url(${bgImgLink})` }}
      >
        <div className="container">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {subTitle}
            </h3>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {parser(title)}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {designation}
            </h2>
            <div
              className="st-hero-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <ScrollLink className="st-btn st-style1 st-color1" to="contact">
                Hire Me
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="st-hero-img st-to-right">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(248, 117, 55, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(251, 168, 31, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <mask id="mask1" style={{ maskType: "alpha" }}>
            <path
              fill="url(#sw-gradient)"
              d="M21.2,-25.1C29,-18.7,37.9,-13.5,41.7,-5.4C45.5,2.8,44.2,13.8,39.3,22.9C34.3,32,25.6,39.2,16.6,40.2C7.5,41.2,-1.8,36,-10.4,31.6C-18.9,27.1,-26.7,23.5,-29.9,17.5C-33.2,11.5,-31.9,3,-31,-6.1C-30.2,-15.2,-29.7,-25,-24.6,-31.8C-19.5,-38.7,-9.7,-42.6,-1.5,-40.8C6.7,-39,13.4,-31.5,21.2,-25.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
          </mask>
          <g mask="url(#mask1)">
            <path
              fill="url(#sw-gradient)"
              d="M21.2,-25.1C29,-18.7,37.9,-13.5,41.7,-5.4C45.5,2.8,44.2,13.8,39.3,22.9C34.3,32,25.6,39.2,16.6,40.2C7.5,41.2,-1.8,36,-10.4,31.6C-18.9,27.1,-26.7,23.5,-29.9,17.5C-33.2,11.5,-31.9,3,-31,-6.1C-30.2,-15.2,-29.7,-25,-24.6,-31.8C-19.5,-38.7,-9.7,-42.6,-1.5,-40.8C6.7,-39,13.4,-31.5,21.2,-25.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "all 0.3s ease 0s" }}
            ></path>
            <image
              className=""
              xlinkHref={`${imgLink}`}
              x="5"
              y="-22"
              alt="Hero"
              width={100}
              style={{ zIndex: 1 }}
            />
          </g>
        </svg>
        {/* <img className="" src={`${imgLink}`} alt="Hero" /> */}
        {/* <div className="st-social-group">
          <SocialLinks data={socialData} />
        </div> */}
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero;
