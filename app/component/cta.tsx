"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function CTA() {
  return (
    <>
      <motion.div
        className="relative z-10 text-center text-white pt-40"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">
          AYJEF Water Works & Business Services
        </h1>
      </motion.div>

      <div className="relative z-20 w-full text-white p-6 text-center text-3xl font-extrabold">
        Reliable Water Solutions & Business Services You Can Trust
      </div>

      <motion.div
        className="relative z-20 w-full flex justify-center gap-4 mt-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link href={"/contact"}>
          <button className="bg-blue-200 px-6 py-2 rounded font-bold">
            Contact Us
          </button>
        </Link>
        <Link href={"/learn-more"}>
          <button className="bg-amber-200 px-6 py-2 rounded font-bold">
            Learn More
          </button>
        </Link>
      </motion.div>
    </>
  );
}
