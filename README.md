# VK_Antistuped

Замечательно работает совместно с блокировщиками рекламы

Если будут траблы я не причём

Это расширение для браузеров Chrome и Firefox, которое очищает консоль разработчика каждые 9 секунд, блокирует ошибки и предупреждения на сайтах `vk.com` и `vkvideo.ru`, сохраняя при этом работу аудио- и видеоплееров которые вызывают перегрузку памяти в вашем браузере (собсна мы их просто блокируем)

## Возможности
- Очистка консоли каждые 9 секунд.
- Блокировка вывода в консоль (`console.log`, ошибки, unhandled rejections).
- Минимизация предупреждений в DevTools (например, о cookies).
- Поддержка воспроизведения аудио на `vk.com` и видео на `vkvideo.ru`.

## Установка

### Для Chrome
1. Скачайте папку `chrome` из этого репозитория или файл `.crx` из [Releases](https://github.com/AlterEgo00001/VK_Antistuped/releases).
2. **Вариант 1: Установка через файл .crx**
   - Откройте `chrome://extensions/`.
   - Перетащите файл `vk-console-blocker-chrome.crx` в окно браузера.
   - Подтвердите установку.
3. **Вариант 2: Установка из исходников**
   - Распакуйте папку `chrome`.
   - Откройте `chrome://extensions/`.
   - Включите "Режим разработчика".
   - Нажмите "Загрузить распакованное расширение" и выберите папку `chrome`.
4. Перейдите на `vk.com` или `vkvideo.ru` и проверьте работу.

### Для Firefox (версия 58 и выше)
1. Скачайте папку `firefox` из этого репозитория или файл `.zip` из [Releases](https://github.com/ВАШ_ЛОГИН/vk-console-blocker/releases).
2. **Вариант 1: Временная установка**
   - Откройте `about:debugging#/runtime/this-firefox`.
   - Нажмите "Загрузить временное дополнение".
   - Выберите файл `vk-console-blocker-firefox.zip` или любой файл из папки `firefox` (например, `manifest.json`).
3. **Вариант 2: Постоянная установка**
   - Для постоянной установки подпишите расширение через [Mozilla Add-ons Developer Hub](https://addons.mozilla.org/developers/).
   - Загрузите `.zip` в ваш аккаунт разработчика и дождитесь проверки.
4. Перейдите на `vk.com` или `vkvideo.ru` и проверьте работу.

## Требования
- Chrome: любая современная версия.
- Firefox: версия 58 или выше.

## Устранение неполадок
- Если аудио/видео не работает:
  1. Откройте DevTools (F12) → вкладка "Сеть".
  2. Проверьте заблокированные запросы.
  3. Добавьте их в `allowedPatterns` в `background.js` и перезагрузите расширение.
- Для отладки выполните `window.restoreConsole()` в консоли DevTools.

## Лицензия
[MIT License](LICENSE) (или другая лицензия по вашему выбору).

## Контакты
Если у вас есть вопросы или предложения, создайте [Issue](https://github.com/ВАШ_ЛОГИН/vk-console-blocker/issues) или свяжитесь со мной через [email@example.com](mailto:antibrutsystem@mail.ru).

---

# VK Console Blocker (English)

This is a browser extension for Chrome and Firefox that clears the developer console every 9 seconds, blocks errors and warnings on `vk.com` and `vkvideo.ru`, while keeping audio and video players functional.

## Features
- Clears the console every 9 seconds.
- Blocks console output (`console.log`, errors, unhandled rejections).
- Minimizes warnings in DevTools (e.g., about cookies).
- Supports audio playback on `vk.com` and video on `vkvideo.ru`.

## Installation

### For Chrome
1. Download the `chrome` folder from this repository or the `.crx` file from [Releases](https://github.com/ВАШ_ЛОГИН/vk-console-blocker/releases).
2. **Option 1: Install via .crx file**
   - Open `chrome://extensions/`.
   - Drag and drop the `vk-console-blocker-chrome.crx` file into the browser window.
   - Confirm the installation.
3. **Option 2: Install from source**
   - Extract the `chrome` folder.
   - Open `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the `chrome` folder.
4. Visit `vk.com` or `vkvideo.ru` to test.

### For Firefox (version 58 and above)
1. Download the `firefox` folder from this repository or the `.zip` file from [Releases](https://github.com/ВАШ_ЛОГИН/vk-console-blocker/releases).
2. **Option 1: Temporary installation**
   - Open `about:debugging#/runtime/this-firefox`.
   - Click "Load Temporary Add-on".
   - Select the `vk-console-blocker-firefox.zip` file or any file from the `firefox` folder (e.g., `manifest.json`).
3. **Option 2: Permanent installation**
   - Sign the extension via [Mozilla Add-ons Developer Hub](https://addons.mozilla.org/developers/).
   - Upload the `.zip` file to your developer account and wait for review.
4. Visit `vk.com` or `vkvideo.ru` to test.

## Requirements
- Chrome: Any recent version.
- Firefox: Version 58 or higher.

## Troubleshooting
- If audio/video doesn’t work:
  1. Open DevTools (F12) → "Network" tab.
  2. Check for blocked requests.
  3. Add them to `allowedPatterns` in `background.js` and reload the extension.
- For debugging, run `window.restoreConsole()` in the DevTools console.

## License
[MIT License](LICENSE) (or another license of your choice).

## Contact
For questions or suggestions, create an [Issue](https://github.com/ВАШ_ЛОГИН/vk-console-blocker/issues) or contact me at [email@example.com](mailto:email@example.com).
