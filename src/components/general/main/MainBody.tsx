import React, { useEffect } from "react";
import Link from "next/link";
import { Reveal } from "../motion/Reveal";

export const MainBody: React.FC = () => {
  return (
    <>
      <section className="min-h-screen bg-zinc-950 flex justify-center items-center ">
        <Reveal>
          <div className="text-center">
            <h2 className="text-5xl font-bold">Berat Kamali</h2>
            <p className="text-xl mt-4">Applied Informatics Student</p>
            <div className="space-x-4 mt-6">
              <Link href="/about">
                <button className="bg-stone-900 w-40 px-8 text-white font-semibold py-2 border border-gray-400 shadow">
                  About Me
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-neutral-50 w-40 text-stone-900 font-semibold py-2 px-4">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};
