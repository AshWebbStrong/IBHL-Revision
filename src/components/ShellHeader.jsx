import { Link, NavLink } from 'react-router';
import { siteMeta, topics } from '../data/topicData';

export default function ShellHeader({ compact = false }) {
  return (
    <header className={`shellHeader ${compact ? 'compact' : ''}`}>


      <nav className="headerNav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'headerPill homePill active' : 'headerPill homePill'
          }
        >
          Home
        </NavLink>

        {topics.map((topic) => (
          <NavLink
            key={topic.slug}
            to={`/${topic.slug}`}
            className={({ isActive }) =>
              isActive ? 'headerPill active' : 'headerPill'
            }
          >
            {topic.shortLabel}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}