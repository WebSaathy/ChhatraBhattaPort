import React from "react";
import "../style/Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2026 छत्रबहादुर भट्ट सर्वाधिकार सुरक्षित।</p>
      </div>

      <div className="footer-center">
        <p>सामाजिक सञ्जालमा पछ्याउनुहोस ➜
</p>
      </div>

      <div className="footer-right">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTiktok /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>
    </footer>
  );
}

export default Footer;
