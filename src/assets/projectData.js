import { cat, note, sort, rest, ecommerce, gpt3, crypto } from "./";

const projectData = [
  {
    image: ecommerce,
    name: "Online Store",
    text: "Online electronice items selling website dynamic item update with sanity studio and payment acceptable using stripe.",
    link: "https://ecommerce-sanity-omega.vercel.app/",
    code: "https://github.com/nyitarlatt/ecommerce_sanity",
    tags: ["NextJs", "Sanity", "ContextApi", "Stripe"],
  },
  {
    image: note,
    name: "Note App",
    text: "Note taking app with functions of add, read, edit, delete and save notes in the localstorage",
    link: "https://velvety-selkie-f67f83.netlify.app/",
    code: "https://velvety-selkie-f67f83.netlify.app/",
    tags: ["ReactJs", "TailwindCss", "ContextApi"],
  },
  {
    image: cat,
    name: "Oregano",
    text: "Landing page for certain animal",
    link: "https://oregano-tailwind-practice.vercel.app/",
    code: "https://github.com/nyitarlatt/oregano_tailwind-practice",
    tags: ["ReactJs", "TailwindCss", "ContextApi"],
  },
  {
    image: gpt3,
    name: "GPT-3",
    text: "GPT-3 is an open Ai landing page made with just ReactJs and Css",
    link: "https://elaborate-pasca-405cff.netlify.app/",
    code: "https://github.com/nyitarlatt/GPT-3_react-practice",
    tags: ["ReactJs", "Css"],
  },
  {
    image: rest,
    name: "Gericht Restruent",
    text: "Gericht Restruent landing page made with ReactJs and Css",
    link: "https://nimble-sunflower-100bab.netlify.app/",
    code: "https://github.com/nyitarlatt/GerichitRestruent_react-practice",
    tags: ["ReactJs", "Css"],
  },
  {
    image: sort,
    name: "Sorting Visualizer",
    text: "Sorting Visualizer is project made with Vanilla JS which includes 5 sorting algorithms, bubble sort, selection sort, insertion sort, quick sort and merge sort",
    link: "https://nyitarlatt.github.io/sorting-visualizer/",
    code: "https://github.com/nyitarlatt/sorting-visualizer",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: crypto,
    name: "Cryptoverse",
    text: "A cryptocurency website where you users can read cryptocurrency news and market",
    link: "https://cryptoapp-react-practice.vercel.app/",
    code: "https://github.com/nyitarlatt/cryptoapp_react-practice",
    tags: ["ReactJs", "AntDesign", "Redux-toolkit"],
  },
];

export default projectData;
