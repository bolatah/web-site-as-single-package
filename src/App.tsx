import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IntlProvider } from "react-intl";
import ResponsiveAppBar from "./components/AppBar";
import Interests from "./pages/Interests";
import Launch from "./pages/Launch";
import Privacy from "./pages/Privacy";
import MoreCertificates from "./pages/MoreCertificates";
import Imprint from "./pages/Imprint";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages/allMessages";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ParticlesContainer from "./components/Particles";

const hostLocal = navigator.language;

function App() {
  const [currentLocale, setCurrentLocale] = useState(
    getInitialLocal() || hostLocal || LOCALES.ENGLISH
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale", e.target.value);
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <ParticlesContainer />
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/moreCertificates" element={<MoreCertificates />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer currentLocale={currentLocale} handleChange={handleChange} />
    </IntlProvider>
  );
}
const getInitialLocal = () => {
  const savedLocale = localStorage.getItem("locale");
  return savedLocale;
};

export default App;
