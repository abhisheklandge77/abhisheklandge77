import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="fh5co-work" className="fh5co-bg-dark projects-section">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-offset-2 text-center fh5co-heading">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="row project-cards">
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://github.com/abhisheklandge77/find-my-pet-project"
              target="_blank"
              rel="noreferrer"
              className="work project-1"
            >
              <div className="desc">
                <h3>Find My Pet</h3>
                <span>
                  <a
                    href="https://github.com/abhisheklandge77/find-my-pet-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MERN Project
                  </a>
                </span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://github.com/abhisheklandge77/clothing-store-angular-app"
              target="_blank"
              rel="noreferrer"
              className="work project-2"
            >
              <div className="desc">
                <h3>Clothing Store</h3>
                <span>
                  <a
                    href="https://github.com/abhisheklandge77/clothing-store-angular-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Angular Project
                  </a>
                </span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://github.com/abhisheklandge77/movie-heist-app"
              className="work project-3"
              target="_blank"
              rel="noreferrer"
            >
              <div className="desc">
                <h3>Movie Heist</h3>
                <span>
                  <a
                    href="https://github.com/abhisheklandge77/movie-heist-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React Project
                  </a>
                </span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://github.com/abhisheklandge77/Live-Chat-App-Front-End"
              className="work project-4"
              target="_blank"
              rel="noreferrer"
            >
              <div className="desc">
                <h3>Live Chat</h3>
                <span>
                  <a
                    href="https://github.com/abhisheklandge77/Live-Chat-App-Front-End"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ReactJS + Socket Project
                  </a>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
