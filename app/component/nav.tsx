"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
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
    <nav className="bg-gray-800 p-4 text-white font-bold relative ">
      <div className="hidden  md:flex justify-evenly w-full">
        <div className="absolute left-12 p-2 w-8 h-8 rounded-full bg-[url('/nav-logo.png')] bg-cover bg-center cursor-pointer">
          <Link href={"/"}></Link>
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
          <Menu></Menu>
        </button>
      </div>
      {isOpen && (
        <div className="w-full">
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
