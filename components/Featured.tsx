import { Button } from "./ui/button";
import { GiOlive } from "react-icons/gi";
import { useRouter } from "next/navigation";

interface FeaturedProps {
  id: string;
  title: string;
  rating: number;
  genres: string[];
  description: string;
  image: string;
  awards?: string[];
}

export function Featured({
  id,
  title,
  rating,
  genres,
  description,
  image,
  awards,
}: FeaturedProps) {
  const router = useRouter();

  return (
    <div className="relative h-[50vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover brightness-75"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20">
        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className="mb-2 flex items-center gap-2">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-1 text-xs text-gray-200"
              >
                <GiOlive className="text-md" />
                {award}
                <GiOlive className="text-md scale-x-[-1]" />
              </div>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="mb-2 text-4xl font-bold text-white">{title}</h1>

        {/* Rating and Genres */}
        <div className="mb-4 flex items-center gap-4">
          <span className="text-md font-semibold text-white">{rating}</span>
          <div className="flex gap-2">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="text-xs uppercase tracking-wider text-gray-300"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 max-w-xl text-gray-200 text-xs">{description}</p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {/* <Button
            variant="default"
            size="lg"
            onClick={() => router.push(`/films/${id}`)}
          >
            WATCH
          </Button> */}
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push(`/films/${id}`)}
          >
            MORE
          </Button>
        </div>
      </div>
    </div>
  );
}
