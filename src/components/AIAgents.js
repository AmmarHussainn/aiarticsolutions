import React, { useState, useEffect } from "react";
import { Bot, Mail, Sparkles, MessageCircle, Server, Headphones, Brain, Zap, BarChart3, LucideWand2 } from "lucide-react";

const AIAgents = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);

    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(featureInterval);
    };
  }, []);

  const handleCalendlyOpen = () => {
    window.open(
      'https://calendly.com/ammarhussain0315/arctic-ai-solutions?background_color=1a1a1a&text_color=ffffff&primary_color=5d9cf5',
      '_blank'
    );
  };

  const features = [
    {
      icon: <Brain size={32} className="text-blue-400" />,
      title: "Neural Processing",
      description: "Advanced AI models that process language with near-human understanding and contextual awareness."
    },
    {
      icon: <Zap size={32} className="text-purple-400" />,
      title: "Instant Responses",
      description: "Lightning-fast processing delivers responses in milliseconds with exceptional accuracy."
    },
    {
      icon: <Server size={32} className="text-green-400" />,
      title: "Enterprise Integration",
      description: "Seamless connection with CRM, ERP, and other business systems for unified operations."
    },
    {
      icon: <BarChart3 size={32} className="text-yellow-400" />,
      title: "Performance Analytics",
      description: "Comprehensive dashboards tracking agent performance, customer satisfaction, and ROI."
    }
  ];

  return (
    <section id="AIAgents" className="bg-black relative py-24 px-6 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
      
      {/* Circuit Board Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMTAgMTBoNDB2NDBIMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMDIwNjAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMzAgMTB2NDBNMTAgMzBoNDAiIHN0cm9rZT0iIzIwMjA2MCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiMyMDIwNjAiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-10 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-900 to-indigo-900 px-5 py-2 rounded-full">
              <LucideWand2 size={18} className="text-blue-400" />
              <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">Next Generation Technology</span>
            </div>
          </div>
          <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">AI Agents</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Transform your business operations with our intelligent voice and email agents
          </p>
        </div>

        {/* Main Content with Staggered Animation */}
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left Column - Interactive Animation */}
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-400 rounded-2xl blur-md opacity-80 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-25"></div>
              <div className="relative bg-gray-900 rounded-2xl p-10 shadow-2xl border border-gray-800">
                {/* Animated Connection Lines */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-blue-500 to-transparent"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: '0',
                        width: '100%',
                        opacity: 0.5,
                        animation: `slideRight 5s linear infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i + 5}
                      className="absolute w-px bg-gradient-to-b from-purple-500 to-transparent"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '0',
                        height: '100%',
                        opacity: 0.5,
                        animation: `slideDown 6s linear infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm"></div>
                      <Bot size={60} className="text-blue-400 relative z-10" />
                    </div>
                    <h3 className="text-white text-xl font-bold mt-4 mb-2">Voice Agents</h3>
                    <p className="text-gray-300 text-sm">Next-gen conversational AI with human-like interaction and emotional intelligence</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/30">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-sm"></div>
                      <Mail size={60} className="text-purple-400 relative z-10" />
                    </div>
                    <h3 className="text-white text-xl font-bold mt-4 mb-2">Email Agents</h3>
                    <p className="text-gray-300 text-sm">Intelligent email automation that understands, prioritizes, and responds with precision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features with Highlighting */}
          <div className={`lg:w-1/2 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-white text-3xl font-bold mb-6">Transform Customer Interactions</h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Our enterprise-grade AI agents don't just respond—they <span className="text-blue-400 font-medium">understand context</span>, 
              <span className="text-purple-400 font-medium"> recognize patterns</span>, and 
              <span className="text-green-400 font-medium"> continuously evolve</span> through advanced machine learning, delivering experiences that feel genuinely human.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`flex p-4 rounded-xl transition-all duration-500 ${activeFeature === idx ? 'bg-gray-800/50 border border-gray-700/50 shadow-lg transform scale-105' : 'hover:bg-gray-900/50'}`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  <div className="mr-5 bg-gray-800 p-3 rounded-lg self-start">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center">
              <button
                onClick={handleCalendlyOpen}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-700/30 flex items-center"
              >
                <Sparkles size={18} className="mr-2" />
                <span>Deploy AI Agents Now</span>
              </button>
              <span className="ml-4 text-gray-400 text-sm">No technical setup required</span>
            </div>
          </div>
        </div>

        {/* Use Cases with Animation */}
        <div className={`mt-32 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h3 className="text-white text-3xl font-bold mb-4 text-center">Transformational Use Cases</h3>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">See how industry leaders are leveraging our AI agents to drive efficiency and enhance customer experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Experience",
                description: "Handle complex inquiries, route conversations, and provide personalized support 24/7 with 98% satisfaction rates.",
                icon: <MessageCircle size={32} />,
                color: "from-blue-600 to-blue-800"
              },
              {
                title: "Lead Generation",
                description: "Identify, engage, and qualify prospects through natural conversation, increasing conversion rates by up to 45%.",
                icon: <Zap size={32} />,
                color: "from-purple-600 to-purple-800"
              },
              {
                title: "Operational Efficiency",
                description: "Automate repetitive tasks and streamline communications, reducing response times and operational costs by 60%.",
                icon: <BarChart3 size={32} />,
                color: "from-green-600 to-green-800"
              }
            ].map((useCase, idx) => (
              <div 
                key={idx}
                className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 flex flex-col h-full"
              >
                <div className={`bg-gradient-to-r ${useCase.color} p-6 flex justify-center`}>
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white">
                    {useCase.icon}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h4 className="text-white text-2xl font-bold mb-4">{useCase.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
                <div className="p-6 border-t border-gray-800">
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                    <button onClick={handleCalendlyOpen} className="text-sm font-medium">Schedule Demo</button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={`mt-28 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 shadow-2xl transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center mb-12">
            <h3 className="text-white text-2xl font-bold">AI Agents Drive Real Results</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "60%", label: "Cost Reduction" },
              { value: "24/7", label: "Availability" },
              { value: "3.5s", label: "Avg. Response Time" },
              { value: "98%", label: "Customer Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-blue-400 text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default AIAgents;