'use client';

import { useRef, ReactNode, PointerEvent } from 'react';
import styles from './TiltCard.module.css';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Максимальный угол наклона в градусах */
  max?: number;
}

/**
 * Оборачивает контент и наклоняет его в 3D вслед за курсором.
 * Сторона под курсором «уезжает» назад — эффект как на pizza-amici.
 */
export default function TiltCard({ children, className = '', max = 14 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // px, py в диапазоне -0.5..0.5 относительно центра элемента
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    // Сторона под курсором отклоняется от зрителя (чтобы «наклонять к курсору»
    // вместо «от курсора» — поменяйте знаки rotateX/rotateY на противоположные).
    const rotateX = py * max;
    const rotateY = px * max;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  };

  return (
    <div
      ref={ref}
      className={`${styles.tilt} ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
