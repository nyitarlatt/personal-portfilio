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
  const [showNav, setShowNav] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }, [window.scrollY]);

  return (
    <div className="App bg-pfBg relative font-lato">
      <div
        className={`fixed w-full top-0 z-50 bg-pfBgLight/70 animate__animated ${
          !showNav && "animate__fadeOutUp"
        }`}
      >
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
    </div>
  );
}

export default App;
