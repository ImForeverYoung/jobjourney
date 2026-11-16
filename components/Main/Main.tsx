'use client';

import styles from './Main.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ReactTyped } from 'react-typed';
import {
  FaBriefcase,
  FaComments,
  FaGlobeEurope,
  FaCheck,
  FaTimes,
  FaWhatsapp,
  FaShieldAlt,
  FaFileContract,
  FaHeadset,
  FaPassport,
  FaMedkit,
  FaPlane,
  FaUserFriends,
  FaHandshake,
} from 'react-icons/fa';
import ContactForm from '../ContactForm/ContactForm';
import TiltCard from '../TiltCard/TiltCard';
import Route from '../Route/Route';
import Faq from '../Faq/Faq';

const stats = [
  { value: 'до 90', unit: 'дней', label: 'работы в летние каникулы' },
  { value: 'от 13,90', unit: '€/час', label: 'минимальная ставка в Германии, брутто' },
  { value: '18+', unit: '', label: 'студенты очной формы обучения' },
  { value: '29', unit: 'стран', label: 'Шенгена открыты для поездок' },
];

const included = [
  { icon: FaFileContract, text: 'Подбор оффера от немецкого работодателя' },
  { icon: FaPassport, text: 'Подготовка и подача документов в ZAV' },
  { icon: FaShieldAlt, text: 'Оформление разрешения на работу' },
  { icon: FaHeadset, text: 'Сопровождение на всех этапах — от заявки до вылета' },
  { icon: FaMedkit, text: 'Медицинская страховка на весь период' },
  { icon: FaHandshake, text: 'Связь с принимающей стороной в Германии' },
];

const notIncluded = [
  'Авиабилеты',
  'Консульский и сервисный сборы визового центра',
  'Проживание, питание и транспорт в Германии',
];

const trustStats = [
  { value: '2', label: 'года на рынке' },
  { value: '49', label: 'студентов отправлено' },
  { value: '100%', label: 'получили визу' },
  { value: '24/7', label: 'поддержка на связи' },
];

const parentPoints = [
  {
    icon: FaFileContract,
    title: 'Официальный договор',
    text: 'Работаем по договору — все условия, суммы и гарантии прописаны на бумаге.',
  },
  {
    icon: FaShieldAlt,
    title: 'Легальная программа',
    text: 'Ferienjob — государственная программа Германии. Разрешение выдаёт ZAV, подразделение немецкого Минтруда.',
  },
  {
    icon: FaHeadset,
    title: 'Всегда на связи',
    text: 'Координатор доступен с момента подачи заявки и до возвращения студента домой.',
  },
  {
    icon: FaUserFriends,
    title: 'Принимающая сторона',
    text: 'В Германии студента встречает партнёр — помогает с заселением и адаптацией на месте.',
  },
];

const payments = [
  {
    step: '01',
    amount: '85 000 ₸',
    title: 'Организационный сбор',
    when: 'после подписания договора',
    text: 'Консультации, сбор и проверка документов, сопровождение на всех этапах.',
  },
  {
    step: '02',
    amount: '300 €',
    title: 'Первый транш',
    when: 'после того, как вы приняли оффер',
    text: 'Подаём документы в ZAV на разрешение на работу.',
  },
  {
    step: '03',
    amount: '300 €',
    title: 'Второй транш',
    when: 'только после получения визы',
    text: 'Медицинская страховка, услуги принимающей стороны, инструктаж перед вылетом.',
  },
];

