import React, { useContext, useState } from "react";

const LanguageContext = React.createContext();
export function useLanguageContext() {
  return useContext(LanguageContext);
}
export const LanguageProvider = ({ children }) => {
  const languageObj = {
    vi: {
      login: "Đăng nhập",
      logout: "Đăng xuất",
      username: "Tài khoản",
      text: "Xin chào",
    },
    en: {
      login: "Login",
      logout: "Logout",
      username: "Username",
      text: "Welcome",
    },
  };

  const [language, setLanguage] = useState("vi");
  function selectLanguage(value) {
    setLanguage(value);
  }
  return (
    <LanguageContext.Provider
      value={{
        languageObj,
        language,
        selectLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
