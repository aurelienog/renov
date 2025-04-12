import Image from 'next/image'
import React from 'react'
import styles from "./styles.module.css"

function ServiceCard({title, image} : {title: string, image: Image}) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <Image src={image} width={40} height={80} alt=''/>
    </article>
  )
}

export default ServiceCard