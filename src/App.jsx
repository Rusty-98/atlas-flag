import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import './app.css'
import { useState } from 'react'

const App = () => {
  const [dark, setDark] = useState(localStorage.getItem('dark') === 'true');

  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem('dark', newDarkMode.toString());
  };

  return (
    <main className={dark? `dark` : ``}>
      <Header isDark={dark} toggleDarkMode={toggleDarkMode} />
      <Outlet />
    </main>
  )
}

export default App