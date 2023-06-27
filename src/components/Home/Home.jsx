import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left-container">
        <p className="sub-title">WELCOME TO MY WORLD</p>
        <h1 className="home-title">
          Hi, I’m <span className="user-name">Abhishek</span>
        </h1>
        <Typewriter
          options={{
            strings: ["Programmer.", "Developer.", "Learner."],
            autoStart: true,
            loop: true,
            skipAddStyles: true,
            cursorClassName: "typed-cursor",
            wrapperClassName: "typed-text",
          }}
        />
        <p className="profile-desc">
          As a fresh and passionate web developer and programmer, I'm dedicated
          to bringing your digital ideas to life. I strive to craft innovative
          solutions that make a lasting impact. Let's collaborate and build the
          future of the web together.
        </p>
      </div>
      <div className="home-right-container">
        <div className="image-box-gradient">
          <div className="profile-img-container">
            <div className="profile-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
