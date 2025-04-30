// src/components/SkayAssistant.jsx
import React from "react";

const SkayAssistant = () => {
  const openChat = () => {
    alert("Integrasi dengan Dialogflow akan ditambahkan.");
  };

  return (
    <button className="skay-assistant" onClick={openChat}>
      🤖
    </button>
  );
};

export default SkayAssistant;
