import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

// Handles POST requests to /api/send
export async function POST(request) {
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  const { email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  const mailOptions = {
    from: myEmail,
    to: myEmail,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: subject,
    // text: message,
    html: `
    <h3>Sender's Email: ${email} </h3>
    <p><span><h3>Message:</h3></span> ${message} </p>
    `,
  };

  try {
    const mail = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
  }
}
