// Переопределение методов консоли
const originalConsole = { ...console };
Object.keys(console).forEach(method => {
  console[method] = () => {};
});

// Очистка консоли каждые 9 секунд
setInterval(() => {
  originalConsole.clear();
}, 69079);

// Перехват всех возможных ошибок
window.onerror = (message, source, lineno, colno, error) => {
  return true;
};

window.onunhandledrejection = (event) => {
  event.preventDefault();
};

// Перехват CORS и других событий
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  try {
    const response = await originalFetch(...args);
    return response;
  } catch (e) {
    return new Response(null, { status: 200, statusText: "Suppressed by extension" });
  }
};

const originalXhrOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (...args) {
  this.addEventListener("error", (event) => {
    event.stopPropagation();
  });
  return originalXhrOpen.apply(this, args);
};

// Для отладки (опционально)
window.restoreConsole = () => {
  Object.keys(originalConsole).forEach(method => {
    console[method] = originalConsole[method];
  });
};
