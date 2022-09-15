import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Switcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="switch" data-ison={theme} onClick={toggle}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
}
