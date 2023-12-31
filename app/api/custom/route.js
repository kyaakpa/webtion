import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const form = await req.json();
  const name = form.name;
  const email = form.email;
  const orgName = form.orgName;
  const orgAddress = form.orgAddress;
  const pages = form.pages;
  const contactForm = form.contactForm;
  const googleReviews = form.googleReviews;
  const darkMode = form.darkMode;
  const animationEffects = form.animationEffects;
  const transitionEffects = form.transitionEffects;

  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  try {
    const mailData = await resend.emails.send({
      from: `${name} <kyaakpalama@webtion.org>`,
      to: "kyaakpalama@webtion.org",
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
              <h3>Company Address: ${orgAddress}</h3>
              <h3>Contact Address: ${email}</h3>
              <ul> <h3>Custom Build Details</h3> 
              <li>Number of pages: ${pages}</li>
              <li>Contact Form: ${contactForm}</li>
              <li>Google Reviews: ${googleReviews}</li>
              <li>Dark Mode: ${darkMode}</li>
              <li>Animation Effects: ${animationEffects}</li>
              <li>Transition Effects: ${transitionEffects}</li>
              </ul>
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