export default function Main() {
  return (
    <main className={styles.mainContainer}>
      {/* --- HERO: фото + Typed + бейдж --- */}
      <section className={styles.hero}>
        <Image
          src="/images/schloss.jpg"
          alt="Замок Нойшванштайн в Баварии"
          fill
          priority
          quality={70}
          sizes="(max-width: 1200px) 100vw, 1100px"
          className={styles.heroImage}
        />
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Программа Ferienjob для студентов</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroStatic}>Лето в Германии:</span>
            <span className={styles.heroTyped} aria-hidden="true">
              <ReactTyped
                strings={['работай!', 'учи немецкий', 'путешествуй по Европе']}
                typeSpeed={70}
                backSpeed={30}
                backDelay={1400}
                loop
              />
            </span>
            <span className={styles.srOnly}>работай, учи немецкий, путешествуй</span>
          </h1>
          <p className={styles.heroLead}>
            Проведи это лето с пользой: официальная работа в Германии, европейская зарплата и прокачка языка.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#contact" className={styles.btnPrimary}>
              Подать заявку
            </a>
            <a href="#how" className={styles.btnGhost}>
              Как это работает
            </a>
          </div>
        </div>

        {/* <div className={styles.heroBadge}>
          <svg viewBox="0 0 480 300" className={styles.badgeShape} aria-hidden="true">
            <path
              d="M112,20 L368,20 Q390,20 401.5,38.7 L458.5,131.3 Q470,150 458.5,168.7 L401.5,261.3 Q390,280 368,280 L112,280 Q90,280 78.5,261.3 L21.5,168.7 Q10,150 21.5,131.3 L78.5,38.7 Q90,20 112,20 Z"
              fill="#ffffff"
              stroke="#0156BA"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M118,38 L362,38 Q380,38 389.3,53.4 L438.7,134.6 Q448,150 438.7,165.4 L389.3,246.6 Q380,262 362,262 L118,262 Q100,262 90.7,246.6 L41.3,165.4 Q32,150 41.3,134.6 L90.7,53.4 Q100,38 118,38 Z"
              fill="none"
              stroke="#0156BA"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="58" cy="150" r="5" fill="#0156BA" />
            <circle cx="422" cy="150" r="5" fill="#0156BA" />
          </svg>
          <span className={styles.badgeText}>
            Проведи
            <br />
            лето
            <br />
            по-немецки
          </span>
        </div> */}
      </section>

      {/* --- ЦИФРЫ --- */}
      <section className={styles.stats} aria-label="Программа в цифрах">
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statValue}>
              {s.value}
              {s.unit && <span className={styles.statUnit}> {s.unit}</span>}
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* --- ЧТО ТАКОЕ FERIENJOB --- */}
      <section className={styles.programSection} id="about">
        <div className={styles.programText}>
          <h2 className={styles.displayTitle}>
            <span className={styles.red}>Что такое</span>
            <span className={styles.blue}>Ferienjob?</span>
          </h2>
          <p className={styles.programLead}>
            <b className={styles.red}>Ferienjob</b> — официальная программа летней работы в Германии
            для иностранных студентов. Разрешение на работу выдаёт ZAV — подразделение Федерального
            агентства по труду Германии.
          </p>
          <p className={styles.programLead}>
            За одно лето можно подтянуть <b className={styles.blue}>немецкий язык</b>,{' '}
            <b className={styles.gold}>заработать</b> и{' '}
            <b className={styles.blue}>путешествовать</b> по Европе.
          </p>
        </div>

        <div className={styles.programVisual}>
          <img
            src="/images/brandenburggate.svg"
            alt="Бранденбургские ворота"
            className={styles.gateImg}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* --- ТРИ КАРТОЧКИ ВЕЕРОМ --- */}
      <section className={styles.fanSection}>
        <h2 className={`${styles.displayTitle} ${styles.center}`}>
          <span className={styles.ink}>Проведите лето</span>{' '}
          <span className={styles.chipGold}>продуктивно</span>
        </h2>
        <div className={styles.fan}>
          <TiltCard className={`${styles.fanCard} ${styles.fanBlack}`} max={10}>
            <FaBriefcase className={styles.fanIcon} />
            <h3>Работа</h3>
            <p>
              Официальный трудовой договор с немецким работодателем и оплата не ниже законного
              минимума.
            </p>
          </TiltCard>
          <TiltCard className={`${styles.fanCard} ${styles.fanRed}`} max={10}>
            <FaComments className={styles.fanIcon} />
            <h3>Язык</h3>
            <p>Три месяца в языковой среде дают больше, чем год занятий по учебнику.</p>
          </TiltCard>
          <TiltCard className={`${styles.fanCard} ${styles.fanGold}`} max={10}>
            <FaGlobeEurope className={styles.fanIcon} />
            <h3>Путешествия</h3>
            <p>В выходные — Париж, Прага, Вена и вся шенгенская зона.</p>
          </TiltCard>
        </div>
      </section>

      {/* --- НАМ ДОВЕРЯЮТ --- */}
      <section className={styles.trustStrip} aria-label="Нам доверяют">
        <h2 className={`${styles.displayTitle} ${styles.center}`}>
          <span className={styles.white}>В цифрах</span>
        </h2>
        <div className={styles.trustGrid}>
          {trustStats.map((s) => (
            <div key={s.label} className={styles.trustItem}>
              <div className={styles.trustValue}>{s.value}</div>
              <div className={styles.trustLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- МАРШРУТ --- */}
      <Route />

      {/* --- СТОИМОСТЬ: билеты --- 
      <section className={styles.priceSection} id="price">
        <h2 className={`${styles.displayTitle} ${styles.center}`}>
          <span className={styles.ink}>Сколько стоит</span>{' '}
          <span className={styles.blue}>и когда платить</span>
        </h2>
        <p className={styles.sectionLead}>
          Оплата разбита на три этапа — вы платите только за то, что уже сделано.
        </p>

        <div className={styles.tickets}>
          {payments.map((p) => (
            <article key={p.step} className={styles.ticket}>
              <div className={styles.ticketStub}>
                <span>Этап</span>
                <b>{p.step}</b>
              </div>
              <div className={styles.ticketBody}>
                <div className={styles.ticketAmount}>{p.amount}</div>
                <h3>{p.title}</h3>
                <div className={styles.ticketWhen}>{p.when}</div>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Что входит / не входит 
        <div className={styles.includedSection}>
          <div className={styles.includedCard}>
            <h3 className={styles.includedTitle}>
              <FaCheck className={styles.includedIcon} /> Что входит в стоимость
            </h3>
            <ul className={styles.includedList}>
              {included.map((item) => (
                <li key={item.text}>
                  <item.icon className={styles.includedItemIcon} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.excludedCard}>
            <h3 className={styles.excludedTitle}>
              <FaTimes className={styles.excludedIcon} /> Оплачивается отдельно
            </h3>
            <ul className={styles.excludedList}>
              {notIncluded.map((text) => (
                <li key={text}>
                  <FaTimes className={styles.excludedItemIcon} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Гарантии 
        <div className={styles.guaranteeCard}>
          <h3>Гарантии по договору</h3>
          <ul>
            <li>
              <FaShieldAlt className={styles.ok} /> Отказали в визе — второй транш не оплачивается.
            </li>
            <li>
              <FaShieldAlt className={styles.ok} /> ZAV дважды отказал в разрешении не по вашей вине
              — вернём 50% первого транша.
            </li>
            <li>
              <FaShieldAlt className={styles.ok} /> Суммы в евро оплачиваются в тенге по курсу
              Нацбанка РК на день оплаты.
            </li>
          </ul>
        </div>
      </section> */}

      {/* --- FAQ --- */}
      <Faq />

      {/* --- ДЛЯ РОДИТЕЛЕЙ --- */}
      <section className={styles.parentsSection} id="parents">
        <h2 className={`${styles.displayTitle} ${styles.center}`}>
          <span className={styles.ink}>Для</span>{' '}
          <span className={styles.blue}>родителей</span>
        </h2>
        <p className={styles.sectionLead}>
          Мы понимаем, что отправить ребёнка за границу — серьёзное решение. Вот почему нам
          доверяют.
        </p>
        <div className={styles.parentsGrid}>
          {parentPoints.map((p) => (
            <div key={p.title} className={styles.parentCard}>
              <p.icon className={styles.parentIcon} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ЗАЯВКА --- */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactText}>
          <h2 className={styles.displayTitle}>
            <span className={styles.white}>Начните путь</span>
            <span className={styles.chipGold}>в Германию</span>
          </h2>
          <p>
            Оставьте заявку — координатор свяжется с вами, расскажет об условиях и ответит на
            вопросы. Консультация бесплатная.
          </p>
          <a
            href="https://wa.me/77066379300"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waButton}
          >
            <FaWhatsapp /> Написать в WhatsApp
          </a>
          <p className={styles.contactSmall}>
            Или позвоните: <a href="tel:+77066379300">+7 (706) 637 93 00</a>
          </p>
        </div>
        <ContactForm />
      </section>

      <p className={styles.aboutLink}>
        Хотите узнать, кто мы? <Link href="/about">Познакомьтесь с командой →</Link>
      </p>
    </main>
  );
}
