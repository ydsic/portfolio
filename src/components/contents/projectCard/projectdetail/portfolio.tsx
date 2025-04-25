type CloseModal = {
  onClose: () => void;
};

export default function PortfolioContents({ onClose }: CloseModal) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-[var(--overlay-bg)] flex justify-center items-center z-50"
    >
      <div className="bg-[var(--sub-bg)] p-8 rounded shadow-lg w-[600px] max-w-[90%]">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <p>프로젝트의 설명</p>
      </div>
    </div>
  );
}
