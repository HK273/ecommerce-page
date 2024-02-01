"use client";

import Image from "next/image";
import { useState } from "react";
import "./Navbar.css";
import Logo from "../../public/images/logo.svg";

// Old navbar with css
export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Mobile Menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="max-w-6xl mx-auto">
        <div className="flex-menu">
          <div className={`hamburger-grid ${isOpen ? "active" : ""}`}>
            <div className="text-black hamburger">
              <button onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`h-10 w-10 ${isOpen ? "hidden" : ""}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`h-10 w-10 ${isOpen ? "" : "hidden"}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className={`nav-opac ${isOpen ? "active" : ""}`}></div>
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <div className={`nav-items ${isOpen ? "active" : ""}`}>
            <Image className="img item" src={Logo} alt="site-logo" />
            <li className="item">Collections</li>
            <li className="item">Men</li>
            <li className="item">Women</li>
            <li className="item">About</li>
            <li className="item">Contact</li>
          </div>
          <div className={`nav-opac ${isOpen ? "active" : ""}`}></div>
        </ul>
      </nav>
    </>
  );
}
