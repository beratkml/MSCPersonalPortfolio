import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();
  return (
    <>
      <footer>
        <div className="h-2 bg-gradient-to-r from-slate-900 to-zinc-400"></div>
        <div className="p-8 text-center">
          <p>© {currentYear} Berat Kamali All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
