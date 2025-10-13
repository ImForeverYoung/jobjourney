// File: app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaRegLightbulb, FaRegFileAlt, FaRegHandshake, FaRegLifeRing, FaPlaneDeparture, FaBook } from 'react-icons/fa';

import styles from './about.module.css';

// Header и Footer больше не нужны, так как они вставляются из layout.tsx
export default function AboutPage() {
  return (
    // Тег <main> мы тоже убираем, так как он теперь в layout.tsx
    <>
      {/* --- Секция 1: Главный экран --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Мы не просто отправляем студентов. Мы открываем двери в будущее.</h1>
          <p>
            Job Journey была основана с одной простой целью: сделать международный опыт доступным
            для каждого студента в Казахстане. Мы верим, что работа за границей — это лучший способ
            расширить горизонты, обрести уверенность и построить успешную карьеру.
          </p>
        </div>
      </section>
      {/* --- Секция 1: ferienjob --- */}
      
      {/* --- Секция 2: Наш подход (по шагам) --- */}
      <section className={styles.approachSection}>
        <div className={styles.approachContent}>
          <p className={styles.approachIntro}>
            Наша компания напрямую сотрудничает с проверенными немецкими работодателями, обучает немецкому языку, предлагает широкий выбор вакансий и полную поддержку на всех этапах программы Ferienjob.
          </p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <FaRegLightbulb className={styles.featureIcon} />
              <h3>Прозрачная консультация</h3>
            </div>
            <div className={styles.featureItem}>
              <FaRegFileAlt className={styles.featureIcon} />
              <h3>Помощь с документами</h3>
            </div>
            <div className={styles.featureItem}>
              <FaRegHandshake className={styles.featureIcon} />
              <h3>Надежные работодатели</h3>
            </div>
            <div className={styles.featureItem}>
              <FaBook className={styles.featureIcon} />
              <h3>Собственные курсы немецкого</h3>
            </div>
            <div className={styles.featureItem}>
              <FaPlaneDeparture className={styles.featureIcon} />
              <h3>Поддержка в Германии</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.approachSection}>
        <h2>Наш подход — ваш комфорт и безопасность</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>🔍</div>
            <h3>Прозрачная консультация</h3>
            <p>
              Мы честно рассказываем обо всех деталях программы, чтобы вы приняли взвешенное
              решение.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>📄</div>
            <h3>Помощь с документами</h3>
            <p>
              Мы берем на себя всю бумажную работу и помогаем правильно оформить каждый документ.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>🤝</div>
            <h3>Проверенные работодатели</h3>
            <p>
              Мы работаем только с надежными немецкими компаниями, которые обеспечивают хорошие
              условия труда.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>✈️</div>
            <h3>Поддержка в Германии</h3>
            <p>
              Наше сопровождение не заканчивается после вашего отъезда. Мы остаемся на связи и
              помогаем решать вопросы.
            </p>
          </div>
        </div>
      </section> */}

      {/* --- Секция 3: Команда --- */}
      <section className={styles.teamSection}>
        <h2>Познакомьтесь с нашей командой</h2>
        <p className={styles.teamIntro}>
          За каждым успешным путешествием стоят люди, которые любят свое дело.
        </p>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <Image
              src="/images/teammembers/amiran.jpg" 
              alt="Фотография Имя Фамилия"
              width={150} 
              height={150}
              className={styles.teamPhoto} //класс для стилизации
            />
            <h3>Каиркан Амиран</h3>
            <p>Координатор</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/teammembers/amre.jpg" 
              alt="Фотография Имя Фамилия"
              width={150} 
              height={150}
              className={styles.teamPhoto} //класс для стилизации
            />
            <h3>Джумадиев Амре</h3>
            <p>Координатор</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/teammembers/mansur.jpg" 
              alt="Фотография Имя Фамилия"
              width={150} 
              height={150}
              className={styles.teamPhoto} //класс для стилизации
            />
            <h3>Кубайдоллаев Абилмансур</h3>
            <p>Преподаватель немецкого языка</p>
          </div>
          <div className={styles.teamMember}>
            <Image
              src="/images/teammembers/yegor.png" 
              alt="Фотография Имя Фамилия"
              width={150} 
              height={150}
              className={styles.teamPhoto} //класс для стилизации
            />
            <h3>Курносов Егор</h3>
            <p>Преподаватель немецкого языка</p>
          </div>
        </div>
      </section>

      {/* --- Секция 4: Призыв к действию --- */}
      <section className={styles.ctaSection}>
        <h2>Готовы начать свое путешествие?</h2>
        <p>
          Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и сделать первый шаг
          навстречу вашей мечте.
        </p>
        <Link href="/#contact" className={styles.ctaButton}>
          Связаться с нами
        </Link>
      </section>
    </>
  );
}
