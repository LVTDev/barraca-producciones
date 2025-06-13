import Hero from "@/components/generalUI/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <h2 className="text-4xl mb-10 lg:w-1/3">We are filmakers and storytellers sharing passion, drama and excitement.</h2>
      </div>
      <div className="flex gap-2">
        <Link className="bg-blue-300 rounded-lg px-3 py-2 cursor-pointer" href={"/film"}>Film</Link>
        <Link className="bg-blue-300 rounded-lg px-3 py-2 cursor-pointer" href={"/advertising"}>Advertising</Link>
        <Link className="bg-blue-300 rounded-lg px-3 py-2 cursor-pointer" href={"/rentals"}>Rentals</Link>
      </div>
    </div>
  );
}
