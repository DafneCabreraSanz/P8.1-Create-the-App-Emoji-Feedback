import "./App.css";
import FeedbackList from "./FeedbackList/FeedbackList";
import SelectedFeedbackDisplay from "./SelectedFeedbackDisplay/SelectedFeedbackDisplay";
import { useState } from "react";

const emojis = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😐", label: "Normal" },
  { emoji: "🤔", label: "Thoughtful" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😱", label: "Surprised" },
  { emoji: "😴", label: "Tired" },
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <h1>How do you feel?</h1>
      <FeedbackList
        emojis={emojis}
        selected={selected}
        onSelect={setSelected}
      />
      <SelectedFeedbackDisplay selected={selected} />
      <button onClick={() => setSelected(null)} className="reset-button">
        Reset
      </button>
    </div>
  );
}

export default App;
