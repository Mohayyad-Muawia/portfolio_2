"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ targetNumber = 100 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [animationDone, setAnimationDone] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 2,
        delay: 1.2,
        ease: "easeOut",
        onComplete: () => {
          setAnimationDone(true);
          setTimeout(() => setAnimationDone(false), 200);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetNumber]);

  return (
    <motion.span
      ref={ref}
      animate={
        animationDone
          ? { scale: 1.5, color: "#ffffff" }
          : { scale: 1, color: "var(--main)" }
      }
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="font-bold"
    >
      {rounded}
    </motion.span>
  );
}
