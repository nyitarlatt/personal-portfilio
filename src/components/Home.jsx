import React from "react";

import Tilt from "react-parallax-tilt";

import { fullbg, bgl, bgs, stars, outline } from "../assets";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="h-fit min-h-[80vh] flex flex-col w-full items-center text-center md:text-start md:items-start md:w-2/3 lg:w-1/3 justify-center ">
        <div className="text-pfTextLight">UI/UI Design</div>
        <div className="text-pfText text-5xl font-bold leading-[3.8rem] mt-3">
          Jonathan <br />
          User Interface <br />
          Designer <br />
        </div>
        <div className="text-pfTextLight mt-10">
          Welcome to Mars Jacobs We want our monthly roundup of new releases
          undisputed favorites
        </div>

        <div className="text-pfText py-3 px-7 bg-pfBlue rounded-lg w-fit cursor-pointer hover:bg-pfBlueLight mt-10">
          Contact Us
        </div>
      </div>
      <div className="relative w-auto h-auto">
        <Tilt tiltReverse={true}>
          <img src={fullbg} alt="banner" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
