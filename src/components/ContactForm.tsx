"use client";

import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [state, handleSubmit] = useForm("xpwagbyr"); // substitua pelo seu ID real

  useEffect(() => {
    if (state.succeeded) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
    setSubmitStatus("error");
}
  }, [state]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido (nome@dominio.com)";
    }

    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Digite no formato (99) 99999-9999";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhone(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleValidatedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) return;

    // Submete para o Formspree
    const formElement = e.target as HTMLFormElement;
    handleSubmit(formElement);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Entre em contato conosco</h3>
        <p className={styles.formSubtitle}>
          Preencha o formulário e nossa equipe entrará em contato em breve
        </p>
      </div>

      <form onSubmit={handleValidatedSubmit} className={styles.form}>
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
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
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
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}
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
          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone}</span>
          )}
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
          {errors.message && (
            <span className={styles.errorMessage}>{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className={`${styles.submitButton} ${state.submitting ? styles.submitting : ""}`}
        >
          {state.submitting ? "Enviando..." : "Enviar mensagem"}
        </button>

        {submitStatus === "success" && (
          <div className={styles.successMessage}>
            ✅ Mensagem enviada com sucesso! Em breve entraremos em contato.
          </div>
        )}

        {submitStatus === "error" && (
          <div className={styles.errorMessage}>
            ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via
            WhatsApp.
          </div>
        )}
      </form>
    </div>
  );
}
