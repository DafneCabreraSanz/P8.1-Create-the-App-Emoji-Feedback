function SelectedFeedbackDisplay({ selected }) {
  if (!selected) {
    return <div className="selected-feedback">Select an emoji</div>;
  }

  return (
    <div className="selected-feedback">
      Your Feedback: {selected.emoji} - "{selected.label}"
    </div>
  );
}

export default SelectedFeedbackDisplay;
