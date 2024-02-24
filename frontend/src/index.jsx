import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot'u doğru modülden alın
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);