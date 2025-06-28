'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { ContactFormData, ErrorResponse } from '@/lib/models/types';
import styles from './styles.module.css';
import { sendMail } from '@/lib/actions/sendMailAction';
import { useScrollToHash } from '@/lib/hooks/useScrollToHash';
import Button from '../button-cta/Button';

function ContactForm() {
  const { register, handleSubmit, reset, setError, formState: { errors, isValid, isSubmitting } } = useForm<ContactFormData>({ mode: 'onChange' });
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  useScrollToHash()

  const onMessageSubmit = async (data: ContactFormData) => {
    try {
      // Reset previous errors and success messages
      setServerError(null);
      setSuccessMessage(null)

      // Try sending the mail
      await sendMail(data);

       // Reset the form and show a success message
      reset();
      setSuccessMessage("Merci pour votre message! Je vous contacterai dans les plus brefs délais.")
    } catch(error) {

      // If an error occurs, handle the server-side errors
      const err = error as ErrorResponse;
      const errors  = err.response?.data.errors;
      if (errors) {
      // Map and display field-specific errors
        Object.keys(errors)
        .forEach((inputName) => setError(inputName as keyof ContactFormData, { message: errors[inputName]}))
      } else {
      // If no field-specific errors, show a generic error message
        console.error(error);
        setServerError(err.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onMessageSubmit)} id='contact' className={styles.form} style={{width:'100%'}}>
      <fieldset>
      <legend className='visually-hidden'>Informations personnelles</legend>
        {/* name */}
        <div>
          <input id='name' type='text' inputMode='text' placeholder='Nom' {...register("name", { 
          required: "Merci d'indiquer votre nom.", 
          minLength: { value: 2, message: 'Votre nom doit contenir entre 2 et 30 caractères.' },
          maxLength: { value: 30, message: 'Votre nom doit contenir entre 2 et 30 caractères.'} 
          })} />
          <label htmlFor='name' className={errors.name ? `${styles.invalid}` : `${styles.valid}`}>Nom<span>*</span></label>
        
          { errors.name && <p>{errors.name?.message}</p> }  
      </div>

      {/* email */}
      <div>
        <input id='email' type='email' inputMode='email' placeholder='dupont@example.com' {...register("email", { 
        required: "Merci d'indiquer votre email.", 
        pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
        message: "L'adresse e-mail semble invalide." 
        }
        })}/>
        <label htmlFor='email' className={errors.email ? `${styles.invalid}` : `${styles.valid}`} >Email<span>*</span></label>

        { errors.email && <p>{errors.email?.message}</p> } 
      </div>

        {/* phone */}
        <div>
          <input id='phone' type='tel'  inputMode='tel'  placeholder='06 00 00 00 00' {...register("phone", { 
            pattern: {
            value: /^(0[1-9])(?:[ -]?\d{2}){4}$/,
            message: "Le numéro de téléphone semble invalide."
          }
        })} />
        <label htmlFor='phone' className={errors.phone ? `${styles.invalid}` : `${styles.valid}`}>Téléphone</label>        

        { errors.phone && <p>{errors.phone?.message}</p> } 
        </div>
      </fieldset>
      
      {/* message */}
      <div>
        <label htmlFor='message'>Votre message:<span>*</span></label>
        <textarea id='message' placeholder='Parlez-moi un peu de votre projet : pièces à rénover, surface, vos envies, délais… tout ce que vous jugez utile !
'
        {...register("message", { 
        required: "Merci de rédiger votre message.", 
        minLength: { value: 30, message: 'Le message doit contenir minimum 30 caractères.' },
        maxLength: { value: 5000, message: 'El mensaje doit contenir moins de 5000 caracteres.'} 
        })}></textarea>

        { errors.message && <p className={styles.textareaError}>{errors.message?.message}</p> }           
      </div>
    
      {/* button */}
      <Button type='submit' disabled={!isValid || isSubmitting} className={`${!isValid || isSubmitting ? `${styles.disable}` : ''}`}>
        {isSubmitting ? 'envoi en cours...' : 'Envoyer un message'}
      </Button>

      {serverError && <p aria-live="polite" role="alert"  className={`${styles.failure}`}>{serverError}</p>}
      {successMessage && <p aria-live="polite" role="alert"  className={`${styles.success}`}>{successMessage}</p>}

    </form>
  )
}

export default ContactForm