chrome.webRequest.onBeforeRequest.addListener(
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
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  // Дополнительно: модификация заголовков для минимизации проблем с cookies
  chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      const responseHeaders = details.responseHeaders;
      // Убедимся, что SameSite и CORS-заголовки не вызывают предупреждений
      responseHeaders.forEach(header => {
        if (header.name.toLowerCase() === "set-cookie") {
          // Добавляем SameSite=None; Secure, если отсутствует
          if (!header.value.includes("SameSite")) {
            header.value += "; SameSite=None; Secure";
          }
        }
      });
      return { responseHeaders };
    },
    { urls: ["*://*.vk.com/*", "*://*.vkvideo.ru/*"] },
    ["responseHeaders", "extraHeaders"]
  );