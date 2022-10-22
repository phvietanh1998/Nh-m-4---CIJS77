import React from "react";
import notes from "../data";
function Footer() {
  return (
    <footer className="footer">
      <p>{notes.length} tasks left</p>
      <p>MindX todolist</p>
    </footer>
  );
}

export default Footer;
