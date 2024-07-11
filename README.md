## Установка
##### 1. Устанавливаем expo-cli
``npm install -g expo-cli``

##### 2. Устанавливаем зависимости
``npm install``

***

### Запуск с помощью Expo Go (1 способ)
Скачать приложение Expo Go с App Store (ios) или Play Market (android)

Запустить приложение `npm start`

Остканировать qr-код камерой (ios) или зайти в приложение Expo Go и отсканировать оттуда (android)

***

### Запуск с Development build (2 способ)
Тут можно запустить на эмуляторе или реальном устройстве

#### Для запуска на эмуляторе

Установливаем Android Studio или XCode (ios), запускаем эмулятор

Запустить приложение командой `npm run android` или `npm run ios`

Expo сам определит эмулятор и запустит приложение

#### Для запуска на android устройстве
В расширенных настройках устройства, находим пункт "Для разработчиков"

включаем отладку по usb 
разрешаем установку приложений через usb

Подключаем устройство по usb (выключяем эмуляторы, если запущены)

Запустить приложение командой `npm run android` или `npm run ios`

Expo сам определит устройство

#### Для запуска на ios устройстве
[документация где-то тут](https://docs.expo.dev/guides/local-app-development/#local-builds-with-expo-dev-client)


#### Отличие Development build от Expo Go в том, что Expo Go не предоставляет доступ к нативным функциям (таким как камера, bluetooth и тд.), а Development build дает все возможности

***

### Production build и публикация в маркетплейсы
[документация](https://docs.expo.dev/deploy/build-project/#production-builds-locally)


