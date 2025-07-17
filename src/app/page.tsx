import BannersSection from "@/components/BannersSection";
import CategoriesCarousel from "@/components/CategoriesCarousel";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page d'accueil",
  description: "Accueil du site KI-Commerce",
};

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="container mx-auto py-4">
      <Hero/>
      <CategoriesCarousel/>
      <FeaturedProductsSection/>
      <BannersSection/>
      <Footer/>
    </main>
    </>
  );
}
