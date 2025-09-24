import React, { use } from "react";
import { useState } from "react";
function Form({ getUserInput, createUserChat }) {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="flex justify-center centent-center mt-6">
      <input
        type="text"
        name=""
        id=""
        className="border-2 border-black p-2 mr-2 rounded-lg w-80"
        placeholder="Send a message to Chatbot"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          getUserInput(userInput);
          createUserChat(userInput);
        }}
        className="bg-green-500 text-white p-2 border-none w-32
 rounded-lg
"
      >
        Send
      </button>
    </div>
  );
}

export default Form;
