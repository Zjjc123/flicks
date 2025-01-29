import { MovieCard } from "./MovieCard";
import { movies } from "@/app/data/movies";

export function Explore() {
  // Get first 5 movies for featured section
  const featuredMovies = movies.slice(0, 5);

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-[2000px] mx-auto">
        <div className="pt-8 pb-4 px-12">
          <h1 className="text-2xl font-bold text-white">Best of the week</h1>
        </div>

        <section className="px-12 py-8">
          {featuredMovies.map((movie) => (
            <div className="pb-10" key={movie.id}>
              <MovieCard
                title={movie.title}
                rating={movie.rating}
                genres={movie.genres}
                imageUrl={movie.imageUrl}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
