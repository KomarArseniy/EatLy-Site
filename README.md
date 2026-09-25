# 🍽️ Eatly - Food Delivery Website

**Учебный проект.** Одностраничный сайт доставки еды с адаптивной версткой и интерактивными компонентами. Изначально написан на HTML + SCSS + vanilla JS, теперь перенесён на **React + TypeScript** (сборка — Vite).

## 🛠 Стек

- **React 19** + **TypeScript** (strict)
- **Vite** — dev-сервер и сборка
- **SCSS** (BEM, mobile-first, fluid-типографика) — стили сохранены без изменений
- **Swiper** (`swiper/react`) — слайдер отзывов

## 🚀 Запуск

```bash
npm install
npm run dev       # dev-сервер
npm run build     # проверка типов + production-сборка
npm run preview   # предпросмотр сборки
```

## 📁 Структура

```
src/
  main.tsx            # точка входа
  App.tsx             # сборка страницы из секций
  assets/             # fonts, icons, images
  styles/             # SCSS (BEM-блоки, helpers, переменные)
  components/
    layout/           # Header (бургер-меню), Footer, Logo
    sections/         # Hero, Advantages, Restaurants, Dishes, Purchases, Reviews, DiscountBanner
    cards/            # RestaurantCard, DishCard, DishTile, StatisticCard, ReviewCard
    ui/               # Select, LinkButton, Icon, RatingView, DivisionBadge, ...
    icons/            # инлайн-SVG как компоненты
  hooks/              # useMatchMedia, useExpandableContent
  data/               # типизированные данные (рестораны, блюда, отзывы, ...)
  types/              # общие TypeScript-типы
  constants/          # breakpoints (синхронизированы с SCSS)
  utils/              # cn, pxToRem
```

## ✨ Ключевые компоненты

- **`Select`** — кастомный `<select>`: клавиатурная навигация, ARIA, нативный `<select>` на мобильных.
- **`Header`** — бургер-меню для мобильных, закрытие по клику вне меню и при переходе на десктопную ширину.
- **`ReviewCard` + `useExpandableContent`** — «Read More / Roll Up» для длинных отзывов с анимацией.
- **`ReviewsSection`** — Swiper с пагинацией, loop и адаптивным количеством слайдов.

## 🗂 Папка `_legacy`

Содержит старую версию (vanilla JS, `index.html`, скомпилированный CSS) — только для сверки. Когда убедитесь, что всё работает, её можно удалить.
