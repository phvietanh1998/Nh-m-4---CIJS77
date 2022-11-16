import { useState } from "react";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Login from "./components/Login";
import { LanguageProvider } from "./context/context";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setLogin] = useState(false);
  function handleClickBtTop() {}
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setUserName(inputValue);
    setLogin((prev) => !prev);
  }
  return (
    <div className="App">
      <LanguageProvider>
        <Header isLogin={isLogin} userName={userName} />
        <Login
          handleClick={handleClick}
          handleChange={handleChange}
          handleClickBtTop={handleClickBtTop}
          isLogin={isLogin}
          userName={userName}
        />
        <BottomNav />
      </LanguageProvider>
    </div>
  );
}

export default App;
