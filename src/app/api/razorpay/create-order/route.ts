import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, currency, receipt } = await req.json();

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret || keyId.includes("PLACEHOLDER")) {
      // Return a mock order for development when keys aren't configured
      return NextResponse.json({
        id: "order_mock_" + Date.now(),
        amount: amount,
        currency: currency || "INR",
        receipt: receipt || "receipt_" + Date.now(),
        status: "created",
        mock: true,
      });
    }

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
      },
      body: JSON.stringify({
        amount: amount, // amount in paise
        currency: currency || "INR",
        receipt: receipt || "receipt_" + Date.now(),
      }),
    });

    const order = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: order.error?.description || "Failed to create order" }, { status: 500 });
    }

    return NextResponse.json(order);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
