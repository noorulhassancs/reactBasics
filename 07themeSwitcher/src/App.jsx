import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import useTheme, { ThemeProvider } from './context/theme'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(()=>{
   const html = document.querySelector('html')
   html.classList.remove("light","dark")
   html.classList.add(themeMode) 
  },[themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* themeBtn */}
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/* card */}
                <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default App
