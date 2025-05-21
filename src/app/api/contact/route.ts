import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request ) {
  const { data } = await req.json();
  const { name, email, phone, message } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, 
      secure: false, 
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to:`${process.env.EMAIL_TO}`,
    subject: `Formulaire de contact`,
    html: `<h1>From: ${name}, ${email}, ${phone}</h1><p>${message}</p>`
    }
    
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
  } 
