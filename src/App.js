import React from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import MyResume from "./components/MyResume/MyResume";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <MyResume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
