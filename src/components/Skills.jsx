import React, { useState } from "react";
import useOnView from "react-useonview";

const Skills = () => {
  const [bars, setBars] = useState(false);

  //trigger on observe
  const trigger = useOnView(() => {
    if (
      !document.getElementById("skills").classList.contains("animate__zoomIn")
    ) {
      document.getElementById("skills").classList.add("animate__zoomIn");
    }
    if (bars) return;
    levelUp(270, "one");
    levelUp(230, "two");
    levelUp(280, "three");
    levelUp(240, "four");
    numberUp("firstnum", 76);
    numberUp("secondnum", 68);
    numberUp("thirdnum", 78);
    numberUp("fourthnum", 70);
    setBars(true);
  });

  //circle progressbar animation
  const levelUp = (no, id) => {
    const el = document.getElementById(id);
    for (let i = 0; i < no; i += 2) {
      let stick = document.createElement("div");
      stick.setAttribute("style", `transform: rotate(${i}deg)`);
      stick.classList.add(
        "w-2",
        "h-1/2",
        "absolute",
        "top-0",
        "bg-cyan-400",
        "z-30",
        "origin-bottom"
      );

      setTimeout(() => {
        el.appendChild(stick);
      }, 6 * i);
    }
  };

  //number counter up
  const numberUp = (id, no) => {
    const el = document.getElementById(id);
    for (let i = 0; i <= no; i++) {
      setTimeout(() => {
        el.innerHTML = i;
      }, 20 * i);
    }
  };

  // const setLevel = (no) => {
  //   let bars = [];
  //   for (let i = 0; i < no; i++) {
  //     bars.push(
  //       <div
  //         style={{ transform: `rotate(${i}deg)` }}
  //         className={`w-2 h-1/2 absolute top-0 bg-pfBlue z-30 origin-bottom `}
  //       ></div>
  //     );
  //   }
  //   return bars;
  // };

  return (
    <div ref={trigger} id="skills" className="my-16 animate__animated ">
      <div className="w-full md:w-4/5 px-2 md:px-4 lg:px-0 mx-auto text-pfText text-4xl font-josefin text-center mb-8">
        Skills
      </div>
      <div className="flex flex-wrap justify-center px-10 md:px-0">
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div
            id="one"
            className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative"
          >
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-4xl font-bold w-1/5 aspect-square text-pfText ">
                <span id="firstnum">0</span>%
              </div>
            </div>
          </div>
          <div className="text-pfText text-3xl text-center mt-8 font-josefin">
            ReactJs
          </div>
        </div>
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div
            id="two"
            className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative"
          >
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-3xl font-bold w-1/5 aspect-square text-pfText ">
                <span id="secondnum">0</span>%
              </div>
            </div>
          </div>
          <div className="text-pfText text-3xl text-center mt-8 font-josefin">
            NextJs
          </div>
        </div>
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div
            id="three"
            className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative"
          >
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-4xl font-bold w-1/5 aspect-square text-pfText ">
                <span id="thirdnum">0</span>%
              </div>
            </div>
          </div>
          <div className="text-pfText text-3xl text-center mt-8 font-josefin">
            Html+Css+Javascript
          </div>
        </div>
        <div className="aspect-[3/4] w-full md:w-5/12 lg:w-1/5 m-2">
          <div
            id="four"
            className="cpb-wrapper bg-pfBgLight rounded-full w-full aspect-square flex items-center justify-center relative"
          >
            <div className="w-full aspect-square bg-pfBgLight rounded-full absolute right-0 z-20"></div>

            <div className="cpb-inner bg-pfBg rounded-full w-11/12 aspect-square flex items-center justify-center z-40">
              <div className="text-3xl font-bold w-1/5 aspect-square text-pfText ">
                <span id="fourthnum">0</span>%
              </div>
            </div>
          </div>
          <div className="text-pfText text-3xl text-center mt-8 font-josefin">
            Firebase
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
