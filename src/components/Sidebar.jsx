import React from "react";

const Sidebar = () => {
  return (
    <div className="relative min-h-screen w-2/3 font-josefin">
      <div className="text-pfTextLight -rotate-90 absolute w-52 h-52 left-0 pt-10 lg:pt-20 bottom-32 cursor-pointer">
        Follow Us -&nbsp;
        <a
          href="https://www.facebook.com/nyitarlatt.dev"
          className="hover:text-white"
        >
          Fb
        </a>
        . /&nbsp;
        <a
          href="https://www.linkedin.com/in/nyi-tar-latt-290638226/"
          className="hover:text-white"
        >
          In
        </a>
        . /&nbsp;
        <a href="" className="hover:text-white">
          Tw
        </a>
        . /
      </div>
    </div>
  );
};

export default Sidebar;
