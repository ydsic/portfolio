type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  image?: string;
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  date,
  description,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-[350px] h-[400px] bg-[var(--sub-bg2)] border border-[var(--border)] shrink-0 p-4 flex flex-col justify-between
                 cursor-pointer transition-all duration-300 transform 
                 hover:scale-105 hover:bg-[var(--hover-bg)]"
    >
      <div>
        <p className="text-sm text-[var(--sub-text)]">{date}</p>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover mb-2 rounded"
        />
      )}
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-[var(--main-text)]">{description}</p>
      </div>
    </div>
  );
}
