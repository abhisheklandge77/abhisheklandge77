import React from "react";
import "./About.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
  return (
    <div id="fh5co-about" className="animate-box about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 text-center fh5co-heading">
            <h2 className="about-section-title">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li>
                <span className="first-block">Full Name:</span>
                <span className="second-block">Abhishek Nandkishor Landge</span>
              </li>
              <li>
                <span className="first-block">Phone:</span>
                <span className="second-block">+91 9370932386</span>
              </li>
              <li>
                <span className="first-block">Email:</span>
                <span className="second-block">abhisheknlandge@gmail.com</span>
              </li>
              <li>
                <span className="first-block">Website:</span>
                <span className="second-block">abhisheklandge77.github.io</span>
              </li>
              <li>
                <span className="first-block">Address:</span>
                <span className="second-block">
                  Bibwewadi, OTA No. 425, Pune - 411037, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Hello There!</h2>
            <p>
              Welcome to my portfolio website! I'm Abhishek Landge, a developer,
              programmer, and tech enthusiast residing in Pune. My passion lies
              in creating exceptional digital experiences, with a strong
              affinity for JavaScript and React.js. These technologies allow me
              to build dynamic and interactive web applications that engage
              users.
            </p>
            <p>
              In addition to coding, I find joy in various hobbies. Sports play
              a significant role in my life, and I actively participate in
              cricket, football, and kabaddi. Exploring the outdoors through
              trekking is another activity that fuels my adventurous spirit.
              When I'm not immersed in coding or exploring the world, I indulge
              in sketching, listening to music, and watching movies. Let's
              connect and collaborate to transform innovative ideas into
              reality. Together, we can create digital experiences that leave a
              lasting impact.
            </p>
            <p>
              <ul className="fh5co-social-icons">
                <li className="social-media-icon">
                  <a
                    href="https://www.linkedin.com/in/abhishek-landge-7bbb77239/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li className="social-media-icon">
                  <a
                    href="https://github.com/abhisheklandge77"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li className="social-media-icon">
                  <a
                    href="https://instagram.com/abhi___5757?igshid=ZDc4ODBmNjlmNQ=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
  );
}

export default About;
