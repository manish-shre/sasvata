import React from "react";
import Bojusimg from "../assets/Bojusimg.png";
import phakdingimg from "../assets/phakdingimg.png";
import ktmimg from "../assets/ktmimg.png";

const Upcommingprojects = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-12 md:mb-25 lg:mb-25"
          style={{ fontFamily: "'Brittany Signature', cursive" }}
        >
          About Us
        </h1>
      </div>

      {/* first section */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-8 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full">
        <div className="flex-1 min-w-0">
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sāsvata was established in 2022 by a third-generation Nepali
            entrepreneur, Savanna, who believes that - In an era where global
            tourism embraces the charm of nature based boutique luxury, Nepal
            shines as a radiant jewel, perfectly attuned to this elegant demand.
            As metropolitan landscapes blend into the familiar rhythm of daily
            life, travelers yearn for the extraordinary a harmonious retreat
            into nature’s splendor.
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            src={Bojusimg}
            alt="Trekking illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto"
          />
        </div>
      </div>

      {/* second section */}
      <div className="max-w-[91%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-6 lg:px-8 w-full my-12">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={phakdingimg}
            alt="Phakding illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nepal’s remarkable mega-biodiversity, a vibrant mosaic of lush
            forests, towering peaks, and pristine ecosystems, offers an
            unrivaled canvas for bespoke experiences. Sāsvata curates soulful,
            sophisticated journeys that not only celebrate the untamed beauty of
            Nepal’s wilderness but also champion a profound coexistence with the
            natural world, inviting discerning travelers to immerse in a
            luxurious harmony where elegance and nature intertwine.<br></br>{" "}
            <br></br> Sāsvata is devoted to enriching Nepal’s vibrant tourism
            tapestry by seamlessly complementing its existing ecosystem. With a
            vision to elevate the client experience, we provide thoughtful
            support to enhance Nepal's hospitality ecosystem, fostering a
            harmonious blend of sophistication and sustainability. Our curated
            approach ensures every journey not only captivates but also nurtures
            the delicate balance of Nepal’s natural and cultural treasures,
            delivering unparalleled elegance for the discerning traveler.
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="max-w-[91%] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-16 lg:gap-32 xl:gap-60 px-2 sm:px-4 md:px-8 w-full">
        <div className="flex-1 min-w-0">
          <div
            className="max-w-7xl font-light text-black text-sm sm:text-base md:text-lg lg:text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nepal’s cultural heritage, a resplendent mosaic stretching from the
            majestic Himalayas to the lush Gangetic plains, stands among the
            world’s most diverse. From the resilient Sherpas of the high
            mountains to the artistic Newars and Aryans of the rolling hills,
            and the vibrant Tharus of the verdant vast forests, Nepal weaves a
            tapestry of unparalleled cultural richness.
            <br></br>
            <br></br>Sāsvata invites discerning travelers to immerse in this
            exquisite blend of traditions, where every encounter is a
            celebration of heritage, crafted with elegance and authenticity for
            an experience that is truly second to none.
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
          <img
            src={ktmimg}
            alt="Trekking illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Upcommingprojects;
