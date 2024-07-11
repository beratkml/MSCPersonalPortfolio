import React, { useRef } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  const objectref = useRef(null);
  const inView = useInView(objectref, { once: true });
  return (
    <>
      <motion.div
        variants={{
          start: { opacity: 0, y: 75 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate="end"
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
};
