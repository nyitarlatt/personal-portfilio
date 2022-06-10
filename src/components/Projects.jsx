import React from "react";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Project from "./Project";

import { cat, note, sort } from "../assets";

const Projects = () => {
  return (
    <div className="mb-4">
      <div className="w-5/6 mx-auto flex flex-wrap justify-center max-w-fit">
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={note}
            name="Note App"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero
        commodi id? Repellat magni minima autem exercitationem delectus
        blanditiis expedita."
            link="https://velvety-selkie-f67f83.netlify.app/"
            code="https://velvety-selkie-f67f83.netlify.app/"
            tags={["ReactJs", "TailwindCss", "ContextApi"]}
          />
        </div>
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={sort}
            name="Oregano"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero
        commodi id? Repellat magni minima autem exercitationem delectus
        blanditiis expedita."
            link="https://nyitarlatt.github.io/sorting-visualizer/"
            code="https://github.com/nyitarlatt/sorting-visualizer"
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </div>
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3  flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={cat}
            name="Oregano"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vero
        commodi id? Repellat magni minima autem exercitationem delectus
        blanditiis expedita."
            link="https://oregano-tailwind-practice.vercel.app/"
            code="https://github.com/nyitarlatt/oregano_tailwind-practice"
            tags={["ReactJs", "TailwindCss", "ContextApi"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
