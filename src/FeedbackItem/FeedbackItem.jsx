// Component that displays a single emoji button
function FeedbackItem({ emoji, isSelected, onClick }) {
  // Apply the selected class if this emoji is currently selected
  let buttonClass = "feedback-item";
  if (isSelected === true) {
    buttonClass = "feedback-item feedback-item--selected";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {emoji.emoji}
    </button>
  );
}

export default FeedbackItem;
