import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'; // <--- Header만 불러옵니다.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header /> {/* <--- Header만 렌더링합니다. */}
  </React.StrictMode>
);

reportWebVitals();