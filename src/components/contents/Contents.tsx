import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import "./Contents.css";

export default function Contents() {
  return (
    <>
      <div className="w-[70%] mt-[50px] mx-auto contentDiv">
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
