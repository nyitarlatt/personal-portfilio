import { Navbar, Home, Sidebar, Projects } from "./components";

import "./dist/tailwind.css";
import "./App.css";

function App() {
  return (
    <div className="App bg-pfBg relative font-Lato">
      <div id="home" className="bg-pfBg">
        <div className="w-4/5 mx-auto sticky top-0">
          <Navbar />
        </div>
        <div className="flex">
          <div className="hidden md:block flex-[1_1_0%] fixed">
            <Sidebar />
          </div>
          <div className="flex-[6_6_0%] ">
            <div className="w-full md:w-4/5  px-2 md:px-4 lg:px-0  mx-auto">
              <Home />
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
