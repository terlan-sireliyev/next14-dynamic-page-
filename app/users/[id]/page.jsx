"use client";
import { useEffect, useState } from "react";
const User = ({ params }) => {
  const { id } = params;
  const [comData, setComData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setComData(data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="p-4">
      <h1 className="text-[50px] border-2 border-red-300 text-center w-96 m-auto my-2">
        User Details
      </h1>
      <div className="border-2 border-red-300 w-96 m-auto p-2">
        <p>ID:{comData.id}</p>
        <p>
          <b>name: </b>
          {comData.name}
        </p>
        <p>
          <b>username: </b> {comData.username}
        </p>
        <p>
          <b>email: </b> {comData.email}
        </p>
      </div>
    </div>
  );
};

export default User;
//this is single page
