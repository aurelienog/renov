"use server"
import nodemailer from 'nodemailer'; 

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendMail({ name, email, phone, message }: FormData) {
  const fieldErrors: Partial<Record<keyof FormData, string>> = {};

  if (!name) fieldErrors.name = 'name is required'
  if (!email) fieldErrors.email = 'E-mail is required'
  if (!message) fieldErrors.message = 'message is required'

  const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email)) {
    fieldErrors.email = 'E-mail not valid';
  }
  // if (!emailRegex.test(email)) {
  //   return { success: false, message: 'E-mail not valid.' };
  // }

  if (phone && ! /^(0[1-9])(?:[ -]?\d{2}){4}$/.test(phone)) {
    fieldErrors.phone = 'Phone number is invalid';
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw {
      message: 'Validation error',
      response: {
        data: {
          errors: fieldErrors
        }
      }
    };
  }

  const mailOptions = {
  from: email,
  to:`${process.env.EMAIL_TO}`,
  subject: `Formulaire de contact`,
  html: `<h1>From: ${name}, ${email}</h1><p>${message}</p>`
  }

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch(error) {
    console.error('Error sending email', error);
    throw {
      message: "Error sending email",
      response: {
        data: {
          errors: {}
        }
      }
    };
  }

}



