import React from "react";
import { useState } from "react";
function Form({ getUserInput }) {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="flex justify-center centent-center pt-6">
      
      <input
        type="text"
        name=""
        id=""
        className="border-2 border-black p-2 mr-2 rounded-lg w-80"
        placeholder="Searn for a city"
        onChange={(e) => {  
          

          setUserInput(e.target.value);
          
        }}
      />
      <button
        type="submit"
        onClick={() => {
          // check if userInput is not empty or just spaces
          if (userInput.trim() !== "") {
            getUserInput(userInput);
          }
        }}
        className="bg-green-500 text-white border-none w-32
 rounded-lg
"
      >
        Send
      </button>
    </div>
  );
}

export default Form;
