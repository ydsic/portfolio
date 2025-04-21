import { useState, useEffect } from "react";
import "./App.css";
import FloatingButton from "./components/floatingbutton/FloatingButton";
import Title from "./components/title/Title";
import { useThemeStore } from "./store/darkModeStore";
import Loader from "./components/loader/Loader";
import Content from "./components/contents/Contents";

function App() {
  const [initialLoading, setInitialLoading] = useState(false);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        isDarkMode ? "dark_theme" : "light_theme"
      } bg-[var(--bg)] w-screen h-screen overflow-y-auto`}
    >
      {initialLoading ? (
        <Loader />
      ) : (
        <>
          <Title />
          <Content />
          <FloatingButton />
        </>
      )}
    </div>
  );
}

export default App;
