import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import './styles/base.css';
import './styles/layout.css';
import './styles/home.css';
import './styles/topic.css';
import './styles/quiz.css';
import 'katex/dist/katex.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
