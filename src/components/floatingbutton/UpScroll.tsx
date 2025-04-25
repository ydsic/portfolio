import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-scroll";

export default function UpScroll() {
  const buttonStyle = `flex justify-center items-center fixed w-[60px]
    h-[60px] right-[60px] rounded-full bg-[var(--button)] hover:bg-[var(--button-hover)] 
    shadow-lg shadow-black/60 cursor-pointer`;
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <Link
        to="about"
        smooth={true}
        duration={700}
        offset={-30}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className={`${buttonStyle} bottom-[220px]`}
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          size="xl"
          style={{ color: "#ffffff" }}
          bounce={mouseOver}
        />
      </Link>
      {mouseOver && (
        <div className="flex fixed justify-center items-center bottom-[230px] right-[130px] w-[100px] py-1.5 bg-[var(--sub-bg2)]">
          <p className="text-[var(--main-text)]">위로가기</p>
        </div>
      )}
    </>
  );
}
