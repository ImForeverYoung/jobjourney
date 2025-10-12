// File: components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        {/* Блок 1: Логотип и описание */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            JobJourney.kz
          </Link>
          <p>
            Открываем студентам двери в будущее через международный опыт и культурный обмен.
          </p>
        </div>

        {/* Блок 2: Контактная информация */}
        <div className={styles.contactSection}>
          <h3>Свяжитесь с нами</h3>
          <ul className={styles.contactList}>
            <li>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:+7 706 637 93 00">+7 (706) 637 93 00</a>
            </li>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:info@jobjourney.kz">info@jobjourney.kz</a>
            </li>
          </ul>
        </div>

        {/* Блок 3: Социальные сети */}
        <div className={styles.socialSection}>
          <h3>Мы в соцсетях</h3>
          <div className={styles.socialIcons}>
            <a href="https://wa.me/77066379300" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/jobjourney_kz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://t.me/workandtravelgermany_kz" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} JobJourney.kz. Все права защищены.</p>
      </div>
    </footer>
  );
}