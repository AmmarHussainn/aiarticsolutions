import { useState } from 'react';
import SvgIcons from './svg';

const Carousel = () => {
  const [number, setNumber] = useState(0);
  const [data , setData] = useState([
    {
        img : `${process.env.PUBLIC_URL}/jeol.png`,
        position : 'CEO & Lead Developer'
    },
    {
        img : `${process.env.PUBLIC_URL}/jack.png`,
        position : 'Senior Software Engineer'
    },
    {
        img : `${process.env.PUBLIC_URL}/lisa.png`,
        position : 'Project Manager'
    },
    {
        img : `${process.env.PUBLIC_URL}/ben.png`,
        position : 'UX/UI Designer'
    }
  ])

  return (
    // <div className='w-full h-[400px] relative flex items-center justify-center'>
    //   <div onClick={() => number - 1  < 0 ? setNumber(data.length -1): setNumber(number-1)} className='rounded-full p-2 hover:bg-[#4594ff] mr-1 cursor-pointer'>
    //     <SvgIcons.ArrowLeft  />
    //   </div>
    //   {
    //     data[number] && (
    //       <div className='w-[280px] transition duration-300 ease-in-out'>
    //         <img src={data[number].img} alt='team-member' className='transition duration-300 ease-in-out' />
    //         <p className='text-white pt-3 text-left font-montserrat transition duration-300 ease-in-out'>{data[number].position}</p>
    //       </div>
    //     )
    //   }
    //   {
    //     console .log(data[number].img)
    //   }
    //   <div onClick={() => number + 1  >= data.length ? setNumber(0): setNumber(number+1)} className='rounded-full p-2 hover:bg-[#4594ff] ml-1 cursor-pointer'>
    //     <SvgIcons.ArrowRight  />
    //   </div>
    // </div>
    <div className='w-full h-[400px] relative flex items-center justify-center'>
      <div
        onClick={() => (number - 1 < 0 ? setNumber(data.length - 1) : setNumber(number - 1))}
        className='rounded-full p-2  mr-1 cursor-pointer transition-colors duration-300 ease-in-out'
      >
        <SvgIcons.ArrowLeft />
      </div>
      {data[number] && (
        <div className='w-[280px] transition-transform duration-300 ease-in-out'>
          <img
            src={data[number].img}
            alt='team-member'
            className='transition-transform duration-300 ease-in-out'
          />
          <p className='text-white pt-3 text-left font-montserrat transition-opacity duration-300 ease-in-out'>
            {data[number].position}
          </p>
        </div>
      )}
      <div
        onClick={() => (number + 1 >= data.length ? setNumber(0) : setNumber(number + 1))}
        className='rounded-full p-2 h ml-1 cursor-pointer transition-colors duration-300 ease-in-out'
      >
        <SvgIcons.ArrowRight />
      </div>
    </div>
  );
};

export default Carousel;
