import { Navbar, Home, Sidebar, Projects } from "./components";

import "./dist/tailwind.css";
import "./App.css";

function App() {
  return (
    <div className="App bg-pfBg relative">
      <div id="home" className="flex bg-pfBg">
        <div className="hidden md:block flex-[1_1_0%] fixed">
          <Sidebar />
        </div>
        <div className="flex-[6_6_0%] ">
          <div className="w-full md:w-4/5  px-2 md:px-4 lg:px-0  mx-auto">
            <Navbar />
            <Home />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
