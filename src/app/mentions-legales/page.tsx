import React, { JSX } from 'react';
import styles from "../politique-de-confidentialite/page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales"
}

function legal(): JSX.Element {
  return (
      <main className={`base-layout ${styles.page}`}>
        <section className={`full-width ${styles.section}`}>
          <div className={styles.wrapper}>
            <h1><span className={styles.texture}>Mentions légales</span></h1>
          </div>
          <ol>
            <li>
              <h2>1{')'}  Éditeur du site</h2>
              <p>Le site A.N.J. RENOV est édité par :</p>
              <address>
                Nom de l{"'"}entreprise : A.N.J. RENOV
                <br></br>Forme juridique : SAS, société par actions simplifiée
                <br></br>Nom du responsable : Julien Nogueira
                <br></br>Adresse du siège social : 99 Boulevard de la Reine 78000 Versailles
                <br></br>SIRET : 84176974800028
                <br></br>Téléphone : (numéro de contact)
                <br></br>E-mail : contact@anj-renov.fr
              </address>
            </li>
            <li>
              <h2>2{')'}  Hébergement</h2>    
              <p>Le site est hébergé par : </p>
              <address>
              Vercel Inc. 
              <br></br>
              Adresse : 440 N Barranca Ave Pmb 4133 Covina, <br></br> CA, 91723-1722 United States 
              </address>
            </li>
            <li>
              <h2>3{')'}  Propriété intellectuelle</h2>
              <p>L{"'"}ensemble du contenu du site A.N.J. RENOV (textes, images, logo, etc.) est protégé par le droit d{"'"}auteur et appartient à A.N.J. RENOV. Toute reproduction ou utilisation sans autorisation est interdite.</p>
            </li>
            <li>
              <h2>4{')'}  Protection des données personnelles</h2>
              <p>Conformément au RGPD et à la loi Informatique et Libertés, les données collectées via ce site sont utilisées uniquement dans le cadre des services proposés (formulaire de contact, devis, etc.). Droit d{"'"}accès, de rectification et de suppression : Vous pouvez exercer vos droits en nous contactant à contact@anj-renov.fr</p>
            </li>
            <li>
              <h2>5{')'}  Responsabilité</h2>
              <p>A.N.J RENOV s{"'"}efforce d{"'"}assurer l{"'"}exactitude des informations présentes sur le site. Toutefois, nous ne pouvons garantir l{"'"}absence d{"'"}erreurs ou d{"'"}omissions.</p>
            </li>
            <li>
              <h2>6{')'}  Contact</h2>
              <p>Pour toute question sur cette politique de confidentialité ou l{"'"}exercice de vos droits, vous pouvez nous contacter :</p>
              <address>
                Email : contact@anj-renov.fr
                <br></br>Téléphone : [tel]
                <br></br>Adresse : 99 Boulevard de la Reine 78000 Versailles
              </address>
            </li>
          </ol>
        </section>
      </main>
  )
}

export default legal