export const exponentialsImages = {
  hero: {
    src: '/illustrations/exponentials.svg',
    showInTopicStrip: true,
  },
  u3Answer: {
    src: '/images/exponentials/exponentials-u-3-ans.PNG',
    showInTopicStrip: false,
  },
}

export const exponentialsQuestions = {
  understanding: [
  {
    id: 'exponentials-u-1',
    type: 'multiple-choice',
    title: 'Exponential or not?',
    promptText:
      'Which of the following is an exponential relationship? Wat is each part of the function named?',
    options: [
      'y = 3x + 5',
      'y = x³',
      'y = 2ˣ',
      'y = 1 ÷ x',
    ],
    correctOption: '',
    promptImage: '',
    placeholder: '',
    teacherAnswer:
      'y = 2ˣ is exponential. The 2 is the base. The x is the exponent. It is exponential because the exponent is variable.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-2',
    type: 'text',
    title: 'Growth and decay from the base',
    promptText:
      'Describe the possible behaviour of an exponential function depending on whether its base is greater than 1 or between 0 and 1.',
    promptImage: '',
    placeholder:
      'Describe what happens to the function in each case and how the graph behaves.',
    teacherAnswer:
      'Assuming a positive coefficient of the exponent: If the base is greater than 1, the function shows growth and increases from left to right. If the base is between 0 and 1, the function shows decay and decreases from left to right. In both cases the graph stays positive and approaches the horizontal asymptote y = 0 unless it has been transformed.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-3',
    type: 'drawing',
    title: 'Sketch growth and decay',
    promptText:
      'Sketch the graphs of y = 2ˣ and y = (1⁄2)ˣ on the same axes. Label any key features you think matter.\n\nPart b: Is there any other way that y = (1⁄2)ˣ can be written algebraically?',
    promptImage: '', 
    placeholder:
      'Sketch both graphs carefully and then answer part b in words or algebra.',
    teacherAnswer: '',
    teacherAnswerImage: exponentialsImages.u3Answer.src,
  },
  {
    id: 'exponentials-u-4',
    type: 'text',
    title: 'Rules of indices',
    promptText:
      'What are all the rules of indices?',
    promptImage: '',
    placeholder:
      'List the laws of indices clearly and, if you can, include any conditions or common cautions.',
    teacherAnswer:
      'The main laws of indices are:\n\
      aᵐ × aⁿ = aᵐ⁺ⁿ\n\
      aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n\
      (aᵐ)ⁿ = aᵐⁿ\n\
      (ab)ⁿ = aⁿbⁿ\n\
      (a ÷ b)ⁿ = aⁿ ÷ bⁿ\n\
      a⁰ = 1 for a ≠ 0\n\
      a⁻ⁿ = 1 ÷ aⁿ\n\
      a¹⁄ⁿ is the nth root of a\n\
      More generally, aᵐ⁄ⁿ means the nth root of aᵐ.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-5',
    type: 'multiple-choice',
    title: 'Spot the false rule',
    promptText:
      'Which of the following is not generally true?',
    options: [
      'aᵐ × aⁿ = aᵐ⁺ⁿ',
      '(aᵐ)ⁿ = aᵐⁿ',
      '(ab)ⁿ = aⁿbⁿ',
      '(a + b)ⁿ = aⁿ + bⁿ',
    ],
    correctOption: '(a + b)ⁿ = aⁿ + bⁿ',
    promptImage: '',
    placeholder: 'Choose the false statement and explain why it is false.',
    teacherAnswer:
      '',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-6',
    type: 'text',
    title: 'Describe the graph of y = 3ˣ',
    promptText:
      'Describe the key features of the graph of y = 3ˣ. You should comment on whether it increases or decreases, its intercepts, its domain and range, and any asymptote.',
    promptImage: '',
    placeholder:
      'Write a short paragraph describing the graph as clearly as possible.',
    teacherAnswer:
      'y = 3ˣ is an increasing exponential graph. It crosses the y-axis at (0, 1) and has no x-intercept. Its domain is all real numbers and its range is y > 0. It has a horizontal asymptote at y = 0.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-7',
    type: 'text',
    title: 'Interpret an exponential model',
    promptText:
      'A population is modelled by P = 1200(1.08)ᵗ. Without calculating anything, explain what the 1200, the 1.08, and the variable t represent.',
    promptImage: '',
    placeholder:
      'Interpret each part of the model in context.',
    teacherAnswer:
      '1200 is the initial population, so it is the value when t = 0. 1.08 is the growth factor, so the population increases by 8% for each unit of time. t represents time.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-8',
    type: 'text',
    title: 'What is a logarithm?',
    promptText:
      'Explain what a logarithm is and how it is connected to exponentials. You should use an example.',
    promptImage: '',
    placeholder:
      'Explain the meaning of a logarithm and its relationship to exponential functions.',
    teacherAnswer:
      'A logarithm tells you what power a base must be raised to in order to produce a given value. For example, log₂(8) = 3 because 2³ = 8. Logarithms and exponentials are inverse functions, so a logarithm undoes an exponential and recovers the exponent.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-10',
    type: 'multiple-choice',
    title: 'Rewrite between logarithmic and exponential form',
    promptText:
      'Which exponential statement is equivalent to log₂(16) = 4?',
    options: [
      '2⁴ = 16',
      '4² = 16',
      '2¹⁶ = 4',
      '16² = 4',
    ],
    correctOption: '2⁴ = 16',
    promptImage: '',
    placeholder:
      'Choose the correct option and explain the meaning of the logarithm.',
    teacherAnswer:
      '',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-11',
    type: 'text',
    title: 'Why are logarithms only defined for positive inputs?',
    promptText:
      'Why is logₐ(x) only defined when x > 0? Explain this using the inverse relationship with exponentials.',
    promptImage: '',
    placeholder:
      'Use the connection between logarithms and exponentials to justify the restriction.',
    teacherAnswer:
      'A logarithm is the inverse of an exponential function. For a valid base a, the expression aʸ is always positive for all real y. Since logₐ(x) asks what exponent gives x, there is no real exponent that makes aʸ equal to 0 or a negative number. That is why x must be positive.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-u-12',
    type: 'drawing',
    title: 'Sketch inverse functions',
    promptText:
      'Sketch y = 2ˣ, y = log₂(x), and the line y = x on the same axes. What does the picture show about the relationship between the two functions?',
    promptImage: '', // need picture of blank axes if you want one
    placeholder:
      'Sketch all three carefully, then describe the relationship you can see.',
    teacherAnswer:
      'The graphs of y = 2ˣ and y = log₂(x) are reflections of each other in the line y = x. This shows that they are inverse functions. For example, (0, 1) on y = 2ˣ corresponds to (1, 0) on y = log₂(x).',
    teacherAnswerImage: '', // need model sketch if you want one
  },
  {
    id: 'exponentials-u-13',
    type: 'text',
    title: 'Laws of logarithms',
    promptText:
      'What are all the laws of logarithms?',
    promptImage: '',
    placeholder:
      'List the main logarithm laws clearly and state any restrictions that matter.',
    teacherAnswer:
      'The main laws of logarithms are: logₐ(xy) = logₐ(x) + logₐ(y), logₐ(x ÷ y) = logₐ(x) − logₐ(y), and logₐ(xᵏ) = k logₐ(x). Also, logₐ(1) = 0 and logₐ(a) = 1. The change of base formula is logₐ(x) = log(x) ÷ log(a), or equivalently logₐ(x) = ln(x) ÷ ln(a). These laws only apply when the logarithms are defined, so the inputs must be positive and the base must be positive and not equal to 1.',
    teacherAnswerImage: '',
  },
],
};

