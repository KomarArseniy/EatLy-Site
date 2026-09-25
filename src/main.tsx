import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Стили библиотеки подключаем раньше собственных, чтобы наши переопределения имели приоритет
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/main.scss';

import { App } from './App';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Не найден корневой элемент #root');
}

createRoot(container).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
