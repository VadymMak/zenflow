# CLAUDE.md — zenflow

## Проект
Сайт yoga & wellness студии ZenFlow.
Стек: Next.js 15 App Router, TypeScript, pure CSS (НЕ Tailwind), pnpm.

## Команды
pnpm dev
pnpm build
npx tsc --noEmit — ОБЯЗАТЕЛЬНО перед каждым коммитом

## Правила
### Стилизация
- Pure CSS с CSS Variables — никакого Tailwind
- Все стили в app/globals.css
- CSS @keyframes для анимаций
- IntersectionObserver для reveal-on-scroll (класс .reveal → .visible)
- При фильтрации: если элементы перерисовываются React, передавать "visible" напрямую

### CSS Variables
--sage: #7C9A82
--sage-dark: #5F7D65
--sage-light: #A8C5AE
--terracotta: #C4956A
--terracotta-dark: #A87B52
--terracotta-light: #E0C4A8
--beige: #F5F0EB
--cream: #FFFDF9
--charcoal: #2D2D2D
--charcoal-light: #4A4A4A
--gray: #8A8A8A
--gray-light: #D4CFC9
--white: #FFFFFF
--shadow: 0 4px 24px rgba(0,0,0,0.06)
--shadow-lg: 0 12px 48px rgba(0,0,0,0.1)
--radius: 20px
--radius-sm: 12px
--transition: all 0.3s ease

### Шрифты
- Заголовки: Cormorant Garamond (serif) — через next/font/google
- Текст: Inter (sans-serif) — через next/font/google
- CSS переменные: --font-heading и --font-body

### TypeScript
- Строгая типизация, никаких any
- Типы в lib/types.ts
- Данные в lib/constants.ts
- Никакого хардкода текстов в компонентах

### Компоненты
- Функциональные компоненты
- 'use client' только где нужен state/effects

### Изображения
- Все фото с Unsplash через next/image
- remotePatterns для images.unsplash.com в next.config.ts
- ВСЕ <Image fill> должны иметь sizes prop
- Hero image: priority={true}

### Рабочий процесс
1. Читать нужные файлы перед кодом
2. npx tsc --noEmit перед каждым коммитом
3. Коммит сразу после изменения

## Unsplash фото

### Hero
- Background: https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&q=80

### Class Types (6 карточек)
- Hatha Yoga: https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop
- Vinyasa Flow: https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop
- Yin Yoga: https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=600&h=400&fit=crop
- Power Yoga: https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop
- Prenatal Yoga: https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600&h=400&fit=crop
- Meditation: https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=400&fit=crop

### Instructors
- Lucia: https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=530&fit=crop&crop=top
- Marek: https://images.unsplash.com/photo-1567013127542-490d483e18e3?w=400&h=530&fit=crop&crop=top
- Eva: https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=530&fit=crop&crop=top
- Zuzana: https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=530&fit=crop&crop=top

### Gallery (6 фото)
- Studio wide: https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop
- Yoga class: https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop
- Meditation: https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=300&fit=crop
- Props: https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop
- Stretching: https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop
- Group: https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop

### Reviews
- Katarína: https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face
- Peter: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face
- Martina: https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face
- Tomáš: https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face

## Структура
app/
├── page.tsx
├── layout.tsx
├── globals.css
components/
├── sections/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── StatsBar.tsx
│   ├── ClassesSection.tsx
│   ├── ScheduleSection.tsx
│   ├── InstructorsSection.tsx
│   ├── PricingSection.tsx
│   ├── WhyUsSection.tsx
│   ├── GallerySection.tsx
│   ├── ReviewsSection.tsx
│   ├── BookingSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── widgets/
│   ├── WhatsAppButton.tsx
│   └── ChatWidget.tsx
lib/
├── types.ts
├── constants.ts
