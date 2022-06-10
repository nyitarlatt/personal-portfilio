import React from "react";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Project from "./Project";

import { cat, note, sort, rest, ecommerce, gpt3 } from "../assets";

const Projects = () => {
  return (
    <div className="mb-4">
      <div className="w-5/6 mx-auto flex flex-wrap justify-center max-w-fit">
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={ecommerce}
            name="Online Store"
            text="Online electronice items selling website dynamic item update with sanity studio and payment acceptable using stripe."
            link="https://ecommerce-sanity-omega.vercel.app/"
            code="https://github.com/nyitarlatt/ecommerce_sanity"
            tags={["NextJs", "Sanity", "ContextApi", "Stripe"]}
          />
        </div>
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={note}
            name="Note App"
            text="Note taking app with functions of add, read, edit, delete and save notes in the localstorage"
            link="https://velvety-selkie-f67f83.netlify.app/"
            code="https://velvety-selkie-f67f83.netlify.app/"
            tags={["ReactJs", "TailwindCss", "ContextApi"]}
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
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3  flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={gpt3}
            name="GPT-3"
            text="GPT-3 is an open Ai landing page made with just ReactJs and Css"
            link="https://elaborate-pasca-405cff.netlify.app/"
            code="https://github.com/nyitarlatt/GPT-3_react-practice"
            tags={["ReactJs", "Css"]}
          />
        </div>
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3  flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={rest}
            name="Gericht Restruent"
            text="Gericht Restruent landing page made with ReactJs and Css"
            link="https://nimble-sunflower-100bab.netlify.app/"
            code="https://github.com/nyitarlatt/GerichitRestruent_react-practice"
            tags={["ReactJs", "Css"]}
          />
        </div>
        <div className="w-1/7 md:w-80 bg-pfBgLight p-3 flex flex-col items-center lg:items-start space-y-2 rounded-xl m-2 hover:scale-105 duration-300">
          <Project
            image={sort}
            name="Sorting Visualizer"
            text="Sorting Visualizer is project made with Vanilla JS which includes 5 sorting algorithms, bubble sort, selection sort, insertion sort, quick sort and merge sort"
            link="https://nyitarlatt.github.io/sorting-visualizer/"
            code="https://github.com/nyitarlatt/sorting-visualizer"
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
