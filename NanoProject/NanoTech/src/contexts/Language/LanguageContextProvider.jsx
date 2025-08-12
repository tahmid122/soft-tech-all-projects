import React, { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("bangla");
  useEffect(() => {
    document.body.id = language;
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
