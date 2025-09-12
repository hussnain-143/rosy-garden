import React from 'react'
import { FiTruck, FiStar, FiThumbsUp, FiGift } from 'react-icons/fi'

const Features = () => {
  const featureData = [
    {
      icon: <FiTruck size={30} className="text-green-custom" />,
      title: "Free Shipping",
      desc: "On orders above $100",
    },
    {
      icon: <FiStar size={30} className="text-green-custom" />,
      title: "Fresh Flowers",
      desc: "Direct from farm",
    },
    {
      icon: <FiThumbsUp size={30} className="text-green-custom" />,
      title: "100% Positive",
      desc: "Customer feedback",
    },
    {
      icon: <FiGift size={30} className="text-green-custom" />,
      title: "Occasions",
      desc: "Flowers for every moment",
    },
  ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10 font-didot'>
      {featureData.map((feature, index) => (
        <div
          key={index}
          className='bg-gray-200 flex items-center justify-center gap-5 p-6 text-center rounded-lg hover:shadow-lg transition-all duration-300'
        >
          <div>{feature.icon}</div>
          <div>
            <h2 className='text-red-custom font-bold text-lg'>{feature.title}</h2>
            <p className='text-gray-500 text-sm'>{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
