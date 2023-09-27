import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

export function Reveal({ children, className }) {
  const ref = useRef();
  const isView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(
    function () {
      if (isView) {
        mainControls.start("visible");
        console.log("inView");
      }
    },
    [isView],
  );

  return (
    <div>
      <motion.div
        ref={ref}
        variants={{ hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25, delayChildren: 0.2, staggerChildren: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
      ;
    </div>
  );
}
