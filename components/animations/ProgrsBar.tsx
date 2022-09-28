import { motion, useScroll } from "framer-motion";
import { children } from "dom7";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="sticky top-[72px] z-30 left-0 h-0.5 bg-claretDark origin-[0%]"
      />
    </>
  );
};
export default ProgressBar;
