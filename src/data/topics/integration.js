export const integrationQuestions = {
  understanding: [],
  'method-selection': [],
  accuracy: [],
};

export const integrationOutros = {
  understanding: {
    eyebrow: 'Concept focus',
    title: 'Understanding complete',
    summary:
      'You have finished the Understanding section for Integration.',
    primaryTo: '/integration/method-selection',
    primaryLabel: 'Go to Method Selection',
    secondaryTo: '/integration',
    secondaryLabel: 'Back to Integration',
  },

  'method-selection': {
    eyebrow: 'Method focus',
    title: 'Method Selection complete',
    summary:
      'You have finished the Method Selection section for Integration.',
    primaryTo: '/integration/accuracy',
    primaryLabel: 'Go to Accuracy',
    secondaryTo: '/integration',
    secondaryLabel: 'Back to Integration',
  },

  accuracy: {
    eyebrow: 'Accuracy focus',
    title: 'Accuracy complete',
    summary:
      'You have finished the Accuracy section for Integration.',
    primaryTo: '/integration',
    primaryLabel: 'Return to Integration',
    secondaryTo: '/',
    secondaryLabel: 'Back to homepage',
  },
};