import { Link } from 'react-router';
import ShellHeader from '../components/ShellHeader';

export default function NotFoundPage() {
  return (
    <div className="page notFoundPage">
      <main className="pageShell">
        <ShellHeader compact />
        <section className="glassCard simpleStateCard">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>This route does not exist yet. Head back home and choose a topic.</p>
          <Link to="/" className="primaryButton">
            Return home
          </Link>
        </section>
      </main>
    </div>
  );
}
