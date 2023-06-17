import React,{useState} from "react";
import ChatPopup from "./ChatPopup"
const Whastapp = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleChatClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
    {/* <div className="chat_float">
      <button onClick={handleChatClick}><i class="fa fa-facebook whatsapp-icon "></i></button>
      <ChatPopup />
          <div className="overlay" onClick={handleClose}></div>
    </div> */}
      <div
        title="Whatsapp"
        // onClick={handlewhastapp}
      >
        <a
          href="https://wa.me/+923125496244"
          className="whatsapp_float "
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon "></i>
        </a>
      </div>
    </>
  );
};

export default Whastapp;
