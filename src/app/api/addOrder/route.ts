// Import necessary modules
import { NextResponse } from "next/server";
import prisma from "src/utils/prismadb";
import { Prisma } from "@prisma/client";

// Define the POST function for the API endpoint
export async function POST(request: Request) {
  const body = await request.json();
  let messageError = "";

  const { orderData, products } = body;
  console.log(orderData);
  console.log(products);

  const inputData = {
    firstName: orderData.firstName,
    lastName: orderData.lastName,
    email: orderData.emailAddress, // Assuming emailAddress corresponds to the email field
    phone: orderData.phoneNumber,
    shippingMethod: orderData.shipping,
    payementMethod: 'mastercard',
    street: orderData.streetAddress,
    zipCode: orderData.zipCode,
    country: orderData.country,
    address: orderData.streetAddress,
    isPaid: false,
  };

  const orderItems = products.map((item: { id: any; name: any; quantity: string; price: string }) => ({
    name: String(item.name),
    quantity: parseInt(item.quantity, 10),
    price: parseFloat(item.price),
  }));

  try {
    // Create a new order with order items
    const createdOrder = await prisma.order.create({
      data: {
        ...inputData,
        orderItems: {
          create: orderItems,
        },
      },
      include: {
        orderItems: true,
      },
    });

    // Return a JSON response with the created order
    return NextResponse.json({ order: createdOrder }, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle Prisma-specific errors
      if (error.code === "P2002") {
        messageError =
          "There is already a user with this email, delete user and try again or create with a different email";
      }
      if (error.code === "P1001") {
        messageError = "Database server error. Please make sure your database server is running";
      }
      if (error.code === "P1010") {
        messageError =
          "Database server access error. Please contact the database server administrator";
      }
      return NextResponse.json({ message: messageError }, { status: 500 });
    }

    // Handle other types of errors
    console.log(error);
    return NextResponse.json({ message: "Network error, please try again" }, { status: 400 });
  }
}
