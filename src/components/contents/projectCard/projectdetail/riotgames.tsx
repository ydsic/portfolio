import { outerDiv, titleDiv, titleText } from "./projectDetailStyle";

type CloseModal = {
  onClose: () => void;
};

export default function RiotGames({ onClose }: CloseModal) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={outerDiv} onClick={handleOverlayClick}>
      <div className={titleDiv}>
        <h2 className={titleText}>Riot Games</h2>
        <p>프로젝트의 설명</p>
      </div>
    </div>
  );
}
