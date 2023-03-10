import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <NextUIProvider>
        <HashRouter>
            <Routes>
                <Route path="/*" element={<App/>}/>
            </Routes>
        </HashRouter>
    </NextUIProvider>
)
