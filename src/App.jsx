import { Navigate, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import QuizPage from './pages/QuizPage';
import TopicLandingPage from './pages/TopicLandingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:topicSlug" element={<TopicLandingPage />} />
      <Route path="/:topicSlug/:subpageSlug" element={<QuizPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
