import React from 'react'
import {
    FiCheckCircle,
} from "react-icons/fi";

const Features = () => {
    // Extra features (highlights)
    const features = [
        { title: "Free Shipping", desc: "On orders above $100" },
        { title: "Fresh Flowers", desc: "Direct from farm" },
        { title: "100% Positive", desc: "Customer feedback" },
        { title: "Occasions", desc: "Flowers for every moment" },
    ];
    return (
        <>
            {/* Features Section */}
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center">
                    What Makes Us Special
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg transition"
                        >
                            <FiCheckCircle size={28} className="text-green-custom" />
                            <h2 className="text-lg font-semibold text-red-custom">
                                {item.title}
                            </h2>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Features