import styles from "./page.module.css";

export default function About() {
  return (
  <main className="base-layout">
    <section className={`${styles.section} breakout section`}>    
      <div >
        <h3 aria-hidden className={styles.a}>A</h3>
        <h3 aria-hidden className={styles.n}>N</h3>
        <h3 aria-hidden className={styles.j}>J</h3>
      </div>
      <div className={styles.title}>
        <h2>Une histoire de famille</h2>
      </div>
      
    </section>
    
  </main>
  );
}
