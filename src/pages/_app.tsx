import "@/styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages/allMessages";
import { IntlProvider } from "react-intl";
import ParticlesContainer from "../components/Particles";
//import Footer from "@/components/Footer";
import AppBar from "@/components/AppBar";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false, // Disable server-side rendering
});

export default function App({ Component, pageProps }: AppProps) {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.ENGLISH);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = window.localStorage.getItem("locale");
      if (savedLanguage) {
        setCurrentLocale(savedLanguage);
      } else {
        setCurrentLocale(navigator.language);
      }
    }
  }, []);

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
      <AppBar />
      <CssBaseline />
      <Component {...pageProps} />
      <Footer currentLocale={currentLocale} handleChange={handleChange} />
    </IntlProvider>
  );
}
