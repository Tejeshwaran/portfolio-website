import { useState } from "react";

function Navbar({ language, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-8 py-6 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-3xl font-extrabold">
          Tejesh<span className="text-red-600">Dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-bold items-center">
          <li>
            <a href="/" className="hover:text-red-500">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-red-500">
              About
            </a>
          </li>

          <li>
            <a href="#service" className="hover:text-red-500">
              Service
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-red-500">
              Projects
            </a>
          </li>

          <li>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border border-blue-500 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {language === "en" ? "DE" : "EN"}
            </button>
          </li>
        </ul>

        {/* Contact Button - Desktop */}
        <button className="hidden md:block bg-red-600 px-8 py-2 rounded-lg font-bold hover:bg-red-700 transition-all duration-300">
          Contact
        </button>

        {/* Burger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/90 rounded-lg p-6">
          <ul className="flex flex-col gap-6 font-bold text-center items-center">
            <li>
              <a href="/" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#service" onClick={() => setMenuOpen(false)}>
                Service
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <button
                onClick={() => {
                  toggleLanguage();
                  setMenuOpen(false);
                }}
                className="px-4 py-2 border border-blue-500 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {language === "en" ? "DE" : "EN"}
              </button>
            </li>
          </ul>

          <button className="w-full mt-6 bg-red-600 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;