import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
<section className={styles.hero} id="inicio">
  <div className={styles.heroOverlay}>
    <div className={styles.heroCtaBox}>
      <p>
        aaaaaaaaa
      </p>
      <a
        href="https://wa.me/558331429255"
        className={styles.ctaButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className={styles.ctaText}>
        Receba sua proposta !
        </h3>
      </a>
    </div>
  </div>
</section>


        <Banner />
        
        <section className={styles.benefits} id="vantagens">
          <div className={styles.benefitsContent}>
            <h2 className={styles.benefitsTitle}>
              Por que escolher a PRECJUSPB?
            </h2>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>⚡</div>
                <h3>Agilidade</h3>
                <p>Processo rápido e sem burocracia desnecessária</p>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🔒</div>
                <h3>Segurança</h3>
                <p>Transações 100% seguras e regulamentadas</p>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>👁️</div>
                <h3>Transparência</h3>
                <p>Total clareza em todas as etapas do processo</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contato">
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>Entre em contato conosco</h2>
            <p className={styles.contactText}>
              Nossa equipe está pronta para atender você e esclarecer todas as
              suas dúvidas.
            </p>

            <div className={styles.contactMethods}>
              <a
                href="https://wa.me/558331429255"
                className={styles.contactMethod}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon}>📱</span>
                <span>(83) 3142-9255</span>
              </a>

              <a
                href="mailto:precjuspb@precjuspb.com.br"
                className={styles.contactMethod}
              >
                <span className={styles.contactIcon}>✉️</span>
                <span>precjuspb@precjuspb.com.br</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
