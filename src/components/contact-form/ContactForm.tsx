'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import {sendMail} from '../../actions/sendMailAction'
import { ContactFormData } from '@/models/types';
import styles from './styles.module.css';
import Button from '../button/Button';

type ErrorResponse = {
  message: string;
  response: {
    data: {
      errors: Record<string, string>;
    };
  };
};


function ContactForm() {
  const { register, handleSubmit, reset, setError, formState: { errors, isValid, isSubmitting } } = useForm<ContactFormData>({ mode: 'onChange' });
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const onMessageSubmit = async (data: ContactFormData) => {
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
        //client side errors
        console.log(errors)
        Object.keys(errors)
        .forEach((inputName) => setError(inputName as keyof ContactFormData, { message: errors[inputName]}))
      } else {
        //server side errors
        console.error(error);
        setServerError(err.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onMessageSubmit)} className={styles.form}>
      <fieldset>
      <legend className='visually-hidden'>Informations personnelles</legend>
        {/* name */}
        <div>
        <label htmlFor='name'>Nom<span>*</span></label>
        <input id='name' type='text' placeholder='nom' {...register("name", { 
        required: "Merci d’indiquer votre nom.", 
        minLength: { value: 2, message: 'Votre nom doit contenir entre 2 et 30 caractères.' },
        maxLength: { value: 30, message: 'Votre nom doit contenir entre 2 et 30 caractères.'} 
        })} />
        
        { errors.name && <p id="nameError">{errors.name?.message}</p> }  
      
      </div>


      {/* email */}
      <div>
        <label htmlFor='email'>Email<span>*</span></label>
        <input id='email' type='email' placeholder='dupont@example.com' {...register("email", { 
        required: "Merci d’indiquer votre email.", 
        pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
        message: 'L’adresse e-mail semble invalide.' 
        }
        })} />
        
        { errors.email && <p id="emailError">{errors.email?.message}</p> } 

      </div>



        {/* phone */}
        <div>
          <label htmlFor='phone'>Téléphone</label>
          <input id='phone' type='tel' placeholder='06 00 00 00 00' {...register("phone", { 
            pattern: {
            value: /^(0[1-9])(?:[ -]?\d{2}){4}$/,
            message: "Le numéro de téléphone semble invalide."
          }
        })} />

        { errors.phone && <p id="phoneError">{errors.phone?.message}</p> } 
        </div>
      </fieldset>
      

      {/* message */}
      <div>
        <label htmlFor='message'>Votre message:<span>*</span></label>
        <textarea id='message' placeholder='cb de m2 etc'
        {...register("message", { 
        required: "Merci de rédiger votre message.", 
        minLength: { value: 30, message: 'Le message doit contenir minimum 30 caractères.' },
        maxLength: { value: 5000, message: 'El mensaje doit contenir moins de 5000 caracteres.'} 
        })}></textarea>

        { errors.message && <p id="messageError">{errors.message?.message}</p> }    
        
      </div>
    
      {/* button */}
      <Button disabled={!isValid || isSubmitting} className={`${!isValid || isSubmitting ? `${styles.disable}` : ''}`}>
        {isSubmitting ? 'envoi en cours...' : 'Envoyer un message'}
      </Button>

      {serverError && <p>{serverError}</p>}
      {successMessage && <p>{successMessage}</p>}

    </form>
  )
}

export default ContactForm