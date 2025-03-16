// Переопределение методов консоли
const originalConsole = { ...console };
Object.keys(console).forEach(method => {
  console[method] = () => {};
});

// Очистка консоли каждые 9 секунд
setInterval(() => {
  originalConsole.clear();
}, 9000);

// Перехват всех возможных ошибок
window.onerror = (message, source, lineno, colno, error) => {
  return true; // Блокируем вывод в консоль и Issues
};

window.onunhandledrejection = (event) => {
  event.preventDefault(); // Блокируем unhandled rejections
};

// Перехват CORS и других событий
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  try {
    const response = await originalFetch(...args);
    return response;
  } catch (e) {
    // Поглощаем ошибки fetch (например, CORS)
    return new Response(null, { status: 200, statusText: "Suppressed by extension" });
  }
};

const originalXhrOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (...args) {
  this.addEventListener("error", (event) => {
    event.stopPropagation(); // Пытаемся блокировать ошибки XHR
  });
  return originalXhrOpen.apply(this, args);
};

// Для отладки (опционально)
window.restoreConsole = () => {
  Object.keys(originalConsole).forEach(method => {
    console[method] = originalConsole[method];
  });
};