import { useState, useEffect } from "react";
import Text from "../Text";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import TextField from "@mui/material/TextField";

export default function ScrollToTop() {
  const [isVisible, setVisible] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [count, setCount] = useState(0);
  function handleChange(e) {
    setTextValue(e.target.value);
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      textValue === "" ? setCount(0) : setCount(textValue.split(" ").length);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [textValue]);
  useEffect(() => {
    let tg = 0;
    function toggleVisibility() {
      if (window.pageYOffset > tg || window.pageYOffset === 0) {
        setVisible(false);
      } else if (window.pageYOffset < tg) {
        setVisible(true);
      }
      tg = window.pageYOffset;
    }
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <TextField variant="outlined" value={textValue} onChange={handleChange} />
      <p>Word(s): {count}</p>
      <Text />
      <button
        onClick={scrollToTop}
        style={{
          opacity: isVisible ? 1 : 0,
          position: "fixed",
          left: "80%",
          bottom: "40px",
          fontSize: "1rem",
          zIndex: 1,
          cursor: "pointer",
          border: "none",
        }}
      >
        <ArrowCircleUpIcon
          sx={{ color: "lightblue", backgroundColor: "blue" }}
        />
      </button>
    </div>
  );
}
