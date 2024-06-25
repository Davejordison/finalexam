import React from "react";
import { useQuery } from "@tanstack/react-query";
import RoomList from "../components/RoomList.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const fetchRooms = async () => {
  const response = await fetch('/api/rooms');
  const data = await response.json();
  return data.rooms;
};

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms,
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error fetching rooms</div>;

  return (
    <div className="container mx-auto">
      <RoomList rooms={data} />
    </div>
  );
};

export default Home;
