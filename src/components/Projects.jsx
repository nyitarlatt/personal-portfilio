import React from "react";

import Project from "./Project";
import { projectData } from "../assets";

const Projects = () => {
  return (
    <div className="my-10">
      <h1 className="text-pfText text-4xl font-josefin text-center mb-8">
        Here Some projects I've made
      </h1>
      <div className="w-5/6 mx-auto flex flex-wrap justify-center max-w-fit">
        {projectData?.map((data, i) => (
          <Project
            key={i}
            image={data.image}
            name={data.name}
            text={data.text}
            link={data.link}
            code={data.code}
            tags={data.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
