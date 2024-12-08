import { FaGithub, FaInstagram, FaLinkedin, FaMaxcdn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="my-7 flex justify-between items-center py-4 px-6 md:px-12 lg:mx-[70px]">
      <div className="flex-shrink-0">
        <a
          href="/"
          aria-label="Home"
          className="flex items-center justify-center gap-2 text-xl"
        >
          <FaMaxcdn className="text-3xl text-red-600" />
          <span className="text-2xl">Mern Stack Developer</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-2xl">
        <a
          href="/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="/"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition"
        >
          <FaGithub />
        </a>
        <a
          href="/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="/"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaSquareXTwitter />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "X" : ""}
      </button>
    </nav>
  );
};

export default Navbar;
