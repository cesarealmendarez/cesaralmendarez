import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ScrollToTop from './Utilities/ScrollToTop';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <NextUIProvider>
        <HashRouter>
            {/* <ScrollToTop/> */}
            <Routes>
                <Route path="/*" element={<App/>}/>
            </Routes>
        </HashRouter>
    </NextUIProvider>
)
