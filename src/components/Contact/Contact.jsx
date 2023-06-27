import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div id="fh5co-started" class="fh5co-bg-dark hire-me-section">
        <div class="overlay"></div>
        <div class="container">
          <div class="row animate-box">
            <div class="col-md-offset-2 text-center fh5co-heading">
              <h2>Hire Me!</h2>
              <p className="col-md-7 m-auto mb-5">
                With expertise in JavaScript, React.js, and a keen eye for
                design, I deliver cutting-edge solutions tailored to your unique
                business needs. Let's collaborate and bring your digital vision
                to life.
              </p>
              <p>
                <a href="#contact-me" class="btn btn-default btn-lg">
                  Contact Me
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="fh5co-consult">
        <div className="video fh5co-video contact-left-bg">
          <div className="overlay"></div>
        </div>
        <div className="choose animate-box">
          <h2>Contact</h2>
          <form id="contact-me">
            <div className="row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  id="fname"
                  className="form-control"
                  placeholder="Your firstname"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  id="lname"
                  className="form-control"
                  placeholder="Your lastname"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Your subject of this message"
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Say something about us"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
