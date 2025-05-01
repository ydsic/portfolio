import DarkMod from "./DarkMod";
import UpScroll from "./UpScroll";
import Contact from "./Contact";
import "./FloatingButton.css";

export default function FloatingButton() {
  const buttonStyle = `flex justify-center items-center fixed w-[60px]
    h-[60px] right-[60px] rounded-full bg-[var(--button)] hover:bg-[var(--button-hover)] 
    shadow-lg shadow-black/60 cursor-pointer `;

  return (
    <div>
      <Contact buttonStyle={buttonStyle} />
      <UpScroll buttonStyle={buttonStyle} />
      <DarkMod buttonStyle={buttonStyle} />
    </div>
  );
}
