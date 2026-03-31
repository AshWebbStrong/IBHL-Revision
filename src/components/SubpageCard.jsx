import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

export default function SubpageCard({
  topic,
  subpage,
  isComplete = false,
  isLocked = false,
  hasProgress = false,
  hasStarted = false,
  onReset,
  onManualComplete,
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!showConfirm) return undefined;

    function handlePointerDown(event) {
      if (!cardRef.current) return;
      if (!cardRef.current.contains(event.target)) {
        setShowConfirm(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [showConfirm]);

  function handleCompleteClick() {
    if (isComplete) return;
    setShowConfirm(true);
  }

  function handleConfirmYes() {
    onManualComplete?.();
    setShowConfirm(false);
  }

  function handleConfirmNo() {
    setShowConfirm(false);
  }

  const buttonLabel = isComplete ? 'Review' : hasStarted ? 'Continue' : 'Start';

  if (showConfirm) {
    return (
      <article
        ref={cardRef}
        className="glassCard subpageCard subpageCardConfirmState"
      >
        <div className="subpageCardConfirmInner">
          <p className="subpageConfirmPrompt">
            Do you promise you have already completed this quiz?
          </p>

          <div className="subpageConfirmActions">
            <button
              type="button"
              className="primaryButton smallButton"
              onClick={handleConfirmYes}
            >
              Yes
            </button>

            <button
              type="button"
              className="secondaryButton"
              onClick={handleConfirmNo}
            >
              No
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      ref={cardRef}
      className={`glassCard subpageCard ${isLocked ? 'isLocked' : ''}`}
    >
      <div className="subpageCardTop">
        <h3>{subpage.label}</h3>

        <div className="subpageCardStatus">
          <button
            type="button"
            className="subpageResetButton"
            onClick={onReset}
            disabled={!hasProgress}
          >
            Reset quiz progress
          </button>

          <button
            type="button"
            className={`subpageCompleteBox ${isComplete ? 'isComplete' : ''} ${
              !isComplete ? 'isClickable' : ''
            }`}
            aria-label={isComplete ? 'Completed' : 'Mark as completed'}
            title={isComplete ? 'Completed' : 'Mark as completed'}
            onClick={handleCompleteClick}
            disabled={isComplete}
          >
            {isComplete ? <span className="subpageCompleteMark">✓</span> : null}
          </button>
        </div>
      </div>

      <p className="subpageDescription">{subpage.description}</p>

      {isLocked ? (
        <button
          type="button"
          className="secondaryButton subpageStartButton"
          disabled
        >
          {buttonLabel}
        </button>
      ) : (
        <Link
          to={`/${topic.slug}/${subpage.slug}`}
          className="secondaryButton subpageStartButton"
        >
          {buttonLabel}
        </Link>
      )}
    </article>
  );
}