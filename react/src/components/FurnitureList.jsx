//import React from "react";

const FurnitureList = ({ furnitures }) => (
  <table id="furnitures" className="min-w-full border-collapse block md:table">
    <thead className="block md:table-header-group">
      <tr className="border border-grey-500 md:border-none block md:table-row">
        <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Name</th>
        <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Weight</th>
        <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell">Price (USD)</th>
      </tr>
    </thead>
    <tbody className="block md:table-row-group">
      {furnitures.map(furniture => (
        <tr key={furniture.id} className="border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 block md:table-cell">{furniture.name}</td>
          <td className="p-2 md:border md:border-grey-500 block md:table-cell">{furniture.weight}</td>
          <td className="p-2 md:border md:border-grey-500 block md:table-cell">${furniture.price.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FurnitureList;
