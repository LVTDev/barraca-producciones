import AddToCart from "@/components/generalUI/AddToCart";
import Button1 from "@/components/generalUI/Button1";
import React from "react";
export type RentalItem = {
  _id: string;
  itemName: string;
  imageLinks: string[];
  price: number;
  availability: boolean;
  categories: string[];
};
type RentalResponse = {
  allItems: RentalItem[];
};
const Page = async () => {
  const fetchedRentalItems = await fetch(
    `${process.env.DEV_URL || ""}/api/rentals`
  );
  const allRentalItems: RentalResponse = await fetchedRentalItems.json();
  return (
    <div>
      <h2 className="text-2xl mb-3">Catalogo</h2>
      <div>
        {allRentalItems?.allItems?.map((item: RentalItem) => (
          <div className="mb-4  border-b-2" key={item._id}>
            <p>Articulo: {item.itemName}</p>
            <p>Precio: {item.price} pesos al dia</p>
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

      <Button1 type="link" link="/rentals/admin" text="Admin" />
    </div>
  );
};

export default Page;
