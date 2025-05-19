"use server"

import nodemailer from 'nodemailer'; 
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendEmail(prevState: FormData, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;


  const mailOptions = {
  from: email,
  to:`${process.env.EMAIL_TO}`,
  subject: `Formulaire de contact de ${name}`,
  html: `<h1>From: ${name}, ${email}</h1><p>${message}</p>`
  }

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Merci pour votre message. Je vous contacterai dans les plus brefs délais'};
  } catch(error) {
    console.error('Error sending email', error);
    return { success: false, message: 'Error sending email'}
  }

}



