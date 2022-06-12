import React from "react";

import useOnView from "react-useonview";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const trigger = useOnView(() => {
    if (
      document
        .getElementById("contact")
        .classList.contains("animate__fadeInRight")
    )
      return;
    document.getElementById("contact").classList.add("animate__fadeInRight");
  }, true);
  return (
    <div ref={trigger} id="contact" className="mb-10 animate__animated">
      <h1 className="w-full md:w-4/5 px-2 md:px-4 lg:px-0 mx-auto text-pfText text-center text-4xl font-josefin ">
        Contact me
      </h1>
      <div className="text-pfTextLight text-lg text-center mb-10 md:mb-16">
        Get in touch
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex justify-center mb-8">
          <div className="w-52 flex flex-col space-y-5">
            <div className="flex space-x-3">
              <div className="flex items-center justify-center text-pfBlue">
                <LocalPhoneOutlinedIcon fontSize="large" />
              </div>
              <div className="">
                <h2 className="text-pfText text-xl font-josefin">Phone</h2>
                <div className="text-pfTextLight">09 958843640</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="flex items-center justify-center text-pfBlue">
                <MailOutlineIcon fontSize="large" />
              </div>
              <div className="">
                <h2 className="text-pfText text-xl font-josefin">Email</h2>
                <div className="text-pfTextLight">nyitarlat@gmail.com</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="flex items-center justify-center text-pfBlue">
                <LocationOnOutlinedIcon fontSize="large" />
              </div>
              <div className="">
                <h2 className="text-pfText text-xl font-josefin">Location</h2>
                <div className="text-pfTextLight">Yangon</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <form action="mailto:nyitarlat@gmail.com">
            <div className="w-full bg-pfBgLight text-pfText pt-2 px-5 rounded-t-lg text-lg">
              Name
            </div>
            <input
              required
              className="w-full bg-pfBgLight text-pfText py-2 px-5 rounded-b-lg focus:outline-none caret-indigo-100 mb-4 text-lg"
              type="text"
            />
            <div className="w-full bg-pfBgLight text-pfText pt-2 px-5 rounded-t-lg text-lg">
              Email
            </div>
            <input
              required
              className="w-full bg-pfBgLight text-pfText py-2 px-5 rounded-b-lg focus:outline-none caret-indigo-100 mb-4 text-lg"
              type="email"
            />
            <div className="w-full bg-pfBgLight text-pfText pt-2 px-5 rounded-t-lg text-lg">
              Message
            </div>
            <textarea className="w-full bg-pfBgLight text-pfText py-2 px-5 rounded-b-lg focus:outline-none caret-indigo-100 resize-none h-32 mb-3 text-lg"></textarea>
            <div className="py-2 px-4 flex items-center space-x-2 bg-pfBlue w-fit rounded-lg hover:bg-pfBlueLight">
              <button className="text-white text-lg">Send Now</button>
              <SendIcon className="text-white" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
