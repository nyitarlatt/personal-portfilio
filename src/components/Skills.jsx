import React, { useEffect, useState } from "react";

const Skills = () => {
  const setLevel = (no) => {
    let bars = [];
    for (let i = 0; i < no; i++) {
      bars.push(
        <div
          style={{ transform: `rotate(${i}deg)` }}
          className={`w-2 h-1/2 absolute top-0 bg-pfBlue z-30 origin-bottom `}
        ></div>
      );
    }
    return bars;
  };

  return (
    <div id="skills" className="my-16">
      <div className="text-pfText text-4xl font-josefin text-center mb-8">
        Skills
      </div>
      <div className="flex flex-wrap justify-center px-10 md:px-0">
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative">
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>
            {setLevel(270)}

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-3xl font-bold w-1/5 aspect-square text-pfText ">
                76%
              </div>
            </div>
            <div className="cpb-circle"></div>
          </div>
          <div className="text-pfText text-2xl text-center mt-6 font-josefin">
            ReactJs
          </div>
        </div>
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative">
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>
            {setLevel(220)}

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-3xl font-bold w-1/5 aspect-square text-pfText ">
                68%
              </div>
            </div>
            <div className="cpb-circle"></div>
          </div>
          <div className="text-pfText text-2xl text-center mt-6 font-josefin">
            NextJs
          </div>
        </div>
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative">
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>
            {setLevel(300)}

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-3xl font-bold w-1/5 aspect-square text-pfText ">
                78%
              </div>
            </div>
            <div className="cpb-circle"></div>
          </div>
          <div className="text-pfText text-2xl text-center mt-6 font-josefin">
            Html+Css+Javascript
          </div>
        </div>
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative">
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>
            {setLevel(240)}

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-3xl font-bold w-1/5 aspect-square text-pfText ">
                70%
              </div>
            </div>
            <div className="cpb-circle"></div>
          </div>
          <div className="text-pfText text-2xl text-center mt-6 font-josefin">
            Firebase
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
