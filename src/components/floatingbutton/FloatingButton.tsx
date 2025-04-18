import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DarkMod from "./DarkMod";
import UpScroll from "./UpScroll";

export default function FloatingButton() {
  const buttonStyle = `flex justify-center items-center absolute w-[60px]
  h-[60px] right-[60px] rounded-full bg-[var(--button)] hover:bg-[var(--button-hover)] 
  shadow-lg shadow-black/60 cursor-pointer
  `;
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <button
        className={`${buttonStyle} bottom-[140px]`}
        onMouseOver={() => setMouseOver(!mouseOver)}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>

      <UpScroll buttonStyle={buttonStyle} />
      <DarkMod buttonStyle={buttonStyle} />
    </>
  );
}
