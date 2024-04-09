"use client";
import React, { useEffect, useState } from "react";
import UserComp from "../../components/usersData/cardUser";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchDataAndSetData();
  }, []);

  return (
    <div className="p-4">
      <div>
        <h1 className="text-[50px]  border-2 border-green-500 text-center">
          User List
        </h1>
      </div>
      <div className="">
        {data?.map((item) => (
          <UserComp key={item.id} name={item.name} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Index;
