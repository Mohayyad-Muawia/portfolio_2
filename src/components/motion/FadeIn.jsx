import * as motion from "motion/react-client";

const ScrollFadeIn = ({
  children,
  className = "",
  delay = 0.2,
  duration = 0.2,
  yOffset = 50,
  index = 1,
  id = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay: delay * index,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
