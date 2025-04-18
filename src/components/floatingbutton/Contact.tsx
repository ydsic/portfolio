import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {
  buttonStyle: string;
  mouseOver: boolean;
  setMouseOver: (value: boolean) => void;
};

export default function Contact({ buttonStyle, setMouseOver }: Props) {
  return (
    <button
      className={`${buttonStyle} bottom-[140px]`}
      onMouseOver={() => setMouseOver(true)}
    >
      <FontAwesomeIcon
        icon={faEnvelope}
        size="xl"
        style={{ color: "#ffffff" }}
      />
    </button>
  );
}
