export default function ProgressDock({ currentIndex, totalSlides, completedCount, onJump }) {
  const questionCount = Math.max(totalSlides - 2, 0);

  return (
    <aside className="progressDock glassCard" aria-label="Quiz progress">
      <p className="eyebrow">Progress</p>
      <h3>
        {completedCount} / {questionCount} complete
      </h3>

      <div className="progressDots">
        {Array.from({ length: questionCount + 1 }).map((_, index) => {
          const isFinal = index === questionCount;
          const slideIndex = isFinal ? totalSlides - 1 : index + 1;

          return (
            <button
              key={index}
              type="button"
              className={`progressDot ${currentIndex === slideIndex ? 'active' : ''} ${
                isFinal ? 'finalDot' : ''
              }`}
              onClick={() => onJump(slideIndex)}
              aria-label={
                isFinal ? 'Jump to finish section' : `Jump to question ${index + 1}`
              }
            >
              {isFinal ? '↺' : index + 1}
            </button>
          );
        })}
      </div>
    </aside>
  );
}