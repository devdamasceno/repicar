import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Fecha ao voltar para desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
        <Image
          src="/logo.png"
          alt="RepicaR Logo"
          width={90}
          height={90}
          quality={100}
          priority
          className={styles.logoImage}
        />
      </Link>

      <button
        className={`${styles.menuButton} ${isOpen ? styles.open : ""}`}
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation(); // 🔥 evita fechar imediatamente
          setIsOpen((prev) => !prev);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        ref={navRef}
        className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}