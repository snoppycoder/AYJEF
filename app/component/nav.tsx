"use client";
import Link from "next/link";
import { ClosedCaptionIcon, Menu, X } from "lucide-react";
import { useState } from "react";
export default function NavigationBar() {
  const listOfLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-950 p-4 text-white font-bold relative ">
      <div className="hidden  md:flex justify-evenly w-full">
        <div className="absolute left-12 p-2 w-8 h-8 rounded-full bg-[url('/nav-logo.png')] bg-cover bg-center cursor-pointer">
          <a href={"/"}></a>
        </div>
        {listOfLinks.map((item) => (
          <Link key={item.name} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="absolute  top-0 right-0 text-white"
        >
          {!isOpen ? <Menu></Menu> : <X></X>}
        </button>
      </div>
      {isOpen && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {listOfLinks.map((item) => (
            <div className="flex flex-col text-center font-normal">
              <Link key={item.name} href={item.link}>
                {item.name}
              </Link>
              <hr />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
