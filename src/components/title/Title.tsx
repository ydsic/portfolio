export default function Title() {
  const textStyle = `text-[var(--main-text)] text-[20px]`;
  return (
    <>
      <div className="w-screen h-[8vh] flex justify-between items-center">
        <div className="ml-52">
          <p className="text-[var(--main-text)] text-[24px] font-[Poppins] font-[800]">
            Yedo Portfolio
          </p>
        </div>
        <div className="flex gap-15 mr-52">
          <p className={textStyle}>About</p>
          <p className={textStyle}>Skills</p>
          <p className={textStyle}>Projects</p>
        </div>
      </div>
    </>
  );
}
