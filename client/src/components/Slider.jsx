import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

// Replace with your actual image imports or URLs
const images = [
    assets.bojusslider,
    assets.postcardslider,
    assets.ktmslider,
    assets.phakdingslider,
];

const logos = [
    assets.whitebojus,
    assets.whitepostcard,
    assets.whitektm,
    assets.whitephakding,
];

const buttonTexts = [
    "OPENING IN 2025",
    "OPENING IN 2026",
    "OPENING IN 2026",
    "OPENING IN 2027",
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-auto sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] flex flex-col items-center justify-center overflow-hidden shadow-lg my-12 lg:my-25 md:my-25 ">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url(${images[current]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Overlay Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 z-10">
                {/* Logo */}
                <img
                    src={logos[current]}
                    alt={`logo-${current}`}
                    className="w-auto h-26 sm:h-40 md:h-42 lg:h-72 xl:h-60 sm:mb-8 drop-shadow-lg mb-4"
                />
                {/* Glass Button */}
                <button
                    style={{ fontFamily: '"Inter", sans-serif' }}
                    className="backdrop-blur-md bg-white/15 border border-white/30 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-medium shadow-lg hover:bg-white/40 transition"
                >
                    {buttonTexts[current]}
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`block w-5 h-1 sm:w-8 md:w-10 rounded-full transition-all duration-300 ${idx === current ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
export default Slider;

