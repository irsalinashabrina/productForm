import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DepsProvider } from './shared/components/DepContext';
import ServiceFactory from './services/ServiceFactory';

const root = ReactDOM.createRoot(document.getElementById('root'));
const services=ServiceFactory()

root.render(
  <React.StrictMode>
    <DepsProvider services={services}>
      <App />
    </DepsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
