import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import'./i18next/i18n.ts';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
