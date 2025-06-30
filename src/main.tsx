import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { GameStateProvider } from './context/GameContext'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GameStateProvider>
      <App />
    </GameStateProvider>
  </BrowserRouter>
)
