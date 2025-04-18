import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useThemeStore } from "../../store/darkModeStore";

type Props = {
  buttonStyle: string;
};

export default function DarkMod({ buttonStyle }: Props) {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <>
      <button onClick={toggleTheme} className={`${buttonStyle} bottom-[60px]`}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>
    </>
  );
}
