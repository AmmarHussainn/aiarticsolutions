



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsData = [
    {
      title: "What services does Arctic Ai provide?",
      answer:
        "We offer custom software development, web development, mobile app development, IT consulting, and cloud solutions tailored to your business needs.",
    },
    {
      title: "How can I get a quote for my project?",
      answer:
        "You can get a quote by contacting us via  email  arcticbluemedia@gmail.com with your project details.",
    },
    {
      title: "What industries do you specialize in?",
      answer:
        "We work with finance, healthcare, e-commerce, education, and more. Our versatile team can handle projects across different industries.",
    },
    {
      title: "Do you offer support and maintenance services?",
      answer:
        "Yes, we provide ongoing support and maintenance, including updates, troubleshooting, and enhancements to keep your tech solutions optimized.",
    },
    {
      title: "How long does it take to complete a project?",
      answer:
        "Timelines vary based on project scope and complexity. We provide detailed timelines and keep you updated throughout the process.",
    },
  ];

  return (
    <section id="FAQs" className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-900/50 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <h3 className="text-white font-medium text-lg">{faq.title}</h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-gray-400" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-300 text-start">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
  
      </div>
    </section>
  );
};

export default FAQs;