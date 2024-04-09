"use client";
import Link from "next/link";

const index = ({ id, name, key }) => {
  return (
    <div>
      <Link key={key} href={`users/${id}`}>
        <div className="border-2 border-green-400 p-2 my-2 hover:bg-slate-200">
          {name}
        </div>
      </Link>
    </div>
  );
};

export default index;
//this is cardUser component
