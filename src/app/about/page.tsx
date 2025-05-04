import styles from "./page.module.css";
import { JSX } from 'react';
import Family from "@/components/family/Family";
import teamImage from '../../../public/assets/images/family.jpg';

export default function About(): JSX.Element {
  return (

    <main className="base-layout">
      <Family image={teamImage}/>
        <section className={`${styles.section} full-width section`}> 
        <div className={styles.title}>
          <h1><span className={styles.texture}>La peinture de père en fils / Une histoire de famille</span></h1>
        </div>   
      </section>  
      <section className={styles.isolation}>
        <p className={styles.quote} >This is a super quote</p>
      </section>
  </main>

  );
}
