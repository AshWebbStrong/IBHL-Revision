import LatexText from './LatexText';

export default function StudentResponse({ response }) {
  if (!response) {
    return <p className="mutedText">No response saved yet.</p>;
  }

  if (response.type === 'drawing' && response.value) {
    return (
      <img
        src={response.value}
        alt="Student drawing"
        className="savedDrawing"
      />
    );
  }

  if (response.type === 'text-and-drawing') {
    const drawing = response.value?.drawing;
    const text = response.value?.text;

    return (
      <div className="studentCombinedResponse">
        {drawing ? (
          <img
            src={drawing}
            alt="Student drawing"
            className="savedDrawing"
          />
        ) : null}

        {text ? (
          <div className="preserveBreaks">
            <LatexText text={text} />
          </div>
        ) : null}

        {!drawing && !text ? (
          <p className="mutedText">No response saved yet.</p>
        ) : null}
      </div>
    );
  }

  if (response.type === 'multiple-choice') {
    return (
      <div className="preserveBreaks">
        <LatexText text={response.displayValue || response.value || ''} />
      </div>
    );
  }

  return (
    <div className="preserveBreaks">
      <LatexText text={response.displayValue || response.value || ''} />
    </div>
  );
}