export const exponentialsOutros = {
  understanding: {
    eyebrow: 'Concepts secured',
    title: 'Understanding complete',
    summary:
      'You have finished the conceptual section for Exponentials and Logarithms. Before moving on, make sure you can explain exponential growth and decay clearly, recognise the inverse relationship between exponentials and logarithms, and connect algebra to graph behaviour.',
    recapTitle: 'Before moving on, you should be able to...',
    recapItems: [
      'describe exponential growth, decay, and long-term behaviour in words',
      'recognise when a logarithm is acting as the inverse of an exponential process',
      'connect equations, graphs, and context instead of treating them separately',
    ],
    tipTitle: 'Teacher tip',
    tipText:
      'If an explanation sounds procedural but not meaningful, pause and ask what each quantity actually represents.',
    primaryTo: '/exponentials-and-logarithms/method-selection',
    primaryLabel: 'Go to Method Selection',
    secondaryTo: '/exponentials-and-logarithms',
    secondaryLabel: 'Back to Exponentials',
  },

  'method-selection': {
    eyebrow: 'Method habits built',
    title: 'Method Selection complete',
    summary:
      'You have practised choosing a route before calculating. In exponentials, strong students first decide whether the equation can be rewritten with a common base, whether the exponential should be isolated, or whether a logarithm is needed because the variable is in the exponent.',
    recapTitle: 'Good habits to carry forward',
    recapItems: [
      'look for structural clues before writing any algebra',
      'justify why a method fits instead of just naming it',
      'notice when logs are the natural next step because the unknown is in the exponent',
    ],
    tipTitle: 'Teacher tip',
    tipText:
      'Train yourself to say one sentence about why your chosen method makes sense before you start solving.',
    primaryTo: '/exponentials-and-logarithms/accuracy',
    primaryLabel: 'Go to Accuracy',
    secondaryTo: '/exponentials-and-logarithms',
    secondaryLabel: 'Back to Exponentials',
  },

  accuracy: {
    eyebrow: 'Accuracy habits complete',
    title: 'Accuracy complete',
    summary:
      'You have finished the Exponentials and Logarithms accuracy section. This is where clean notation, correct substitution, careful calculator use, and a precise final statement matter most.',
    recapTitle: 'Final accuracy checklist',
    recapItems: [
      'check that each algebraic step follows clearly from the last',
      'scan for sign errors, bracket mistakes, and calculator slips',
      'make sure the final answer actually responds to the question asked',
    ],
    tipTitle: 'Teacher tip',
    tipText:
      'A correct method can still lose marks if the final statement is vague, badly rounded, or missing context.',
    primaryTo: '/exponentials-and-logarithms',
    primaryLabel: 'Return to Exponentials',
    secondaryTo: '/',
    secondaryLabel: 'Back to homepage',
  },
};

export const exponentialsTopicStripImages = Object.entries(exponentialsImages)
  .filter(([, image]) => image.showInTopicStrip)
  .map(([key, image]) => ({
    key,
    src: image.src,
  }))