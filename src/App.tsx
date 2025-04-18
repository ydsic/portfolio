import { useEffect } from "react";
import "./App.css";
import FloatingButton from "./components/floatingbutton/FloatingButton";
import Title from "./components/title/Title";
import { useThemeStore } from "./store/darkModeStore";

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    console.log("첫 로딩애니메이션");
  }, []);

  return (
    <div
      className={`${
        isDarkMode ? "dark_theme" : "light_theme"
      } bg-[var(--bg)] w-screen h-screen`}
    >
      <Title />
      <FloatingButton />
    </div>
  );
}

export default App;
