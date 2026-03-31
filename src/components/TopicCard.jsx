import { Link } from 'react-router';

export default function TopicCard({ topic }) {
  return (
    <article className="glassCard topicCard" style={{ '--topic-accent': topic.accent }}>
      <img src={topic.heroImage} alt="" className="topicCardImage" />
      <div className="topicCardBody">
        <p className="eyebrow">Topic</p>
        <h3>{topic.title}</h3>
        <p>{topic.intro}</p>
        <Link to={`/${topic.slug}`} className="primaryButton">
          Open topic
        </Link>
      </div>
    </article>
  );
}
