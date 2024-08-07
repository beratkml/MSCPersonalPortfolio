"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface INavbarProps {
  name: string;
  links: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const links: Array<INavbarProps> = [
    { name: !isMobile ? "Berat Kamali" : "Home", links: "/" },
    { name: "About Me", links: "/about" },
    { name: "Skills", links: "/skills" },
    { name: "Contact", links: "/contact" },
  ];

  useEffect(() => {
    const handleBreakpoint = () => {
      setIsMobile(window.innerWidth < 750);
    };
    handleBreakpoint();
    window.addEventListener("resize", handleBreakpoint);
    return () => window.removeEventListener("resize", handleBreakpoint);
  }, []);

  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex w-full items-center justify-between">
            <ul className="flex">
              <li className="py-4 hidden md:block text-md hover:text-zinc-400">
                <Link href={links[0].links}>{links[0].name}</Link>
              </li>
            </ul>
            <ul className="hidden md:flex md:space-x-8">
              {links.slice(1).map((e, i) => (
                <li className="py-4 text-md hover:text-zinc-400" key={i}>
                  <Link href={e.links}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleOpen}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`md:hidden w-full ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col">
              {links.map((e, i) => (
                <li className="py-4 text-md hover:text-zinc-400" key={i}>
                  <Link href={e.links}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
