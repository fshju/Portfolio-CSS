"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Shahrukh Portfolio</h1>
        <div className="menu-toggle">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="nav-menu"
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
        <nav id="nav-menu" className={`nav ${isOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;





