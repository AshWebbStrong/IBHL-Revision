export const exponentialsImages = {
  u3Answer: {
    src: '/images/exponentials/exponentials-u-3-ans.PNG',
    showInTopicStrip: false,
  },
    u13Answer: {
    src: '/images/exponentials/exponentials-u-13-ans.PNG',
    showInTopicStrip: false,
  },
    u14Answer: {
    src: '/images/exponentials/exponentials-u-14-ans.PNG',
    showInTopicStrip: false,
  },
      a8Answer: {
    src: '/images/exponentials/exponentials-a-8-ans.PNG',
    showInTopicStrip: false,
  },
      a11Answer: {
    src: '/images/exponentials/exponentials-a-11-ans.PNG',
    showInTopicStrip: false,
  },
  ExamQ1: {
    src: '/images/exponentials/exponentials-e-1-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-1-a.PNG'],
  },
    ExamQ2: {
    src: '/images/exponentials/exponentials-e-2-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-2-a.PNG'],
  },
    ExamQ3: {
    src: '/images/exponentials/exponentials-e-3-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-3-a.PNG'],
  },
    ExamQ4: {
    src: '/images/exponentials/exponentials-e-4-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-4-a.PNG'],
  },
    ExamQ5: {
    src: '/images/exponentials/exponentials-e-5-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-5-a.PNG'],
  },
  ExamQ6: {
    src: '/images/exponentials/exponentials-e-6-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-6-a.PNG'],
  },
    ExamQ7: {
    src: '/images/exponentials/exponentials-e-7-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/exponentials/exponentials-e-7-a.PNG'],
  },
};

