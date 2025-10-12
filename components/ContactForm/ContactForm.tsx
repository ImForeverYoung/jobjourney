// File: components/ContactForm.tsx
'use client'; // Форма интерактивна, поэтому это клиентский компонент

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');


  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // ... (вся функция handleSubmit из прошлого шага остается здесь)
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Отправка...');
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const result: { message: string } = await response.json();
      if (response.ok) {
        setStatusMessage(`✅ ${result.message}`);
        setName(''); setEmail(''); setPhone('');
      } else {
        setStatusMessage(`❌ Ошибка: ${result.message}`);
      }
    } catch (error) {
      setStatusMessage('❌ Не удалось отправить заявку.');
    } finally {
      // 3. Выключаем блокировку в любом случае (успех или ошибка)
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer} id="contact">
        <h2>Оставить заявку</h2>
        <p>Заполните форму, и мы свяжемся с вами!</p>
        <form onSubmit={handleSubmit}>
          {/* ... вся JSX разметка формы из прошлого шага ... */}
          <div className={styles.inputGroup}>
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Номер телефона</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting} // <-- Кнопка станет неактивной
          >
            {'Отправить заявку'}
          </button>
        </form>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </div>
  );
}