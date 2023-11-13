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

  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "smtp.gmail.com",
  //   auth: {
  //     user: process.env.USERID,
  //     pass: process.env.PASSWORD,
  //   },
  //   secure: true,
  // });

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
    return NextResponse.json({ error });
  }

  // const mailData = await resend{
  //   from: process.env.USERID,
  //   to: process.env.USERID,
  //   subject: `Enquiry from ${fullName}`,
  //   html: `
  //   <head>
  //   <style>
  //   .container {
  //     background-color: black;
  //     color: white;
  //     padding: 4rem;
  //   }

  //   </style>
  //   </head>
  //   <body>
  //           <div class='container'>
  //             <h2>Company: ${companyName}</h2>
  //             <h2>Contact Address: ${email}</h2>
  //             <p>Description: ${description}</p>
  //           </div>
  //   </body>
  //         `,
  // };

  // const response = transporter.sendMail(mailData, (err, info) => {
  //   if (err) {
  //     return NextResponse.json(err);
  //   } else {
  //     return NextResponse.json("ok");
  //   }
  // });

  // return NextResponse.json({ messsage: "ok" });
}
