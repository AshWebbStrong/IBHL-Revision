import { useMemo, useState } from 'react';
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

  if (!topic) {
    return <NotFoundPage />;
  }

  const stripImages = topic.imageStripImages ?? [];

  const loopingImages = useMemo(() => {
    if (!stripImages.length) return [];
    return [...stripImages, ...stripImages];
  }, [stripImages]);

  function handleReset(routeKey) {
    const next = resetRouteProgress(routeKey);
    setProgress(next);
  }

  function handleManualComplete(routeKey) {
    const next = markRouteComplete(routeKey);
    setProgress(next);
  }

  return (
    <div className="page topicPage">
      <main className="pageShell">
        <ShellHeader compact />

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
          {stripImages.length > 0 ? (
            <div className="imageStripMarquee">
              <div className="imageStripTrack">
                {loopingImages.map((image, index) => (
                  <div className="imageStripCard" key={`${image.id}-${index}`}>
                    <img
                      src={image.src}
                      alt={image.alt || ''}
                      className="imageStripImg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}