import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useThemeStore } from "../../store/darkModeStore";
import { useState } from "react";

export default function DarkMod() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const buttonStyle = `flex justify-center items-center absolute w-[60px]
    h-[60px] right-[60px] rounded-full bg-[var(--button)] hover:bg-[var(--button-hover)] 
    shadow-lg shadow-black/60 cursor-pointer`;
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <button
        onClick={toggleTheme}
        className={`${buttonStyle} bottom-[60px]`}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>
      {mouseOver && (
        <div className="flex absolute justify-center items-center bottom-[70px] right-[130px] w-[100px] py-1.5 bg-[var(--sub-bg2)]">
          <p className="text-[var(--main-text)]">모드전환</p>
        </div>
      )}
    </>
  );
}
