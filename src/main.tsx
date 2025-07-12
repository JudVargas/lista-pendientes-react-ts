import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { TodoAPP } from './components/TodoAPP'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoAPP></TodoAPP>
  </StrictMode>,
)
