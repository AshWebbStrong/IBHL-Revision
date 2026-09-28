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
