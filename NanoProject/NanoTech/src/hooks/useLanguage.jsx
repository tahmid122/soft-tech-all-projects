import React, { useContext } from "react";
import { LanguageContext } from "../contexts/Language/LanguageContext";

const useLanguage = () => {
  const languageContext = useContext(LanguageContext);

  return languageContext;
};

export default useLanguage;
