import Header from "@/components/header/Header";
import styles from "./page.module.css";
import { JSX } from 'react';

export default function About(): JSX.Element {
  return (
  <>
    <Header />
      <main className="base-layout">
        <section className={`${styles.section} full-width section`}> 
        <div className={styles.title}>
          <h1><span className={styles.texture}>Une histoire de famille</span></h1>
        </div>   
        <div >
          <h2 aria-hidden className={styles.a}><span className={styles.texture}>A</span></h2>
          <h2 aria-hidden className={styles.n}><span className={styles.texture}>N</span></h2>
          <h2 aria-hidden className={styles.j}><span className={styles.texture}>J</span></h2>
        </div>
      </section>  
      <section className={styles.isolation}>
        <p className={styles.quote} >This is a super quote</p>
      </section>
  </main>
  </>  

  );
}
