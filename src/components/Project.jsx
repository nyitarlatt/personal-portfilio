import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = ({ image, name, text, link, code, tags }) => {
  return (
    <div className="md:w-80 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-[1.03] duration-300 ">
      <div className="w-full flex flex-col space-y-2">
        <div className="relative group">
          <img
            className="rounded-lg group-hover:blur-[2px]"
            src={image}
            alt="img"
          />
          <div className="hidden group-hover:block absolute w-full top-20 md:top-10 duration-300">
            <a
              href={link}
              className="w-1/3 mx-auto flex justify-center rounded-lg m-1 py-2 bg-pfBgLight text-white hover:bg-pfBlueLight duration-200"
            >
              <VisibilityIcon />
            </a>
            <a
              href={code}
              className="w-1/3 mx-auto flex justify-center rounded-lg m-1 py-2 bg-pfBgLight text-white hover:bg-pfBlueLight duration-200"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <h2 className="text-pfText text-2xl font-josefin">{name}</h2>
        <p className="text-xs text-pfTextLight ">{text}</p>
        <div className="flex flex-wrap">
          {tags?.map((tag) => (
            <div className="w-fit bg-pfBg text-white rounded-md px-4 py-1 text-pfTextLight mr-2 mb-2">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
