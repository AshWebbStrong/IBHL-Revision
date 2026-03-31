export default function ProgressDock({ currentIndex, totalSlides, completedCount, onJump }) {
  return (
    <aside className="progressDock glassCard" aria-label="Quiz progress">
      <p className="eyebrow">Progress</p>
      <h3>
        {completedCount} / {totalSlides - 1} complete
      </h3>
      <div className="progressDots">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isFinal = index === totalSlides - 1;
          return (
            <button
              key={index}
              type="button"
              className={`progressDot ${currentIndex === index ? 'active' : ''} ${
                isFinal ? 'finalDot' : ''
              }`}
              onClick={() => onJump(index)}
              aria-label={isFinal ? 'Jump to finish section' : `Jump to question ${index + 1}`}
            >
              {isFinal ? '↺' : index + 1}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
