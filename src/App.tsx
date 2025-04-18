import "./App.css";
import FloatingButton from "./components/floatingbutton/FloatingButton";
import Title from "./components/title/Title";
import { useThemeStore } from "./store/darkModeStore";

function App() {
  const { isDarkMode } = useThemeStore();

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
