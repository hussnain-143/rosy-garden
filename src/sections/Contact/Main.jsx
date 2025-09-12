import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Button from '../../components/ui/Button'
const Main = () => {
      // Contact info data
  const contactInfo = [
    { icon: <FiMapPin size={28} className="text-green-custom" />, title: "Our Address", desc: "123 Flower Street, Garden City" },
    { icon: <FiPhone size={28} className="text-green-custom" />, title: "Phone", desc: "+92 300 1234567" },
    { icon: <FiMail size={28} className="text-green-custom" />, title: "Email", desc: "support@rosygarden.com" },
  ];
  return (
    <>
            <div className="container max-w-[1200px] mx-auto mt-16 mb-10 font-didot space-y-20" >
      {/* Section Header */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center">
        Get in Touch
      </h2>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-red-custom">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-custom"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-custom"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 text-sm font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-custom"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button
              message={
                <span className="flex items-center gap-2">
                  Send Message <FiSend />
                </span>
              }
              style="px-6 py-3 bg-green-custom"
            />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Main