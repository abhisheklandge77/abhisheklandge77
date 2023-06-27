import React from "react";
import "./MyResume.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

function MyResume() {
  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-offset-2 text-center fh5co-heading">
            <h2 className="my-resume-section-title">My Resume</h2>
          </div>
        </div>
        <div className="row  resume-section">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Work Experience</h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <WorkIcon />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Student Intern</h3>
                    <span className="company">
                      H.V. Desai College - 2019 - 2020
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      As an intern through the earn and learn scheme during my
                      time in college, I gained valuable experience and
                      developed important skills that have prepared me for the
                      workforce.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <WorkIcon />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Cashier</h3>
                    <span className="company">D-mart - 2021 - 2022</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      With one year of experience as a cashier in D-mart, I have
                      developed strong skills in cash handling and customer
                      service.This experience has honed my attention to detail
                      and ability to work in a fast-paced environment.
                    </p>
                  </div>
                </div>
              </li>
              {/* <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">UI/UX Designer</h3>
                    <span className="company">Company Name - 2010 - 2012</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li> */}

              <br />
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Education</h3>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <SchoolIcon />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Masters Degree (MCA)</h3>
                    <span className="company">
                      Pimpri Chinchwad College Of Engineering (SPPU) - 2022 -
                      current
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Currently pursuing my Master's degree in Computer
                      Applications (MCA), I am deepening my knowledge and skills
                      in various aspects of computer science.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <SchoolIcon />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Bachelors Degree (BCA)</h3>
                    <span className="company">
                      H.V. Desai College (SPPU) - 2019 - 2022
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Having successfully completed my Bachelor's degree in
                      Computer Applications (BCA), I have acquired a solid
                      foundation in computer science principles and practices.
                    </p>
                  </div>
                </div>
              </li>
              {/* <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Diploma Course</h3>
                    <span className="company">College Name - 1999 - 2001</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Graduation</h3>
                    <span className="company">College Name - 1994 - 1998</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
  );
}

export default MyResume;
