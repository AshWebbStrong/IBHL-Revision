export const differentiationQuestions = {
  understanding: [],
  'method-selection': [],
  accuracy: [],
};

export const differentiationOutros = {
  understanding: {
    eyebrow: 'Concept focus',
    title: 'Understanding complete',
    summary:
      'You have finished the Understanding section for Differentiation.',
    primaryTo: '/differentiation/method-selection',
    primaryLabel: 'Go to Method Selection',
    secondaryTo: '/differentiation',
    secondaryLabel: 'Back to Differentiation',
  },

  'method-selection': {
    eyebrow: 'Method focus',
    title: 'Method Selection complete',
    summary:
      'You have finished the Method Selection section for Differentiation.',
    primaryTo: '/differentiation/accuracy',
    primaryLabel: 'Go to Accuracy',
    secondaryTo: '/differentiation',
    secondaryLabel: 'Back to Differentiation',
  },

  accuracy: {
    eyebrow: 'Accuracy focus',
    title: 'Accuracy complete',
    summary:
      'You have finished the Accuracy section for Differentiation.',
    primaryTo: '/differentiation',
    primaryLabel: 'Return to Differentiation',
    secondaryTo: '/',
    secondaryLabel: 'Back to homepage',
  },
};