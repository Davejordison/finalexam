import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FurnitureList from "../components/FurnitureList.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const fetchRoomFurnitures = async ({ queryKey }) => {
  const [, roomId] = queryKey;
  const response = await fetch(`/api/rooms/${roomId}/furnitures`);
  const data = await response.json();
  return data.furnitures;
};

const RoomDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['roomFurnitures', id],
    queryFn: fetchRoomFurnitures,
  });
  const [search, setSearch] = useState({ weight: "", price: "" });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error fetching furnitures</div>;

  const filteredFurnitures = data.filter(furniture =>
    (search.weight === "" || furniture.weight <= parseInt(search.weight)) &&
    (search.price === "" || furniture.price <= parseInt(search.price))
  );

  return (
    <div className="container mx-auto">
      <div className="flex space-x-4 my-4">
        <input
          id="weight"
          type="number"
          placeholder="Search by weight"
          value={search.weight}
          onChange={e => setSearch({ ...search, weight: e.target.value })}
          className="border p-2"
        />
        <input
          id="price"
          type="number"
          placeholder="Search by price"
          value={search.price}
          onChange={e => setSearch({ ...search, price: e.target.value })}
          className="border p-2"
        />
      </div>
      <FurnitureList furnitures={filteredFurnitures} />
    </div>
  );
};

export default RoomDetails;
