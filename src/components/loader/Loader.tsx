export default function Loader() {
  return (
    <div className="bg-[var(--bg)] w-screen h-screen absolute z-1 flex justify-center items-center">
      <img
        src="/puzzle/left_top.svg"
        width={600}
        height={600}
        alt="퍼즐 조각1"
        className="absolute"
      />
      <img
        src="/puzzle/left_bottom.svg"
        width={600}
        height={600}
        alt="퍼즐 조각2"
        className="absolute"
      />
      <img
        src="/puzzle/right_top.svg"
        width={600}
        height={600}
        alt="퍼즐 조각3"
        className="absolute"
      />
      <img
        src="/puzzle/right_bottom.svg"
        width={600}
        height={600}
        alt="퍼즐 조각4"
        className="absolute"
      />
      <img
        src="/puzzle/center.svg"
        width={600}
        height={600}
        alt="퍼즐 조각5"
        className="absolute"
      />
    </div>
  );
}

// PM #8B5CF6
// BE #EF4444
// FE #10B981
// De #3B82F6
// QA #FACC15
