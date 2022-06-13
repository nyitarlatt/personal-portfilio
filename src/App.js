import {
  Navbar,
  Home,
  Sidebar,
  Projects,
  About,
  Skills,
  Contact,
  Footer,
} from "./components";

import "./dist/tailwind.css";
import "animate.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let lastScrollTop = 0;

  useEffect(() => {
    const el = document.getElementById("nav");

    //nav scroll hide
    document.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset || window.scrollY;
      if (currentScroll > lastScrollTop) {
        el.classList.add("hidden");
      } else {
        el.classList.remove("hidden");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      //nav scroll opacity
      if (window.pageYOffset === 0) {
        el.classList.remove("bg-pfBgLight/70");
      } else {
        el.classList.add("bg-pfBgLight/70");
      }
    });
  }, [window.pageYOffset]);

  return (
    <div className="App bg-pfBg relative font-lato">
      <div id="nav" className="fixed w-full top-0 z-50">
        <div className="w-4/5 mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="hidden lg:block z-0 fixed">
        <Sidebar />
      </div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <div className="hidden"></div>
    </div>
  );
}

export default App;
