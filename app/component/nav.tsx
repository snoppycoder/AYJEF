"use client";
import Link from "next/link";
import { ClosedCaptionIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-[#222831] p-6 md:py-2 text-white font-bold relative ">
      <div className=" hidden  md:flex justify-between items-center w-full">
        <div className="flex flex-col items-center">
          <Link href={"/"}>
            <div className="w-10 h-10 rounded-full bg-[url('/nav-logo.png')] bg-cover bg-center cursor-pointer"></div>
          </Link>

          <span className="font-mono text-sm font-light mt-1">
            AYJEF Water Works
          </span>
        </div>

        {listOfLinks.map((item, index) => (
          <Link
            key={item.name}
            href={item.link}
            className={`mx-4 px-2 py-1  rounded ${
              pathname === item.link
                ? "text-yellow-500"
                : "hover:text-amber-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="absolute top-4 right-4 text-white"
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
              <Link
                key={item.name}
                href={item.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
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
