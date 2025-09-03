"use client";
import Image from "next/image";
import CTA from "./component/cta";
import { useState } from "react";
import LoadingSpinner from "./component/loading";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-screen">
      <Image
        src="/background-3.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        alt="background"
        priority
        onLoad={() => setLoaded(true)}
      />

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      {loaded && (
        <>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <CTA />
        </>
      )}
    </div>
  );
}
