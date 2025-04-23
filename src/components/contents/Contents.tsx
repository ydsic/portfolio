import Education from "./Education";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Contents() {
  return (
    <>
      <div className="w-[70%] mt-[50px] mx-auto">
        <About />
        <Skills />
        <Projects />
        <Education />
      </div>
    </>
  );
}
