// File: app/page.tsx
import Header from '@/components/Header/Header'; // Знак @ - это удобный псевдоним для корневой папки
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';
import Main from '@/components/Main/Main';

// Это основная часть вашей страницы.
// Здесь будет информация о программе, отзывы и т.д.
function MainContent() {
  return (
    {}
  );
}

export default function LandingPage() {
  return (
    <>
      
      <Main />
      
    </>
  );
}