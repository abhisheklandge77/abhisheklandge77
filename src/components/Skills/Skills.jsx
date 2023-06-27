import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div id="fh5co-skills" class="animate-box skills-section">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-2 text-center fh5co-heading">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row skills-container">
          <div className="col-md-6">
            <div className="progress-wrap">
              <h3>
                <span className="name-left">HTML5</span>
                <span className="value-right">90%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-1 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">CSS3</span>
                <span className="value-right">90%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-2 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">JavaScript</span>
                <span className="value-right">88%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-3 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="88"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Node JS</span>
                <span className="value-right">80%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-4 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="progress-wrap">
              <h3>
                <span className="name-left">React JS</span>
                <span className="value-right">85%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-5 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Express</span>
                <span className="value-right">80%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">MongoDB</span>
                <span className="value-right">85%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-1 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Angular JS</span>
                <span className="value-right">75%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-3 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
