import React, { useEffect } from "react";
import Hero from "../sections/About/Hero";
import Features from "../sections/About/Features";
import Info from "../sections/About/Info";
import WhyChoose from "../sections/About/WhyChoose";


const About = () => {
  
  useEffect(() => {
    document.title =
      "About Us | Rosy Garden - Where Fresh Blooms Speak the Language of Your Heart";
  }, []);

  return (
    <section className="container max-w-[1200px] mx-auto mt-16 mb-10 font-didot space-y-20">
      {/* Hero About Section */}
        <Hero/>
        <Features/>
        <Info/>
        <WhyChoose/>
      {/* About Info Cards */}

    </section>
  );
};

export default About;
