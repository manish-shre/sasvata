import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../assets/heroimg.png'
import logo from '../assets/logo.png'

const HeroSection = () => (
  <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Navbar (fixed at top) */}
    <div className="absolute top-0 left-0 w-full z-20">
      <Navbar />
    </div>

    {/* Background Hero Image */}
    <img
      src={heroImg}
      alt="Hero background"
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none select-none"
    />

    {/* Content Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4 py-8 xs:px-6 xs:py-10 sm:px-8 sm:py-12 md:px-16 md:py-20 lg:px-24 lg:py-28 xl:px-32 xl:py-32 z-10">
      <img
        src={logo}
        alt="Sasvata Logo"
        className="w-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 max-w-full h-auto mb-4 md:mb-6"
      />
      <h1
        style={{ fontFamily: 'Ortica Linear, sans-serif' }}
        className="font-medium text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight md:leading-tight lg:leading-[1.1] drop-shadow-md"
      >
        <span>SASVATA</span>
        <br />
        <span>HOSPITALITY</span>
      </h1>
    </div>
  </div>
)

export default HeroSection