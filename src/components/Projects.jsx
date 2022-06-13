import React from "react";
import useOnView from "react-useonview";

import Project from "./Project";
import { projectData } from "../assets";

const Projects = () => {
  const trigger = useOnView(() => {
    if (
      document
        .getElementById("projects")
        .classList.contains("animate__fadeInUp")
    )
      return;
    document.getElementById("projects").classList.add("animate__fadeInUp");
  });
  return (
    <div
      ref={trigger}
      id="projects"
      className="w-full lg:w-4/5 mx-auto my-12 animate__animated"
    >
      <h1 className="text-pfText text-4xl font-josefin text-center mb-8">
        Here Some projects I've made
      </h1>
      <div className="w-full px-4 md:px-2 mx-auto max-w-fit grid grid-cols-1 md:grid-cols-3 gap-4">
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
