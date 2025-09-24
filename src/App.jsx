import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import ChatBox from "./components/ChatBox";
function App() {
  const [inputPosition, setInputPosition] = useState(true);
  const [userInput, setUserInput] = useState("");
  const userChat = [];
  const handlePositionChange = () => {
    setInputPosition(!inputPosition);
  };
  const getUserInput = (input) => {
    setUserInput(input);
    console.log(input);
  };

  const createUserChat = () => {
    console.log("clicked");
    return <ChatBox input={userInput} />;
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center content-center flex-wrap">
        {inputPosition === true ? (
          <Form getUserInput={getUserInput} createUserChat={createUserChat} />
        ) : (
          ""
        )}
        <ChatBox input={userInput} sender="user"/>
        <ChatBox input={userInput} sender="robot"/>
        <ChatBox input={userInput} sender="user"/>
        <ChatBox input={userInput} sender="robot"/>

        {inputPosition === false ? (
          <Form getUserInput={getUserInput} createUserChat={createUserChat} />
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
