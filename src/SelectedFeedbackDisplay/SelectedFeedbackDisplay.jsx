// Component that displays the currently selected emoji and its label
function SelectedFeedbackDisplay({ selected }) {
  // If no emoji is selected, prompt the user to select one
  if (!selected) {
    return <div className="selected-feedback">Select an emoji</div>;
  }

  // Display the selected emoji and its corresponding label
  return (
    <div className="selected-feedback">
      Your Feedback: {selected.emoji} - "{selected.label}"
    </div>
  );
}

export default SelectedFeedbackDisplay;
