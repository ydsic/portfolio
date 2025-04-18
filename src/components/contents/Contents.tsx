import Education from "./Education";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skils";

export default function Contents() {
  return (
    <>
      <div className="w-[75%] mt-[50px] mx-auto">
        <Profile />
        <Skills />
        <Projects />
        <Education />
      </div>
    </>
  );
}
