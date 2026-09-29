import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import ProgressDock from '../components/ProgressDock';
import QuizSection from '../components/QuizSection';
import NotFoundPage from './NotFoundPage';
import { getSubpage, getTopicBySlug } from '../data/topicData';
import {
  markRouteComplete,
  readProgress,
  saveQuestionAssessment,
  saveQuestionResponse,
} from '../utils/storage';
import { countAnswered, firstUnansweredIndex, resumeIndex, retryQuestions } from '../utils/quizProgress';

function isInteractiveElement(target) {
  if (!(target instanceof HTMLElement)) return false;

  return Boolean(
    target.closest(
      'input, textarea, select, button, a, [contenteditable="true"], [role="textbox"]',
    ),
  );
}

function isInsideScrollableArea(target) {
  if (!(target instanceof Element)) return false;
  let element = target;
  while (element && !element.classList.contains('quizPage')) {
    const { overflowY } = window.getComputedStyle(element);
    if (['auto', 'scroll'].includes(overflowY) && element.scrollHeight > element.clientHeight + 2) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}

export default function QuizPage() {
  const { topicSlug, subpageSlug } = useParams();
  const topic = getTopicBySlug(topicSlug);
  const subpage = getSubpage(topicSlug, subpageSlug);
  const routeKey = `${topicSlug}/${subpageSlug}`;

  const [progress, setProgress] = useState(() => readProgress());
  const [currentIndex, setCurrentIndex] = useState(() => resumeIndex(subpage?.questions ?? [], readProgress()[routeKey] ?? {}));
  const [saveError, setSaveError] = useState('');
  const [enhancedNav, setEnhancedNav] = useState(() => window.innerWidth > 1024);
  const pageRef = useRef(null);
  const touchStartRef = useRef(null);
  const lockRef = useRef(false);

  const questions = subpage?.questions ?? [];
  const intro = subpage?.intro ?? {};
  const outro = subpage?.outro ?? {};
  const responses = progress[routeKey] ?? {};

  const introIndex = 0;
  const firstQuestionIndex = 1;
  const outroIndex = questions.length + 1;
  const totalSlides = questions.length + 2;

  const isIntroSlide = currentIndex === introIndex;
  const isOutroSlide = currentIndex === outroIndex;

  const completedCount = countAnswered(questions, responses);
  const allComplete = completedCount === questions.length;
  const firstMissing = firstUnansweredIndex(questions, responses);

  const retryList = retryQuestions(questions, responses);

  useEffect(() => {
    setProgress(readProgress());
    setCurrentIndex(resumeIndex(questions, readProgress()[routeKey] ?? {}));
    setSaveError('');
  }, [routeKey]);

  useEffect(() => {
    if (!enhancedNav) {
      window.scrollTo(0, 0);
      if (pageRef.current) pageRef.current.scrollTop = 0;
    }
  }, [currentIndex, enhancedNav]);

  useEffect(() => {
    function handleResize() {
      setEnhancedNav(window.innerWidth > 1024);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!enhancedNav) return undefined;

    function releaseLock() {
      window.setTimeout(() => {
        lockRef.current = false;
      }, 450);
    }

    function goToIndex(nextIndex) {
      if (lockRef.current) return;
      if (nextIndex < 0 || nextIndex >= totalSlides || nextIndex === currentIndex) return;

      lockRef.current = true;
      setCurrentIndex(nextIndex);
      releaseLock();
    }

    function handleWheel(event) {
      if (Math.abs(event.deltaY) < 10) return;
      if (isInsideScrollableArea(event.target)) return;
      event.preventDefault();

      if (event.deltaY > 0) {

        goToIndex(Math.min(currentIndex + 1, totalSlides - 1));
      } else {
        goToIndex(Math.max(currentIndex - 1, 0));
      }
    }

    function handleKeyDown(event) {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isInteractiveElement(event.target)) return;

      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();

        goToIndex(Math.min(currentIndex + 1, totalSlides - 1));
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        goToIndex(Math.max(currentIndex - 1, 0));
      }
    }

    function handleTouchStart(event) {
      if (isInteractiveElement(event.target) || isInsideScrollableArea(event.target)) return;
      touchStartRef.current = event.changedTouches[0].clientY;
    }

    function handleTouchEnd(event) {
      if (touchStartRef.current == null) return;
      const endY = event.changedTouches[0].clientY;
      const delta = touchStartRef.current - endY;
      touchStartRef.current = null;

      if (Math.abs(delta) < 40) return;

      if (delta > 0) {

        goToIndex(Math.min(currentIndex + 1, totalSlides - 1));
      } else {
        goToIndex(Math.max(currentIndex - 1, 0));
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, enhancedNav, totalSlides]);

  useEffect(() => {
    if (!allComplete) return;
    if (currentIndex !== outroIndex) return;

    try {
      const next = markRouteComplete(routeKey);
      setProgress(next);
      setSaveError('');
    } catch {
      setSaveError('Your progress could not be saved. Check that browser storage is available and has free space.');
    }
  }, [allComplete, currentIndex, outroIndex, routeKey]);

  if (!topic || !subpage) {
    return <NotFoundPage />;
  }

  function handleSubmit(questionId, response) {
    try {
      const next = saveQuestionResponse(routeKey, questionId, response);
      setProgress(next);
      setSaveError('');
      return true;
    } catch {
      setSaveError('Your answer could not be saved. Check that browser storage is available and has free space.');
      return false;
    }
  }

  function handleAssessment(questionId, assessment) {
    try {
      const next = saveQuestionAssessment(routeKey, questionId, assessment);
      setProgress(next);
      setSaveError('');
    } catch {
      setSaveError('Your assessment could not be saved. Check browser storage and try again.');
    }
  }

  function handleJump(index) {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }

  function handleNext() {
    if (isOutroSlide) return;

    setCurrentIndex(Math.min(currentIndex + 1, totalSlides - 1));
  }

  function getNextLabel() {
    if (isIntroSlide) return intro.primaryLabel ?? 'Start section';
    if (currentIndex === questions.length) return allComplete ? 'Finish section' : 'View summary';
    return 'Next';
  }
  return (
    <div ref={pageRef} className="quizPage" style={{ '--topic-accent': topic.accent }}>
      <div className="quizTopBar glassCard">
        <div>
          <p className="eyebrow">{topic.title}</p>
          <h1>{subpage.label}</h1>
        </div>

        <div className="quizTopActions">
          <Link to={`/${topic.slug}`} className="ghostButtonLink">
            Back to topic
          </Link>

          <button
            type="button"
            className="ghostButton"
            onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <button
            type="button"
            className="primaryButton smallButton"
            onClick={handleNext}
            disabled={isOutroSlide}
          >
            {getNextLabel()}
          </button>
        </div>
      </div>

      {saveError ? <div className="quizSaveError" role="alert">{saveError}</div> : null}

      <ProgressDock
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        completedCount={completedCount}
        questions={questions}
        responses={responses}
        onJump={handleJump}
      />

      <div className="quizViewport">
        <div
          className="quizTrack"
          style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
        >
          
          <section className={`quizSlide introSlide ${isIntroSlide ? 'isCurrent' : ''}`}>
            <div className="finalSlideInner glassCard">
              <p className="eyebrow">{intro.eyebrow ?? 'Before you begin'}</p>
              <h2>{intro.title ?? subpage.label}</h2>
              <p>
                {intro.summary ?? 
                  `This section contains ${questions.length} question${
                    questions.length === 1 ? '' : 's'
                  }. Move freely between questions and return to any you skip.`}
              </p>

              {intro.recapItems?.length || intro.tipText ? (
                <div className="summaryGrid">
                  {intro.recapItems?.length ? (
                    <article className="summaryCard">
                      <h3>{intro.recapTitle ?? 'What to focus on'}</h3>
                      <ul>
                        {intro.recapItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ) : null}

                  {intro.tipText ? (
                    <article className="summaryCard">
                      <h3>{intro.tipTitle ?? 'Teacher tip'}</h3>
                      <p>{intro.tipText}</p>
                    </article>
                  ) : null}
                </div>
              ) : null}

              <div className="heroActions">
                <button
                  type="button"
                  className="primaryButton"
                  onClick={() => setCurrentIndex(firstMissing === -1 ? outroIndex : firstMissing + firstQuestionIndex)}
                >
                  {intro.primaryLabel ?? 'Start section'}
                </button>
              </div>
            </div>
          </section>

          {questions.map((question, index) => (
            <QuizSection
              key={question.id}
              question={question}
              savedResponse={responses[question.id]}
              sectionNumber={index + 1}
              totalSections={questions.length}
              onSubmit={(response) => handleSubmit(question.id, response)}
              onAssessment={(assessment) => handleAssessment(question.id, assessment)}
              isCurrent={currentIndex === index + 1}
            />
          ))}

          <section className={`quizSlide finalSlide ${isOutroSlide ? 'isCurrent' : ''}`}>
            <div className="finalSlideInner glassCard">
              <p className="eyebrow">{allComplete ? (outro.eyebrow ?? 'Section complete') : 'Section summary'}</p>
              <h2>{outro.title ?? `${subpage.label} complete`}</h2>
              <p>
                {!allComplete ? `You have answered ${completedCount}/${questions.length} questions. You can return to any unanswered question using the numbered buttons.` : outro.summary ??
                  `You have completed ${completedCount} out of ${questions.length} questions in this section.`}
              </p>

              <div className="retrySummary">
                <h3>Questions to revisit ({retryList.length})</h3>
                {retryList.length ? (
                  <div className="retryLinks">
                    {retryList.map((question) => (
                      <button key={question.id} type="button" className="ghostButton" onClick={() => handleJump(questions.indexOf(question) + 1)}>
                        Question {questions.indexOf(question) + 1}: {question.title}
                      </button>
                    ))}
                  </div>
                ) : <p>Mark answers as partly correct or revisit to collect them here.</p>}
              </div>

              {outro.recapItems?.length || outro.tipText ? (
                <div className="summaryGrid">
                  {outro.recapItems?.length ? (
                    <article className="summaryCard">
                      <h3>{outro.recapTitle ?? 'Before you move on'}</h3>
                      <ul>
                        {outro.recapItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ) : null}

                  {outro.tipText ? (
                    <article className="summaryCard">
                      <h3>{outro.tipTitle ?? 'Teacher tip'}</h3>
                      <p>{outro.tipText}</p>
                    </article>
                  ) : null}
                </div>
              ) : null}

              <div className="heroActions">
                <Link to={outro.primaryTo ?? `/${topic.slug}`} className="primaryButton">
                  {outro.primaryLabel ?? `Return to ${topic.shortLabel}`}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
