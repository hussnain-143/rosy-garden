import React from 'react'
import {
  FiAward,
} from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const WhyChoose = () => {
      // Why Choose Us (extra section)
      const chooseUs = [
        {
          icon: <FaLeaf size={30} className="text-green-custom" />,
          title: "Eco-Friendly Practices",
          desc: "We focus on sustainability by sourcing responsibly and minimizing waste.",
        },
        {
          icon: <FiAward size={30} className="text-green-custom" />,
          title: "Trusted Quality",
          desc: "Every arrangement is inspected and crafted to perfection for your special occasions.",
        },
      ];
  return (
    <>
         {/* Why Choose Us */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center">
          Why Choose Rosy Garden?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-8 rounded-xl flex flex-col items-center text-center gap-4 hover:shadow-lg transition"
            >
              <div>{item.icon}</div>
              <h3 className="text-lg font-semibold text-red-custom">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WhyChoose