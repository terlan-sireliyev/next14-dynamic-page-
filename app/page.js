// "use client";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <Link href={"/about?name=terlan&age=28"}>Link - 1 </Link>
      </div>
    </>
  );
}
