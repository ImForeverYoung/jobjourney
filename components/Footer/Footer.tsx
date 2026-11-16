import Link from 'next/link';
import styles from './Footer.module.css';
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <p className={styles.tagline}>
            Открываем студентам двери в будущее через международный опыт и культурный обмен.
          </p>
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

        <nav className={styles.col} aria-label="Разделы сайта">
          <h3>Программа</h3>
          <ul>
            <li><Link href="/#about">Что такое Ferienjob</Link></li>
            <li><Link href="/#how">Маршрут</Link></li>
            {/* <li><Link href="/#price">Стоимость</Link></li> */}
            <li><Link href="/#faq">Вопросы</Link></li>
            <li><Link href="/about">О нас</Link></li>
          </ul>
        </nav>

        <div className={styles.col}>
          <h3>Контакты</h3>
          <ul>
            <li>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:+77066379300">+7 (706) 637 93 00</a>
            </li>
            <li>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:info@jobjourney.kz">info@jobjourney.kz</a>
            </li>
            <li>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>г. Астана, пр. Кабанбай батыра, 2/2,<br />БЦ «Держава», 4 этаж, 419 офис</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Карта 2ГИС */}
      <div className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A51.1504%2C%22lon%22%3A71.4278%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22astana%22%7D%7D"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Офис Job Journey на карте 2ГИС"
          />
        </div>
        <a
          href="https://2gis.kz/astana/firm/70000001030076369"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapLink}
        >
          Открыть в 2ГИС →
        </a>
      </div>

      {/* Большой водяной знак на всю ширину */}
      <div className={styles.watermark} aria-hidden="true">
        Job Journey
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} ИП «JOB JOURNEY». Все права защищены.</p>
        <Link href="/privacy">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
