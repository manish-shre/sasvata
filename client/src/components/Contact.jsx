import React from "react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-0 py-25"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal my-0 sm:my-10 md:my-12 lg:my-20"
          style={{ fontFamily: "'Brittany Signature', cursive" }}
        >
          Connect with Us
        </h1>
      </div>

      {/* Connect Us sections */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-24 px-2 sm:px-4 md:px-6 lg:px-8 w-full my-12">
      <div className="flex-1 flex justify-center items-center">
          <img
            src={contact}
            alt="Phakding illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 max-w-2xl sm:max-w-3xl md:max-w-4xl w-full">
          <div
            className="text-[20px] md:text-4xl font-regular mb-4 sm:mb-6 md:mb-8 whitespace-nowrap"
            style={{ fontFamily: "'Brittany Signature', cursive" }}
          >
            SASVATA
          </div>
          <div
            className="font-medium text-black text-lg text-[16px] md:text-[28px] lg:text-[26px] mb-4 sm:mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Two paths diverge where dreams take flight, <br></br>
            One holds the spark that shapes the night.<br></br> 
            We’ve walked its ways, felt moments rare, <br></br>
            Unique, alive, beyond compare.<br></br>
            Come join the journey, take our hand,<br></br>
            For lifetimes’ wonders, bold and grand.<br></br>
          </div>
          <form className="mt-4 sm:mt-6">
            <label
              className="block text-black font-semibold mb-2 text-base sm:text-lg md:text-[24px]"
              htmlFor="email"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border-b border-black bg-transparent py-2 px-1 mb-4 sm:mb-6 focus:outline-none placeholder-fade text-base sm:text-lg md:text-[22px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              type="submit"
              className="w-full bg-white border border-gray-300 rounded-full py-2 sm:py-3 text-[#232325] font-medium text-base sm:text-lg md:text-[24px] shadow-sm hover:bg-green-50 transition"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We Will Reach Out To You
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
