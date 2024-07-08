import Link from "next/link";
import React from "react";
interface INavbarProps {
  name: string;
  links: string;
}
export const Navbar: React.FC = () => {
  const links: Array<INavbarProps> = [
    { name: "home", links: "/" },
    { name: "about me", links: "/about" },
    { name: "competences", links: "/competences" },
    { name: "contact", links: "/contact" },
  ];

  return (
    <>
      <nav>
        <div className="flex items-center justify-center">
          <ul className="flex p-8">
            {links.map((e, i) => (
              <li className="px-8" key={i}>
                <Link href={e.links}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-2 bg-gradient-to-r from-pink-700 to-blue-300"></div>
      </nav>
    </>
  );
};
