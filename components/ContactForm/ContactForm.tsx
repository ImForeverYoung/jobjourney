'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import styles from './ContactForm.module.css';

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; text: string };

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState(''); // ловушка для ботов, люди её не видят
  const [status, setStatus] = useState<Status>({ kind: 'idle', text: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ kind: 'sending', text: 'Отправляем…' });
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, consent: true }),
      });
      const result: { message?: string } = await response.json().catch(() => ({}));
      if (response.ok) {
        setStatus({ kind: 'ok', text: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.' });
        setName('');
        setEmail('');
        setPhone('');
      } else {
        setStatus({ kind: 'error', text: result.message || 'Не удалось отправить заявку.' });
      }
    } catch {
      setStatus({
        kind: 'error',
        text: 'Не удалось отправить заявку. Проверьте интернет или напишите нам в WhatsApp.',
      });
    }
  };

  const sending = status.kind === 'sending';

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Оставить заявку</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+7 (___) ___ __ __"
            maxLength={20}
            pattern="[0-9+()\-\s]{10,20}"
            title="Номер телефона: от 10 цифр"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            maxLength={120}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.hp} aria-hidden="true">
          <label htmlFor="company">Компания</label>
          <input
            type="text"
            id="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <label className={styles.consent}>
          <input type="checkbox" required />
          <span>
            Я согласен(на) на обработку персональных данных в соответствии с{' '}
            <Link href="/privacy">политикой конфиденциальности</Link>
          </span>
        </label>

        <button type="submit" className={styles.submitButton} disabled={sending}>
          {sending ? 'Отправляем…' : 'Отправить заявку'}
        </button>
      </form>
      <p
        className={`${styles.statusMessage} ${status.kind === 'ok' ? styles.ok : ''} ${
          status.kind === 'error' ? styles.err : ''
        }`}
        role="status"
        aria-live="polite"
      >
        {status.kind === 'ok' || status.kind === 'error' ? status.text : ''}
      </p>
    </div>
  );
}
