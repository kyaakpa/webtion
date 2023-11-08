import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const form = await req.json();
  const fullName = form.fullName;
  const description = form.description;
  const companyName = form.companyName;
  const email = form.email;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USERID,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.USERID,
    to: process.env.USERID,
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
  };

  transporter.sendMail(mailData);

  return NextResponse.json("ok");
}
