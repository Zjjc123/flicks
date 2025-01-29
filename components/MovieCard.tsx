interface MovieCardProps {
  title: string;
  rating: number;
  genres: string[];
  imageUrl: string;
}

export function MovieCard({ title, rating, genres, imageUrl }: MovieCardProps) {
  return (
    <div className="group relative cursor-pointer">
      <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-900">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-all duration-300 group-hover:opacity-80"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-md font-semibold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/90">{rating}</span>
          <span className="text-xs text-white/60">|</span>
          <span className="text-xs text-white/60">{genres.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
