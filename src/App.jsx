import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to add or remove the 'dark' class to the HTML root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } bg-white dark:bg-[#1a1a1a] min-h-screen text-[#1a1a1a] dark:text-gray-100 px-4`}
    >
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero toggleTheme={toggleTheme} darkMode={darkMode} />
    </div>
  );
};

export default App;
