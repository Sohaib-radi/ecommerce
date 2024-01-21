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
      messageError = "Database server access error. Please contact the database server administrator";
      return NextResponse.json({ message: messageError }, { status: 500 });
  }
}
