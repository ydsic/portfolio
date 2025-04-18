import { useState } from "react";
import DarkMod from "./DarkMod";
import UpScroll from "./UpScroll";
import Contact from "./Contact";

export default function FloatingButton() {
  const buttonStyle = `flex justify-center items-center absolute w-[60px]
  h-[60px] right-[60px] rounded-full bg-[var(--button)] hover:bg-[var(--button-hover)] 
  shadow-lg shadow-black/60 cursor-pointer
  `;

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <Contact
        buttonStyle={buttonStyle}
        mouseOver={mouseOver}
        setMouseOver={setMouseOver}
      />
      <UpScroll buttonStyle={buttonStyle} />
      <DarkMod buttonStyle={buttonStyle} />
      {mouseOver && <div></div>}
    </>
  );
}
