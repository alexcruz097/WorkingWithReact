import { useState } from "react";

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

  const generateBotMessage = (message) => {
    setChatMessages((prevMessages) => {
      return [
        ...prevMessages,
        {
          sender: "bot",
          message: message,
          id: crypto.randomUUID(),
        },
      ];
    });
  };
  // create function to handle user input from Form component
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
          generateBotMessage("Hi there! How can I help you?");
        }, 1000);
        break;
      case userInput.toLowerCase().includes("date"):
        setTimeout(() => {
          generateBotMessage(
            `Today's date is ${new Date().toLocaleDateString()}`
          );
        }, 1000);
        break;

      default:
        setTimeout(() => {
          generateBotMessage("I'm sorry, I don't understand. Ask Again!!");
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
          <ChatBox key={chat.id} input={chat.message} sender={chat.sender} />
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
