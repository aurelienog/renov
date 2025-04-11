import React from 'react'
import styles from './page.module.css'

function confidentialityPage() {
  return (
    <main className={`base-layout ${styles.page}`}>
      <section className='breakout'>
        <h2>Politique de confidentialité</h2>
      <ol>
        <li>
          <h3>Collecte des données personnelles</h3>
          <p>Lorsque vous utilisez notre site RENOV, nous pouvons collecter les informations suivantes via nos formulaires :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale (si renseignée dans un devis)</li>
          </ul>
          <p>Ces informations sont collectées uniquement lorsque vous remplissez un formulaire de contact ou demandez un devis.</p>
        </li>
        <li>
          <h3>Finalité de la collecte des données</h3>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Vous contacter et répondre à vos demandes.</li>
            <li>Établir un devis personnalisé.</li>
            <li>Suivre et gérer nos relations avec nos clients.</li>
          </ul>
          <p>Nous ne partageons jamais vos données avec des tiers à des fins commerciales.</p>
        </li>
        <li>
          <h3>Conservation des données</h3>
          <p>Vos informations sont conservées pendant une durée maximale de 10 ans, sauf si :</p>
          <ul>
            <li>Vous exercez votre droit de suppression.</li>
            <li>Nous ne les utilisons plus pour les finalités indiquées.</li>
          </ul>
          <p>Une fois ce délai écoulé, vos données sont supprimées ou anonymisées.</p>
        </li>
        <li>
          <h3>Sécurité des données</h3>
          <p>Nous mettons en place des mesures de sécurité pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. 
            <br></br>Nous utilisons des outils sécurisés et conformes aux normes en vigueur pour stocker vos informations.</p>
        </li>
        <li>
          <h3>Vos droits</h3>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez :</p>
          <ul>
            <li>Un droit d’accès : Vous pouvez demander quelles informations nous détenons sur vous.</li>
            <li>Un droit de rectification : Vous pouvez nous demander de corriger vos données.</li>
            <li>Un droit de suppression : Vous pouvez demander la suppression de vos informations.</li>
            <li>Un droit d’opposition : Vous pouvez refuser l’utilisation de vos données.</li>
          </ul>
          <address>Pour exercer vos droits, contactez-nous à contact@renov.fr</address>
        </li>
        <li>
          <h3>Contact</h3>
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

export default confidentialityPage