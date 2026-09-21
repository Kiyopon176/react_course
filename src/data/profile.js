// Единственное место, где хранятся все данные страницы.
// Сознательно НЕ хранится: телефон, домашний адрес, дата рождения, личная почта.
export const profile = {
  name: 'Алихан Адилбаев',
  nickname: 'Kiyopon176',
  role: 'Mobile developer · Flutter',
  tagline: 'Два с половиной года собираю мобильные и веб-интерфейсы на Flutter. Сейчас осваиваю React.',
  avatar: `${import.meta.env.BASE_URL}avatar.svg`,
  location: 'Алматы, Казахстан · работаю удалённо',
  about: [
    'Привет! Меня зовут Алихан. Я мобильный разработчик: пишу на Flutter/Dart, держу архитектуру MVVM и довожу приложения до релиза в сторах.',
    'За 2,5 года успел поработать и стажёром, и единственным фронтендером в компании: интегрировал чат-бота, собирал и публиковал приложения, чинил баги, писал тесты и адаптировал интерфейсы под desktop, планшет и телефон.',
    'Сейчас изучаю React — эта страница и есть учебный проект: одностраничное приложение, собранное из независимых компонентов и задеплоенное на GitHub Pages.',
  ],
  stats: [
    { value: '2.5 г.', label: 'опыта в разработке' },
    { value: '3', label: 'команды за плечами' },
    { value: '3', label: 'языка: KZ · RU · EN' },
  ],
  experience: [
    {
      company: 'ЧК AILAT AI LTD.',
      role: 'Flutter-разработчик',
      period: 'Ноябрь 2025 — Февраль 2026',
      points: [
        'Отвечал за весь фронтенд компании',
        'Интеграция чат-бота в мобильное приложение',
        'Сборка и публикация приложений в сторы',
      ],
    },
    {
      company: 'Under NDA',
      role: 'Software engineer',
      period: 'Ноябрь 2023 — Сентябрь 2025',
      points: [
        'Разработка и поддержка клиентской части веб-приложения',
        'Новые модули и доработка авторизации, тесты, исправление багов',
        'Архитектура MVVM (Stacked), адаптация под desktop / tablet / phone',
      ],
    },
    {
      company: 'Y group',
      role: 'Стажёр Flutter-разработчик',
      period: 'Июль 2023 — Сентябрь 2023',
      points: [
        'Вёрстка интерфейсов по макетам из Figma',
        'Интеграция REST API',
        'Bloc, GetIt, Provider, Go_Router, Hive, Dio',
      ],
    },
  ],
  skills: [
    { name: 'Flutter & Dart', level: 90, icon: '💙' },
    { name: 'Bloc / Stacked, MVVM', level: 85, icon: '🧩' },
    { name: 'REST API, Dio, Firebase', level: 80, icon: '🔌' },
    { name: 'Git, CI/CD, Codemagic', level: 75, icon: '🌿' },
    { name: 'Тесты (unit / integration)', level: 70, icon: '🧪' },
    { name: 'React (учу сейчас)', level: 45, icon: '⚛️' },
  ],
  contacts: [
    {
      id: 'github',
      label: 'GitHub',
      value: '@Kiyopon176',
      href: 'https://github.com/Kiyopon176',
      icon: '🐙',
    },
    {
      id: 'telegram',
      label: 'Telegram',
      value: '@BlackRoomStudent',
      href: 'https://t.me/BlackRoomStudent',
      icon: '✈️',
    },
    {
      id: 'repo',
      label: 'Репозиторий курса',
      value: 'react_course',
      href: 'https://github.com/Kiyopon176/react_course',
      icon: '📦',
    },
    {
      id: 'location',
      label: 'Адрес',
      value: 'Planet Earth, 3rd rock from the Sun',
      href: null,
      icon: '🌍',
    },
    {
      id: 'status',
      label: 'Статус',
      value: 'Открыт к предложениям · удалённо',
      href: null,
      icon: '✅',
    },
  ],
}
