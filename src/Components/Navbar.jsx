import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <nav className=" px-9 py-5 flex items-center justify-between">
      {/* Logo */}
      <h1 className="leckerli-one-regular text-[5vh] font-bold text-[#0078D7] drop-shadow-2xl cursor-pointer">
        edusavvy
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-14 font-semibold">
        <Link
          to="/"
          className="hover:text-[#0078D7] allerta-regular transition"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="hover:text-[#0078D7] allerta-regular transition"
        >
          Courses
        </Link>
        <Link
          to="/feed"
          className="hover:text-[#0078D7] allerta-regular transition"
        >
          Feed
        </Link>
        <Link
          to="/buy-sell"
          className="hover:text-[#0078D7] allerta-regular transition"
        >
          Buy & Sell
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#0078D7] allerta-regular transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Theme Toggle and Dashboard Button */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-300 focus:outline-none text-xl"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="" /> : <FaMoon className="" />}
        </button>

        {/* Dashboard Button */}
        <Link
          to="/dashboard"
          className="bg-[#0078D7] allerta-regular text-white py-2 px-4 rounded-full flex items-center hover:bg-[#0064b6] transition"
        >
          <span className="mr-2">DASHBOARD</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12c-4.97 0-9 2.16-9 5v1h18v-1c0-2.84-4.03-5-9-5z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
