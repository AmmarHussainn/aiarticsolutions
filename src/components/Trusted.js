import './trusted.css';


const Trusted = () => {
  const images = [
    '/code-makers.png',
    '/Dalet.png',
    '/Entrix.png',
    '/Ethos.png',
    '/Hide-Seek.png',
    '/Magellan.png',
    '/Pallas.png',
    '/Pelion.png',
    '/vertical.png',
    '/Tion.png',
    '/Telefonica.png',
    '/Synergix.png',
  ];

  return (
    <section id='trusted' className="bg-black py-16 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Trusted by innovators worldwide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've partnered with industry leaders to deliver transformative solutions
          </p>
        </div>
        
        {/* Enhanced logo grid with hover effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {images.map((src, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-6 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={process.env.PUBLIC_URL + src} 
                alt={`Client logo ${index + 1}`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Trusted;
