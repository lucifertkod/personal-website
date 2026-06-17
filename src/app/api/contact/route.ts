import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    const { error } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Supabase error:", error);
      // Still return success to user - we don't want to expose DB errors
      // Log for debugging
      return NextResponse.json(
        {
          success: true,
          message:
            "Your message has been received. We will get back to you soon.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been received. We will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
