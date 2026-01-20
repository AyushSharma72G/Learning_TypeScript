import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import Counter from './Counter/Counter'
import FetchApi from './FetchUserApi/FetchApi.tsx'
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <App />
      {/* <Counter/> */}
      <FetchApi />
    </div>

  </StrictMode>,
)
