import React from 'react'
import Button from '../../components/ui/Button'

const Main = () => {
  return (
    <section className="font-didot mt-16 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
        
        {/* Left Image */}
        <div className="h-[420px] w-[320px] mx-auto grayscale-25 hover:grayscale-0 hover:scale-105 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
          <img 
            src="/images/sec-1st/1.svg" 
            alt="flower decoration" 
            className="h-full w-full object-cover" 
          />
        </div>

        {/* Center Text */}
        <div className="text-center lg:text-left px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Your One-Stop <br /> Flower Shop
          </h2>
          <p className="text-gray-500 max-w-md mx-auto lg:mx-0">
            From our garden to your home, we bring smiles with every bouquet. 
            Celebrate life’s moments with flowers that speak from the heart.
          </p>
          <Button message="Learn More" style="px-6 py-2 mt-6 text-md" />
        </div>

        {/* Right Image */}
        <div className="h-[420px] w-[320px] mx-auto grayscale-25 hover:grayscale-0 hover:scale-105 transition duration-500 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl overflow-hidden">
          <img 
            src="/images/sec-1st/2.svg" 
            alt="flower design" 
            className="h-full w-full object-cover" 
          />
        </div>
      </div>
    </section>
  )
}

export default Main
