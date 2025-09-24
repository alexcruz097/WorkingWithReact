import { useState } from "react";
import nodeCrypto from "crypto";

import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import ChatBox from "./components/ChatBox";
function App() {
  const [inputPosition, setInputPosition] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);
  const handlePositionChange = () => {
    setInputPosition(!inputPosition);
  };

  const createUserChat = (userInput) => {
    setChatMessages((prevMessages) => {
      return [
        ...prevMessages,
        { sender: "user", message: userInput, id: crypto.randomUUID() },
      ];
    });
    // check user input and set bot response

    switch (true) {
      case userInput.toLowerCase().trim().includes("hello"):
        setTimeout(() => {
          setChatMessages((prevMessages) => {
            return [
              ...prevMessages,
              {
                sender: "bot",
                message: "Hi there! How can I help you",
                id: crypto.randomUUID(),
              },
            ];
          });
        }, 1000);
        break;
      case userInput.toLowerCase().includes("date"):
        setTimeout(() => {
          setChatMessages((prevMessages) => {
            return [
              ...prevMessages,
              {
                sender: "bot",
                message: "today is " + new Date().toLocaleDateString(),
                id: crypto.randomUUID(),
              },
            ];
          });
        }, 1000);
        break;

      default:
      case userInput.includes("date"):
        setTimeout(() => {
          setChatMessages((prevMessages) => {
            return [
              ...prevMessages,
              {
                sender: "bot",
                message: "Sorry, I didn't understand that. Try again!",
                id: crypto.randomUUID(),
              },
            ];
          });
        }, 1000);
        break;
    }
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center content-center flex-wrap">
        {inputPosition === true ? <Form createUserChat={createUserChat} /> : ""}
        {/* iterate thru the array of objects */}
        {chatMessages.map((chat) => (
          <>
            <ChatBox key={chat.id} input={chat.message} sender={chat.sender} />
          </>
        ))}

        {inputPosition === false ? (
          <Form createUserChat={createUserChat} />
        ) : (
          ""
        )}
        <button
          className="underline mt-6"
          onClick={handlePositionChange}
          aria-label="Toggle input position"
        >
          Put Input to the {inputPosition ? "Bottom" : "Top"}
        </button>
      </div>
    </>
  );
}

export default App;
