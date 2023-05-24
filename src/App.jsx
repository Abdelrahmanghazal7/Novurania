import React from "react";
import Cursor from "./Cursor";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Download from "./Download/Download";
import Slide from "./Slide/Slide";
import Commercial from "./Commercial/Commercial";
import Dealers from "./Dealers/Dealers";
import Contact from "./Contact/Contact";
import Follow from "./Follow/Follow";
import GoTop from "./GoTop/GoTop";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Cursor /> */}
      <NavBar />
      <About />
      <Download />
      <Slide />
      <Commercial />
      <Dealers />
      <Contact />
      <Follow />
      <GoTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
