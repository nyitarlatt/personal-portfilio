import React, { useEffect } from "react";

import { bgl, bgs, stars, avatar } from "../assets";

const Home = () => {
  useEffect(() => {
    const link = document.querySelectorAll(".animate-wrapper");
    const animateit = function (e) {
      const imgs = this.querySelectorAll("img");

      imgs.forEach((img, index) => {
        const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = (x / width) * (move * (2 + index * 0.7)) - move,
          yMove = (y / height) * (move * (2 + index * 0.7)) - move;

        img.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });

      if (e.type === "mouseleave") {
        imgs.forEach((img) => {
          img.style.transform = ``;
        });
      }
    };
    link.forEach((b) => b.addEventListener("mousemove", animateit));
    link.forEach((b) => b.addEventListener("mouseleave", animateit));
  }, []);

  return (
    <div
      id="home"
      className="w-full md:w-4/5 px-2 md:px-4 lg:px-0 mx-auto flex flex-col lg:flex-row justify-between pt-20"
    >
      <div className="h-fit min-h-[90vh] flex flex-col w-full items-center text-center md:text-start md:items-start md:w-2/3 lg:w-1/3 justify-center ">
        <div className="text-pfTextLight">UI/UI Design</div>
        <div className="text-pfText text-5xl font-bold leading-[3.8rem] mt-3 font-josefin animate__animated animate__fadeInUp">
          Nyi Tar Latt <br />
          Frontend <br />
          Developer <br />
        </div>
        <div className="text-pfTextLight mt-10 font-josefin animate__animated animate__fadeInUp">
          Hi, I'm Nyi Tar Latt. I am Frontend Developer specialized in ReactJS
          and NextJS development
        </div>

        <div className="text-pfText py-3 px-7 bg-pfBlue rounded-lg w-fit cursor-pointer hover:bg-pfBlueLight mt-10 animate__animated animate__fadeInUp">
          <a href="tel:09958843640">Contact Me</a>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="w-full h-full relative">
          <img
            className="relative top-0 left-10 md:left-20 lg:left-0 h-full opacity-0 object-contain"
            src={bgl}
            alt="background-1"
          />
          <div className="animate-wrapper w-full h-full absolute top-0 left-10 md:left-20 lg:left-0 ">
            <img
              className="animatezz absolute top-0 left-10 md:left-20 lg:left-0 h-full object-contain"
              src={bgl}
              alt="background-1"
            />
            <img
              className="animatezz absolute top-0 left-10 md:left-20 lg:left-0 h-full object-contain"
              src={bgs}
              alt="background-1"
            />
            <img
              className="animatezz absolute top-0 left-10 md:left-20 lg:left-0 h-full object-contain"
              src={stars}
              alt="background-1"
            />
            <img
              className="animatezz absolute top-0 left-10 md:left-20 lg:left-0 h-full object-contain"
              src={avatar}
              alt="background-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
