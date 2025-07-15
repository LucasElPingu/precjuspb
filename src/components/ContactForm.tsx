"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblkjdwz");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido no formato nome@dominio.com.";
    }

    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Formato inválido. Use (99) 99999-9999.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const newValue = name === "phone" ? formatPhone(value) : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleValidatedSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    handleSubmit(e);
  };

  const handleSendAnother = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  if (state.succeeded) {
    return (
      <div className={styles.successMessage}>
        ✅ Mensagem enviada com sucesso! Em breve entraremos em contato.
        <button
          onClick={handleSendAnother}
          className={styles.anotherMessageButton}
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleValidatedSubmit} className={styles.form} action="https://formspree.io/f/mblkjdwz" method="POST">
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>
          Nome completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          placeholder="Digite seu nome completo"
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.label}>
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          placeholder="nome@dominio.com"
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="phone" className={styles.label}>
          Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
          placeholder="(83) 91234-5678"
          maxLength={15}
        />
        {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className={styles.label}>
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Conte-nos sobre seu precatório ou tire suas dúvidas"
          rows={4}
        />
        {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className={`${styles.submitButton} ${state.submitting ? styles.submitting : ""}`}
      >
        {state.submitting ? "Enviando..." : "Enviar mensagem"}
      </button>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className={styles.errorMessage}>
          ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
        </div>
      )}
    </form>
  );
}
