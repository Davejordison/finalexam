//import React from "react";
import { Link } from "react-router-dom";

const RoomList = ({ rooms }) => (
  <div id="rooms" className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {rooms.map(room => (
      <Link key={room.id} to={`/rooms/${room.id}`} className="block p-4 border rounded hover:bg-gray-100">
        {room.name}
      </Link>
    ))}
  </div>
);

export default RoomList;
