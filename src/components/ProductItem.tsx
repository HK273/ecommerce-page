"use client";
import { useState } from "react";
import Image from "next/image.js";
import { data } from "../data/imageData.js";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface Product {
  id: number;
  mainImage: string;
  thumbnail: string;
}

export default function ProductItem() {
  const [products] = useState<Product[]>(data);
  const [value, setValue] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<Boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { mainImage } = products[value];

  // Lightbox
  const openLightbox = (src: string) => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // refactored function to slide through image
  function updateValue(increment: boolean): void {
    const newValue = increment ? (value + 1) % 4 : (value - 1 + 4) % 4;
    setValue(newValue);
  }

  return (
    <>
      <div className="relative image-container">
        <Image
          src={mainImage}
          alt="main-image"
          width={500}
          height={500}
          className="rounded-lg mx-auto sm:mx-0 image"
          onClick={() => openLightbox(mainImage)}
        />
        {isLightboxOpen && (
          <div id="lightbox" className="active" onClick={closeLightbox}>
            <img
              src={mainImage}
              alt="Lightbox Image"
              className="w-40 rounded-lg"
            />
          </div>
        )}
        <ul className="sm:hidden">
          <li>
            <button
              onClick={() => updateValue(false)}
              className="bg-white rounded-full p-5 shadow absolute left-1 top-1/2 -translate-y-1/2 sm:top-1/3"
            >
              <FaChevronLeft />
            </button>
          </li>
          <li>
            <button
              onClick={() => updateValue(true)}
              className="bg-white rounded-full p-5 shadow absolute right-1 top-1/2 -translate-y-1/2 sm:top-1/3"
            >
              <FaChevronRight />
            </button>
          </li>
        </ul>
        <ul className="hidden sm:flex gap-5 mt-4">
          {products.map((items, index) => {
            return (
              <li key={items.id}>
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                    setValue(index);
                  }}
                  className={index === selectedIndex ? "selected" : ""}
                >
                  <Image
                    src={items.thumbnail}
                    alt="main-img"
                    width={110}
                    height={110}
                    className="rounded-lg"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
