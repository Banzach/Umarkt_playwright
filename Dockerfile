# Используем официальный образ с Node + Playwright + браузерами
FROM mcr.microsoft.com/playwright:v1.45.0-jammy

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и lock-файл
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Запускаем тесты
CMD ["npx", "playwright", "test"]