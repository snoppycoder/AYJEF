"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "./component/cta";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="/background-3.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        alt="background"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <CTA />
    </div>
  );
}
