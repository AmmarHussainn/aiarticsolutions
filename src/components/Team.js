// import React from 'react';
// import Carousel from './carousalsTeam';

// const Team = () => {
//   return (
//     <section id='Team' className='bg-black'>
//       <h2 className='font-opensans text-2xl md:text-4xl font-bold pt-9  pb-5 '>
//         Meet Our Team
//       </h2>
//       <p className='p-4 font-montserrat  text-white ml-auto mr-auto mb-[100px] w-fit rounded-[15px]'>
//         Our team of experts is dedicated to delivering the best technology
//         solutions for your business.
//       </p>
   
//       <div className='md:flex justify-around flex-wrap hidden'>
//         <div className='md:w-[22%] w-[90%]'>
//           <div>
//             <img className="rounded-[26px]" src={process.env.PUBLIC_URL + '/jeol.png'} />
//           </div>
//           <div className='text-white pt-3 text-left font-montserrat'>
//             Jack A. - CEO & Lead Developer
//           </div>
//         </div>
//         <div className='md:w-[22%] w-[90%]'>
//           <div>
//             <img className="rounded-[26px]" src={process.env.PUBLIC_URL + '/jack.png'} />
//           </div>
//           <div className='text-white pt-3 text-left font-montserrat'>
//             Alex M. - Senior Software Engineer
//           </div>
//         </div>
//         <div className='md:w-[22%] w-[90%]'>
//           <div>
//             <img className="rounded-[26px]" src={process.env.PUBLIC_URL + '/lisa.png'} />
//           </div>
//           <div className='text-white pt-3 text-left font-montserrat'>
//             Lisa R. - Project Manager
//           </div>
//         </div>
//         <div className='md:w-[22%] w-[90%]'>
//           <div>
//             <img className="rounded-[26px]" src={process.env.PUBLIC_URL + '/ben.png'} />
//           </div>
//           <div className='text-white pt-3 text-left font-montserrat'>
//             Tom K. - UX/UI Designer
//           </div>
//         </div>
//       </div>
//       <div className='md:hidden block'>
//         <Carousel />
//       </div>
//     </section>
//   );
// };

// export default Team;



import React from 'react';
import Carousel from './carousalsTeam';

const teamMembers = [
  { name: 'Jack A.', role: 'CEO & Lead Developer', image: '/jeol.png' },
  { name: 'Alex M.', role: 'Senior Software Engineer', image: '/jack.png' },
  { name: 'Lisa R.', role: 'Project Manager', image: '/lisa.png' },
  { name: 'Tom K.', role: 'UX/UI Designer', image: '/ben.png' },
];

const Team = () => {
  return (
    <section id="Team" className="bg-black py-16">
      <div className="text-center">
        <h2 className="text-white font-poppins text-3xl md:text-5xl font-bold mb-6">
          Meet Our Team
        </h2>
        <p className="text-gray-300 font-montserrat text-lg max-w-2xl mx-auto">
          Our team of experts is dedicated to delivering the best technology
          solutions for your business.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center flex-wrap gap-8 mt-12">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-gray-900 text-white rounded-2xl shadow-lg max-w-xs p-6 flex flex-col items-center text-center transition-all hover:scale-105"
          >
            <img
              src={process.env.PUBLIC_URL + member.image}
              alt={member.name}
              className="rounded-2xl w-[180px] h-[220px] object-cover shadow-md"
            />
            <h3 className="mt-4 font-poppins font-bold text-xl">{member.name}</h3>
            <p className="text-sm text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden block mt-12">
        <Carousel />
      </div>
    </section>
  );
};

export default Team;
