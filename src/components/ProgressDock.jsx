import { assessmentLabels, responseStatus } from '../utils/quizProgress';

export default function ProgressDock({ currentIndex, totalSlides, completedCount, questions, responses, onJump }) {
  const questionCount = Math.max(totalSlides - 2, 0);

  return (
    <aside className="progressDock glassCard" aria-label="Quiz progress">
      <p className="eyebrow">Progress</p>
      <h3>
        {completedCount}/{questionCount} answered
      </h3>

      <div className="progressDots">
        {Array.from({ length: questionCount + 1 }).map((_, index) => {
          const isFinal = index === questionCount;
          const slideIndex = isFinal ? totalSlides - 1 : index + 1;
          const status = isFinal ? '' : responseStatus(responses[questions[index].id]);
          const label = isFinal ? 'Section summary' : `Question ${index + 1}: ${assessmentLabels[status] ?? 'Unanswered'}`;

          return (
            <button
              key={index}
              type="button"
              className={`progressDot ${currentIndex === slideIndex ? 'active' : ''} ${
                isFinal ? 'finalDot' : `status-${status}`
              }`}
              onClick={() => onJump(slideIndex)}
              aria-label={label}
              title={label}
              aria-current={currentIndex === slideIndex ? 'step' : undefined}
            >
              {isFinal ? '↺' : index + 1}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
