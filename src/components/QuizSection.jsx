import { useEffect, useMemo, useState } from 'react';
import DrawingCanvas from './DrawingCanvas';
import QuestionPrompt from './QuestionPrompt';
import StudentResponse from './StudentResponse';

function normalizeValue(question, draftValue) {
  if (question.type === 'multiple-choice') {
    return draftValue;
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
          <p className="answerChip">Correct option</p>
          <p>{question.correctOption}</p>
        </div>
      ) : null}

      {hasText ? (
        <div className="teacherAnswerBlock">
          <p>{question.teacherAnswer}</p>
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

    return savedResponse?.value ?? '';
  }, [savedResponse]);

  const [draftValue, setDraftValue] = useState(initialDraft);

  useEffect(() => {
    setDraftValue(initialDraft);
  }, [initialDraft, question.id]);

  const isSubmitted = Boolean(savedResponse);

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedValue = normalizeValue(question, draftValue);

    if (!normalizedValue) return;

    const displayValue =
      question.type === 'multiple-choice'
        ? normalizedValue
        : question.type === 'drawing'
          ? 'Sketch saved'
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
        <QuestionPrompt
          question={question}
          sectionNumber={sectionNumber}
          totalSections={totalSections}
        />

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
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ) : null}

              {question.type === 'drawing' ? (
                <DrawingCanvas value={draftValue} onChange={setDraftValue} />
              ) : null}

              <button type="submit" className="primaryButton fullWidthButton">
                Submit response
              </button>
            </form>
          ) : (
            <>
              <article className="glassCard answerPane studentPane">
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

              <article className="glassCard answerPane teacherPane">
                <div className="answerPaneHeader">
                  <div>
                    <h3>Model answer</h3>
                  </div>
                </div>

                {renderTeacherAnswer(question)}
              </article>
            </>
          )}
        </div>
      </div>
    </section>
  );
}