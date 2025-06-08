import React from 'react';
import Header from './Header';
import CalendlyWidget from './CalendlyWidget'; 




const HeroSection = () => {
  const handleCalendlyOpen = () => {
    window.open(
      'https://calendly.com/ammarhussain0315/arctic-ai-solutions?background_color=1a1a1a&text_color=ffffff&primary_color=5d9cf5',
      '_blank'
    );
  };

  return (
    <section id='Home' className="relative h-screen bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMTAgMTBoNDB2NDBIMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMDIwNjAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMzAgMTB2NDBNMTAgMzBoNDAiIHN0cm9rZT0iIzIwMjA2MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
      </div>

      <Header />
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">
            The world is moving fast.
            <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              We help you move faster.
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your Partner in Cutting-Edge Technology Solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCalendlyOpen}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Speak To Our Team
            </button>
           
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;