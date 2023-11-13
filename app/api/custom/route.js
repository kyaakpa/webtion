import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const form = await req.json();
  const name = form.name;
  const email = form.email;
  const orgName = form.orgName;
  const pages = form.pages;
  const contactForm = form.contactForm;
  const googleReviews = form.googleReviews;
  const darkMode = form.darkMode;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USERID,
      pass: process.env.PASSWORD,
    },
    secure: true,
    requireTLS: true,
  });

  const mailData = {
    from: `${name} ${email}`,
    to: process.env.USERID,
    subject: `Enquiry from ${name}`,
    html: `
    <head>
    <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100% + 2rem);
    }
    .container {
      text-align: center;
      background-color: #f4f4f4;
      padding: 1rem;
      -webkit-box-shadow: 13px 26px 37px -12px rgba(0,0,0,0.84);
      border-radius: 20px;
      text-decoration: none;
    }

    .conatiner ul { 
      list-style:none;
    }
    

    </style>
    </head>
    <body>
            <div class='container'>

              <h3>Company: ${orgName}</h3>
              <h3>Contact Address: ${email}</h3>
              <ul> <h3>Custom Build Details</h3> 
              <li>Number of pages: ${pages}</li>
              <li>Contact Form: ${contactForm}</li>
              <li>Google Reviews: ${googleReviews}</li>
              <li>Dark Mode: ${darkMode}</li>
              </ul>
            </div>
    </body>
          `,
  };

  try {
    const response = transporter.sendMail(mailData, (err, info) => {
      if (err) {
        return NextResponse.json(err);
      } else {
        return NextResponse.json("ok");
      }
    });
  } catch (err) {
    console.log(err);
  }
}
