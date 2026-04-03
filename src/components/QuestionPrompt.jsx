import LatexText from './LatexText';

export default function QuestionPrompt({ question, sectionNumber, totalSections }) {
  const isCalculator = question.calculator === true;

  return (
    <div className="promptPane glassCard">
      <div className="promptMeta">
        <span>
          Question {sectionNumber} / {totalSections}
        </span>
        <span
          className={`calculatorBadge ${
            isCalculator ? 'calculatorBadgeOn' : 'calculatorBadgeOff'
          }`}
        >
          {isCalculator ? 'Calculator' : 'Non-calculator'}
        </span>
      </div>

      <h2 className="questionTitle">
        <LatexText text={question.title} />
      </h2>

      <LatexText text={question.promptText} className="questionPromptText" />

      {question.promptImage ? (
        <div className="promptVisual">
          <img src={question.promptImage} alt="Question illustration" />
        </div>
      ) : null}
    </div>
  );
}