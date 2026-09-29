export const assessmentLabels = {
  correct: 'Correct',
  'partly-correct': 'Partially correct',
  revisit: 'Revisit',
  unreflected: 'Unreflected',
};

export function responseStatus(response) {
  if (!response) return 'unanswered';
  return ['correct', 'partly-correct', 'revisit'].includes(response.assessment)
    ? response.assessment : 'unreflected';
}

export function assessmentCounts(questions, responses) {
  const counts = { correct: 0, 'partly-correct': 0, revisit: 0, unreflected: 0 };
  for (const question of questions) {
    const status = responseStatus(responses[question.id]);
    if (status !== 'unanswered') counts[status] += 1;
  }
  return counts;
}

export function firstUnansweredIndex(questions, responses) {
  return questions.findIndex((question) => !responses[question.id]);
}

export function resumeIndex(questions, responses) {
  const firstMissing = firstUnansweredIndex(questions, responses);
  if (firstMissing === -1) return questions.length ? questions.length + 1 : 0;
  const hasStarted = questions.some((question) => Boolean(responses[question.id]));
  return hasStarted ? firstMissing + 1 : 0;
}

export function countAnswered(questions, responses) {
  return questions.filter((question) => Boolean(responses[question.id])).length;
}

export function retryQuestions(questions, responses) {
  return questions.filter((question) =>
    ['partly-correct', 'revisit'].includes(responses[question.id]?.assessment),
  );
}
