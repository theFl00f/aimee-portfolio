import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.h1}>
        <span className={styles.name}>Aimee Marcos</span>
        <span className={styles.title}>Graphic Designer</span>
      </h1>
      <p className={styles.tagline}>
        Ex-SAP, now channelling my enterprise experience into expressive,
        human-centered creative direction 🌪️🖤🪄
      </p>
    </section>
  );
}
