// import { dbConnect } from "@/lib/db";
import { NextResponse } from "next/server";
// import { sendMail } from "@/app/service/mailService";
// import mongoose from "mongoose";
// import ServiceRequestSchema from "@/app/servicios/serviceRequest/model";

// const con = await dbConnect();
export async function GET() {
//   const userRequestContent = await ServiceRequestSchema.find({});
  return new NextResponse("test");
//   return new NextResponse(userRequestContent);
}

// export async function POST(request) {
//   try {
//     const requestContent = await request.json();
//     await sendMail(
//       "Sitio LVT: Formulario Contactanos",
//       "hello@grupolvt.com",
//       `Client: ${requestContent.name}
//      Correo: ${requestContent.email}
//      Necessidades: ${requestContent.needs}`
//     );
//     const userRequestContent = await ServiceRequestSchema.create(
//       requestContent
//     );
//     return new Response(JSON.stringify(userRequestContent));
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }
