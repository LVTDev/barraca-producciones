import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/rentals"}>Rentals</Link>
      </div>
    </div>
  );
}
