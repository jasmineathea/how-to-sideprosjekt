import { ProjectList } from "./components/project-list";
import { Navigation } from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center h-full gap-10 p-24">
      <h1 className="text-3xl font-medium">
        Velkommen!
      </h1>
      <Navigation />
    </main>
  );
}
