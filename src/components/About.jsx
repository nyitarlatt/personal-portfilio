import React from "react";

import useOnView from "react-useonview";

const About = () => {
  const trigger = useOnView(() => {
    if (
      document.getElementById("about").classList.contains("animate__fadeInUp")
    )
      return;
    document.getElementById("about").classList.add("animate__fadeInUp");
  }, true);

  return (
    <div
      ref={trigger}
      id="about"
      className="w-full md:w-4/5 px-2 md:px-4 lg:px-0 mx-auto text-center text-pfText my-8 flex flex-col items-center font-josefin animate__animated"
    >
      <h1 className="border-b-4 border-white w-fit px-2 text-4xl mb-8">
        About Me
      </h1>
      <p className="">
        I am currently a Frontend developer specilize in ReactJs and NextJs.
        Strongly interested in Computer Science, Software Engineering and
        Programming. I like to learn new technologies and exploring others
        programming fields. I also like to collaborate with others teams and
        sharing opinions each other to improve or skills and expend our tech
        field. Superhero flims and music are my entertainment.
      </p>
    </div>
  );
};

export default About;
