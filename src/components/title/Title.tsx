import { Link } from "react-scroll";
import ScrollProgressBar from "../ScrollProgressBar";

export default function Title() {
  const linkStyle =
    "text-[var(--main-text)] text-[20px] cursor-pointer transition duration-200 hover:text-[var(--primary)] hover:underline underline-offset-4";
  const activeStyle = "text-[var(--primary)] underline underline-offset-4";

  return (
    <>
      <div className="fixed w-screen h-[8vh] flex justify-between items-center bg-[var(--title-bg)] backdrop-blur-sm z-50">
        <div className="ml-52">
          <p className="text-[var(--main-text)] text-[24px] font-[Poppins] font-[800]">
            Yedo Portfolio
          </p>
        </div>
        <div className="flex gap-15 mr-52">
          {["about", "skills", "projects", "education"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={700}
              offset={-30}
              className={linkStyle}
              activeClass={activeStyle}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <ScrollProgressBar />
    </>
  );
}
