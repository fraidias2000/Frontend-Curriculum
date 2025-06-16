import React from 'react'
import ReactDOM from 'react-dom/client'
import PaginaBienvenida from '../pages/PaginaBienvenida'
import Curriculum from '../pages/Curriculum'
import FormularioContacto from '../pages/FormularioContacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBienvenida />} />
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/FormularioContacto" element={<FormularioContacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)