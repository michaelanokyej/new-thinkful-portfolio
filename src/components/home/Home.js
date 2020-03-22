import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faEnvelope,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNode
} from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="myJumbotron">
          <div className="jumbotronItem profileImgContainer">
            <img src="profilePic.jpg" alt="profilePic" className="profilePic" />
          </div>
          <div className="jumbotronItem">
            <div>
              <h1 className="jumboHeader">Hi, I'm Michael Anokye</h1>
              <p>
                Multi-faceted software engineer who is knowledgeable in
                JavaScript, Python, SQL, HTML, etc. A true team player offering
                multiple years of experience in the software industry.
                Proficient in working with diverse languages. When I'm not
                coding, I enjoy doing something creative like painting or being
                physically active in the gym.
              </p>
            </div>
            <div className="jumboButtons">
              <button className="spanButton">
                <Link to="/resume">About Me</Link>{" "}
              </button>
              <button className="spanButton">
                <a href="resume-Jan2020(pdf).docx" download="myResume">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="skillsDiv">
          <div className="skillsItem skills">
            <h4 className="home-section-header">Skills</h4>
            <ul className="skills-qualif-list">
              <li>
                <span className="framework">JavaScript Frameworks:</span>{" "}
                <span className="framework-skills">
                  ReactJS, Node.js, Jquery, ExpressJS etc.
                </span>
              </li>
              <li>
                <span className="framework">Testing Frameworks:</span>
                <span className="framework-skills">
                  Jasmine, Karma, Mocha, Chai
                </span>
              </li>
              <li>
                <span className="framework">Scripting Technology:</span>{" "}
                <span className="framework-skills">Python, BASH, Batch</span>
              </li>
              <li>
                <span className="framework">Database:</span>{" "}
                <span className="framework-skills">MySQL, PostgreSQL</span>
              </li>
              <li>
                <span className="framework">Amazon Web Services:</span>{" "}
                <span className="framework-skills">
                  EC2, ELB, API Gateway, S3 etc
                </span>
              </li>
              <li>
                <span className="framework">Additional Skills:</span>{" "}
                <span className="framework-skills">
                  API development skills (REST)
                </span>
              </li>
            </ul>
            <div className="jumboButtons">
              <button className="spanButton">
                <Link to="/resume">Learn More</Link>
              </button>
            </div>
          </div>
          <div className="skillsItem qualifications">
            <h4 className="home-section-header">Qualifications</h4>
            <ul className="skills-qualif-list">
              <li>
                <span className="framework">
                  Amazon AWS Certified Developer
                </span>
                <span className="framework-skills">
                  <a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=Z8VB12F21E141YSM">
                    Verify
                  </a>
                </span>
              </li>
              <li>
                <span className="framework">
                  Cisco Certified Network Associate (CCNA)
                </span>
                <span className="framework-skills">
                  <a href="https://www.youracclaim.com/badges/9599f28d-0590-4708-bec9-1fdca5129810/public_url">
                    Verify
                  </a>
                </span>
              </li>
              <li>
                <span className="framework">Thinkful Engineering Bootcamp</span>
                <span className="framework-skills">March, 2020</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="projectsDiv">
          <h4 className="home-section-header">A Few Projects</h4>
          {/* <h6 ><span className="PSA">Hover/Tap On A Project For More</span></h6> */}
          <div className="projects">
            <div className="thinkful-project-box">
              <div className="thinkful-img-box">
                <img src="wander.png" alt="wander" />
              </div>
              <div className="thinkful-project-description">
                <h3 className="in-project-header">Wander</h3>
                <p>A webapp for users that wander and find new places.</p>
                <div>
                  <h4 className="in-project-header">Features & More</h4>
                  <ul className="app-features-list">
                    <li>
                      Users can search for tours in every state in the USA
                    </li>
                    <li>New users can sign up to book tours.</li>
                    <li>Old users can sign in too book tours.</li>
                    <li>
                      A registered user can become a guide by posting a tour.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="jumboButtons">
                <span className="spanButton">
                  <a
                    href="https://wander-client.michaelanokyej.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>{" "}
                </span>
                <span className="spanButton">
                  <a
                    href="https://github.com/michaelanokyej/wander-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </span>
              </div>
            </div>
            <div className="thinkful-project-box">
              <div className="thinkful-img-box">
                <img src="upLift-home.png" alt="upLift" />
              </div>
              <div className="thinkful-project-description">
                <h3 className="in-project-header">UpLift</h3>
                <p>A webapp to make mentorship accessible to users.</p>
                <div>
                  <h4 className="in-project-header">Features & More</h4>
                  <ul className="app-features-list">
                    <li>Users can sign up/sign in.</li>
                    <li>Users can post something.</li>
                    <li>Users can comment on posts</li>
                    <li>Users can send messages</li>
                  </ul>
                </div>
              </div>
              <div className="jumboButtons">
                <span className="spanButton">
                  <a
                    href="https://uplift-olive.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>{" "}
                </span>
                <span className="spanButton">
                  <a
                    href="https://github.com/irodriguez20/team-mike-india-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </span>
              </div>
            </div>
            <div className="thinkful-project-box">
              <div className="thinkful-img-box">
                <img src="parkfinder.png" alt="parkFinder" />
              </div>
              <div className="thinkful-project-description">
                <h3 className="in-project-header">Park Finder</h3>
                <p>An adventure driven web-app that searches for parks.</p>
                <div>
                  <h4 className="in-project-header">Features & More</h4>
                  <ul className="app-features-list">
                    <li>Gets weather at the current location</li>
                    <li>Gets parks near user current location</li>
                    <li>User can search for parks anywhere</li>
                    <li>
                      Results of user search is displayed with the weather
                    </li>
                  </ul>
                </div>
              </div>
              <div className="jumboButtons">
                <span className="spanButton">
                  <a
                    href="https://michaelanokyej.github.io/parkfinder/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>{" "}
                </span>
                <span className="spanButton">
                  <a
                    href="https://github.com/michaelanokyej/parkfinder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <h4 className="center contactMessage">Get in touch</h4>
          <div className="contactWrapper animated bounceInLeft">
            <div className="myInfo">
              <h5>Michael Anokye</h5>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faRoad} /> Rockville, MD
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> michaelanokyej@yahoo.com
                </li>
              </ul>
            </div>
            <div className="contactForm">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label>Name</label>
                  <input type="text" name="name" />
                </div>
                <div>
                  <label>Company</label>
                  <input type="text" name="company" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" name="email" />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="Number" name="phone" />
                </div>
                <div className="full">
                  <label>Message</label>
                  <textarea name="message" rows="4"></textarea>
                </div>
                <div>
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <div className="full">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
