import styles from "./styles.module.css";

export default function Hero() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>RepicaR Estamparia</h1>

          <p className={styles.subtitle}>
            Personalize sua marca com estilo, cor e identidade.
          </p>

          <button className={styles.cta}>
            Solicitar orçamento
          </button>
        </div>
      </section>
    </main>
  );
}