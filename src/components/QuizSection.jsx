import { useEffect, useMemo, useState } from 'react';
import DrawingCanvas from './DrawingCanvas';
import QuestionPrompt from './QuestionPrompt';
import StudentResponse from './StudentResponse';
import LatexText from './LatexText';

function normalizeValue(question, draftValue) {
  if (question.type === 'multiple-choice') {
    return draftValue;
  }

  if (question.type === 'text-and-drawing') {
    return {
      text: typeof draftValue?.text === 'string' ? draftValue.text.trim() : '',
      drawing: draftValue?.drawing ?? '',
    };
  }

  return typeof draftValue === 'string' ? draftValue.trim() : draftValue;
}

function renderTeacherAnswer(question) {
  const hasImage = Boolean(question.teacherAnswerImage);
  const hasText = Boolean(question.teacherAnswer);
  const hasNotes = Boolean(question.teacherNotes);

  return (
    <div className="teacherAnswerContent">
      {question.correctOption ? (
        <div className="teacherAnswerBlock">
          <LatexText text={question.correctOption} className="correctOptionText" />
        </div>
      ) : null}

      {hasText ? (
        <div className="teacherAnswerBlock">
          <LatexText text={question.teacherAnswer} className="teacherAnswerText" />
        </div>
      ) : null}

      {hasImage ? (
        <div className="teacherAnswerBlock modelAnswerMedia">
          <div className="modelAnswerImageWrap">
            <img
              src={question.teacherAnswerImage}
              alt={question.teacherAnswerImageAlt || 'Model answer'}
              className="modelAnswerImage"
            />
          </div>
        </div>
      ) : null}

      {hasNotes ? (
        <div className="teacherAnswerBlock">
          <p className="teacherExplanation">{question.teacherNotes}</p>
        </div>
      ) : null}
    </div>
  );
}

export default function QuizSection({
  question,
  savedResponse,
  sectionNumber,
  totalSections,
  onSubmit,
  onReset,
}) {
  const initialDraft = useMemo(() => {
    if (savedResponse?.type === 'multiple-choice') {
      return savedResponse.value;
    }

    if (savedResponse?.type === 'text-and-drawing') {
      return {
        text: savedResponse.value?.text ?? '',
        drawing: savedResponse.value?.drawing ?? '',
      };
    }

    if (question.type === 'text-and-drawing') {
      return {
        text: '',
        drawing: '',
      };
    }

    return savedResponse?.value ?? '';
  }, [savedResponse, question.type]);

  const [draftValue, setDraftValue] = useState(initialDraft);
  const [reviewMode, setReviewMode] = useState('both');

  useEffect(() => {
    setDraftValue(initialDraft);
  }, [initialDraft, question.id]);

  useEffect(() => {
    setReviewMode('both');
  }, [question.id, Boolean(savedResponse)]);

  const isSubmitted = Boolean(savedResponse);

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedValue = normalizeValue(question, draftValue);

    const hasResponse =
      question.type === 'text-and-drawing'
        ? Boolean(normalizedValue.text) || Boolean(normalizedValue.drawing)
        : Boolean(normalizedValue);

    if (!hasResponse) return;

    const displayValue =
      question.type === 'multiple-choice'
        ? normalizedValue
        : question.type === 'drawing'
          ? 'Sketch saved'
          : question.type === 'text-and-drawing'
            ? 'Sketch and written response saved'
            : normalizedValue;

    onSubmit({
      type: question.type,
      value: normalizedValue,
      displayValue,
    });
  }

  return (
    <section className="quizSlide">
      <div className="quizSlideInner">
        {!isSubmitted ? (
          <QuestionPrompt
            question={question}
            sectionNumber={sectionNumber}
            totalSections={totalSections}
          />
        ) : (
          <div className="reviewColumn">
            <div className="glassCard reviewToolbar">
              <div>
                <p className="eyebrow">Review</p>
                <h3>Question and answer</h3>
              </div>

              <div className="reviewToggleGroup" role="tablist" aria-label="Review mode">
                <button
                  type="button"
                  className={`reviewToggleButton ${reviewMode === 'question' ? 'active' : ''}`}
                  onClick={() => setReviewMode('question')}
                >
                  Show question
                </button>

                <button
                  type="button"
                  className={`reviewToggleButton ${reviewMode === 'answer' ? 'active' : ''}`}
                  onClick={() => setReviewMode('answer')}
                >
                  Show answer
                </button>

                <button
                  type="button"
                  className={`reviewToggleButton ${reviewMode === 'both' ? 'active' : ''}`}
                  onClick={() => setReviewMode('both')}
                >
                  Show both
                </button>
              </div>
            </div>

            <div className={`reviewContent reviewContent--${reviewMode}`}>
              {(reviewMode === 'question' || reviewMode === 'both') && (
                <QuestionPrompt
                  question={question}
                  sectionNumber={sectionNumber}
                  totalSections={totalSections}
                />
              )}

              {(reviewMode === 'answer' || reviewMode === 'both') && (
                <article className="glassCard answerPane teacherPane reviewTeacherPane">
                  <div className="answerPaneHeader">
                    <div>
                      <h3>Model answer</h3>
                    </div>
                  </div>

                  {renderTeacherAnswer(question)}
                </article>
              )}
            </div>
          </div>
        )}

        <div className="responseColumn">
          {!isSubmitted ? (
            <form className="glassCard responseComposer" onSubmit={handleSubmit}>
              <div>
                <p className="eyebrow">Your response</p>
                <p className="mutedText">
                  Your response is saved in your browser after you submit.
                </p>
              </div>

              {question.type === 'text' ? (
                <textarea
                  className="responseTextarea"
                  value={draftValue}
                  onChange={(event) => setDraftValue(event.target.value)}
                  placeholder={question.placeholder || 'Write your answer here...'}
                />
              ) : null}

              {question.type === 'multiple-choice' ? (
                <div className="choiceStack">
                  {question.options.map((option) => (
                    <label key={option} className="choiceCard">
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={draftValue === option}
                        onChange={(event) => setDraftValue(event.target.value)}
                      />
                      <span className="choiceLabelText">
                        <LatexText text={option} />
                      </span>
                    </label>
                  ))}
                </div>
              ) : null}

              {question.type === 'drawing' ? (
                <DrawingCanvas value={draftValue} onChange={setDraftValue} />
              ) : null}

              {question.type === 'text-and-drawing' ? (
                <div className="combinedResponseStack">
                  <DrawingCanvas
                    value={draftValue.drawing}
                    onChange={(newDrawing) =>
                      setDraftValue((current) => ({
                        ...current,
                        drawing: newDrawing,
                      }))
                    }
                  />

                  <textarea
                    className="responseTextarea"
                    value={draftValue.text}
                    onChange={(event) =>
                      setDraftValue((current) => ({
                        ...current,
                        text: event.target.value,
                      }))
                    }
                    placeholder={question.placeholder || 'Write your explanation here...'}
                  />
                </div>
              ) : null}

              <button type="submit" className="primaryButton fullWidthButton">
                Submit response
              </button>
            </form>
          ) : (
            <article className="glassCard answerPane studentPane answerPaneFull">
              <div className="answerPaneHeader">
                <div>
                  <h3>Your answer</h3>
                </div>

                <button type="button" className="ghostButton" onClick={onReset}>
                  Edit answer
                </button>
              </div>

              <StudentResponse response={savedResponse} />
            </article>
          )}
        </div>
      </div>
    </section>
  );
}