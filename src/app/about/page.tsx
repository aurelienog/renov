import Header from "@/components/header/Header";
import styles from "./page.module.css";
import { JSX } from 'react';

export default function About(): JSX.Element {
  return (
  <>
    <Header />
      <main className="base-layout">
        <section className={`${styles.section} breakout section`}> 
        <div className={styles.title}>
          <h1>Une histoire de famille</h1>
        </div>   
        <div >
          <h2 aria-hidden className={styles.a}>A</h2>
          <h2 aria-hidden className={styles.n}>N</h2>
          <h2 aria-hidden className={styles.j}>J</h2>
        </div>
      </section>  
  </main>
  </>  

  );
}
