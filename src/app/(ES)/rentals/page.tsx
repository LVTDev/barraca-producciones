"use client";
import AddToCart from "@/components/generalUI/AddToCart";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
export type RentalItem = {
  _id: string;
  rentalItem: string;
  imageLinks: string[];
  price: number;
  availability: boolean;
  categories: string[];
  mainImage:{
    asset:{_ref: string}
  }
};
type RentalResponse =  RentalItem[];
const Page = () => {
  useEffect(() => {
    fetchAllItems();
  }, []);
  const [allRentalItems, setAllRentalItems] = useState<RentalResponse | null>(
    null
  );
  const fetchAllItems = async () => {
    const query = groq`
  *[_type == "rentalItem"]{ ... }
    `;
    // const fetchedRentalItems = await fetch(
    //   `/api/rentals`
    // );
    const allRentalItemsRes: RentalResponse = await client.fetch(query);
    setAllRentalItems(allRentalItemsRes);

  };
  console.log(allRentalItems)
  return (
    <div>
      <h2 className="text-2xl mb-3">Catalogo</h2>
      <div>
        {allRentalItems?.map((item: RentalItem) => (
          <div className="mb-4  border-b-2" key={item._id}>
            <p>Articulo: {item.rentalItem}</p>
            <p>Precio: {item.price} pesos al dia</p>
            <img src={`${urlFor(item.mainImage.asset._ref)}`} alt="" />
            <div className="flex">
              <p>Disponibilidad:</p>
              {item.availability === true ? (
                <p>Disponible</p>
              ) : (
                <p>No disponible</p>
              )}
            </div>
            <AddToCart product={item} />
          </div>
        ))}
      </div>

      {/* <Button1 type="link" link="/rentals/admin" text="Admin" /> */}
    </div>
  );
};

export default Page;
