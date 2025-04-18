import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
  buttonStyle: string;
};

export default function UpScroll({ buttonStyle }: Props) {
  return (
    <>
      <button className={`${buttonStyle} bottom-[220px] `}>
        <FontAwesomeIcon
          icon={faChevronUp}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>
    </>
  );
}
