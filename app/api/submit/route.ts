// File: app/api/submit/route.ts







// File: app/api/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';

/**
 * Определяем, какие данные мы ожидаем получить от фронтенда.
 */
interface RequestBody {
  name: string;
  email: string;
  phone: string;
}

/**
 * Простой кэш для отслеживания IP-адресов и времени их последних запросов.
 * Хранит данные в формате: { ip: timestamp }
 * Этот кэш будет сбрасываться при каждом перезапуске сервера.
 */
const ipRequestTracker = new Map<string, number>();

export async function POST(request: NextRequest) {
  // Получаем IP-адрес пользователя для защиты от спама.
  // Vercel (где вы, скорее всего, будете хостить сайт) предоставляет IP в заголовке 'x-forwarded-for'.
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  const now = Date.now();
  
  const lastRequestTime = ipRequestTracker.get(ip);
  const cooldown = 60 * 1000; // 60 секунд

  // Проверяем, не прошло ли достаточно времени с последней отправки.
  if (lastRequestTime && (now - lastRequestTime < cooldown)) {
    return NextResponse.json(
      { message: 'Вы можете отправлять заявку не чаще раза в минуту.' },
      { status: 429 } // Статус 429 Too Many Requests
    );
  }

  try {
    const body: RequestBody = await request.json();
    const { name, email, phone } = body;

    // Получаем URL нашего скрипта из переменных окружения (.env.local)
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      // Если URL не найден, это критическая ошибка конфигурации сервера.
      throw new Error("URL скрипта не определен в переменных окружения.");
    }

    // Отправляем данные методом POST на URL нашего веб-приложения в Google.
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Передаем данные в теле запроса
      body: JSON.stringify({ name, email, phone }),
      // Отключаем кэширование для этого запроса
      cache: 'no-cache',
    });

    const result = await response.json();

    // Проверяем ответ от Google Apps Script.
    if (result.result === 'success') {
      // Если все успешно, обновляем время последней заявки для этого IP
      ipRequestTracker.set(ip, now);
      // И отправляем успешный ответ на фронтенд
      return NextResponse.json({ message: 'Ваша заявка успешно отправлена!' }, { status: 200 });
    } else {
      // Если скрипт вернул ошибку, пробрасываем ее дальше.
      throw new Error(result.message || 'Неизвестная ошибка в Google Apps Script');
    }

  } catch (error) {
    // Ловим любые ошибки, которые могли произойти.
    console.error('Ошибка при отправке данных в Google Apps Script:', error);
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка на сервере.';
    return NextResponse.json({ message: 'Ошибка на сервере.', error: errorMessage }, { status: 500 });
  }
}







// import { NextRequest, NextResponse } from 'next/server';
// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { JWT } from 'google-auth-library';

// export async function POST(request: NextRequest) {
//   console.log('--- Шаг 1: Получен POST-запрос ---');

//   const serviceAccountAuth = new JWT({
//     email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   });

//   const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

//   // --- Выводим переменные в консоль для проверки ---
//   console.log('--- Шаг 2: Проверяем переменные окружения ---');
//   console.log('EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'Загружен' : 'НЕ НАЙДЕН');
//   console.log('PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'Загружен' : 'НЕ НАЙДЕН');
//   console.log('SHEET_ID:', process.env.GOOGLE_SHEET_ID ? 'Загружен' : 'НЕ НАЙДЕН');
  
//   try {
//     const body = await request.json();
//     const { name, email, phone } = body;

//     console.log('--- Шаг 3: Пытаемся загрузить информацию о таблице... ---');
//     await doc.loadInfo();
//     console.log('--- Шаг 4: Информация о таблице успешно загружена! ---');
    
//     const sheet = doc.sheetsByIndex[0];

//     const newRow = {
//       Timestamp: new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' }),
//       Name: name,
//       Email: email,
//       Phone: `'${phone}`,
//       IsContacted: '-',
//     };
//     //console.log(sheet)
//     console.log('--- Шаг 5: Пытаемся добавить строку... ---');
//     const addredRow = await sheet.addRow(newRow);
//     console.log(addredRow);
//     console.log('--- Шаг 6: Строка успешно добавлена! ---');

//     return NextResponse.json({ message: 'Ваша заявка успешно отправлена!' }, { status: 200 });

//   } catch (error) {
//     console.error('!!! ПРОИЗОШЛА ОШИБКА !!!', error);
//     const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
//     return NextResponse.json({ message: 'Ошибка на сервере.', error: errorMessage }, { status: 500 });
//   }
// }