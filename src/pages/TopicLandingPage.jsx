import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import ShellHeader from '../components/ShellHeader';
import SubpageCard from '../components/SubpageCard';
import { getTopicBySlug } from '../data/topicData';
import NotFoundPage from './NotFoundPage';
import {
  markRouteComplete,
  readProgress,
  resetRouteProgress,
} from '../utils/storage';

export default function TopicLandingPage() {
  const { topicSlug } = useParams();
  const topic = getTopicBySlug(topicSlug);
  const [progress, setProgress] = useState(() => readProgress());

  const [selectedStripImage, setSelectedStripImage] = useState(null);
  const [selectedConnectedIndex, setSelectedConnectedIndex] = useState(0);

  if (!topic) {
    return <NotFoundPage />;
  }

  const stripImages = topic.imageStripImages ?? [];

  const loopingImages = useMemo(() => {
    if (!stripImages.length) return [];
    return [...stripImages, ...stripImages];
  }, [stripImages]);

  const allSubpagesComplete = topic.subpages.every((subpage) => {
    const routeKey = `${topic.slug}/${subpage.slug}`;
    return Boolean(progress?.[routeKey]?.__meta?.completedAt);
  });

  const selectedImageOptions = selectedStripImage
    ? [selectedStripImage.src, ...(selectedStripImage.connectedImages ?? [])]
    : [];

  const activeLightboxImage =
    selectedImageOptions[selectedConnectedIndex] ?? null;

  const hasConnectedImage = selectedImageOptions.length > 1;
  const isShowingConnectedImage = selectedConnectedIndex === 1;

  function handleToggleConnectedImage() {
  if (!hasConnectedImage) return;

  setSelectedConnectedIndex((current) => (current === 0 ? 1 : 0));
}  

  useEffect(() => {
    if (!selectedStripImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedStripImage(null);
        setSelectedConnectedIndex(0);
      }

      if ((event.key === 'ArrowRight' || event.key === 'ArrowLeft') && hasConnectedImage) {
        setSelectedConnectedIndex((current) => (current === 0 ? 1 : 0));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStripImage, hasConnectedImage]);

  function handleReset(routeKey) {
    const next = resetRouteProgress(routeKey);
    setProgress(next);
  }

  function handleManualComplete(routeKey) {
    const next = markRouteComplete(routeKey);
    setProgress(next);
  }

  function openStripImage(image) {
    setSelectedStripImage(image);
    setSelectedConnectedIndex(0);
  }

  function closeLightbox() {
    setSelectedStripImage(null);
    setSelectedConnectedIndex(0);
  }


  console.log('topic.slug:', topic.slug);
console.log('subpages:', topic.subpages.map((s) => s.slug));
console.log('progress:', progress);
console.log(
  'expected route keys:',
  topic.subpages.map((s) => `${topic.slug}/${s.slug}`)
);
  return (
    <div className="page topicPage">
      <main className="pageShell">
        <ShellHeader compact />

        <section className="topicIntroSection">
          <p className="topicIntro">
            Work your way through these quizzes to revise this topic.
            <br />
            Answers will be given after each question, but you will need to mark
            and assess your own work and ultimately make the decision on whether
            more work is needed in that area. Advice is provided at the end of
            each quiz on what to do if you need more work there.
          </p>
        </section>

        <section className="subpageGridSection">
          <div className="subpageGrid singleRow">
            {topic.subpages.map((subpage, index) => {
              const routeKey = `${topic.slug}/${subpage.slug}`;
              const previousSubpage = topic.subpages[index - 1];
              const previousRouteKey = previousSubpage
                ? `${topic.slug}/${previousSubpage.slug}`
                : null;

              const routeProgress = progress?.[routeKey] ?? {};
              const isComplete = Boolean(routeProgress?.__meta?.completedAt);

              const responseKeys = Object.keys(routeProgress).filter(
                (key) => key !== '__meta'
              );
              const hasStarted = responseKeys.length > 0 || isComplete;
              const hasProgress = responseKeys.length > 0 || isComplete;

              const isLocked =
                index > 0 &&
                !Boolean(progress?.[previousRouteKey]?.__meta?.completedAt);

              return (
                <SubpageCard
                  key={subpage.slug}
                  topic={topic}
                  subpage={subpage}
                  isComplete={isComplete}
                  isLocked={isLocked}
                  hasProgress={hasProgress}
                  hasStarted={hasStarted}
                  onReset={() => handleReset(routeKey)}
                  onManualComplete={() => handleManualComplete(routeKey)}
                />
              );
            })}
          </div>
        </section>

        <section
          className="imageStripSection glassCard"
          style={{ '--topic-accent': topic.accent }}
        >
          {allSubpagesComplete && stripImages.length > 0 ? (
            <div
              className={`imageStripMarquee${
                selectedStripImage ? ' isPaused' : ''
              }`}
            >
              <div className="imageStripTrack">
                {loopingImages.map((image, index) => (
                  <button
                    type="button"
                    className="imageStripCard imageStripCardButton"
                    key={`${image.id}-${index}`}
                    onClick={() => openStripImage(image)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="imageStripImg"
                    />
                  </button>
                ))}
              </div>
            </div>
            
          ) : (
            <div className="imageStripLockedMessage">
              Complete all of the quizzes above to see exam questions
            </div>
          )}
        </section>
        
        {allSubpagesComplete && stripImages.length > 0 ? (
          <p className="imageStripCredit">
            These images of exam-styled questions were sourced from MadasMaths. Please visit{' '}
            <a
              href="https://www.madasmaths.com/archive/maths_booklets/standard_topics/various/exponentials_logarithms_exam_questions.pdf"
              target="_blank"
              rel="noreferrer"
            >
              this page
            </a>{' '}
            for more.
          </p>
        ) : null}
      </main>

      {selectedStripImage && activeLightboxImage ? (
        <div
          className="imageLightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="imageLightboxContent"
            onClick={(event) => event.stopPropagation()}
          >


           <div className="imageLightboxTopControls">
              {hasConnectedImage ? (
                <button
                  type="button"
                  className="imageLightboxToggle"
                  onClick={handleToggleConnectedImage}
                >
                  {isShowingConnectedImage ? 'Show question' : 'Show answer'}
                </button>
              ) : null}

              <button
                type="button"
                className="imageLightboxClose"
                onClick={closeLightbox}
              >
                ×
              </button>
            </div>

            <img
              src={activeLightboxImage}
              alt=""
              className="imageLightboxImg"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}