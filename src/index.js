import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const store = create(
  persist((set, get) => ({
    page: 'dashboard',
    setPage: (page) => set({ page: page }),

    money: 0,
    modMoney: (amount) => set({ money: get().money + amount }),

    apples: 0,
    modApples: (amount) => set({ apples: get().apples + amount }),

    script: "async (cs) => {\n  await cs.sleep(5000);\n  console.log('hello');\n}",
    setScript: (script) => set({ script: script }),
    // bears: 0,
    // increasePopulation: () => set({ bears: get().bears + 1 }),
    // removeAllBears: () => set({ bears: 0 }),
  }), {
    name: 'store', // unique name
  }));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
