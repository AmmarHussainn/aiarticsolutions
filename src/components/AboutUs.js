import React from 'react';
import { Lightbulb, Target, TrendingUp } from "lucide-react";

const AboutUs = () => {

  const handleCalendlyOpen = () => {
    window.open(
      'https://calendly.com/ammarhussain0315/arctic-ai-solutions?background_color=1a1a1a&text_color=ffffff&primary_color=5d9cf5',
      '_blank'
    );
  };

  return (
    <div id="About" className="bg-black flex justify-center items-center z-10 relative py-20 px-4">
      <section className="bg-gradient-to-br from-[#3b3dfb] to-[#5254fe] w-full max-w-5xl py-14 px-10 rounded-3xl shadow-xl relative text-white">
        
        {/* Accent Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-white rounded-full"></div>

        {/* Section Title */}
        <h2 className="font-manrope text-3xl md:text-4xl font-extrabold text-center bg-[#1e1f4b] px-6 py-3 rounded-full mx-auto w-fit shadow-md">
          About Us
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-center mt-4 opacity-80">
          Crafting digital experiences that <b>transform</b> businesses.
        </p>

        {/* Main Content */}
        <p className="font-manrope text-lg md:text-xl text-center leading-relaxed mt-6 opacity-90">
          At <b> Arctic Blue Media</b>, we specialize in delivering <b>cutting-edge web development</b>, 
          branding, and digital solutions that empower businesses. Our team of expert developers 
          and designers craft <b>bespoke digital products </b>, ensuring your brand stands out in 
          today’s competitive landscape.
        </p>

        {/* Icon-Based Highlights */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <Lightbulb size={40} className="text-white" />
            <p className="mt-2 text-sm opacity-80">Innovation-Driven</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target size={40} className="text-white" />
            <p className="mt-2 text-sm opacity-80">Strategic Approach</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrendingUp size={40} className="text-white" />
            <p className="mt-2 text-sm opacity-80">Scalable Solutions</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <a 
            onClick={handleCalendlyOpen}
            className="bg-white text-[#3b3dfb] font-manrope font-bold text-lg px-6 py-3 rounded-full cursor-pointer shadow-md hover:scale-105 transition-all duration-300"
          >
            Work With Us
          </a>
        </div>
      </section>
    </div>
  
  
  );
};

export default AboutUs;
