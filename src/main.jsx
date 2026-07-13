import React from 'react';
import ReactDOM from 'react-dom/client';
import '@ui5/webcomponents-react/dist/Assets.js';

// Verwendete Icons explizit laden (on-demand)
import '@ui5/webcomponents-icons/dist/world.js';
import '@ui5/webcomponents-icons/dist/email.js';
import '@ui5/webcomponents-icons/dist/slim-arrow-down.js';
import '@ui5/webcomponents-icons/dist/workflow-tasks.js';
import '@ui5/webcomponents-icons/dist/source-code.js';
import '@ui5/webcomponents-icons/dist/accept.js';
import '@ui5/webcomponents-icons/dist/checklist-item.js';
import '@ui5/webcomponents-icons/dist/internet-browser.js';

import App from './App.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </React.StrictMode>
);
