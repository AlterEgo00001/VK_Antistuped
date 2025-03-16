# VK_Antistuped

Замечательно работает совместно с блокировщиками рекламы. Если будут траблы — я не при чём, разбирайтесь сами!

Это расширение для браузеров Chrome и Firefox, которое очищает консоль разработчика каждые 9 секунд, блокирует ошибки и предупреждения на сайтах `vk.com` и `vkvideo.ru`, сохраняя при этом работу аудио- и видеоплееров, которые вызывают перегрузку памяти в вашем браузере (собсна, мы их просто блокируем, чтобы не лагало).

## Возможности
- Очистка консоли каждые 9 секунд — никаких лишних логов.
- Блокировка вывода в консоль (`console.log`, ошибки, unhandled rejections) — чистота и порядок.
- Минимизация предупреждений в DevTools (например, о cookies) — меньше мусора в интерфейсе.
- Поддержка воспроизведения аудио на `vk.com` и видео на `vkvideo.ru` — всё работает, как надо.

## Установка

### Для Chrome
1. Скачайте папку `chrome` из этого репозитория или файл `.crx` из [Releases](https://github.com/AlterEgo00001/VK_Antistuped/releases).
2. **Вариант 1: Установка через файл .crx**
   - Откройте `chrome://extensions/`.
   - Перетащите файл `vk_antistuped-chrome.crx` в окно браузера.
   - Подтвердите установку, если Chrome спросит.
3. **Вариант 2: Установка из исходников**
   - Распакуйте папку `chrome`.
   - Откройте `chrome://extensions/`.
   - Включите "Режим разработчика" (переключатель вверху справа).
   - Нажмите "Загрузить распакованное расширение" и выберите папку `chrome`.
4. Перейдите на `vk.com` или `vkvideo.ru` и проверьте, что всё работает.
5. **Официальная версия**: Скоро будет доступно в [Chrome Web Store](https://chromewebstore.google.com/) под названием `VK_Antistuped`.

### Для Firefox (версия 58 и выше)
1. Скачайте папку `firefox` из этого репозитория или файл `.zip` из [Releases](https://github.com/AlterEgo00001/VK_Antistuped/releases).
2. **Вариант 1: Временная установка**
   - Откройте `about:debugging#/runtime/this-firefox`.
   - Нажмите "Загрузить временное дополнение".
   - Выберите файл `vk_antistuped-firefox.zip` или любой файл из папки `firefox` (например, `manifest.json`).
3. **Вариант 2: Постоянная установка из исходников**
   - Распакуйте папку `firefox`.
   - Откройте `about:debugging#/runtime/this-firefox`.
   - Нажмите "Загрузить временное дополнение" и выберите `manifest.json`.
4. **Официальная версия**: Скоро будет доступно в [Mozilla Add-ons](https://addons.mozilla.org/) под названием `VK_Antistuped`.
5. Перейдите на `vk.com` или `vkvideo.ru` и убедитесь, что всё ок.

## Требования
- Chrome: любая современная версия.
- Firefox: версия 58 или выше.

## Устранение неполадок
- Если аудио/видео не работает:
  1. Откройте DevTools (F12) → вкладка "Сеть".
  2. Найдите заблокированные запросы (красные строки).
  3. Добавьте их в `allowedPatterns` в файле `background.js` и перезагрузите расширение (в Chrome: "Обновить" в `chrome://extensions/`, в Firefox: переустановите).
- Для отладки: откройте DevTools, введите `window.restoreConsole()` в консоли — это вернёт стандартный вывод, если надо что-то проверить.

## Совместимость
- Отлично работает с блокировщиками рекламы (uBlock Origin, AdBlock и т.д.) — никаких конфликтов замечено не было.

## Лицензия
[MIT License](LICENSE) — делайте что хотите, но не забудьте упомянуть меня, если будете форкать.

## Контакты
Вопросы, баги, предложения? Пишите в [Issues](https://github.com/AlterEgo00001/VK_Antistuped/issues) или на почту: [antibrutsystem@mail.ru](mailto:antibrutsystem@mail.ru).

---

# VK_Antistuped (English)

Works great with ad blockers. If something breaks, don’t blame me — figure it out yourself!

This is a browser extension for Chrome and Firefox that clears the developer console every 9 seconds, blocks errors and warnings on `vk.com` and `vkvideo.ru`, while keeping audio and video players functional — those memory-hogging ones get blocked to keep your browser from lagging.

## Features
- Clears the console every 9 seconds — no log spam.
- Blocks console output (`console.log`, errors, unhandled rejections) — clean and tidy.
- Minimizes DevTools warnings (e.g., about cookies) — less clutter.
- Supports audio playback on `vk.com` and video on `vkvideo.ru` — everything runs smoothly.

## Installation

### For Chrome
1. Download the `chrome` folder from this repository or the `.crx` file from [Releases](https://github.com/AlterEgo00001/VK_Antistuped/releases).
2. **Option 1: Install via .crx file**
   - Open `chrome://extensions/`.
   - Drag and drop `vk_antistuped-chrome.crx` into the browser window.
   - Confirm the installation if prompted.
3. **Option 2: Install from source**
   - Extract the `chrome` folder.
   - Open `chrome://extensions/`.
   - Enable "Developer mode" (toggle in the top right).
   - Click "Load unpacked" and select the `chrome` folder.
4. Visit `vk.com` or `vkvideo.ru` to test it out.
5. **Official version**: Coming soon to the [Chrome Web Store](https://chromewebstore.google.com/) as `VK_Antistuped`.

### For Firefox (version 58 and above)
1. Download the `firefox` folder from this repository or the `.zip` file from [Releases](https://github.com/AlterEgo00001/VK_Antistuped/releases).
2. **Option 1: Temporary installation**
   - Open `about:debugging#/runtime/this-firefox`.
   - Click "Load Temporary Add-on".
   - Select `vk_antistuped-firefox.zip` or any file from the `firefox` folder (e.g., `manifest.json`).
3. **Option 2: Permanent installation from source**
   - Extract the `firefox` folder.
   - Open `about:debugging#/runtime/this-firefox`.
   - Click "Load Temporary Add-on" and select `manifest.json`.
4. **Official version**: Coming soon to [Mozilla Add-ons](https://addons.mozilla.org/) as `VK_Antistuped`.
5. Visit `vk.com` or `vkvideo.ru` and check it works.

## Requirements
- Chrome: Any recent version.
- Firefox: Version 58 or higher.

## Troubleshooting
- If audio/video stops working:
  1. Open DevTools (F12) → "Network" tab.
  2. Look for blocked requests (red lines).
  3. Add them to `allowedPatterns` in `background.js` and reload the extension (Chrome: "Update" in `chrome://extensions/`, Firefox: reinstall).
- For debugging: Open DevTools, type `window.restoreConsole()` in the console to restore normal logging if needed.

## Compatibility
- Plays nice with ad blockers (uBlock Origin, AdBlock, etc.) — no conflicts spotted.

## License
[MIT License](LICENSE) — do whatever you want, just give me a shoutout if you fork it.

## Contact
Got questions, bugs, or ideas? File an [Issue](https://github.com/AlterEgo00001/VK_Antistuped/issues) or email me at [antibrutsystem@mail.ru](mailto:antibrutsystem@mail.ru).
