import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

  const [darkMode, setDarkMode] = useState<boolean>(initialStateDarkMode);

  const handleDarkMode = ():void => setDarkMode(state => !state);

  useEffect(() => {    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      return localStorage.setItem('theme', 'dark');
    };
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, [darkMode]);

  return (
    <>
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold uppercase tracking-[.51em] text-white">
            Todo
          </h1>
          <button onClick={handleDarkMode}>
            {
              darkMode 
              ? <IconSun />
              : <IconMoon />
            }
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
