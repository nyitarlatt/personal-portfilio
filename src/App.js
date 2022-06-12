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

function App() {
  return (
    <div className="App bg-pfBg relative font-lato">
      <div className="fixed w-full top-0 z-50 bg-pfBgLight/70">
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
