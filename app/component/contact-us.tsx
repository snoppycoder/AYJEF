"use client";
import { motion } from "framer-motion";
export default function ContactUsForm() {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="col-span-2 py-4 px-4 bg-white shadow-2xl rounded-xl h-auto"
    >
      <h2 className="text-xl font-bold text-center p-1">Send us a message</h2>

      <form className="p-4 flex flex-col gap-y-3">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full flex flex-col ">
            <label htmlFor="firstname" className="mb-1">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full px-4 py-2 border-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-full flex flex-col ">
            <label htmlFor="lastname" className="mb-1">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full px-4 py-2 border-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <div className="w-full flex">
            <span className="bg-gray-100 text-gray-800 px-3 flex items-center rounded-md">
              +251
            </span>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="w-full flex">
          <textarea
            placeholder="What can we help?"
            className="p-2 w-full border border-gray-300 bg-white h-36 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-[#333] font-bold text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
