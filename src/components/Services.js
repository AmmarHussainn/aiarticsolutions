

import React from "react";
import { Code, Globe, Smartphone, BarChart2 , Shield , Check, Lightbulb, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={40} className="text-blue-400" />,
      title: "Custom Software Development",
      description: "Tailored solutions built to your exact specifications and business requirements.",
      features: ["Enterprise applications", "SaaS platforms", "Legacy system modernization"]
    },
    {
      icon: <Globe size={40} className="text-green-400" />,
      title: "Web Development",
      description: "High-performance websites that drive engagement and conversions.",
      features: ["React/Next.js", "E-commerce", "Web apps"]
    },
    {
      icon: <Smartphone size={40} className="text-purple-400" />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS and Android.",
      features: ["Flutter/React Native", "UI/UX design", "App store optimization"]
    },
    {
      icon: <Cloud size={40} className="text-cyan-400" />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and cloud-native applications.",
      features: ["AWS/Azure/GCP", "Microservices", "DevOps"]
    },
    {
      icon: <BarChart2 size={40} className="text-yellow-400" />,
      title: "Data & Analytics",
      description: "Turn data into actionable insights and competitive advantage.",
      features: ["BI dashboards", "Machine learning", "Data pipelines"]
    },
    {
      icon: <Shield size={40} className="text-red-400" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security.",
      features: ["Penetration testing", "Compliance", "Security architecture"]
    }
  ];

  return (
    <section id="Services" className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-900/50 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
            OUR EXPERTISE
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end services to build, scale, and optimize your digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <Check size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;