import React, { useState } from "react";
import "./CustomerSupport.css";

function CustomerSupport() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleMessageSend = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        text: inputText,
        sender: "user",
      };

      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div className="customersupport">
      <h1>Contact</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="message-input"
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleMessageSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default CustomerSupport;
