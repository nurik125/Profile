import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div id="Contact" className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Contacts</h3>
            <a href="#close" title="Close" className="close">
              ×
            </a>
          </div>
          <div className="modal-body">
            <ul>
              <li className="Social">
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    className="Social-media-icon WhatsApp"
                    src={require("../../../../../WhatsApp.png")}
                    alt="WhatsApp-Num"
                  />
                </a>
                <span className="SocialInfo">+7 747 751 20 62</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
