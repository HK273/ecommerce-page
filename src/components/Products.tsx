"use client";
import ProductItem from "../components/ProductItem";
import storeItems from "../data/product.json";
import ProductSelection from "./ProductSelection";
import ShoppingCart from "./ShoppingCart";

export default function Products() {
  // Need an object not an array to use the spread synstax {...object}
  const storeItemsObject = storeItems[0];

  return (
    <>
      <main className="max-w-7xl mt-20 mx-auto px-5">
        <div className="grid sm:grid-cols-2 gap-2 justify-center">
          <ProductItem />
          <ProductSelection {...storeItemsObject} />
        </div>
      </main>
    </>
  );
}
