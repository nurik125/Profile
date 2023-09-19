import React from "react";
import "./Contact-footer.css"

const Contact = () => {
  return (
    <div id="Contact1" className="ContactFooter">
      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          loading="lazy"
          className="Social-media-icon WhatsApp"
          src={require("../../../../WhatsApp.png")}
          alt="WhatsApp-Num"
        />
      </a>
      <span className="SocialInfo">+7 747 751 20 62</span>
    </div>
  );
};

export default Contact;
