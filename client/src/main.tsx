import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import Router from './routers/Router';
import "remixicon/fonts/remixicon.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  </StrictMode>,
)
