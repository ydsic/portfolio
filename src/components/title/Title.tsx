import { useState } from "react";
import { Link } from "react-scroll";
import ScrollProgressBar from "../ScrollProgressBar";
import "./Title.css";

export default function Title() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "text-[var(--main-text)] text-[20px] cursor-pointer transition duration-200 hover:text-[var(--primary)] hover:underline underline-offset-4";
  const activeStyle = "text-[var(--primary)] underline underline-offset-4";

  const navLinks = ["about", "skills", "projects", "blog"];

  return (
    <>
      <div className="fixed w-screen h-[8vh] flex justify-between items-center bg-[var(--title-bg)] backdrop-blur-sm z-50 px-52 header">
        <div>
          <p className="text-[var(--main-text)] text-[24px] font-[Poppins] font-[700] title-text">
            Yedo Portfolio
          </p>
        </div>

        <div className="flex gap-15 nav-list">
          {navLinks.map((section) =>
            section === "blog" ? (
              <a
                key={section}
                href="https://blog.yedo.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                Blog
              </a>
            ) : (
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
            )
          )}
        </div>

        <div className="hamburger hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--main-text)] text-[24px]"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((section) =>
            section === "blog" ? (
              <a
                key={section}
                href="https://blog.yedo.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            ) : (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={700}
                offset={-30}
                className={linkStyle}
                activeClass={activeStyle}
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )
          )}
        </div>
      )}

      <ScrollProgressBar />
    </>
  );
}
