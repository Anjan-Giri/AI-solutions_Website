import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatBoxRef = useRef(null);

  const API_TOKEN = "AIzaSyDcGNQKuAzhlnXyY7e3BzNHlxSoExwN92k";

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, type: "outgoing" };
    setMessages([...messages, userMessage]);
    setUserInput("");

    setTimeout(() => {
      const botMessage = { text: "Thinking...", type: "incoming" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      generateResponse(userMessage.text);
    }, 600);
  };

  const generateResponse = (message) => {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_TOKEN}`;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: message }] }],
      }),
    };

    fetch(API_URL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const botReply =
          data.candidates[0]?.content.parts[0]?.text ||
          "Sorry, I could not understand that.";
        updateBotResponse(botReply);
      })
      .catch(() => {
        updateBotResponse("Looks like you are offline!");
      });
  };

  const updateBotResponse = (text) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[updatedMessages.length - 1].text = text;
      return updatedMessages;
    });
  };

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <div
          className="cursor-pointer material-symbols-outlined text-2xl flex items-center z-50"
          onClick={() => setIsOpen(true)}
        >
          <span className="chatbot fixed bottom-8 right-8 bg-teal-600 w-12 h-12 rounded-full text-white text-center leading-12 cursor-pointer">
            💬
          </span>
        </div>
      ) : (
        <div className="w-96 bg-gray-800 text-white rounded-lg shadow-lg z-50">
          <header className="flex justify-between items-center p-4 bg-gray-700 rounded-t-lg">
            <h2 className="text-lg font-semibold">ChatBot</h2>
            <span
              className="cursor-pointer material-symbols-outlined"
              onClick={() => setIsOpen(false)}
            >
              close
            </span>
          </header>
          <ul
            className="chatbox overflow-y-auto max-h-80 p-4 space-y-4"
            ref={chatBoxRef}
          >
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`flex ${
                  msg.type === "outgoing" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.type === "incoming" && (
                  <span className="material-symbols-outlined mr-2">
                    AI Chat
                  </span>
                )}
                <p
                  className={`p-2 rounded-lg ${
                    msg.type === "outgoing" ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  {msg.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-center p-4 border-t border-gray-700">
            <textarea
              className="flex-grow p-2 bg-gray-900 text-white rounded-lg resize-none"
              placeholder="Enter a message"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSendMessage()
              }
            ></textarea>
            <span
              className="ml-4 cursor-pointer material-symbols-outlined"
              onClick={handleSendMessage}
            >
              send
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
