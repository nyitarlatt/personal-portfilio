import React from "react";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Projects = () => {
  return (
    <div className="mb-4">
      <div className="w-5/6 mx-auto flex flex-wrap justify-center max-w-fit">
        <div className="w-1/7 md:w-72 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-500">
          <div className="text-purple-400 text-6xl">
            <HelpOutlineIcon />
          </div>
          <h2 className="text-pfText text-2xl">Design</h2>
          <p className="text-xs text-pfTextLight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            vero commodi id? Repellat magni minima autem exercitationem delectus
            blanditiis expedita.
          </p>
        </div>
        <div className="w-1/7 md:w-72 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-500">
          <div className="text-purple-400 text-6xl">
            <HelpOutlineIcon />
          </div>
          <h2 className="text-pfText text-2xl">Branding</h2>
          <p className="text-xs text-pfTextLight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            vero commodi id? Repellat magni minima autem exercitationem delectus
            blanditiis expedita.
          </p>
        </div>
        <div className="w-1/7 md:w-72 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-500">
          <div className="text-purple-400 text-6xl">
            <HelpOutlineIcon />
          </div>
          <h2 className="text-pfText text-2xl">Product Design</h2>
          <p className="text-xs text-pfTextLight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            vero commodi id? Repellat magni minima autem exercitationem delectus
            blanditiis expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
