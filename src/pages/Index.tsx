import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Materials from "@/components/Materials";
import StreamingLinks from "@/components/StreamingLinks";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ProductionsList from "@/components/ProductionsList";

const Index = () => {
  useEffect(() => {
    const handleClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute("href")?.substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      // scroll-padding-top in index.css keeps the section clear of the header
      targetElement?.scrollIntoView({ behavior: "smooth" });
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Gallery />
      {/* <HeadshotsGallery /> */}
      <ProductionsList />
      <StreamingLinks />
      <Materials />
      <Contact />

      {/* <Community /> */}
      <Footer />
    </main>
  );
};

export default Index;
