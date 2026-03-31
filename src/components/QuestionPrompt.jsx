export default function QuestionPrompt({ question, sectionNumber, totalSections }) {
  return (
    <div className="promptPane glassCard">
      <div className="promptMeta">
        <span>
          Question {sectionNumber} / {totalSections}
        </span>
      </div>
      <h2>{question.title}</h2>
      <p className="promptText">{question.promptText}</p>
      {question.promptImage ? (
        <div className="promptVisual">
          <img src={question.promptImage} alt="Question illustration" />
        </div>
      ) : null}
    </div>
  );
}
