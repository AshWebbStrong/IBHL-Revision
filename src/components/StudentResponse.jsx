export default function StudentResponse({ response }) {
  if (!response) {
    return <p className="mutedText">No response saved yet.</p>;
  }

  if (response.type === 'drawing' && response.value) {
    return <img src={response.value} alt="Student drawing" className="savedDrawing" />;
  }

  return <p className="preserveBreaks">{response.displayValue || response.value}</p>;
}
