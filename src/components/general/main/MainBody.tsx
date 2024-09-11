import React from "react";
import Link from "next/link";

export const MainBody: React.FC = () => {
  return (
    <>
      <section className="h-screen-custom flex justify-center items-center ">
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
      </section>
    </>
  );
};
