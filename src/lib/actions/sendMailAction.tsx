"use server"

import nodemailer from 'nodemailer'; 
import { ContactFormData } from '@/lib/models/types';
import { ValidationError } from '@/lib/models/class';


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465, 
  secure: true, 
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

// Helper to detect unwanted characters
function containsInvalidChars(value: string): boolean {
  return /[<>]/.test(value);
}

export async function sendMail({ name, email, phone, message }: ContactFormData) {
  const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};

  // Type and character validation 

  if (typeof name !== 'string') {
    fieldErrors.name = 'name must be a string'
  } else if (containsInvalidChars(name)) {
      fieldErrors.name = 'Name contains invalid characters';
  }

  if (typeof email !== 'string') {
    fieldErrors.email = 'email must be a string'
  } else if (containsInvalidChars(email)) { 
      fieldErrors.email = 'email contains invalid characters';
  }

  if (phone) {
    if (typeof phone !== 'string') {
      fieldErrors.phone = 'Phone must be a string';
    } else if (containsInvalidChars(phone)) {
      fieldErrors.phone = 'Phone contains invalid characters';
    }
  }

  if (typeof message !== 'string') { 
    fieldErrors.message = 'message must be a string'
  } else if (containsInvalidChars(message)) {
    fieldErrors.message = 'message contains invalid characters';  
  }

  
  // Required fields validation

  if (!name) fieldErrors.name = 'name is required'
  if (!email) fieldErrors.email = 'E-mail is required'
  if (!message) fieldErrors.message = 'message is required'

  // Format validation (regex)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email && !emailRegex.test(email)) {
    fieldErrors.email = 'E-mail not valid';
  }

  const phoneRegex =  /^(0[1-9])(?:[ -]?\d{2}){4}$/;
  if (phone && !phoneRegex.test(phone)) {
    fieldErrors.phone = 'Phone number is invalid';
  }

  // If there are validation errors, throw a structured error 
  if (Object.keys(fieldErrors).length > 0) {
    throw new ValidationError(fieldErrors)
  }

  // Compose and send the email

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



