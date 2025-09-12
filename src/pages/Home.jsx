import Features from "../sections/Home/Features";
import Hero from "../sections/Home/Hero";
import Main from "../sections/Home/Main";
import Shop from "../sections/Home/Shop";
import FeaturedBouquet from "../sections/Home/featuredBouquet";
import Community from "../sections/Home/Community";
import { useEffect } from "react";
const Home = () => {

  useEffect( () =>{
    document.title = "Rosy Garden | Where Fresh Blooms Speak the Language of Your Heart"
  }, [])

  return (
    <>
      <div className="container max-w-[1200px] mx-auto mt-16 ">
          <Hero/>
          <div className="none mt-4 md:block border-2 container max-w-[1200px]  mx-auto"></div>
          <Features/>
          <Main/>
          <Shop/>
          <FeaturedBouquet/>
          <Community/>
      </div>

    </>
  );
};

export default Home;
