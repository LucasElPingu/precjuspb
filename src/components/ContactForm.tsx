"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblkjdwz");

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Entre em contato conosco</h3>
        <p className={styles.formSubtitle}>
          Preencha o formulário e nossa equipe entrará em contato em breve
        </p>
      </div>

      {state.succeeded ? (
        <div className={styles.successMessage}>
          ✅ Mensagem enviada com sucesso! Em breve entraremos em contato.
          <button
            onClick={() => window.location.reload()}
            className={styles.submitButton}
            style={{ marginTop: "1rem" }}
          >
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Nome completo *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className={styles.input}
              placeholder="Digite seu nome completo"
            />
            <ValidationError prefix="Nome" field="name" errors={state.errors} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              E-mail *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={styles.input}
              placeholder="nome@dominio.com"
            />
            <ValidationError
              prefix="E-mail"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>
              Telefone *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              pattern="\(\d{2}\)\s\d{4,5}-\d{4}"
              className={styles.input}
              placeholder="(83) 91234-5678"
            />
            <ValidationError
              prefix="Telefone"
              field="phone"
              errors={state.errors}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.textarea}
              placeholder="Conte-nos sobre seu precatório ou tire suas dúvidas"
              rows={4}
            />
            <ValidationError
              prefix="Mensagem"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={`${styles.submitButton} ${
              state.submitting ? styles.submitting : ""
            }`}
          >
            {state.submitting ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      )}

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className={styles.errorMessage}>
          ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via
          WhatsApp.
        </div>
      )}
    </div>
  );
}
