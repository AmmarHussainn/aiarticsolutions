import React from 'react';
import SvgIcons from './svg';

const Footer = () => {
  return (


    <footer className="relative bg-black pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left justify-center">
      <div className="w-full lg:w-4/12 px-4">
       <div className="flex flex-shrink-0 items-center py-3">
                  <span className="text-white text-2xl font-bold">
                    <span className="text-blue-300">Arctic</span> AI
                  </span>
                </div>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
        Your Partner in Cutting-Edge Technology Solutions
        </h5>
        <div className='flex gap-2 mb-4'>
         
          <div className='w-[30px] h-[30px]'>
            <a href='https://x.com/arcticbluemedia'>
            
            <img src={process.env.PUBLIC_URL + '/TwitterLogo.png'} alt='twittericon' />
            </a>
          </div>
          <div className='w-[30px] h-[30px]'>
            <a href='https://www.instagram.com/arcticbluemedia'>

            <img src={process.env.PUBLIC_URL + '/InstagramLogo.png'} alt='instaicon' />
            </a>
          </div>
        </div>
      
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-6/12 px-4 ">
            <span className="block uppercase text-blueGray-500 text-xl font-bold mb-2 border-b-2 border-[#4594ff] ">Useful Links</span>
            <ul className="list-unstyled w-full">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href='#Home' >Home</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href='#About'>About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href='#Services'>Services</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href='#Reviews'>Reviews</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href='#Team'>Team</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href='#FAQs'>FAQ's</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:underline" href="#Contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <span className="block uppercase text-blueGray-500 text-xl font-bold mb-2 border-b-2 border-[#4594ff]">Contact Info</span>
            <ul className="list-unstyled">
              {/* <li className='flex gap-2 items-center pb-2'>
                <div><SvgIcons.Location /></div>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold   text-sm flex gap-2" > 1930 S. Alma School A115,Mesa, AZ 85202</a>
              </li> */}
              <li className='flex gap-2 items-center pb-2'>
                <div><SvgIcons.Email/></div>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold flex gap-2  text-sm" >  arcticbluemedia@gmail.com</a>
              </li>
              <li className='flex gap-2 items-center pb-2'>
                <div><SvgIcons.Call/></div>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold flex gap-2  text-sm" > +1 (404) 353-0423</a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
        Copyright ©️ 2024 Arctic Blue Media
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
