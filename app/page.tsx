import { Featured } from "@/components/Featured";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Featured
        title="RABBIT"
        rating={9.3}
        genres={["DRAMA", "EXPERIMENTAL"]}
        description="On an afternoon in the countryside, we follow Anna's childhood memory of her Grandfather and learn about a complex relationship as events unfold."
        image="/film/rabbit.png"
        awards={["Best First-Time Female Director"]}
      />
    </main>
  );
}
