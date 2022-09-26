import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun, HiDesktopComputer } from "react-icons/hi";
import { useOnClickOutside } from "../../../hooks/useClickOutside";

type Ref = HTMLDivElement | null;

export function Theme() {
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const ulRef = useRef<Ref>(null);

  useEffect(() => setMounted(true), []);
  useOnClickOutside(ulRef, () => setShowDialog(false));

  let icon;
  switch (resolvedTheme) {
    case "light":
      icon = <HiOutlineSun />;
      break;
    case "dark":
      icon = <HiOutlineMoon />;
      break;
    default:
      icon = <HiDesktopComputer />;
      break;
  }

  const themeOpt = [
    { name: "light", icon: <HiOutlineSun /> },
    { name: "dark", icon: <HiOutlineMoon /> },
    { name: "system", icon: <HiDesktopComputer /> },
  ];

  if (!mounted) return null;

  return (
    <div ref={ulRef} className="relative mt-1">
      <button
        onClick={() => {
          setShowDialog((prev) => !prev);
        }}
      >
        {icon}
      </button>
      {showDialog && (
        <ul
          className="absolute top-8 -left-14 bg-backgroundColorTest shadow-2xl border border-grayLighter dark:bg-grayLight p-2 w-fit rounded-md"
          onClick={() => setShowDialog(false)}
        >
          {themeOpt.map((el) => (
            <li
              key={el.name}
              onClick={() => setTheme(el.name)}
              className="flex items-center cursor-pointer hover:opacity-75"
            >
              <span className="text-lg mr-1">{el.icon}</span>
              <span>{el.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
