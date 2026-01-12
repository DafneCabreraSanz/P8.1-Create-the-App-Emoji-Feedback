import FeedbackItem from "../FeedbackItem/FeedbackItem";

// Component that renders a list of emoji feedback buttons
function FeedbackList({ emojis, selected, onSelect }) {
  return (
    <div className="feedback-list">
      {/* Loop through all emojis and create a button for each one */}
      {emojis.map((emoji) => (
        <FeedbackItem
          key={emoji.emoji}
          emoji={emoji}
          // Check if this emoji is the currently selected one
          isSelected={selected?.emoji === emoji.emoji}
          // Call onSelect when the user clicks this emoji button
          onClick={() => onSelect(emoji)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
