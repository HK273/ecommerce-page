import Image from "next/image";
import Nav from "../components/Navbar";
import Header from "../components/NavTwo";
import Products from "../components/Products";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function Home() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <Products />
      </ShoppingCartProvider>
    </>
  );
}
