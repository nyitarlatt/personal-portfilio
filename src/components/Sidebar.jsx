import React from "react";

const Sidebar = () => {
  return (
    <div className="relative min-h-screen w-2/3">
      <div className="text-pfTextLight -rotate-90 absolute w-52 h-52 left-0 pt-10 lg:pt-20 bottom-32 cursor-pointer">
        Follow Us -&nbsp;
        <a className="hover:text-white" href="#">
          Fb
        </a>
        . /&nbsp;
        <a className="hover:text-white" href="#">
          In
        </a>
        . /&nbsp;
        <a className="hover:text-white" href="#">
          Tw
        </a>
        . /
      </div>
    </div>
  );
};

export default Sidebar;
