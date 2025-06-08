import React from 'react';
import './trusted.css';
const ClientReviews = () => {
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
    <section className='bg-black pb-10 flex flex-col items-center'>
      <h2 className='font-opensans text-2xl md:text-4xl font-bold pt-9  pb-5 '>
        Our Clients Say
      </h2>
      <p className='p-4 font-montserrat  text-white ml-auto mr-auto mb-[10px] rounded-[15px]'>
        We team up with industry leaders to enhance our service offerings,
        ensuring you receive unparalleled digital marketing solutions.
      </p>

      <div className="marquee-container md:w-[60%] w-90% pt-5">
      <div className="marquee">
        {images.map((src, index) => (
          <img key={index} src={process.env.PUBLIC_URL + src} alt={`group${index + 1}`} className="marquee-item" />
        ))}
        {images.map((src, index) => (
          <img key={index + images.length} src={process.env.PUBLIC_URL + src} alt={`group${index + 1}`} className="marquee-item" />
        ))}
      </div>
    </div>
    </section>
  );
};

export default ClientReviews;
