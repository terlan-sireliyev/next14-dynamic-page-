"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const backRouter = () => {
    router.push("/users");
  };
  return (
    <>
      <div className=" p-4">
        <div className="bg-green-300 p-4">
          <ul>
            <li onClick={backRouter}>
              <Link href={"/"} className="bg-green-500 text-center p-2">
                Back users List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
