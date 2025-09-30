/*
Цель: Загрузить библиотеку Lodash динамически 
и использовать ее для вычисления суммы массива после загрузки.
*/

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // 1. Создаём элемент <script>
    const script = document.createElement('script');
    
    // 2. Устанавливаем атрибуты
    script.src = src;
    script.async = true; // Загружаем асинхронно (рекомендуется)

    // 3. Обработчики событий
    script.onload = () => {
      console.log(`Скрипт ${src} успешно загружен`);
      resolve(); // Разрешаем промис при успехе
    };
    
    script.onerror = () => {
      reject(new Error(`Ошибка загрузки скрипта: ${src}`)); // Отклоняем промис при ошибке
    };

    // 4. Добавляем скрипт в DOM
    document.head.appendChild(script);
  });
}

// Использование
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js')
  .then(() => {
    // Проверяем наличие Lodash (опционально)
    if (typeof _ !== 'undefined') {
      console.log('Lodash доступен:', _.version); // 4.17.21
      console.log(_.sum([1, 2, 3])); // 6
    } else {
      throw new Error('Lodash не загружен');
    }
  })
  .catch(error => {
    console.error('Произошла ошибка:', error.message);
  });