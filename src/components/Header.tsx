"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import MapModal from "./MapModal";
import Image from "next/image";

export default function Header() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMapModal = () => setIsMapModalOpen(true);
  const closeMapModal = () => setIsMapModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              src="/images/favicon.ico"
              alt="Logo da PRECJUSPB"
              width={180}
              height={48}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>PRECJUSPB</span>
          </div>

          <nav className={styles.nav}>
            <div className={styles.navigation}>
              <a href="#inicio" className={styles.navLink}>
                Início
              </a>
              <a href="#vantagens" className={styles.navLink}>
                Vantagens
              </a>
              <a href="#contato" className={styles.navLink}>
                Contato
              </a>
            </div>

            <div className={styles.contactInfo}>
              <a
                href="mailto:precjuspb@precjuspb.com.br"
                className={styles.contactItem}
              >
                <span className={styles.icon}>✉️</span>
                <span className={styles.contactText}>
                  precjuspb@precjuspb.com.br
                </span>
              </a>

              <button onClick={openMapModal} className={styles.contactItem}>
                <span className={styles.icon}>📍</span>
                <span className={styles.contactText}>Localização</span>
              </button>
            </div>

            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <a
                href="#inicio"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#vantagens"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vantagens
              </a>
              <a
                href="#contato"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>

              <div className={styles.mobileDivider}></div>

              <a
                href="mailto:precjuspb@precjuspb.com.br"
                className={styles.mobileContactItem}
              >
                <span className={styles.icon}>✉️</span>
                <span>precjuspb@precjuspb.com.br</span>
              </a>

              <button
                onClick={openMapModal}
                className={styles.mobileContactItem}
              >
                <span className={styles.icon}>📍</span>
                <span>Ver localização</span>
              </button>
            </div>
          )}
        </div>
      </header>

      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} />
    </>
  );
}
