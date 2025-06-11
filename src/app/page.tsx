import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Services />
      <Projects />
      <ContactForm />
    </main>
  );
};

export default page;
