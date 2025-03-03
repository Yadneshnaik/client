import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer
      className="bg-light text-dark text-center py-1"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        zIndex: "1000",
      }}
    >
      &copy; {currentYear} Vista Developer. All Rights Reserved.
    </footer>
  );
};

export default Footer;
