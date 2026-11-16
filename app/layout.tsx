import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

/* --- Unbounded: заголовки, hero, кнопки --- */
import "@fontsource/unbounded/300.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/600.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/unbounded/800.css";
import "@fontsource/unbounded/900.css";

/* --- Manrope: основной текст --- */
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

/* --- Space Mono: акцентный моноширинный --- */
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";

const fonts = { variable: "fontvars" };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jobjourney.kz"),
  title: {
    default: "Job Journey — Ferienjob: летняя работа в Германии для студентов",
    template: "%s | Job Journey",
  },
  description:
    "Программа Ferienjob для студентов из Казахстана: официальная работа в Германии на летних каникулах до 90 дней. Подбор оффера, документы для ZAV, визовое сопровождение.",
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    siteName: "Job Journey",
    images: ["/images/schloss.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={fonts.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
