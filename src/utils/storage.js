const STORAGE_KEY = 'whereToStart-progress-v1';

function isBrowser() {
  try {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  } catch {
    return false;
  }
}

export function readProgress() {
  if (!isBrowser()) return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn('Could not read saved progress.', error);
    return {};
  }
}

export function writeProgress(progress) {
  if (!isBrowser()) throw new Error('Browser storage is unavailable.');
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function saveQuestionResponse(routeKey, questionId, response) {
  const existing = readProgress();

  const next = {
    ...existing,
    [routeKey]: {
      ...(existing[routeKey] ?? {}),
      [questionId]: {
        ...response,
        assessment: null,
        savedAt: new Date().toISOString(),
      },
    },
  };

  writeProgress(next);
  return next;
}

export function saveQuestionAssessment(routeKey, questionId, assessment) {
  if (!['correct', 'partly-correct', 'revisit'].includes(assessment)) {
    throw new Error('Unknown assessment.');
  }
  const existing = readProgress();
  const response = existing[routeKey]?.[questionId];
  if (!response) throw new Error('Submit a response before assessing it.');
  const next = {
    ...existing,
    [routeKey]: {
      ...existing[routeKey],
      [questionId]: { ...response, assessment },
    },
  };
  writeProgress(next);
  return next;
}

export function resetQuestionResponse(routeKey, questionId) {
  const existing = readProgress();
  const routeResponses = { ...(existing[routeKey] ?? {}) };

  delete routeResponses[questionId];
  delete routeResponses.__meta;

  const next = {
    ...existing,
    [routeKey]: routeResponses,
  };

  writeProgress(next);
  return next;
}

export function markRouteComplete(routeKey) {
  const existing = readProgress();

  const next = {
    ...existing,
    [routeKey]: {
      ...(existing[routeKey] ?? {}),
      __meta: {
        ...((existing[routeKey] ?? {}).__meta ?? {}),
        completedAt: new Date().toISOString(),
      },
    },
  };

  writeProgress(next);
  return next;
}

export function isRouteComplete(routeKey) {
  const progress = readProgress();
  return Boolean(progress?.[routeKey]?.__meta?.completedAt);
}

export function resetRouteProgress(routeKey) {
  const existing = readProgress();
  const next = { ...existing };

  delete next[routeKey];

  writeProgress(next);
  return next;
}
