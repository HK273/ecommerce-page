"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/logo.svg";
import avatar from "../../public/images/image-avatar.png";
import ShoppingCart from "../components/ShoppingCart";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Header() {
  const { cartQuantitiy } = useShoppingCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Mobile Menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="flex relative items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <div className="text-black sm:hidden">
            <button className="flex" onClick={toggleMobileMenu}>
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
            </button>
          </div>
          <ul className="flex items-center justify-start gap-4">
            <li>
              <div className="relative h-[20px] w-[100px]">
                <Image
                  className="h-14 w-14"
                  src={logo}
                  alt="site-logo"
                  fill={true}
                />
              </div>
            </li>
          </ul>
          <nav className={`${isOpen ? "open" : ""}`}>
            <ul className="gap-4 sm:flex">
              <button className="flex" onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 sm:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-4">
            <ShoppingCart />
            {cartQuantitiy != 0 && (
              <div className="rounded-circle bg-c-o flex justify-center items-center text-white item-counter">
                {cartQuantitiy}
              </div>
            )}

            <li>
              <Image className="w-12" src={avatar} alt="avatar" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
