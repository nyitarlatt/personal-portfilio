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
      className="w-full md:w-4/5 px-2 md:px-4 lg:px-0 mx-auto my-10 animate__animated"
    >
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
