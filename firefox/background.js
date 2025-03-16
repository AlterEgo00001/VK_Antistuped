browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url;
    const allowedPatterns = [
      /vk\.com/,
      /vkvideo\.ru/,
      /vkuseraudio\.net/,
      /userapi\.com/,
      /vk-cdn\.net/,
      /stats\.vk-portal\.net/,
      /ad\.mail\.ru\/static\/admanhtml/,
      /\.mp3$/,
      /\.m3u8$/,
      /\.aac$/,
      /\.ogg$/,
      /\.mp4$/,
      /al_audio\.php/,
      /audio_api\.php/,
      /index\.m3u8/,
      /blob:/
    ];

    const isAllowed = allowedPatterns.some(pattern => pattern.test(url));
    if (!isAllowed) {
      console.log(`Blocked: ${url}`); // Для отладки
      return { cancel: true };
    }
    return { cancel: false };
  },
  { urls: ["*://*.vk.com/*", "*://*.vkvideo.ru/*"] }, // Ограничиваем область действия
  ["blocking"]
);

// Модификация заголовков для минимизации проблем с cookies
browser.webRequest.onHeadersReceived.addListener(
  (details) => {
    const responseHeaders = details.responseHeaders;
    responseHeaders.forEach(header => {
      if (header.name.toLowerCase() === "set-cookie") {
        if (!header.value.includes("SameSite")) {
          header.value += "; SameSite=None; Secure";
        }
      }
    });
    return { responseHeaders };
  },
  { urls: ["*://*.vk.com/*", "*://*.vkvideo.ru/*"] },
  ["blocking", "responseHeaders"]
);