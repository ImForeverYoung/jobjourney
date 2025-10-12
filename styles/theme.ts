// File: styles/theme.ts

export const theme = {
  colors: {
    // 1. Основные цвета
    primary: '#3A6EA5',      // Глубокий синий
    accent: '#FFC107',       // Солнечно-золотой

    // 2. Нейтральные цвета
    background: '#F8F9FA',   // Почти белый
    text: '#212529',          // Темно-серый (для основного текста)
    secondaryText: '#6C757D', // Средне-серый (для второстепенного текста)
    white: '#FFFFFF',

    // 3. Дополнительные акценты
    error: '#D83A56',         // Энергичный красный
    black: '#000000',
  },

  // В будущем сюда можно будет добавить размеры шрифтов, отступы и т.д.
  // fonts: {
  //   body: 'Roboto, sans-serif',
  //   heading: 'Montserrat, sans-serif',
  // },
  // spacing: {
  //   small: '8px',
  //   medium: '16px',
  // },
} as const;