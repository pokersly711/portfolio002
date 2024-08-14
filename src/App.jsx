// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
