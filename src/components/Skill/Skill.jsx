import PropTypes from "prop-types";
import "./Skill.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const Skill = ({ data }) => {
  const { title, text, skills } = data;
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">
                  I specialize in MERN Stack web development, encompassing the
                  following technologies:
                  <ul>
                    <li>
                      <b>MongoDB: </b>
                      Proficient in designing and managing NoSQL databases,
                      including data modeling and CRUD operations.
                    </li>
                    <li>
                      <b>Express.js: </b>
                      Experienced in building robust, RESTful APIs and
                      server-side applications using Express.js.
                    </li>
                    <li>
                      <b>React: </b>
                      Skilled in creating dynamic and responsive user interfaces
                      with React, including state management and component-based
                      architecture.
                    </li>
                    <li>
                      <b>Node.js: </b>
                      Capable of developing server-side applications, real-time
                      features, and backend services using Node.js.
                    </li>
                  </ul>
                  Additionally, I have a strong foundation in related web
                  technologies, such as HTML, CSS, JavaScript and TypeScript,
                  which complements my MERN Stack expertise. My experience in
                  this stack enables me to deliver efficient and modern web
                  applications.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {skills.map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos={element.effect}
                  data-aos-duration={element.duration}
                  data-aos-delay={element.delay}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.title}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.progress}
                    </div>
                  </div>
                  <div className="st-progressbar" data-progress="95">
                    <div
                      className="st-progressbar-in"
                      style={{ width: element.progress }}
                    ></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
