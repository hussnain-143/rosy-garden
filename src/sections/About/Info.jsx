import React from 'react'
import {
  FiHeart,
  FiFeather,
  FiSmile,
  FiGlobe,
} from "react-icons/fi";

const Info = () => {

    const aboutData = [
        {
            icon: <FiHeart size={32} className="text-green-custom" />,
            title: "Our Passion",
            desc: "At Rosy Garden, flowers are more than gifts – they’re emotions, stories, and cherished memories.",
        },
        {
            icon: <FiFeather size={32} className="text-green-custom" />,
            title: "Our Mission",
            desc: "To deliver fresh, hand-picked blooms that make every moment truly special.",
        },
        {
            icon: <FiSmile size={32} className="text-green-custom" />,
            title: "Our Promise",
            desc: "From sustainable farms to your doorstep, every bouquet is crafted with love and care.",
        },
        {
            icon: <FiGlobe size={32} className="text-green-custom" />,
            title: "Our Community",
            desc: "We bring together flower lovers through tips, stories, and festivals that celebrate nature’s beauty.",
        },
    ];
    return (
        <>
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aboutData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:shadow-lg transition"
                        >
                            <div>{item.icon}</div>
                            <h2 className="text-red-custom font-bold text-lg">{item.title}</h2>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Info