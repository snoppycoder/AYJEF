"use client";

import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

type CardType = {
  src: string;
  detail: string;
  alt?: string;
};

export default function ProjectCard({
  src,
  detail,
  alt = "Project image",
}: CardType) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-72 p-2 bg-white h-auto hover:scale-105 mb-4 rounded-lg overflow-hidden shadow-lg flex flex-col ">
      <div className="relative w-full h-40">
        {!loaded && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full  object-cover transition-all ease-in-out duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }  `}
        />
      </div>

      <div className="p-1 mt-2 bg-white">
        <p className="text-md text-gray-700">{detail}</p>
      </div>
    </div>
  );
}
