import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import SvgIcons from './svg';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-black py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Arctic</span> AI
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your Partner in Cutting-Edge Technology Solutions
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/arcticbluemedia"
                className="group relative p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
              >
                <img
                  src={process.env.PUBLIC_URL + "/TwitterLogo.png"}
                  alt="Twitter"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://www.instagram.com/arcticbluemedia"
                className="group relative p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
              >
                <img
                  src={process.env.PUBLIC_URL + "/InstagramLogo.png"}
                  alt="Instagram"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider border-b-2 border-blue-500 pb-2">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Reviews",  "FAQs"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.replace(/\s/g, "")}`}
                    className="text-gray-300 hover:text-blue-400 text-sm font-medium transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider border-b-2 border-purple-500 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <a
                  href="mailto:arcticbluemedia@gmail.com"
                  className="text-gray-300 hover:text-blue-400 text-sm font-medium transition-colors duration-300"
                >
                  arcticbluemedia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-800/50 rounded-lg">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <a
                  href="tel:+14043530423"
                  className="text-gray-300 hover:text-purple-400 text-sm font-medium transition-colors duration-300"
                >
                  +1 (404) 664-6609
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          variants={itemVariants}
          className="my-12 border-gray-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-gray-400 text-sm font-medium">
            Copyright © 2024 Arctic Blue Media
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;