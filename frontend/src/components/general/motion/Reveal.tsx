import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "100%" }) => {
  const objectRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(objectRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div ref={objectRef} style={{ width }}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
