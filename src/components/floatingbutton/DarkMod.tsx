type btnStyleType = {
  buttonStyle: string;
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useThemeStore } from "../../store/darkModeStore";
import { useState } from "react";
import "./DarkModStyle.css";

export default function DarkMod({ buttonStyle }: btnStyleType) {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [mouseOver, setMouseOver] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggleTheme = () => {
    setIsAnimating(true);
    toggleTheme();

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <button
        onClick={handleToggleTheme}
        className={`${buttonStyle} bottom-[60px] hidden md:flex`}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className={`changeModeIcon ${isAnimating ? "iconmoveup" : ""}`}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>

      {mouseOver && (
        <div className="flex fixed justify-center items-center bottom-[70px] right-[130px] w-[100px] py-1.5 bg-[var(--sub-bg2)]">
          <p className="text-[var(--main-text)]">모드전환</p>
        </div>
      )}
    </>
  );
}
