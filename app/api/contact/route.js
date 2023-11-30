import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const form = await req.json();
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const fullName = form.fullName;
  const description = form.description;
  const companyName = form.companyName;
  const companyAddress = form.companyAddress;
  const email = form.email;

  try {
    const mailData = await resend.emails.send({
      from: `${fullName} <kyaakpalama@webtion.org>`,
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
                <h2>Company Address: ${companyAddress}</h2>
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
