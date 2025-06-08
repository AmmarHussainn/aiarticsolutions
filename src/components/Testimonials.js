// import React from 'react';

// const Testimonials = () => {
//     const testimonials = [
//       {
//         Name : 'Mike Do',
//         Review : '"Whether its a new development, update or maintenance - UNITech always shines through. Their turnaround time is always stellar, its apleasure to work with them."',
//         Position : 'Founder & CTO of BARNES&NOBLE',
//         Image : '/mike-do.png'
//     },
        
//         {
//           Name : 'Sherzai Dean',
//           Review : '"UNITech is the most professional group we have worked with. They work with you around your time and deliver the best quality work."',
//           Position : 'Founder of NEURO PLAN Academy',
//           Image : '/sherazi.png'
//       },
//       {
//         Name : 'Olsen P.',
//         Review : '"They listened carefully, and were knowledgeable enough to guide me through the success of my business."',
//         Position : 'CEO of TechCorp',
//         Image : '/olsen.png'
//     },

//     ]
//   return (
//     <section id='Reviews' className='bg-black pb-10'>
//       <h2 className='font-opensans text-2xl md:text-4xl font-bold pt-9  pb-5 '>
//         Our Testimonials
//       </h2>
//       <p className=' p-4 font-montserrat  text-white w-fit md:block hidden ml-auto mr-auto mb-[100px] rounded-[15px]'>
//         Our clients' success stories are a testament to our commitment.<br/> See how
//         we’ve helped brands achieve and exceed their digital growth targets.
//       </p>
//       <p className='p-4 font-montserrat  text-white md:hidden block ml-auto mr-auto mb-[100px] rounded-[15px] '>
//         Our clients' success stories are a testament to our commitment. See how
//         we’ve helped brands achieve and exceed their digital growth targets.
//       </p>

//       <div className='w-full flex justify-center flex-wrap gap-5 mt-10'>
//         {testimonials.map((ele, idx) => {
//           return (
//             <div className='rounded-[25px] bg-[#4594ff] md:mt-0 mt-[45px] md:w-[30%] w-[90%] border-[#4594ff]  border md:h-[300px]  flex flex-col items-center p-4 gap-4'>
//               <div className='mt-[-60px]'>
//                 {/* {ele.Image} */}
//                 <img src={ele.Image} className='rounded-[50%] w-[100px] h-[100px] object-cover' alt='icon' />
//               </div>
//               <div>
//                 <h3 className=' font-base text-white font-montserrat text-lg text-center '>
//                   {ele.Review}
//                 </h3>
//                 <p className='text-center text-xl font-opensans font-semibold text-white pt-4'>
//                   {' '}
//                   {ele.Name}
//                 </p>
//                 <p className='font-base text-white font-montserrat text-lg text-center pt-4'>
//                   {' '}
//                   {ele.Position}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      Name: 'Mike Do',
      Review:
        '"Whether it’s a new development, update, or maintenance – UNITech always shines through. Their turnaround time is stellar, and it’s a pleasure to work with them."',
      Position: 'Founder & CTO of BARNES & NOBLE',
      Image: '/mike-do.png',
    },
    {
      Name: 'Sherzai Dean',
      Review:
        '"UNITech is the most professional team we have worked with. They accommodate our schedule and deliver top-quality work."',
      Position: 'Founder of NEURO PLAN Academy',
      Image: '/sherazi.png',
    },
    {
      Name: 'Olsen P.',
      Review:
        '"They listened carefully, and their expertise guided me toward the success of my business."',
      Position: 'CEO of TechCorp',
      Image: '/olsen.png',
    },
  ];

  return (
    <section id="Reviews" className="bg-black py-16">
      <div className="text-center">
        <h2 className="text-white font-poppins text-3xl md:text-5xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-300 font-montserrat text-lg max-w-2xl mx-auto">
          Discover how our expertise has helped businesses transform and grow
          digitally with outstanding results.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((ele, idx) => (
          <div
            key={idx}
            className="bg-[#4594ff] text-white rounded-2xl shadow-lg max-w-sm md:w-[30%] p-6 flex flex-col items-center text-center transition-all hover:scale-105"
          >
            <img
              src={ele.Image}
              alt={ele.Name}
              className="rounded-full w-20 h-20 object-cover shadow-md border-4 border-white"
            />
            <p className="mt-5 font-montserrat italic text-lg">{ele.Review}</p>
            <h3 className="mt-5 font-poppins font-bold text-xl">{ele.Name}</h3>
            <p className="text-sm text-gray-200">{ele.Position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
