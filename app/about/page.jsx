"use client";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Home() {
  const paramsSearch = useSearchParams().get("name");
  const path = usePathname();
  return (
    <>
      <div className="p-2">
        <b>useSearchParams</b> : {paramsSearch} ----
        <b> usePathname</b> : {path}
      </div>
    </>
  );
}
