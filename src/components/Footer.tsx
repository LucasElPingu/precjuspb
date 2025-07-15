import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>Contato</h3>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <a href="mailto:precjuspb@precjuspb.com.br">
                precjuspb@precjuspb.com.br
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <a href="https://wa.me/558331429255">(83) 3142-9255</a>
            </div>
          </div>

          <div className={styles.addressInfo}>
            <h3 className={styles.title}>Endereço</h3>
            <div className={styles.address}>
              <span className={styles.icon}>📍</span>
              <span>
                Rua Acrísio Borges, 287, Brisamar
                <br />
                João Pessoa - PB
                <br />
                CEP: 58033-180
              </span>
            </div>
          </div>

          <div className={styles.whatsappSection}>
            <a
              href="https://wa.me/558331429255"
              className={styles.whatsappButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.whatsappIcon}>💬</span>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© PRECJUSPB – Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
