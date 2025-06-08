import React, { useState, useEffect } from "react";
import { Check, Sparkles, SwitchCamera } from "lucide-react";

const PricingSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCalendlyOpen = () => {
    window.open(
      "https://calendly.com/ammarhussain0315/arctic-ai-solutions?background_color=1a1a1a&text_color=ffffff&primary_color=5d9cf5",
      "_blank"
    );
  };

  const plans = [
    {
      name: "Starter",
      minutes: billingCycle === "monthly" ? "500 mins" : "6000 mins",
      price: billingCycle === "monthly" ? "$300" : "$3000",
      description: "Perfect for small businesses starting with AI solutions.",
      features: [
        "Basic AI voice & email agents",
        "Standard support",
        "Essential analytics",
        "Single-user access",
      ],
      isPopular: false,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Basic",
      minutes: billingCycle === "monthly" ? "1000 mins" : "12000 mins",
      price: billingCycle === "monthly" ? "$500" : "$5000",
      description: "Great for growing businesses needing more AI capacity.",
      features: [
        "Advanced AI agents",
        "Priority support",
        "Enhanced analytics dashboard",
        "Multi-user access",
      ],
      isPopular: true,
       gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Premium",
      minutes: billingCycle === "monthly" ? "2000 mins" : "24000 mins",
      price: billingCycle === "monthly" ? "$1000" : "$10000",
      description: "Ideal for enterprises with high-volume AI needs.",
      features: [
        "Full AI agent suite",
        "24/7 dedicated support",
        "Advanced analytics & reporting",
        "Custom integrations",
      ],
      isPopular: false,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Custom",
      minutes: "Tailored",
      price: "Contact Us",
      description: "Bespoke solutions for unique business requirements.",
      features: [
        "Custom AI configurations",
        "White-glove onboarding",
        "Tailored analytics & integrations",
        "Dedicated account manager",
      ],
      isCustom: true,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="Pricing"
      className="bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-black text-sm font-semibold px-4 py-1 rounded-full mb-4">
            PRICING PLANS
          </span>
          <h2 className="text-gray-100 text-4xl md:text-5xl font-extrabold mb-3">
            Choose Your{" "}
            <span className=" bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Perfect Plan
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Flexible pricing to power your business with AI, from startups to
            enterprises.
          </p>
          <div className="mt-6 flex justify-center items-center space-x-3">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annual" : "monthly"
                )
              }
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle billing cycle"
            >
              <SwitchCamera size={18} className="text-cyan-300" />
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === "annual"
                  ? "bg-cyan-600 text-white"
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              Annual{" "}
              <span className="text-green-400 text-xs ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              //border border-transparent hover:border-gray-700
              className={`relative bg-gray-900/60 backdrop-blur-md   border border-gray-800/50 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-100 ease-out transform ${
                isAnimated
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <span className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Sparkles size={12} className="mr-1 animate-pulse" />
                  Most Popular
                </span>
              )}

              <h3 className="text-white text-2xl font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-teal-200 text-lg font-semibold mb-2">
                {plan.minutes}
              </p>
              <p className="text-4xl font-extrabold text-white mb-4">
                {plan.price}
              </p>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Check size={16} className="text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleCalendlyOpen}
                className={`w-full py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-md bg-gradient-to-r ${plan.gradient}`}
              >
                {plan.isCustom ? (
                  <span className="flex items-center justify-center">
                    <Sparkles size={16} className="mr-2 text-white" />
                    Contact Us
                  </span>
                ) : (
                  "Get Started"
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
