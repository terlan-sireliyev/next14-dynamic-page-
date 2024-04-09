"use client";
import Image from "next/image";
export default function NotFound() {
  return (
    <>
      {/* <div className="p-2">Not Found</div> */}
      <div className="bg-red-500">
        <Image
          src="/404Page.svg"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
      </div>
    </>
  );
}
