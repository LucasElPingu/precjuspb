"use client";

import { useEffect } from "react";
import styles from "./MapModal.module.css";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossa Localização</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.address}>
            <h3>PRECJUSPB</h3>
            <p>
              Rua Acrísio Borges, 287, Brisamar
              <br />
              João Pessoa - PB
              <br />
              CEP: 58033-180
            </p>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.4976812345!2d-34.8456789!3d-7.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12dd6a0b1a234567%3A0x1234567890abcdef!2sRua%20Acr%C3%ADsio%20Borges%2C%20287%20-%20Brisamar%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058033-180!5e0!3m2!1spt-BR!2sbr!4v1638360000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização PRECJUSPB"
            ></iframe>
          </div>

          <div className={styles.actions}>
            <a
              href="https://maps.google.com/maps?q=Rua+Acr%C3%ADsio+Borges,+287,+Brisamar,+Jo%C3%A3o+Pessoa+-+PB,+58033-180"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
