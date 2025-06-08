


import React from "react";
import { motion } from "framer-motion";

import { CheckCircle, RefreshCw , Users,MessageSquare ,  } from "lucide-react";


const WhyChoose = () => {
  const features = [
    {
      title: "Dedicated Team",
      description: "Get 40+ hours per week of focused development time from your dedicated team",
      icon: <Users size={24} className="text-blue-400" />
    },
    {
      title: "Transparent Communication",
      description: "Daily standups, weekly demos, and complete visibility into our process",
      icon: <MessageSquare size={24} className="text-purple-400" />
    },
    {
      title: "Agile Methodology",
      description: "Iterative development with continuous feedback and improvement cycles",
      icon: <RefreshCw size={24} className="text-green-400" />
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing protocols to ensure bug-free, performant solutions",
      icon: <CheckCircle size={24} className="text-yellow-400" />
    }
  ];

  return (
    <section id="WhyChoose" className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMTAgMTBoNDB2NDBIMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMDIwNjAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMzAgMTB2NDBNMTAgMzBoNDAiIHN0cm9rZT0iIzIwMjA2MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-5"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-900/50 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
              OUR DIFFERENCE
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Arctic AI</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We go beyond typical agency engagements to become a true extension of your team. Our unique approach combines technical excellence with business acumen to deliver solutions that drive real results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-800 p-2 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
