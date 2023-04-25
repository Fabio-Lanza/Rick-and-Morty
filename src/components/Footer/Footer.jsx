import React from "react";
import "./Footer.css";
import { useState } from "react";
import Modal from "react-modal";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById("root"));

  return (
    <footer className="footer-container">
      <button onClick={() => setIsOpen(true)}>Contact us</button>

      <Modal
        isOpen={isOpen}
        // onRequestClose={!isOpen}
        style={customStyles}
        contentLabel="Contact us modal"
      >
        <div className="modal-top">
        <h2>Contact us</h2>
          <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>
        <div className="modal-header">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </Modal>
    </footer>
  );
}

export default Footer;
