// File: components/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
            <Image src="/images/logo.png" className={styles.logoImage}
                alt="JobJourney Logo" width={150} height={80} />
            </Link>
            
        </div>
        <div className={styles.Container}>
            <nav>
            <Link href="/about" className={styles.navLink}>О нас</Link>
            {/* <Link href="#reviews" className={styles.navLink}>Отзывы</Link> */}
            <Link href="#contact" className={styles.navLink}>Контакты</Link>
            </nav>
        </div>
      </div>
    </header>
  );
}