// Единственное место, где хранятся все личные данные страницы.
// Ничего приватного: только имя, публичные ссылки и шуточный «адрес».
export const profile = {
  name: 'Alikhan',
  nickname: 'Kiyopon176',
  role: 'Front-end developer',
  tagline: 'Учусь на React-курсе и собираю интерфейсы, которыми приятно пользоваться.',
  avatar: `${import.meta.env.BASE_URL}avatar.svg`,
  location: 'Planet Earth 🌍',
  about: [
    'Привет! Меня зовут Alikhan. Я учусь веб-разработке и больше всего люблю ту часть работы, где статичный макет превращается в живой, отзывчивый интерфейс.',
    'Сейчас изучаю экосистему React: компоненты, состояние, хуки и сборку через Vite. Эта страница — моё первое учебное SPA: она собрана из независимых компонентов и задеплоена на GitHub Pages.',
    'Вне кода: музыка в наушниках, настольные игры и бесконечный поиск идеальной чашки кофе.',
  ],
  stats: [
    { value: '3+', label: 'учебных проекта' },
    { value: '6', label: 'React-компонентов' },
    { value: '∞', label: 'чашек кофе' },
  ],
  skills: [
    { name: 'HTML & CSS', level: 85, icon: '🎨' },
    { name: 'JavaScript (ES6+)', level: 75, icon: '⚡' },
    { name: 'React', level: 65, icon: '⚛️' },
    { name: 'Git & GitHub', level: 70, icon: '🌿' },
    { name: 'Vite', level: 60, icon: '🚀' },
    { name: 'Адаптивная вёрстка', level: 80, icon: '📱' },
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
      id: 'repo',
      label: 'Репозиторий курса',
      value: 'react_course',
      href: 'https://github.com/Kiyopon176/react_course',
      icon: '📦',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: '@kiyopon176',
      href: 'https://instagram.com/kiyopon176',
      icon: '📸',
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
      value: 'Открыт к учебным проектам',
      href: null,
      icon: '✅',
    },
  ],
}
