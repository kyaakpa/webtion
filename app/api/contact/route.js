import { NextResponse } from "next/server";
import { Resend } from "resend";
// import "dotenv/config";

export async function POST(req) {
  const form = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const fullName = form.fullName;
  const description = form.description;
  const companyName = form.companyName;
  const email = form.email;

  try {
    const mailData = await resend.emails.send({
      from: `${fullName} <onboarding@resend.dev>`,
      to: ["soheatshrestha@gmail.com"],
      subject: `Enquiry from ${fullName}`,
      html: `
      <head>
      <style>
      .container {
        background-color: black;
        color: white;
        padding: 4rem;
      }
  
      </style>
      </head>
      <body>
              <div class='container'>
                <h2>Company: ${companyName}</h2>
                <h2>Contact Address: ${email}</h2>
                <p>Description: ${description}</p>
              </div>
      </body>
            `,
    });

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "failed" });
  }
}
