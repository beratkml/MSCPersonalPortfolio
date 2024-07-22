import Link from "next/link";
import React from "react";
interface INavbarProps {
  name: string;
  links: string;
}
export const Navbar: React.FC = () => {
  const links: Array<INavbarProps> = [
    { name: "beratk", links: "/" },
    { name: "About Me", links: "/about" },
    { name: "Skills", links: "/skills" },
    { name: "Contact", links: "/contact" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between">
        <ul className="flex">
          <li className="px-8 text-sm hover:text-zinc-400">
            <Link href={links[0].links}>{links[0].name}</Link>
          </li>
        </ul>

        <ul className="flex">
          {links.slice(1).map((e, i) => (
            <li className="py-8 mr-8 text-sm hover:text-zinc-400" key={i}>
              <Link href={e.links}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
