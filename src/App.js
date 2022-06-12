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
import "./App.css";

function App() {
  return (
    <div className="App bg-pfBg relative font-lato">
      <div id="bg" className="bg-pfBg">
        <div className="sticky top-0 z-50 bg-pfBgLight/70">
          <div className="w-4/5 mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="flex">
          <div className="hidden md:block flex-[1_1_0%] fixed">
            <Sidebar />
          </div>
          <div className="flex-[6_6_0%] ">
            <div className="w-full md:w-4/5  px-2 md:px-4 lg:px-0  mx-auto">
              <Home />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
