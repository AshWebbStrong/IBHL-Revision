import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { siteMeta, topics } from '../data/topicData';

export default function HomePage() {
  const wheelTopics = topics.slice(0, 4);
  const [activeSlug, setActiveSlug] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!activeSlug) return;

    function handlePointerDown(event) {
      if (heroRef.current && !heroRef.current.contains(event.target)) {
        setActiveSlug(null);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [activeSlug]);

  function handleHeroClick(event) {
    if (activeSlug && !event.target.closest('.wheelCabin')) {
      setActiveSlug(null);
    }
  }

  function handleCabinClick(event, slug) {
    if (activeSlug === slug) {
      return;
    }

    event.preventDefault();
    setActiveSlug(slug);
  }

  return (
    <div className="page homePage cleanHomePage">
      <main className="pageShell homeShell">
        <section className="homeHero" ref={heroRef} onClick={handleHeroClick}>
          <h1 className="homeTitle">{siteMeta.title}</h1>

          <div className="ferrisScene">
            <div className="ferrisWheel">
              <div
                className={`wheelSpin ${activeSlug ? 'hasSelection' : ''}`}
                aria-live="polite"
              >
                <div className="ferrisRim" aria-hidden="true" />
                <div className="ferrisHub" aria-hidden="true" />
                <span className="ferrisSpoke ferrisSpokeA" aria-hidden="true" />
                <span className="ferrisSpoke ferrisSpokeB" aria-hidden="true" />
                <span className="ferrisSpoke ferrisSpokeC" aria-hidden="true" />
                <span className="ferrisSpoke ferrisSpokeD" aria-hidden="true" />

                {wheelTopics.map((topic, index) => (
                  <span
                    key={`${topic.slug}-tracker`}
                    className={`cabinTracker cabin${index + 1} ${
                      activeSlug === topic.slug ? 'isVisible' : ''
                    }`}
                    aria-hidden="true"
                  />
                ))}

                {wheelTopics.map((topic, index) => (
                  <Link
                    key={topic.slug}
                    to={`/${topic.slug}`}
                    className={`wheelCabin cabin${index + 1} ${
                      activeSlug === topic.slug ? 'isSelected' : ''
                    }`}
                    onClick={(event) => handleCabinClick(event, topic.slug)}
                    aria-label={
                      activeSlug === topic.slug
                        ? `Open ${topic.slug}`
                        : `Select ${topic.slug}`
                    }
                  >
                    <span className="wheelCabinInner">
                      <span className="wheelCabinLabel">{topic.title}</span>
                      {activeSlug === topic.slug ? (
                        <span className="wheelCabinHint">click to enter</span>
                      ) : null}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}