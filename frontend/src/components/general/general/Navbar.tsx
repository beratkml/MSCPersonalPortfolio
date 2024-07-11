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
    { name: "Competences", links: "/competences" },
    { name: "Contact", links: "/contact" },
  ];

  return (
    <>
      <nav>
        <div className="flex items-center justify-between">
          <div>
            <ul className="flex">
              <li className="p-8">
                <Link href={links[0].links}>{links[0].name}</Link>
              </li>
            </ul>
          </div>
          <ul className="flex p-8">
            {links.slice(1).map((e, i) => (
              <li className="px-8" key={i}>
                <Link href={e.links}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
