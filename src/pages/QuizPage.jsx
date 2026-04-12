import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router';
import ProgressDock from '../components/ProgressDock';
import QuizSection from '../components/QuizSection';
import NotFoundPage from './NotFoundPage';
import { getSubpage, getTopicBySlug } from '../data/topicData';
import {
  markRouteComplete,
  readProgress,
  resetQuestionResponse,
  saveQuestionResponse,
} from '../utils/storage';

function isInteractiveElement(target) {
  if (!(target instanceof HTMLElement)) return false;

  return Boolean(
    target.closest(
      'input, textarea, select, button, a, [contenteditable="true"], [role="textbox"]',
    ),
  );
}

export default function QuizPage() {
  const { topicSlug, subpageSlug } = useParams();
  const topic = getTopicBySlug(topicSlug);
  const subpage = getSubpage(topicSlug, subpageSlug);
  const routeKey = `${topicSlug}/${subpageSlug}`;

  const [progress, setProgress] = useState(() => readProgress());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enhancedNav, setEnhancedNav] = useState(() => window.innerWidth > 1024);
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
  const isQuestionSlide = currentIndex >= firstQuestionIndex && currentIndex <= questions.length;
  const currentQuestion = isQuestionSlide ? questions[currentIndex - 1] : null;

  const completedCount = questions.filter((question) => Boolean(responses[question.id])).length;
  const allComplete = completedCount === questions.length;
  const maxUnlockedIndex = allComplete ? outroIndex : completedCount + 1;

  const canAdvance = useMemo(() => {
    if (isIntroSlide) return true;
    if (!isQuestionSlide) return false;
    return Boolean(responses[currentQuestion?.id]);
  }, [isIntroSlide, isQuestionSlide, responses, currentQuestion]);

  useEffect(() => {
    setProgress(readProgress());
    setCurrentIndex(0);
  }, [routeKey]);

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
      if (nextIndex > maxUnlockedIndex) return;

      lockRef.current = true;
      setCurrentIndex(nextIndex);
      releaseLock();
    }

    function handleWheel(event) {
      if (Math.abs(event.deltaY) < 10) return;
      event.preventDefault();

      if (event.deltaY > 0) {
        if (isQuestionSlide && !canAdvance) return;
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
        if (isQuestionSlide && !canAdvance) return;
        goToIndex(Math.min(currentIndex + 1, totalSlides - 1));
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        goToIndex(Math.max(currentIndex - 1, 0));
      }
    }

    function handleTouchStart(event) {
      touchStartRef.current = event.changedTouches[0].clientY;
    }

    function handleTouchEnd(event) {
      if (touchStartRef.current == null) return;
      const endY = event.changedTouches[0].clientY;
      const delta = touchStartRef.current - endY;
      touchStartRef.current = null;

      if (Math.abs(delta) < 40) return;

      if (delta > 0) {
        if (isQuestionSlide && !canAdvance) return;
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
  }, [canAdvance, currentIndex, enhancedNav, isQuestionSlide, maxUnlockedIndex, totalSlides]);

  useEffect(() => {
    if (!allComplete) return;
    if (currentIndex !== outroIndex) return;

    markRouteComplete(routeKey);
  }, [allComplete, currentIndex, outroIndex, routeKey]);

  if (!topic || !subpage) {
    return <NotFoundPage />;
  }

  function handleSubmit(questionId, response) {
    const next = saveQuestionResponse(routeKey, questionId, response);
    setProgress(next);
  }

  function handleReset(questionId) {
    const next = resetQuestionResponse(routeKey, questionId);
    setProgress(next);
    const questionIndex = questions.findIndex((question) => question.id === questionId);
    setCurrentIndex(questionIndex + 1);
  }

  function handleJump(index) {
    if (index <= maxUnlockedIndex) {
      setCurrentIndex(index);
    }
  }

  function handleNext() {
    if (isOutroSlide) return;
    if (isQuestionSlide && !canAdvance) return;
    setCurrentIndex(Math.min(currentIndex + 1, totalSlides - 1));
  }

  function getNextLabel() {
    if (isIntroSlide) return intro.primaryLabel ?? 'Start section';
    if (currentIndex === questions.length && canAdvance) return 'Finish section';
    return 'Next';
  }
  return (
    <div className="quizPage" style={{ '--topic-accent': topic.accent }}>
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
            disabled={isOutroSlide || (isQuestionSlide && !canAdvance)}
          >
            {getNextLabel()}
          </button>
        </div>
      </div>

      <ProgressDock
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        completedCount={completedCount}
        onJump={handleJump}
      />

      <div className="quizViewport">
        <div
          className="quizTrack"
          style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
        >
          
          <section className="quizSlide introSlide">
            <div className="finalSlideInner glassCard">
              <p className="eyebrow">{intro.eyebrow ?? 'Before you begin'}</p>
              <h2>{intro.title ?? subpage.label}</h2>
              <p>
                {intro.summary ?? 
                  `This section contains ${questions.length} question${
                    questions.length === 1 ? '' : 's'
                  }. Submit each answer to unlock the next one.`}
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
                  onClick={() => setCurrentIndex(firstQuestionIndex)}
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
              onReset={() => handleReset(question.id)}
            />
          ))}

          <section className="quizSlide finalSlide">
            <div className="finalSlideInner glassCard">
              <p className="eyebrow">{outro.eyebrow ?? 'Section complete'}</p>
              <h2>{outro.title ?? `${subpage.label} complete`}</h2>
              <p>
                {outro.summary ??
                  `You have completed ${completedCount} out of ${questions.length} questions in this section.`}
              </p>

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