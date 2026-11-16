'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const links = [
  // { href: '/#about', label: 'О программе' },
  // { href: '/#how', label: 'Маршрут' },
  // { href: '/#price', label: 'Стоимость' },
  // { href: '/#parents', label: 'Родителям' },
  { href: '/#faq', label: 'Вопросы' },
  { href: '/about', label: 'О нас' },
];

export default function Header() {
  const [compact, setCompact] = useState(false); // true = синяя полоса свёрнута
  const [atTop, setAtTop] = useState(true);
  const [spacerH, setSpacerH] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Отслеживаем позицию и направление скролла
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y <= 10);

      if (y <= 10) {
        setCompact(false); // у самого верха — всегда полный хедер
      } else if (y > lastY.current + 4) {
        setCompact(true); // скролл вниз — сворачиваем полосу
      } else if (y < lastY.current - 4) {
        setCompact(false); // скролл вверх — разворачиваем полосу
      }
      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Резервируем под фиксированный хедер место, чтобы контент не уезжал под него.
  // Меряем высоту в развёрнутом состоянии (полный хедер).
  useEffect(() => {
    const measure = () => {
      if (wrapperRef.current && !compact) setSpacerH(wrapperRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [compact]);

  const className = [
    styles.wrapper,
    !atTop && styles.scrolled,
    compact && styles.compact,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div ref={wrapperRef} className={className}>
        {/* --- ВЕРХНЯЯ ПОЛОСА-АНОНС (сворачивается при скролле вниз) --- */}
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            <span>Лучшие офферы</span>
            <span className={styles.sep} />
            <span>Полное сопровождение</span>
            <span className={styles.sep} />
            <span>Курсы немецкого</span>
          </div>
        </div>

        {/* --- ПЛАВАЮЩАЯ ШАПКА --- */}
        <header className={styles.header}>
          <div className={styles.container}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="Job Journey — на главную"
                width={140}
                height={75}
                className={styles.logoImage}
                priority
              />
            </Link>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} id="main-nav">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              {/* CTA внутри мобильного меню */}
              {/* <Link href="/#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
                Оставить заявку
              </Link> */}
            </nav>

            {/* CTA десктоп — в потоке, после nav */}
            <Link href="/#contact" className={styles.cta}>
              Оставить заявку
            </Link>

            <button
              type="button"
              className={styles.burger}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>
      </div>

      {/* Распорка под фиксированный хедер */}
      <div style={{ height: spacerH }} aria-hidden="true" />
    </>
  );
}
