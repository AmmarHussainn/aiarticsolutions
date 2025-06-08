// import React from 'react';

// const Process = () => {
//   return (
//     <section className="bg-black pb-10">
//       <h2 className='font-opensans text-2xl md:text-4xl font-bold pt-9  pb-5 '>Our Process</h2>
//       <div className='min-w-[80%] max-w-[1000px] ml-auto mr-auto md:block hidden'>
//         <img src={process.env.PUBLIC_URL + '/process2.png'} alt="Discovery and Consultation" />
//       </div>
//       <div className='w-[90%] ml-auto mr-auto md:hidden block'>
//         <div className=' w-[100%] h-[250px] bg-[#ffcd4c] border-dashed border-[4px] border-white  mt-4 rounded-[24px] flex items-center justify-center flex-col'>
//           <h2 className='text-black font-semibold text-xl w-fit'>Step 1</h2>
//           <p className='text-black font-montserrat'>Discovery and Consultation.</p>
//         </div>
//         <div className='bg-[#003eff]  text-white w-[100%] h-[250px] border-dashed border-[4px] border-white bg-contain mt-4 rounded-[24px] flex items-center justify-center flex-col'>
//         <h2 className='text-black font-semibold text-xl'>Step 2</h2>
//           <p className='text-black font-montserrat' >Planning and Strategy.</p>
//         </div>
//         <div className=' w-[100%] h-[250px] bg-contain border-dashed border-[4px] border-white  bg-[#ffcd4c] mt-4 rounded-[24px] flex items-center justify-center flex-col'>
//         <h2 className='text-black font-semibold text-xl'>Step 3</h2>
//           <p className='text-black font-montserrat'>Design and Development.</p>
//         </div>
//         <div className='bg-[#003eff] text-white border-dashed border-[4px] border-white w-[100%] h-[250px] bg-contain mt-4 rounded-[24px] flex items-center justify-center flex-col'>
//         <h2 className='text-black font-semibold text-xl'>Step 4</h2>
//           <p className='text-black font-montserrat'>Testing and Quality Assurance.</p>
//         </div>
//         <div className=' w-[100%] h-[250px] bg-contain border-dashed border-[4px] border-white  bg-[#ffcd4c] mt-4 rounded-[24px] flex items-center justify-center flex-col'>
//         <h2 className='text-black font-semibold text-xl'>Step 5</h2>
//           <p className='text-black font-montserrat'>Deployment and Support</p>
//         </div>
//       </div>
//       {/* <ol>
//         <li>Discovery and Consultation</li>
//         <li>Planning and Strategy</li>
//         <li>Design and Development</li>
//         <li>Testing and Quality Assurance</li>
//         <li>Deployment and Support</li>
//       </ol> */}
//     </section>
//   );
// };

// export default Process;



import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, Code, Search,  PenTool , Check, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We analyze your needs and craft a customized roadmap",
      icon: <Search size={24} className="text-blue-400" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Create wireframes and interactive prototypes",
      icon: <PenTool size={24} className="text-purple-400" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Development",
      description: "Build your solution with clean, maintainable code",
      icon: <Code size={24} className="text-green-400" />,
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Testing & QA",
      description: "Rigorous testing across all devices and scenarios",
      icon: <CheckCircle size={24} className="text-yellow-400" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 5,
      title: "Launch & Optimization",
      description: "Deploy and continuously improve performance",
      icon: <Rocket size={24} className="text-red-400" />,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="Process" className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-900/50 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
            OUR METHODOLOGY
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Development Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven framework to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-gradient-to-r ${step.color} p-1 rounded-full inline-block mb-4`}>
                    <div className="bg-gray-900 rounded-full p-3">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                <div className="hidden md:block md:w-1/2">
                  {index % 2 === 0 ? (
                    <div className="flex justify-start">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900"></div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900"></div>
                    </div>
                  )}
                </div>
                
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 h-full">
                    <h4 className="text-white font-bold mb-2">Key Activities</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        Requirement gathering
                      </li>
                      <li className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        Technical documentation
                      </li>
                      <li className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        Stakeholder alignment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
