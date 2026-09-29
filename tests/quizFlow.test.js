import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import {
  assessmentCounts,
  responseStatus,
  countAnswered,
  firstUnansweredIndex,
  resumeIndex,
  retryQuestions,
} from '../src/utils/quizProgress.js';
import {
  isRouteComplete,
  markRouteComplete,
  readProgress,
  resetQuestionResponse,
  saveQuestionAssessment,
  saveQuestionResponse,
} from '../src/utils/storage.js';

afterEach(() => { delete globalThis.window; });

function mockStorage({ failWrites = false } = {}) {
  const values = new Map();
  globalThis.window = {
    localStorage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => {
        if (failWrites) throw new Error('Quota exceeded');
        values.set(key, value);
      },
    },
  };
}

const questions = [{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }];

test('reflection counts distinguish unanswered and unreflected and ignore stale questions', () => {
  const current = [...questions, { id: 'q4' }, { id: 'q5' }];
  const responses = {
    q1: { assessment: 'correct' },
    q2: { assessment: 'partly-correct' },
    q3: { assessment: 'revisit' },
    q4: { type: 'paper' },
    old: { assessment: 'correct' },
    __meta: { completedAt: 123 },
  };
  assert.deepEqual(assessmentCounts(current, responses), {
    correct: 1, 'partly-correct': 1, revisit: 1, unreflected: 1,
  });
  assert.equal(responseStatus(undefined), 'unanswered');
  assert.equal(responseStatus({}), 'unreflected');
  assert.equal(responseStatus({ assessment: 'unknown' }), 'unreflected');
  delete responses.q1.assessment;
  assert.equal(assessmentCounts(current, responses).unreflected, 2);
});

test('resume uses the first unanswered question, even with a gap in old progress', () => {
  assert.equal(resumeIndex(questions, {}), 0);
  assert.equal(resumeIndex(questions, { q1: { value: 'a' } }), 2);
  assert.equal(resumeIndex(questions, { q1: { value: 'a' }, q3: { value: 'c' } }), 2);
  assert.equal(firstUnansweredIndex(questions, { q1: {}, q3: {} }), 1);
  assert.equal(countAnswered(questions, { q1: {}, q3: {} }), 2);
  assert.equal(resumeIndex(questions, { q1: {}, q2: {}, q3: {} }), 4);
});

test('paper answers and assessments persist, and editing clears the old assessment', () => {
  mockStorage();
  const route = 'exponentials-and-logarithms/understanding';
  saveQuestionResponse(route, 'q1', { type: 'paper', value: '', displayValue: 'Completed on paper' });
  saveQuestionAssessment(route, 'q1', 'revisit');
  assert.deepEqual(retryQuestions(questions, readProgress()[route]).map((question) => question.id), ['q1']);
  saveQuestionResponse(route, 'q1', { type: 'text', value: 'Improved answer' });
  assert.equal(readProgress()[route].q1.value, 'Improved answer');
  assert.equal(readProgress()[route].q1.assessment, null);
});

test('removing an answer removes stale completion', () => {
  mockStorage();
  saveQuestionResponse('route', 'q1', { type: 'text', value: 'answer' });
  markRouteComplete('route');
  resetQuestionResponse('route', 'q1');
  assert.equal(isRouteComplete('route'), false);
});

test('failed storage writes throw and do not claim an answer was saved', () => {
  mockStorage({ failWrites: true });
  assert.throws(() => saveQuestionResponse('route', 'q1', { type: 'text', value: 'answer' }), /Quota exceeded/);
  assert.deepEqual(readProgress(), {});
});

test('unavailable browser storage also rejects saves', () => {
  globalThis.window = {
    get localStorage() { throw new Error('Storage blocked'); },
  };
  assert.deepEqual(readProgress(), {});
  assert.throws(() => saveQuestionResponse('route', 'q1', { type: 'text', value: 'answer' }), /unavailable/);
});
