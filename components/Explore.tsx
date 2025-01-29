import { MovieCard } from "./MovieCard";

const featuredMovies = [
  {
    title: "Rabbit",
    rating: 9.3,
    genres: ["Drama", "Experimental"],
    imageUrl: "/films/rabbit.png",
  },
  {
    title: "I Left My Home",
    rating: 8.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/i-left-my-home.png",
  },
  {
    title: "Kairos",
    rating: 7.4,
    genres: ["Experimental", "Sci-Fi"],
    imageUrl: "/films/kairos.png",
  },
  {
    title: "Metasis",
    rating: 8.5,
    genres: ["Sci-Fi", "Drama"],
    imageUrl: "/films/metasis.png",
  },
  {
    title: "The Sweetness Of Lapse",
    rating: 7.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/the-sweetness-of-lapse.png",
  },
];

export function Explore() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-[2000px] mx-auto">
        <div className="pt-8 pb-4 px-12">
          <h1 className="text-2xl font-bold text-white">Best of the week</h1>
        </div>

        <section className="px-12 py-8">
          {featuredMovies.map((movie) => (
            <div className="pb-10" key={movie.title}>
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
