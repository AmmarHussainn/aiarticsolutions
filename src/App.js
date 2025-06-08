import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import Team from './components/Team';
import Process from './components/Process';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Trusted from './components/Trusted';
import WhyChoose from './components/WhyChoose';
import AIAgents from './components/AIAgents';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Trusted />
      <AboutUs />
      <AIAgents/>
      <Services />
      <PricingSection/>
      <Testimonials />
      {/* <ClientReviews /> */}
      {/* <Team /> */}
      <Process />
      <WhyChoose />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
