import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IntlProvider } from "react-intl";
import ResponsiveAppBar from "./components/AppBar";
import Interests from "./pages/Interests";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import MoreCertificates from "./pages/MoreCertificates";
import Imprint from "./pages/Imprint";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages/allMessages";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ParticlesContainer from "./components/Particles";

const hostLocal = navigator.language;

export const routes = [
  { id: 1, path: "interests", element: <Interests /> },
  { id: 2, path: "projects", element: <Projects /> },
  { id: 3, path: "privacy", element: <Privacy /> },
  { id: 4, path: "moreCertificates", element: <MoreCertificates /> },
  { id: 5, path: "imprint", element: <Imprint /> },
];

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
          <Route path="/" element={<Home />}>
            {routes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}
          </Route>
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
