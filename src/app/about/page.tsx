import styles from "./page.module.css";
import { JSX } from 'react';
import HeaderServer from "@/components/header/HeaderServer";
import Family from "@/components/family/Family";

export default function About(): JSX.Element {
  return (
  <>
    <HeaderServer />
      <main className="base-layout">
      <Family />
        <section className={`${styles.section} full-width section`}> 
        <div className={styles.title}>
          <h1><span className={styles.texture}>La peinture de père en fils / Une histoire de famille</span></h1>
        </div>   
      </section>  
      <section className={styles.isolation}>
        <p className={styles.quote} >This is a super quote</p>
      </section>
  </main>
  </>  

  );
}
