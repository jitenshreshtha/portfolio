import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6">
        <ul className="flex flex-row justify-center gap-6 md:gap-10 items-center py-4 text-white font-medium">
          <li>
            <a
              href="#home"
              className="transition-colors hover:text-primary"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="transition-colors hover:text-primary"
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="transition-colors hover:text-primary"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="transition-colors hover:text-primary"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#hire"
              className="transition-colors hover:text-primary"
            >
              Hire Me
            </a>
          </li>
          <li>
            <Link
              to="/rate"
              className="transition-colors hover:text-primary"
            >
              Rate Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