export const exponentialsQuestions = {
  understanding: [
    {
      id: 'exponentials-u-1',
      type: 'multiple-choice',
      title: 'Exponential or not?',
      promptText:
        'Which of the following is an exponential relationship? What is each part of the function named?',
      options: [
        '$y = 3x + 5$',
        '$y = x^3$',
        '$y = 2^x$',
        '$y = \\frac{1}{x}$',
      ],
      correctOption: '$y = 2^x$',
      promptImage: '',
      placeholder: '',
      teacherAnswer:
        'The $2$ is the base. The $x$ is the exponent. It is exponential because the exponent is variable.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-2',
      type: 'text',
      title: 'How the base affects behaviour',
      promptText:
        'For exponential functions in the form $f(x) = a^x$, where $a > 0$ and $a \\ne 1$, how does the base affect the behaviour of the function?',
      promptImage: '',
      placeholder:
        'Describe how different values of $a$ change the behaviour of the graph.',
      teacherAnswer:
        'For $f(x) = a^x$, the value of the base $a$ determines the overall behaviour of the function. If $a > 1$, the function represents exponential growth, so the graph increases from left to right. If $0 < a < 1$, the function represents exponential decay, so the graph decreases from left to right. In both cases, the graph passes through $(0, 1)$, has domain $\\mathbb{R}$, range $(0, \\infty)$, and horizontal asymptote $y = 0$. The larger the value of $a$ above $1$, the steeper the growth. The closer $a$ is to $0$, the steeper the decay.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-3',
      type: 'drawing',
      title: 'Sketch growth and decay',
      promptText:
        'Sketch the graphs of $y = 2^x$ and $y = \\left(\\frac{1}{2}\\right)^x$ on the same axes. Label any key features you think matter.\n\nPart b: Is there any other way that $y = \\left(\\frac{1}{2}\\right)^x$ can be written algebraically?',
      promptImage: '',
      placeholder:
        'Sketch both graphs carefully and then answer part b in words or algebra.',
      teacherAnswer:
        '$\\left(\\frac{1}{2}\\right)^x$ can also be written as $2^{-x}$.',
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
      teacherAnswer: `The main laws of indices are:
$a^m \\times a^n = a^{m+n}$
$a^m \\div a^n = a^{m-n}$
$(a^m)^n = a^{mn}$
$(ab)^n = a^n b^n$
$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$
$a^0 = 1$ for $a \\ne 0$
$a^{-n} = \\frac{1}{a^n}$
$a^{1/n} = \\sqrt[n]{a}$
More generally, $a^{m/n} = \\sqrt[n]{a^m}$.
In general, $(a+b)^n \\ne a^n + b^n$.`,
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-5',
      type: 'multiple-choice',
      title: 'Spot the false rule',
      promptText:
        'Which of the following is not generally true?',
      options: [
        '$a^m \\times a^n = a^{m+n}$',
        '$(a^m)^n = a^{mn}$',
        '$(ab)^n = a^n b^n$',
        '$(a+b)^n = a^n + b^n$',
      ],
      correctOption: '$(a+b)^n = a^n + b^n$',
      promptImage: '',
      placeholder: 'Choose the false statement and explain why it is false.',
      teacherAnswer:
        'In general, $(a+b)^n \\ne a^n + b^n$.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-6',
      type: 'text',
      title: 'Describe the graph of $y = 3^{-x}$',
      promptText:
        'Describe the key features of the graph of $y = 3^{-x}$. You should comment on whether it increases or decreases, its intercepts, its domain and range, and any asymptote.',
      promptImage: '',
      placeholder:
        'Write a short paragraph describing the graph as clearly as possible.',
      teacherAnswer:
        '$y = 3^{-x}$ is a decreasing exponential graph. It crosses the $y$-axis at $(0, 1)$ and has no $x$-intercept. Its domain is all real numbers and its range is $y > 0$. It has a horizontal asymptote at $y = 0$. It can also be written as $y = \\left(\\frac{1}{3}\\right)^x$.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-7',
      type: 'text',
      title: 'What does $e$ represent?',
      promptText:
        'What does $e$ represent in mathematics, and what is special about the function $e^x$?',
      promptImage: '',
      placeholder:
        'Explain what $e$ is and why the function $e^x$ is important.',
      teacherAnswer:
        '$e$ is Euler’s number, an irrational constant approximately equal to $2.71828$. It is the base of natural logarithms and appears naturally in continuous growth and decay. The function $e^x$ is special because it is its own derivative, so $\\frac{d}{dx}(e^x) = e^x$.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-8',
      type: 'text',
      title: 'Interpret an exponential model',
      promptText:
        'A population is modelled by $P = 1200(1.08)^t$. Without calculating anything, explain what the $1200$, the $1.08$, and the variable $t$ represent.',
      promptImage: '',
      placeholder:
        'Interpret each part of the model in context.',
      teacherAnswer:
        '$1200$ is the initial population, so it is the value when $t = 0$. $1.08$ is the growth factor, so the population increases by $8\\%$ for each unit of time. $t$ represents time.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-9',
      type: 'text',
      title: 'What is a logarithm?',
      promptText:
        'Explain what a logarithm is and how it is connected to exponentials. You should use an example.',
      promptImage: '',
      placeholder:
        'Explain the meaning of a logarithm and its relationship to exponential functions.',
      teacherAnswer:
        'A logarithm tells you what power a base must be raised to in order to produce a given value. For example, $\\log_2(8) = 3$ because $2^3 = 8$. Logarithms and exponentials are inverse functions, so a logarithm undoes an exponential and recovers the exponent.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-10',
      type: 'multiple-choice',
      title: 'Rewrite between logarithmic and exponential form',
      promptText:
        'Which exponential statement is equivalent to $\\log_2(16) = 4$?',
      options: [
        '$2^4 = 16$',
        '$4^2 = 16$',
        '$2^{16} = 4$',
        '$16^2 = 4$',
      ],
      correctOption: '$2^4 = 16$',
      promptImage: '',
      placeholder:
        'Choose the correct option and explain the meaning of the logarithm.',
      teacherAnswer:
        '',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-11',
      type: 'multiple-choice',
      title: 'Evaluate $\\log_2(2)$',
      promptText:
        'What is the value of $\\log_2(2)$ and why?',
      options: [
        '$0$',
        '$1$',
        '$2$',
        '$4$',
      ],
      correctOption: '$1$',
      promptImage: '',
      placeholder:
        'Choose the correct value.',
      teacherAnswer:
        '$2^1 = 2$',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-12',
      type: 'text',
      title: 'Why are logarithms only defined for positive inputs?',
      promptText:
        'Why is $\\log_a(x)$ only defined when $x > 0$? Explain this using the inverse relationship with exponentials.',
      promptImage: '',
      placeholder:
        'Use the connection between logarithms and exponentials to justify the restriction.',
      teacherAnswer:
        'A logarithm is the inverse of an exponential function. For a valid base $a$, the expression $a^y$ is always positive for all real $y$. Since $\\log_a(x)$ asks what exponent gives $x$, there is no real exponent that makes $a^y$ equal to $0$ or a negative number. That is why $x$ must be positive.',
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-13',
      type: 'drawing',
      title: 'What does $\\ln(x)$ mean?',
      promptText:
        'What does $\\ln(x)$ mean? Sketch the function $y = \\ln(x)$.',
      promptImage: '',
      placeholder:
        'Explain the meaning of $\\ln(x)$ and sketch the graph carefully.',
      teacherAnswer:
        '$\\ln(x)$ means $\\log_e(x)$',
      teacherAnswerImage: exponentialsImages.u13Answer.src,
    },
    {
      id: 'exponentials-u-14',
      type: 'drawing',
      title: 'Sketch functions',
      promptText:
        'Sketch $y = 2^x$, $y = \\log_2(x)$, and the line $y = x$ on the same axes. What does the picture show about the relationship between the two functions?',
      promptImage: '',
      placeholder:
        'Sketch all three carefully, then describe the relationship you can see.',
      teacherAnswer: 'They are inverse functions',
      teacherAnswerImage: exponentialsImages.u14Answer.src,
    },
    {
      id: 'exponentials-u-15',
      type: 'text',
      title: 'Laws of logarithms',
      promptText:
        'What are all the laws of logarithms?',
      promptImage: '',
      placeholder:
        'List the main logarithm laws clearly and state any restrictions that matter.',
      teacherAnswer: `The main laws of logarithms are:
      $\\log_a(xy) = \\log_a(x) + \\log_a(y)$
      $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$
      $\\log_a(x^k) = k\\log_a(x)$
      Also, $\\log_a(1) = 0$ and $\\log_a(a) = 1$.
      The change of base formula is $\\log_a(x) = \\frac{\\log(x)}{\\log(a)} = \\frac{\\ln(x)}{\\ln(a)}$.
      These laws only apply when the logarithms are defined, so the inputs must be positive and the base must be positive and not equal to $1$.`,
      teacherAnswerImage: '',
    },
    {
      id: 'exponentials-u-16',
      type: 'multiple-choice',
      title: 'Evaluate $\\log_8(1)$',
      promptText:
        'What is the value of $\\log_8(1)$ and why?',
      options: [
        '$0$',
        '$1$',
        '$8$',
        '$\\frac{1}{8}$',
      ],
      correctOption: '$0$',
      promptImage: '',
      placeholder:
        'Choose the correct value.',
      teacherAnswer:
        '$8^0 = 1$',
      teacherAnswerImage: '',
    },
  ],

'method-selection': [
  {
    id: 'exponentials-m-1',
    type: 'multiple-choice',
    title: 'Solving an exponential equation',
    promptText:
      'Consider the equation $2^{x+1} = 16$. What would be the best way to start this question?',
    options: [
      'Take $\\ln$ of both sides',
      'Rewrite $16$ as a power of $2$',
      'Expand $2^{x+1}$ into $2x+1$',
      'Move the $16$ to the left and factorise',
    ],
    correctOption: 'Rewrite $16$ as a power of $2$',
    promptImage: '',
    placeholder: 'Choose the best starting method.',
    teacherAnswer:
      'Both sides can be written using base $2$, so the best start is to rewrite $16$ as a power of $2$ and then compare exponents.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-2',
    type: 'text',
    title: 'Solving an exponential equation',
    promptText:
      'Consider the equation $9^x = 27^{x-1}$. Describe the method of solving this question. Do not solve it.',
    promptImage: '',
    placeholder:
      'Describe the best strategy step by step, but do not carry out the full solution.',
    teacherAnswer:
      'Rewrite both sides in terms of the same base, namely base $3$. Then use index laws to simplify each side and equate the exponents.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-3',
    type: 'multiple-choice',
    title: 'Solving an exponential equation',
    promptText:
      'Consider the equation $5^{2x} - 6\\times 5^x + 5 = 0$. What would be the best way to start this question?',
    options: [
      'Take logs of every term',
      'Rewrite everything in base $10$',
      'Let $u = 5^x$ so the equation becomes quadratic',
      'Subtract $5$ and divide by $x$',
    ],
    correctOption: 'Let $u = 5^x$ so the equation becomes quadratic',
    promptImage: '',
    placeholder: 'Choose the best starting method.',
    teacherAnswer:
      'The equation contains both $5^{2x}$ and $5^x$, so it is best treated as a quadratic in $5^x$ by using a substitution such as $u = 5^x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-4',
    type: 'text',
    title: 'Solving an exponential equation',
    promptText:
      'Consider the equation $7^x = 20$. Describe the method of solving this question. Do not solve it.',
    promptImage: '',
    placeholder:
      'Explain how you would solve it and why that method is appropriate.',
    teacherAnswer:
      'Since $20$ is not a convenient power of $7$, rewriting in a common base is not practical. The best method is to take logarithms of both sides and then use log laws to bring the exponent down so that $x$ can be isolated.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-5',
    type: 'multiple-choice',
    title: 'Solving a logarithmic equation',
    promptText:
      'Consider the equation $\\ln(x-1) + \\ln(x+3) = 2$. What would be the best way to start this question?',
    options: [
      'Expand each logarithm separately',
      'Combine the logarithms using a log law',
      'Differentiate both sides',
      'Move the $2$ to the left and factorise',
    ],
    correctOption: 'Combine the logarithms using a log law',
    promptImage: '',
    placeholder: 'Choose the best starting method.',
    teacherAnswer:
      'The best start is to combine the two logarithms into a single logarithm using $\\ln a + \\ln b = \\ln(ab)$. That creates one log expression that can then be converted into exponential form.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-6',
    type: 'text',
    title: 'Solving a logarithmic equation',
    promptText:
      'Consider the equation $\\log_3(x) + \\log_3(x-6) = 2$. Describe the method of solving this question. Do not solve it.',
    promptImage: '',
    placeholder:
      'Focus on the strategy, including any restrictions you would need to remember.',
    teacherAnswer:
      'First note the domain restrictions, since both logarithms must be defined. Then combine the logarithms into one using the product law, convert the logarithmic equation into exponential form, solve the resulting algebraic equation, and finally check that any solutions satisfy the original restrictions.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-7',
    type: 'text',
    title: 'Using logarithm laws',
    promptText:
      'Given that $\\log_3(2) = x$ and $\\log_3(5) = y$, express each of the following in terms of $x$ and $y$.\n\n(a) $\\log_3(80)$\n(b) $\\log_3\\left(\\frac{25}{4}\\right)$\n\nDescribe the algebraic method you would use for each part.',
    promptImage: '',
    placeholder:
      'Refer to the relevant laws of logarithms and show how each expression would be broken down.',
    teacherAnswer:
    'Rewrite $\\log_3(80)$ as $\\log_3(2^4 \\times 5)$, to match the question, then split those into two separate logarithms before bringing out the power to the front\n\n Rewrite $\\log_3\\left(\\frac{25}{4}\\right)$ as $\\log_3(5^2 \\div 2^2)$ then split etc.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-8',
    type: 'text',
    title: 'Using the change of base formula',
    promptText:
      'Consider the equation $\\log_3(x) = \\log_9(27)$. Describe the method of solving this question. Do not solve it.',
    promptImage: '',
    placeholder:
      'Explain how you would rewrite the logarithm and then continue from there, but do not solve the equation.',
    teacherAnswer:
      'Rewrite $\\log_9(27)$ using the change of base formula, or by rewriting both numbers as powers of $3$. This gives a simpler value on the right-hand side. Then convert the logarithmic equation into exponential form, or equate it to the simplified value and solve for $x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-9',
    type: 'multiple-choice',
    title: 'Exponential modelling',
    promptText:
      'A population is modelled by $P = 12000(1.06)^t$, where $t$ is measured in years. What would be the best first step if you want to find the time taken for the population to reach $20000$?',
    options: [
      'Substitute $P = 20000$ into the model',
      'Differentiate the model with respect to $t$',
      'Expand $(1.06)^t$ using the binomial theorem',
      'Replace $1.06$ with $6$',
    ],
    correctOption: 'Substitute $P = 20000$ into the model',
    promptImage: '',
    placeholder: 'Choose the best starting method.',
    teacherAnswer:
      'To find when the population reaches $20000$, begin by setting $P = 20000$. This creates an exponential equation in $t$, which can then be solved by isolating the exponential term and using logarithms.',
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-m-10',
    type: 'text',
    title: 'Solving a logarithmic equation',
    promptText:
      'Consider the equation $2\\log_2(x) = \\log_2(5x-4)$. Describe the method of solving this question. Do not solve it.',
    promptImage: '',
    placeholder:
      'Describe how the log laws help you set the equation up.',
    teacherAnswer:
      'Use the power law first to rewrite $2\\log_2(x)$ as $\\log_2(x^2)$. Then, since both sides are logarithms with the same base, equate the arguments and solve the resulting algebraic equation, checking that any solutions keep the logarithms defined.',
    teacherAnswerImage: '',
  },
],
accuracy: [
  {
    id: 'exponentials-a-1',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving an exponential equation',
    promptText:
      'Solve the equation $2^{3x-1} = 16$ exactly.',
    promptImage: '',
    placeholder:
      'Show clear working line by line. Use the canvas if a sketch helps you think.',
    teacherAnswer: `$2^{3x-1} = 16$
$2^{3x-1} = 2^4$
$3x - 1 = 4$
$3x = 5$
$x = \\frac{5}{3}$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-2',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving an exponential equation',
    promptText:
      'Solve the equation $4^{x+1} = 32$ exactly.',
    promptImage: '',
    placeholder:
      'Write each step carefully using a common base.',
    teacherAnswer: `$4^{x+1} = 32$
$2^{2x+2} = 2^5$
$2x + 2 = 5$
$2x = 3$
$x = \\frac{3}{2}$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-3',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving an exponential equation',
    promptText:
      'Solve the equation $9^{x-1} = 27^{2x+1}$ exactly.',
    promptImage: '',
    placeholder:
      'A careful common-base rewrite is the key here.',
    teacherAnswer: `$9^{x-1} = 27^{2x+1}$
$3^{2x-2} = 3^{6x+3}$
$2x - 2 = 6x + 3$
-5 = 4x
$x = -\\frac{5}{4}$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-4',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving an exponential equation',
    promptText:
      'Solve the equation $5^{2x} - 30 \\times 5^x + 125 = 0$.',
    promptImage: '',
    placeholder:
      'Keep the substitution tidy and finish with exact values.',
    teacherAnswer: `Let $u = 5^x$

$u^2 - 30u + 125 = 0$
$(u - 5)(u - 25) = 0$
$u = 5$ or $u = 25$

$5^x = 5$
$x = 1$

$5^x = 25$
$x = 2$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-5',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving a logarithmic equation',
    promptText:
      'Solve the equation $\\log_3(5x+4) = 2$ exactly.',
    promptImage: '',
    placeholder:
      'Convert the logarithmic equation into exponential form.',
    teacherAnswer: `$\\log_3(5x+4) = 2$
$5x + 4 = 3^2$
$5x + 4 = 9$
$5x = 5$
$x = 1$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-6',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving a logarithmic equation',
    promptText:
      'Solve the equation $\\log_4(x-1) + \\log_4(x+3) = 2$.',
    promptImage: '',
    placeholder:
      'Remember to check the domain.',
    teacherAnswer: `$x - 1 > 0$
$x > 1$

$\\log_4(x-1) + \\log_4(x+3) = 2$
$\\log_4((x-1)(x+3)) = 2$
$(x-1)(x+3) = 4^2$
$x^2 + 2x - 3 = 16$
$x^2 + 2x - 19 = 0$
$x = \\frac{-2 \\pm \\sqrt{80}}{2}$
$x = -1 \\pm 2\\sqrt{5}$

$x = -1 + 2\\sqrt{5}$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-7',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Using logarithm laws',
    promptText:
      'Given that $\\log_2 3 = a$ and $\\log_2 5 = b$, express each of the following in terms of $a$ and $b$.\n\n(a) $\\log_2 90$\n(b) $\\log_2\\left(\\frac{45}{8}\\right)$\n(c) $\\log_5 12$',
    promptImage: '',
    placeholder:
      'Keep each part separate and write the algebra line by line.',
    teacherAnswer: `(a)
$\\log_2 90 = \\log_2(2 \\times 3^2 \\times 5)$
$\\log_2 90 = \\log_2 2 + \\log_2 3^2 + \\log_2 5$
$\\log_2 90 = 1 + 2a + b$

(b)
$\\log_2\\left(\\frac{45}{8}\\right) = \\log_2 45 - \\log_2 8$
$\\log_2\\left(\\frac{45}{8}\\right) = \\log_2(3^2 \\times 5) - 3$
$\\log_2\\left(\\frac{45}{8}\\right) = 2a + b - 3$

(c)
$\\log_5 12 = \\frac{\\log_2 12}{\\log_2 5}$
$\\log_5 12 = \\frac{\\log_2(4 \\times 3)}{b}$
$\\log_5 12 = \\frac{2 + a}{b}$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-8',
    type: 'text-and-drawing',
    calculator: true,
    title: 'Sketching an exponential function',
    promptText:
      'Consider the function $y = f(x)$ with $f(x) = 9e^{0.2x} + 4$.\n\n(a) Write down the domain of $f$.\n(b) Find the $y$-intercept.\n(c) Find $f(5)$ correct to 3 significant figures.\n(d) Find the first integer value of $x$ for which $y$ exceeds $40$.\n(e) Find the value of $f(-20)$ and deduce the equation of the horizontal asymptote.\n(f) Write down the range of $f$.\n(g) Sketch the graph, clearly marking the $y$-intercept and horizontal asymptote.',
    promptImage: '',
    placeholder:
      'This is a calculator question. Keep the graph features consistent with your values.',
    teacherAnswer: `(a)
Domain: $\\mathbb{R}$

(b)
$f(0) = 9e^0 + 4$
$f(0) = 13$

(c)
$f(5) = 9e^{1} + 4$
$f(5) \\approx 28.5$

(d)
$9e^{0.2x} + 4 > 40$
$9e^{0.2x} > 36$
$e^{0.2x} > 4$
$0.2x > \\ln 4$
$x > \\frac{\\ln 4}{0.2}$
$x > 6.93$

First integer value: $7$

(e)
$f(-20) = 9e^{-4} + 4$
$f(-20) \\approx 4.16$

Horizontal asymptote: $y = 4$

(f)
Range: $y > 4$

(g)
Increasing exponential curve
$y$-intercept at $(0,13)$
Horizontal asymptote $y = 4$`,
    teacherAnswerImage: exponentialsImages.a8Answer.src,
  },
  {
    id: 'exponentials-a-9',
    type: 'text-and-drawing',
    calculator: true,
    title: 'Exponential modelling',
    promptText:
      'The mass $M$ grams of a substance is modelled by $M = 240e^{-0.12t}$, where $t$ is measured in hours.\n\n(a) Find the mass after $6$ hours.\n(b) Find the time taken for the mass to reduce to $60$ grams.\n(c) Find the half-life of the substance.',
    promptImage: '',
    placeholder:
      'Set up each part carefully and round appropriately.',
    teacherAnswer: `(a)
$M = 240e^{-0.12t}$
$M = 240e^{-0.72}$
$M \\approx 116.8$

(b)
$240e^{-0.12t} = 60$
$e^{-0.12t} = \\frac{1}{4}$
$-0.12t = \\ln\\left(\\frac{1}{4}\\right)$
$t = \\frac{\\ln 4}{0.12}$
$t \\approx 11.55$

(c)
$240e^{-0.12t} = 120$
$e^{-0.12t} = \\frac{1}{2}$
$-0.12t = \\ln\\left(\\frac{1}{2}\\right)$
$t = \\frac{\\ln 2}{0.12}$
$t \\approx 5.78$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-10',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving a logarithmic equation',
    promptText:
      'Solve the equation $\\log_2(x-1) + \\log_4(x-1) = 3$.',
    promptImage: '',
    placeholder:
      'Rewrite everything in the same logarithmic base.',
    teacherAnswer: `$x - 1 > 0$
$x > 1$

$\\log_4(x-1) = \\frac{\\log_2(x-1)}{\\log_2 4}$
$\\log_4(x-1) = \\frac{1}{2}\\log_2(x-1)$

$\\log_2(x-1) + \\frac{1}{2}\\log_2(x-1) = 3$
$\\frac{3}{2}\\log_2(x-1) = 3$
$\\log_2(x-1) = 2$
$x - 1 = 4$
$x = 5$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-11',
    type: 'text-and-drawing',
    calculator: true,
    title: 'Sketching an exponential graph',
    promptText:
      'Sketch the graph of $y = e^{x+3} - 1$, clearly marking any intercepts and the horizontal asymptote.',
    promptImage: '',
    placeholder:
      'This is a calculator question. Mark the key features clearly.',
    teacherAnswer: `Horizontal asymptote: $y = -1$

$y$-intercept:
$y = e^{0+3} - 1$
$y = e^3 - 1$


$x$-intercept:
$0 = e^{x+3} - 1$
$e^{x+3} = 1$
$x + 3 = \\ln 1$
$x + 3 = 0$
$x = -3$
`,
    teacherAnswerImage: exponentialsImages.a11Answer.src,
  },
  {
    id: 'exponentials-a-12',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving a logarithmic equation',
    promptText:
      'Solve the equation $(\\log_2 x)^2 - \\log_2 x - 12 = 0$.',
    promptImage: '',
    placeholder:
      'A substitution is useful here. Keep the final answers in terms of $x$.',
    teacherAnswer: `Let $u = \\log_2 x$

$u^2 - u - 12 = 0$
$(u - 4)(u + 3) = 0$
$u = 4$ or $u = -3$

$\\log_2 x = 4$
$x = 16$

$\\log_2 x = -3$
$x = \\frac{1}{8}$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-13',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving a mixed equation',
    promptText:
      'Solve the equation $\\ln(e^x + 2e^{-x}) = \\ln 3$ exactly.',
    promptImage: '',
    placeholder:
      'Simplify the logarithms first, then solve carefully.',
    teacherAnswer: `$\\ln(e^x + 2e^{-x}) = \\ln 3$
$e^x + 2e^{-x} = 3$
$e^{2x} + 2 = 3e^x$
$e^{2x} - 3e^x + 2 = 0$

Let $u = e^x$

$u^2 - 3u + 2 = 0$
$(u - 1)(u - 2) = 0$
$u = 1$ or $u = 2$

$e^x = 1$
$x = 0$

$e^x = 2$
$x = \\ln 2$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-14',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Solving an exponential equation',
    promptText:
      'Solve the equation $2^{x+1} + 2^{1-x} = 5$ exactly.',
    promptImage: '',
    placeholder:
      'Set it up carefully and keep the algebra neat.',
    teacherAnswer: `Let $u = 2^x$

$2^{x+1} + 2^{1-x} = 5$
$2u + \\frac{2}{u} = 5$
$2u^2 + 2 = 5u$
$2u^2 - 5u + 2 = 0$
$(2u - 1)(u - 2) = 0$
$u = \\frac{1}{2}$ or $u = 2$

$2^x = \\frac{1}{2}$
$x = -1$

$2^x = 2$
$x = 1$`,
    teacherAnswerImage: '',
  },
  {
    id: 'exponentials-a-15',
    type: 'text-and-drawing',
    calculator: true,
    title: 'Exponential modelling',
    promptText:
      'A sum of $3500$ is invested at a nominal rate of $5.4\\%$ per year.\n\n(a) Show that, if interest is compounded monthly, the value after $m$ months is given by $V = 3500(1.0045)^m$.\n(b) Find the minimum number of months required for the investment to exceed $5000$.\n(c) If the same $3500$ were instead compounded annually at $5.4\\%$ per year, find the first whole year in which the investment would exceed $5000$.',
    promptImage: '',
    placeholder:
      'Set up the models first, then solve the inequalities carefully.',
    teacherAnswer: `(a)
Monthly rate $= \\frac{0.054}{12}$

Monthly rate $= 0.0045$

$V = 3500(1 + 0.0045)^m$
$V = 3500(1.0045)^m$

(b)
$3500(1.0045)^m > 5000$
$(1.0045)^m > \\frac{10}{7}$
$m\\ln(1.0045) > \\ln\\left(\\frac{10}{7}\\right)$
$m > \\frac{\\ln(10/7)}{\\ln(1.0045)}$
$m \\approx 79.33$

Minimum number of months: $80$

(c)
$3500(1.054)^n > 5000$
$(1.054)^n > \\frac{10}{7}$
$n\\ln(1.054) > \\ln\\left(\\frac{10}{7}\\right)$
$n > \\frac{\\ln(10/7)}{\\ln(1.054)}$
$n \\approx 6.77$

First whole year: $7$`,
    teacherAnswerImage: '',
  },
],
};

export const exponentialsOutros = {
  understanding: {
    title: 'Understanding',
    summary:
      'You have finished the conceptual section for Exponentials and Logarithms. You must now assess how strong your depth of understanding is.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Recognise, and understand the laws of exponents and logarithms.',
      'Understand exponential growth and decay.',
      'Connect equations, graphs, and context together.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to the textbook and read through the explanations. Watch youtube videos explaining the concepts. Ask me for clarification if you have any questions about the topic. ',
    // primaryTo: '/exponentials-and-logarithms/method-selection',
    // primaryLabel: 'Go to Method Selection',
    // secondaryTo: '/exponentials-and-logarithms',
    // secondaryLabel: 'Back to Exponentials',
  },
  'method-selection': {
    title: 'Method Selection',
    summary:
      'You have finished the method selection section for Exponentials and Logarithms. You must now assess how strong your method choice and question recognition are.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Recognise the structure of an exponential or logarithmic problem.',
      'Choose an efficient method before starting algebra.',
      'Decide when to rewrite in a common base, use logarithms, or apply logarithm laws.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to worked examples and focus on how the method is chosen, not just how the solution is finished. Practise identifying the first step before solving full questions.',
  },

  accuracy: {
    title: 'Accuracy',
    summary:
      'You have finished the accuracy section for Exponentials and Logarithms. You must now assess how reliable your algebra, notation, and final answers are under pressure.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Carry out exponential and logarithmic methods accurately and consistently.',
      'Avoid common algebraic slips with powers, logs, and rearranging equations.',
      'Present full working clearly and give answers in the required exact or approximate form.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to the questions you got wrong and check each line of algebra slowly. Focus on where the first mistake happened rather than only looking at the final answer. Redo questions without rushing. Find similar questions to test your accuracy in that area.',
  },

};

export const exponentialsTopicStripImages = Object.entries(exponentialsImages)
  .filter(([, image]) => image.showInTopicStrip)
  .map(([key, image]) => ({
    id: key,
    src: image.src,
    connectedImages: image.connectedImages ?? [],
  }));