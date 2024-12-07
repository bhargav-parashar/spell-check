import React, { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [text, setText] = useState({
    inputText: "",
    suggestedText: "",
  });

  const handleInputChange = (e) => {
    const sentence = e.target.value;
    setText({ ...text, inputText: sentence });

    // Implement a basic spelling check and correction
    const words = sentence.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setText({ suggestedText: firstCorrection || "" });
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        value={text.inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {text.suggestedText && (
        <p>
          Did you mean: <strong>{text.suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
