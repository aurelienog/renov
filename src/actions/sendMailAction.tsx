"use server"

import nodemailer from 'nodemailer'; 
import { ContactFormData } from '@/models/types';
import { ValidationError } from '@/models/class';


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465, 
  secure: true, 
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendMail({ name, email, phone, message }: ContactFormData) {
  const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!name) fieldErrors.name = 'name is required'
  if (!email) fieldErrors.email = 'E-mail is required'
  if (!message) fieldErrors.message = 'message is required'

  const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email)) {
    fieldErrors.email = 'E-mail not valid';
  }

  if (phone && ! /^(0[1-9])(?:[ -]?\d{2}){4}$/.test(phone)) {
    fieldErrors.phone = 'Phone number is invalid';
  }

  if (Object.keys(fieldErrors).length > 0) {
    throw new ValidationError(fieldErrors)
  }

  const mailOptions = {
  from: `"${name}" <${process.env.EMAIL_FROM}>`,
  to:`${process.env.EMAIL_TO}`,
  subject: `Formulaire de contact`,
  html: `<h1>From: ${name}, ${email}, ${phone}</h1><p>${message}</p>`
  }

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!'  };
  } catch(error) {
    console.error('Error sending email', error);
    return { success: false, message: 'Failed to send email.' }
  }
}



