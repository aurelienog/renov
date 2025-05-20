'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { sendMail } from '../../actions/sendMailAction';

type FormValues = {
  name: string
  email: string
  phone?: string
  message: string
}

type ErrorResponse = {
  message: string;
  response: {
    data: {
      errors: Record<string, string>;
    };
  };
};

function ContactForm() {
  const { register, handleSubmit, reset, setError, formState: { errors, isValid, isSubmitting } } = useForm<FormValues>({ mode: 'onChange' });
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const onMessageSubmit = async (data: FormValues) => {
    try {
      setServerError(null);
      setSuccessMessage(null)
      await sendMail(data);
      reset();
      setSuccessMessage("Merci pour votre message! Je vous contacterai dans les plus brefs délais.")
    } catch(error) {
      const err = error as ErrorResponse;
      const errors  = err.response?.data.errors;
      if (errors) {
        console.log(err.message, errors);
        Object.keys(errors)
        .forEach((inputName) => setError(inputName as keyof FormValues, { message: errors[inputName]}))
      } else {
        console.log(error);
        setServerError(err.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onMessageSubmit)}>

      {/* name */}
      <label htmlFor='name'>Nom</label>
      <input id='name' type='text' placeholder='nom' {...register("name", { 
        required: "Merci d’indiquer votre nom.", 
        minLength: { value: 3, message: 'Votre nom doit contenir entre 2 et 30 caractères.' },
        maxLength: { value: 30, message: 'Votre nom doit contenir entre 2 et 30 caractères.'} 
        })} />

      {/* email */}
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' placeholder='dupont@example.com' {...register("email", { 
        required: "Merci d’indiquer votre email.", 
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
          message: 'L’adresse e-mail semble invalide.' 
        }
        })} />


      {/* phone */}
      <label htmlFor='phone'>Téléphone</label>
      <input id='phone' type='tel' placeholder='06 00 00 00 00' {...register("phone", { 
        pattern: {
          value: /^(0[1-9])(?:[ -]?\d{2}){4}$/,
          message: "Le numéro de téléphone semble invalide."
        }
        })} />


      {/* message */}
      <label htmlFor='message'>Votre message:</label>
      <textarea id='message' placeholder='cb de m2 etc'
      {...register("message", { 
        required: "Merci de rédiger votre message.", 
        minLength: { value: 15, message: 'Le message doit contenir minimum 30 caractères.' },
        maxLength: { value: 5000, message: 'El mensaje doit contenir moins de 5000 caracteres.'} 
      })}></textarea>

      {/* button */}
      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'envoi en cours...' : 'Envoyer un message'}
      </button>

    </form>
  )
}

export default ContactForm