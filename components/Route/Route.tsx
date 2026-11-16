'use client';

import { useEffect, useRef } from 'react';
import { FaPlane } from 'react-icons/fa';
import styles from './Route.module.css';

const steps = [
  { title: 'Знакомство', text: 'Оставляете заявку — координатор связывается с вами и рассказывает об условиях программы.' },
  { title: 'Договор и анкета', text: 'Подписываем договор онлайн через iDocs. Вы заполняете анкету: университет, даты каникул, уровень языка.' },
  { title: 'Оффер', text: 'Подбираем оффер с учетом ваших данных.' },
  { title: 'Разрешение ZAV', text: 'Готовим и отправляем документы в Федеральное агентство по труду Германии.' },
  { title: 'Виза', text: 'После получения разрешения ZAV записываемся в визовый центр, проверяем пакет документов и готовимся к подаче.' },
  { title: 'Вылет', text: 'Проводим инструктаж, согласовываем с работодателем ваш прилёт — и вы летите в Германию.' },
  { title: 'Работа и путешествия', text: 'Работаете до 90 дней, практикуете немецкий, в выходные открываете Европу.' },
  { title: 'Возвращение', text: 'Возвращаетесь домой с опытом, языком и заработком.' },
];

export default function Route() {
  const listRef = useRef<HTMLOListElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Самолёт едет по линии маршрута вслед за скроллом
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list || !planeRef.current || !fillRef.current) return;
      const r = list.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height));
      planeRef.current.style.top = `${p * 100}%`;
      fillRef.current.style.height = `${p * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.section} id="how">
      <h2 className={styles.title}>
        <span className={styles.blue}>Как выглядит</span> <span className={styles.red}>ваш маршрут</span>
      </h2>

      <div className={styles.wrap}>
        <div className={styles.rail} aria-hidden="true">
          <div ref={fillRef} className={styles.railFill} />
          <div ref={planeRef} className={styles.plane}>
            <FaPlane />
          </div>
        </div>

        <ol ref={listRef} className={styles.list}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <a href="#contact" className={styles.cta}>
        Хочу попробовать
      </a>
    </section>
  );
}
