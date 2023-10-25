import "./App.css";
import ContactForm from "./components/ContactForm";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Tech from "./components/Tech";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalForm, setModalForm] = useState(false);

  return (
    <>
      <Nav
        handleclick={() => setDarkMode(!darkMode)}
        openmodal={() => setModalForm(!modalForm)}
      />
      <main className={`${darkMode ? "dark" : ""} text-slate-800`}>
        <Hero />
        <Tech />
        <Portfolio />
        <Services />
        <Footer />
        <Copyright />
        {modalForm && <ContactForm openmodal={() => setModalForm(!modalForm)} />}
      </main>
    </>
  );
}

export default App;
