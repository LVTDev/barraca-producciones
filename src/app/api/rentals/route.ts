import connectionToDB from "@/components/lib/mongoose";
import { NextResponse } from "next/server";
import RentalItem from "./model";

export async function POST(request: Request) {
  const { itemName, imageLinks, price, availability, categories } =
    await request.json();
  try {
    connectionToDB();
    const rentalItem = await RentalItem.create({
      itemName,
      imageLinks,
      price,
      availability,
      categories,
    });
    console.log(rentalItem);
    return NextResponse.json({
      rentalItem,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

export async function GET() {
  try {
    connectionToDB()
    const allItems = await RentalItem.find({});
    return NextResponse.json({ allItems });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}
