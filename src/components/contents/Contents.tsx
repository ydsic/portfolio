import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import "./Contents.css";

export default function Contents() {
  return (
    <>
      <div className="w-[70%] mt-[50px] mx-auto contentDiv space-y-16 lg:space-y-20">
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
