import "./App.css";
import FloatingButton from "./components/floatingbutton/FloatingButton";
import Title from "./components/title/Title";
import { useThemeStore } from "./store/darkModeStore";
import Content from "./components/contents/Contents";
import Footer from "./components/footer/Footer";

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`${
        isDarkMode ? "dark_theme" : "light_theme"
      } bg-[var(--bg)] w-screen min-h-screen overflow-y-auto relative transition-all duration-300`}
    >
      <>
        <Title />
        <Content />
        <Footer />
        <FloatingButton />
      </>
    </div>
  );
}

export default App;
