"use client";
import React, {  useState } from "react";
import Button1 from "../generalUI/Button1";

const CreateEquipmentRentalForm = () => {
  const [available, setAvailable] = useState(true);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/rentals", {
        method: "POST",
        body: JSON.stringify({
          itemName,
          imageLinks: "name",
          price,
          availability: available,
          categories: "name",
        }),
      });
      if (res.status === 200) console.log("complete");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Item Name</label>
        <input
          className="bg-white rounded"
          type="text"
          name="name"
          id="name"
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Price">Price</label>
        <input
          className="bg-white rounded"
          type="number"
          name="Price"
          id="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <p className="font-bold" >Disponibilidad</p>
        <div className="flex gap-4">
          <div
            onClick={() => setAvailable(true)}
            className="bg-green-500 rounded px-2 py-3 cursor-pointer text-sm"
          >
            Disponible
          </div>
          <div
            onClick={() => setAvailable(false)}
            className="bg-red-500 rounded px-2 py-3 cursor-pointer text-sm"
          >
            No Disponible
          </div>
        </div>
      </div>
      <Button1 text="Create Rental Entry" type="submit" />
    </form>
  );
};

export default CreateEquipmentRentalForm;
