import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Video from "@/components/Video";
import Contact from "@/components/Contact";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeadshotsGallery from "@/components/HeadshotsGallery";
import ProductionsList from "@/components/ProductionsList";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href")?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for header height
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", function (e) {
          // Cleanup
        });
      });
    };
  }, []);

  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <HeadshotsGallery />
      <ProductionsList />
      <Video />
      <Contact />

      {/* <Community /> */}
      <Footer />
    </main>
  );
};

export default Index;
