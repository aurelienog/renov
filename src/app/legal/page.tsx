import React from 'react'
import styles from "../confidentiality/page.module.css";

function legal() {
  return (
    <main className={`base-layout ${styles.page}`}>
      <section className='breakout'>
        <h1>Mentions légales</h1>
        <ol>
          <li>
            <h2>Éditeur du site</h2>
            <p>Le site RENOV est édité par :</p>
            <address>
              Nom de l'entreprise : RENOV
              <br></br>Forme juridique : 
              <br></br>Nom du responsable : Henry
              <br></br>Adresse du siège social : (adresse de l’entreprise)
              <br></br>SIRET : (numéro d’immatriculation)
              <br></br>Téléphone : (numéro de contact)
              <br></br>E-mail : (adresse email de contact)
            </address>
          </li>
          <li>
            <h2>Hébergement</h2>
            
            <p>Le site est hébergé par : </p>
            <address>
            Vercel Inc. 
            <br></br>
            Adresse : 440 N Barranca Ave Pmb 4133 Covina, <br></br> CA, 91723-1722 United States 
            </address>
          </li>
          <li>
            <h2>Propriété intellectuelle</h2>
            <p>L’ensemble du contenu du site RENOV (textes, images, logo, etc.) est protégé par le droit d’auteur et appartient à RENOV. Toute reproduction ou utilisation sans autorisation est interdite.</p>
          </li>
          <li>
            <h2>Protection des données personnelles</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, les données collectées via ce site sont utilisées uniquement dans le cadre des services proposés (formulaire de contact, devis, etc.). Droit d’accès, de rectification et de suppression : Vous pouvez exercer vos droits en nous contactant à contact@renov.fr</p>
          </li>
          <li>
            <h2>Responsabilité</h2>
            <p>A.N.J RENOV s’efforce d’assurer l’exactitude des informations présentes sur le site. Toutefois, nous ne pouvons garantir l’absence d’erreurs ou d’omissions.</p>
          </li>
          <li>
            <h2>Contact</h2>
            <p>Pour toute question sur cette politique de confidentialité ou l’exercice de vos droits, vous pouvez nous contacter :</p>
            <address>
              Email : [adresse mail]
              <br></br>Téléphone : [tel]
              <br></br>Adresse : [adresse]
            </address>
          </li>
        </ol>
      </section>
    </main>
  )
}

export default legal