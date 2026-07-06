'use client';

import styles from './Main.module.css';
import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import { theme } from '@/styles/theme';
import ContactForm from '../ContactForm/ContactForm';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <main className={styles.mainContainer}>
        {/* --- ГЛАВНЫЙ ЭКРАН С КАРТИНКОЙ И АНИМАЦИЕЙ --- */}
        <section className={styles.heroImageSection}>
          <Image
            src="/images/schloss.jpg"
            alt="Замок в Германии"
            fill
            priority
            quality={70}
            sizes="(max-width: 1200px) 100vw, 1100px"
            className={styles.heroImage}
          />
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <h1 style={{ color: theme.colors.white }}>
              <ReactTyped
                strings={['JobJourney.kz', 'Ваш путь в Германию', 'Работай, Учись, Путешествуй']}
                typeSpeed={80}
                backSpeed={30}
                loop
                className={styles.typedText}
              />
            </h1>
            <p>
              Программа Ferienjob — это ваш шанс получить международный опыт, улучшить немецкий и
              заработать.
            </p>
            <div className={styles.buttonGroup}>
              <a href="#contact" className={styles.ctaButton}>
                Подать заявку
              </a>

              {/* --- ВАША НОВАЯ КНОПКА --- */}
              <Link href="/about" className={styles.secondaryButton}>
                Узнать больше
              </Link>
            </div>
          </div>
        </section>
        {/* --- СЕКЦИЯ "О ПРОГРАММЕ" --- */}
        <section className={styles.infoSection}>
          <div className={styles.infoIcon}>🇩🇪</div>
          <h2>Что такое Ferienjob?</h2>
          <p className={styles.infoSubtitle}>
            Это официальная программа летней работы в Германии для иностранных студентов,
            действующая уже более 75 лет.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Легальная работа</h3>
              <p>
                Вы получаете официальный контракт и работаете на тех же условиях, что и немецкие
                студенты, с полной социальной защитой.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Летние каникулы</h3>
              <p>
                Программа рассчитана на период до 90 дней во время официальных летних каникул вашего
                университета.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Практический опыт</h3>
              <p>
                Это не просто заработок, а погружение в языковую среду и получение ценного опыта
                работы в европейской компании.
              </p>
            </div>
          </div>
        </section>
        {/* ... Другие секции, например, Отзывы ... */}
        <ContactForm /> {/* Раскомментируйте, когда будете готовы */}
      </main>
    </>
  );
}
