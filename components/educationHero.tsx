"use client";

import React, { useState } from 'react';

const EducationHero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeNavbar = () => setIsMenuOpen(false);

  return (
    <>
      

      <section className="startup-hero-section relative flex flex-col items-center text-slate-800 md:px-16 lg:px-24 xl:px-32 text-sm pb-16 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dot-pattern-redical.svg)] bg-center bg-cover">
        

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 w-full mt-24">
          <div className="max-md:px-4 lg:w-1/2">
            <h1 className="text-5xl md:text-[54px] md:leading-[4.7rem] font-semibold max-w-lg bg-gradient-to-r from-black to-slate-600 bg-clip-text text-transparent">
              The First BABM College in Nepal
            </h1>
            <p className="text-sm/7 max-w-md mt-3 text-slate-500">Our latest thoughts, trends, and tools, written to help you learn, build and grow faster.</p>
            
          
          </div>
          <div className="relative">
            <div className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-[#661FFF] via-[#FF1994] to-[#2D73FF] blur-2xl opacity-50"></div>
            <img className="max-w-md w-full max-h-[560px] rounded-[40px] max-md:px-3 md:mr-10" src="/gallery/showing_bhm_skills.jpg" alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationHero;