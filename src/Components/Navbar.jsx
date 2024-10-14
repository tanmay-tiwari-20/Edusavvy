
const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">edusavvy</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-800">
        <a href="#" className="hover:text-blue-600 transition">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Courses
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Feed
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Buy & Sell
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Contact Us
        </a>
      </div>

      {/* Theme Toggle and Dashboard Button */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button className="text-black hover:text-blue-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 010 1.42L2.81 7.05a1 1 0 11-1.42-1.42l1.41-1.41a1 1 0 011.42 0zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm17.78-7.78a1 1 0 010 1.42l-1.41 1.41a1 1 0 01-1.42-1.42l1.41-1.41a1 1 0 011.42 0zM12 20a1 1 0 011-1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7.78-5.78a1 1 0 000 1.42l1.41 1.41a1 1 0 101.42-1.42l-1.41-1.41a1 1 0 00-1.42 0zM21 11h-2a1 1 0 100 2h2a1 1 0 000-2zm-7.07 5.07a1 1 0 01-1.41 0l-1.41-1.41a1 1 0 111.41-1.41l1.41 1.41a1 1 0 010 1.41z" />
          </svg>
        </button>

        {/* Dashboard Button */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center hover:bg-blue-700 transition">
          <span className="mr-2">DASHBOARD</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 12c-4.97 0-9 2.16-9 5v1h18v-1c0-2.84-4.03-5-9-5z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
