import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ApiShowcasePage from './components/ApiShowcasePage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/showcase' element={<ApiShowcasePage />}/>
  </Routes>
  </BrowserRouter>,
)
