import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();
  return (
    <>
      <footer>
        <div className="p-8 text-sm text-center">
          <p>© {currentYear} Berat Kamali All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
