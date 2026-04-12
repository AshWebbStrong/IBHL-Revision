export const integrationImages = {
  m4Question: {
    src: '/images/integration/integration-m-4-q.PNG',
    showInTopicStrip: false,
  },
  m15Question: {
    src: '/images/integration/integration-m-15-q.PNG',
    showInTopicStrip: false,
  },
  a9Question: {
    src: '/images/integration/integration-a-9-q.PNG',
    showInTopicStrip: false,
  },
  a18Question: {
    src: '/images/integration/integration-a-18-q.PNG',
    showInTopicStrip: false,
  },
  a19Question: {
    src: '/images/integration/integration-a-19-q.PNG',
    showInTopicStrip: false,
  },
  a20Question: {
    src: '/images/integration/integration-a-20-q.PNG',
    showInTopicStrip: false,
  },
    ExamQ1: {
    src: '/images/integration/integration-e-1-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/integration/integration-e-1-a.PNG'],
  },
  ExamQ2: {
    src: '/images/integration/integration-e-2-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/integration/integration-e-2-a.PNG'],
  },
  ExamQ3: {
    src: '/images/integration/integration-e-3-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/integration/integration-e-3-a.PNG'],
  },
  ExamQ4: {
    src: '/images/integration/integration-e-4-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/integration/integration-e-4-a.PNG'],
  },
  ExamQ5: {
    src: '/images/integration/integration-e-5-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/integration/integration-e-5-a.PNG'],
  },
};

export const integrationQuestions = {
  understanding: [
  {
    id: 'integration-u-1',
    type: 'text',
    title: 'Anti-differentiation',
    promptText:
      'What does it mean to say that integration is anti-differentiation?',
    promptImage: '',
    placeholder:
      'Explain the idea in words and link it to derivatives.',
    teacherAnswer:
      'Integration is anti-differentiation because it reverses differentiation. If $f\'(x)=g(x)$, then $\\int g(x)\\,dx=f(x)+C$. So when we integrate a function, we are looking for a function whose derivative gives the expression inside the integral.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-2',
    type: 'text',
    title: 'The constant',
    promptText:
      'Why do we write $+C$ when finding an indefinite integral?',
    promptImage: '',
    placeholder:
      'Explain why a constant is needed.',
    teacherAnswer:
      'We write $+C$ because differentiating any constant gives $0$, so many different functions can have the same derivative. For example, $x^2$, $x^2+3$, and $x^2-10$ all differentiate to $2x$. An indefinite integral therefore represents a whole family of functions.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-3',
    type: 'text',
    title: 'Boundary conditions',
    promptText:
      'How can a boundary condition be used to find the constant of integration?',
    promptImage: '',
    placeholder:
      'Explain the process clearly.',
    teacherAnswer:
      'First integrate to get a general answer containing $+C$. Then substitute the given point or condition into that expression. This gives an equation involving $C$, which you can solve. The boundary condition turns the family of curves into one specific curve.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-4',
    type: 'multiple-choice',
    title: 'Power rule',
    promptText:
      'What restriction is needed when using the rule $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$? How do we integrate functions in that form when the rule does not work?',
    options: [
      '$n\\neq0$',
      '$n\\neq1$',
      '$n\\neq-1$',
      '$n\\neq2$',
    ],
    correctOption: '$n\\neq-1$',
    promptImage: '',
    placeholder:
      'Choose the correct restriction, then think about the special case.',
    teacherAnswer:
      'The restriction is $n\\neq-1$, because when $n=-1$ the denominator becomes $n+1=0$.\n\nIf the rule does not work, then the function is $x^{-1}=\\frac{1}{x}$, and we use the special result:\n\n$\\int \\frac{1}{x}\\,dx=\\ln|x|+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-5',
    type: 'text',
    title: 'Core integrals',
    promptText:
      'State the indefinite integrals of $e^x$, $\\sin x$, $\\cos x$, and $\\frac{1}{x}$.',
    promptImage: '',
    placeholder:
      'List the standard results clearly.',
    teacherAnswer:
      '$\\int e^x\\,dx=e^x+C$\n\n$\\int \\sin x\\,dx=-\\cos x+C$\n\n$\\int \\cos x\\,dx=\\sin x+C$\n\n$\\int \\frac{1}{x}\\,dx=\\ln|x|+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-6',
    type: 'text-and-drawing',
    title: 'Definite integrals',
    promptText:
      'What does a definite integral such as $\\int_a^b f(x)\\,dx$ represent?',
    promptImage: '',
    placeholder:
      'Explain it in words and link it to a graph.',
    teacherAnswer:
      'A definite integral gives the accumulated signed area between the graph of $y=f(x)$ and the $x$-axis from $x=a$ to $x=b$. Graphically, it measures how much area is above the axis minus how much area is below the axis over that interval.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-7',
    type: 'text',
    title: 'Area and sign',
    promptText:
      'What is the difference between a definite integral and the total area between a curve and the $x$-axis?',
    promptImage: '',
    placeholder:
      'Explain the difference carefully.',
    teacherAnswer:
      'A definite integral gives signed area, so regions below the $x$-axis count as negative. Total area counts all regions as positive. So if a curve crosses the axis, you usually need to split the interval and add the separate positive areas to find the total area.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-8',
    type: 'text',
    title: 'Area between curves',
    promptText:
      'How do you find the area between two curves?',
    promptImage: '',
    placeholder:
      'Describe the general method.',
    teacherAnswer:
      'First find the points of intersection to get the limits of integration. Then form an expression using top minus bottom, or right minus left if integrating with respect to $y$. The area is then found by integrating that difference over the correct interval.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-9',
    type: 'text',
    title: 'Reverse chain rule',
    promptText:
      'What is meant by integration by inspection, or the reverse chain rule?',
    promptImage: '',
    placeholder:
      'Explain the pattern you are looking for.',
    teacherAnswer:
      'Integration by inspection means spotting that the expression inside the integral contains the derivative of an internal function multiplied by an external function.\n\nWhen that happens, you can recognise what composite function would differentiate to create that form, and then work backwards to determine the correct coefficients.\n\nSo it is called the reverse chain rule because you are undoing differentiation of a composite function.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-10',
    type: 'multiple-choice',
    title: 'Linear composites',
    promptText:
      'Why does a linear expression such as $ax+b$ inside a function often make an integral suitable for reverse chain rule?',
    options: [
      'Because the derivative of $ax+b$ is always another bracket',
      'Because the derivative of $ax+b$ is a constant',
      'Because linear expressions can always be expanded first',
      'Because every linear expression gives a logarithm',
    ],
    correctOption: 'Because the derivative of $ax+b$ is a constant',
    promptImage: '',
    placeholder:
      'Choose the best reason.',
    teacherAnswer:
      'The derivative of $ax+b$ is the constant $a$. That constant can be adjusted for easily, which makes it much easier to work backwards using the reverse chain rule.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-11',
    type: 'multiple-choice',
    title: 'Partial fractions',
    promptText:
      'Why would converting into partial fractions help integrating a function?',
    options: [
      'Because it turns the integral into a product',
      'Because it removes the need for limits',
      'Because it rewrites one complicated fraction as simpler fractions that are easier to integrate',
      'Because it always creates a trigonometric integral',
    ],
    correctOption:
      'Because it rewrites one complicated fraction as simpler fractions that are easier to integrate',
    promptImage: '',
    placeholder:
      'Choose the best reason.',
    teacherAnswer:
      'Partial fractions helps because it rewrites one complicated fraction as a sum of simpler fractions. Those simpler fractions are usually much easier to integrate.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-12',
    type: 'text',
    title: 'Substitution',
    promptText:
      'What is integration by substitution, and why is it useful?',
    promptImage: '',
    placeholder:
      'Explain the idea rather than doing a full example.',
    teacherAnswer:
      'Integration by substitution changes the variable to make the integral simpler. You usually choose a new variable for an internal expression, so that the original integral is rewritten in an easier form.\n\nIt is useful when the structure is close to reverse chain rule but not simple enough to spot immediately by inspection.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-13',
    type: 'text',
    title: 'By parts',
    promptText:
      'When is integration by parts used, and what is the formula?',
    promptImage: '',
    placeholder:
      'State the formula and explain when it is helpful.',
    teacherAnswer:
      'Integration by parts is used when the integral contains a product of two expressions and differentiating one part while integrating the other makes the problem simpler.\n\nFormula:\n$\\int u\\,dv=uv-\\int v\\,du$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-14',
    type: 'text',
    title: 'Repeated parts',
    promptText:
      'Why might you need to use repeated integration by parts?',
    promptImage: '',
    placeholder:
      'Explain when one use of the method is not enough.',
    teacherAnswer:
      'You might need repeated integration by parts when one application does simplify the integral, but does not finish it completely. In that case, you apply the method again to the new integral. This often happens when the same type of expression appears again after the first step.',
    teacherAnswerImage: '',
  },
{
  id: 'integration-u-15',
  type: 'text',
  title: 'Trig products',
  promptText:
    'How can integration by parts help when the integral contains two trigonometric functions, for example something like $\\int \\sin(x)\\cos(2x)\\,dx$? Surely neither differentiation nor integration would simplify either function because they would remain as sine and cosine.\n\nIs there any other combination of functions that would work the same way?',
  promptImage: '',
  placeholder:
  'Write in words and support your explanation with the structure of the method.', 
  teacherAnswer:
  'In some products like $\\int \\sin(x)\\cos(2x)\\,dx$, integration by parts can create a cycle. After applying integration by parts twice, the original integral appears again in the working. You can then collect that integral on one side and solve for it algebraically.\n\nSo the method works because a repeated pattern appears, not because the sine and cosine disappear.\n\nA similar thing can happen with integrals such as $\\int e^x\\sin x\\,dx$ and $\\int e^x\\cos x\\,dx$.\n\nThat said, for some trigonometric products, identities or substitution may still be quicker.',  teacherAnswerImage: '',
  },
  {
    id: 'integration-u-16',
    type: 'text',
    title: 'Kinematics links',
    promptText:
      'In kinematics, how are displacement $s$, velocity $v$, and acceleration $a$ connected?',
    promptImage: '',
    placeholder:
      'State the derivative relationships clearly.',
    teacherAnswer:
      'Velocity is the derivative of displacement, so $v=\\frac{ds}{dt}$. Acceleration is the derivative of velocity, so $a=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}$. Working backwards, displacement can be found by integrating velocity, and velocity can be found by integrating acceleration.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-17',
    type: 'text',
    title: 'Distance travelled',
    promptText:
      'Why is distance travelled given by $\\int_{t_1}^{t_2}|v(t)|\\,dt$ rather than just $\\int_{t_1}^{t_2}v(t)\\,dt$?',
    promptImage: '',
    placeholder:
      'Explain the role of the modulus.',
    teacherAnswer:
      'Because velocity can be positive or negative depending on direction. If you integrate velocity directly, you get displacement, which allows movement in opposite directions to cancel out. Distance travelled must count all movement as positive, so we integrate $|v(t)|$ instead.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-18',
    type: 'text',
    title: 'Volumes of revolution',
    promptText:
      'What is a volume of revolution?',
    promptImage: '',
    placeholder:
      'Explain the idea geometrically.',
    teacherAnswer:
      'A volume of revolution is a three-dimensional solid formed when a region is rotated about an axis, such as the $x$-axis or $y$-axis. The integral is used to add up many thin circular cross-sections to find the total volume.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-19',
    type: 'text',
    title: 'Why the square?',
    promptText:
      'Why does a volume of revolution formula involve $\\pi r^2$ rather than just $2\\pi r$?',
    promptImage: '',
    placeholder:
      'Explain what geometric quantity is being added up.',
    teacherAnswer:
      'Because a volume is built from cross-sectional areas, not from circumferences. Each thin slice is usually a circle or disk, and the area of that cross-section is $\\pi r^2$. The integral adds up those circular areas through the solid to produce the total volume.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-u-20',
    type: 'text',
    title: 'Changing axis',
    promptText:
      'The formula for volume of revolution about the $x$-axis is $V=\\pi\\int_a^b y^2\\,dx$. How does this change if the region is rotated about the $y$-axis, and why?',
    promptImage: '',
    placeholder:
      'Explain what changes in the formula and what the radius becomes.',
    teacherAnswer:
      'If the region is rotated about the $y$-axis, the radius is measured horizontally from the $y$-axis instead of vertically from the $x$-axis.\n\nSo the formula becomes:\n$V=\\pi\\int_c^d x^2\\,dy$\nwhen the function is written in a suitable form in terms of $y$.\n\nThis happens because the radius has changed from $y$ to $x$, and the slices are now taken perpendicular to the $y$-axis rather than perpendicular to the $x$-axis.',
    teacherAnswerImage: '',
  },
],
'method-selection': [
  {
    id: 'integration-m-1',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{3x^2+2x-1}{x}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use integration by parts',
      'Use reverse chain rule',
      'Use partial fractions',
      'Rearrange first, then integrate term by term',
    ],
    correctOption: 'Rearrange first, then integrate term by term',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Rearrange first.\n\n$\\frac{3x^2+2x-1}{x}=3x+2-\\frac{1}{x}$\n\nThen integrate term by term.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-2',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{1}{\\sqrt{1-9x^2}}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use technology',
      'Use integration by parts',
      'Use the standard inverse sine form with a linear adjustment',
      'Use partial fractions',
    ],
    correctOption: 'Use the standard inverse sine form with a linear adjustment',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use the standard inverse sine form.\n\nRecognise that\n$\\frac{d}{dx}\\left(\\sin^{-1}(3x)\\right)=\\frac{3}{\\sqrt{1-9x^2}}$\n\nSo the integral is missing a factor of $3$.\n\nTherefore,\n$\\int \\frac{1}{\\sqrt{1-9x^2}}\\,dx=\\frac{1}{3}\\sin^{-1}(3x)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-3',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int xe^x\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use reverse chain rule',
      'Use integration by parts',
      'Use technology',
      'Use partial fractions',
    ],
    correctOption: 'Use integration by parts',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use integration by parts.\n\nTake $u=x$ and $v\'=e^x$.\n\nThis is the best choice because differentiating $x$ makes it simpler, while integrating $e^x$ keeps it easy.\n\nSo $u\'=1$ and $v=e^x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-4',
    type: 'text',
    title: 'Find the area',
    promptText:
      'The graph shows $y=2x$ and $y=x^2$.\n\nFind the area of the shaded region.\n\nWhat process would you use to solve this?',
    promptImage: integrationImages.m4Question.src,
    placeholder:
      'Describe the method clearly.',
    teacherAnswer:
      'First find the points of intersection to get the bounds.\n\nThen work out which graph is above the other and integrate top minus bottom over that interval.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-5',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int x\\sqrt{x^2+5}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use substitution',
      'Use integration by parts',
      'Use partial fractions',
      'Expand first',
    ],
    correctOption: 'Use substitution',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use substitution.\n\nA natural choice is $u=x^2+5$, because $du=2x\\,dx$, which matches the extra factor of $x$ up to a constant.\n\nYou could also see this as reverse chain rule, since the derivative of $x^2+5$ is $2x$, which is just a constant multiple of the $x$ already in the integral.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-6',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{x}{(x^2+1)^2}\\,dx$.\n\nLet $u=x^2+1$.\n\nAfter this substitution, what integral do you get?',
    options: [
      '$\\int \\frac{1}{u^2}\\,du$',
      '$\\int \\frac{x}{u^2}\\,du$',
      '$\\int \\frac{1}{2u^2}\\,dx$',
      '$\\int \\frac{1}{2u^2}\\,du$',
    ],
    correctOption: '$\\int \\frac{1}{2u^2}\\,du$',
    promptImage: '',
    placeholder:
      'Choose the correct new integral.',
    teacherAnswer:
      'Since $u=x^2+1$, we have $du=2x\\,dx$.\n\nSo $x\\,dx=\\frac{1}{2}\\,du$.\n\nThen\n$\\int \\frac{x}{(x^2+1)^2}\\,dx=\\int \\frac{x}{u^2}\\,dx$\n$=\\int \\frac{1}{u^2}\\left(\\frac{1}{2}\\,du\\right)$\n$=\\int \\frac{1}{2u^2}\\,du$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-7',
    type: 'text',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{1}{x^2-1}\\,dx$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the method choice clearly.',
    teacherAnswer:
      'Use partial fractions.\n\nThe denominator factorises as $(x-1)(x+1)$, so the fraction can be split into simpler fractions which are easier to integrate.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-8',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{2x-1}{x^2-x+7}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use integration by parts',
      'Complete the square first',
      'Use reverse chain rule or substitution',
      'Use partial fractions',
    ],
    correctOption: 'Use reverse chain rule or substitution',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use reverse chain rule or substitution.\n\nThe denominator is $x^2-x+7$, and its derivative is $2x-1$, which is exactly the numerator.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-9',
    type: 'text',
    title: 'Find the distance travelled',
    promptText:
      'A particle has velocity $v(t)=3t^2-12t+9$ for $t\\ge0$.\n\nHow would you find the total distance travelled from $t=0$ to $t=4$?',
    promptImage: '',
    placeholder:
      'Explain the method clearly.',
    teacherAnswer:
      'First find where the velocity is zero.\n\nThen split the interval at those times and add the separate positive distances, or integrate $|v(t)|$ piece by piece.\n\nIf you simply calculated $\\int_0^4 v(t)\\,dt$, that would give the displacement, not the total distance.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-10',
    type: 'text-and-drawing',
    title: 'Find the volume',
    promptText:
      'The region under $y=\\sqrt{x}$ from $x=0$ to $x=4$ is rotated about the $y$-axis.\n\nWhat process would you use to find the volume created by this rotation?',
    promptImage: '',
    placeholder:
      'Explain the method clearly and sketch anything helpful.',
    teacherAnswer:
      'Start with\n$V=\\pi\\int x^2\\,dy$\n\nAs $y=\\sqrt{x}$, we have\n$x=y^2$\nso\n$x^2=y^4$\n\nTherefore,\n$V=\\pi\\int y^4\\,dy$\n\nThe bounds must also change because we are now integrating with respect to $y$ and rotating about the $y$-axis.\n\nWhen $x=0$, $y=0$.\nWhen $x=4$, $y=2$.\n\nSo the setup is\n$V=\\pi\\int_0^2 y^4\\,dy$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-11',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int_0^1 e^{-x^2}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use reverse chain rule',
      'Use technology',
      'Use integration by parts',
      'Use partial fractions',
    ],
    correctOption: 'Use technology',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use technology.\n\nThis definite integral does not have a standard elementary result at this level, so it should be evaluated numerically.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-12',
    type: 'text',
    title: 'Integrate this',
    promptText:
      'Given that $\\frac{dy}{dx}=3x^2+x$ and $y=10$ when $x=1$, what process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the order of the steps.',
    teacherAnswer:
      'First integrate to get a general expression for $y$ with $+C$.\n\nThen use the condition $y=10$ when $x=1$ to find $C$, and substitute that back in.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-13',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\sec^2(2x+5)\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use the standard result for $\\sec^2x$, then adjust for the inside',
      'Rewrite using $\\sec^2\\theta=\\tan^2\\theta+1$',
      'Rewrite as $\\cos^2(2x+5)$',
      'Use technology',
    ],
    correctOption: 'Use the standard result for $\\sec^2x$, then adjust for the inside',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use the standard result\n$\\int \\sec^2x\\,dx=\\tan x+C$\n\nThen adjust for the linear expression inside, so this is the standard result together with reverse chain rule.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-14',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\ln x\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use reverse chain rule',
      'Use technology',
      'Use partial fractions',
      'Use integration by parts',
    ],
    correctOption: 'Use integration by parts',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use integration by parts.\n\nRewrite it as\n$\\int 1\\cdot\\ln x\\,dx$\n\nThat turns it into a product.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-15',
    type: 'text',
    title: 'Find the area',
    promptText:
      'The graph shows $y=x^2$, $y=2$, and $y=4$.\n\nFind the area of the shaded region.\n\nWhat process would you use to solve this?',
    promptImage: integrationImages.m15Question.src,
    placeholder:
      'Describe the method clearly.',
    teacherAnswer:
      'The area is found using horizontal strips.\n\nWrite the graph as\n$x=\\sqrt{y}$\n\nThen\n$A=\\int_{2}^{4} x\\,dy$\n$A=\\int_{2}^{4} \\sqrt{y}\\,dy$\n\nSo the area is found by integrating with respect to $y$.\n\nYou could also integrate with respect to $x$, but then you would need to split the region and subtract unwanted rectangular parts to get the shaded area.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-16',
    type: 'text',
    title: 'Integrate this',
    promptText:
      'A particle has acceleration $a(t)=6t-4$, velocity $v=3$ when $t=0$, and displacement $s=5$ when $t=0$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the method clearly.',
    teacherAnswer:
      'First integrate acceleration to get velocity and use the velocity condition to find the first constant.\n\nThen integrate velocity to get displacement and use the displacement condition to find the second constant.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-17',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int (5x^4-2x+7)\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use technology',
      'Use integration by parts',
      'Integrate term by term',
      'Use partial fractions',
    ],
    correctOption: 'Integrate term by term',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Integrate term by term.\n\nThis is just a polynomial plus a constant, so no special method is needed.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-18',
    type: 'text',
    title: 'Find the volume',
    promptText:
      'The region enclosed by $y=x$ and $y=x^2$ is rotated about the $x$-axis.\n\nWhat process would you use to find the volume created by this rotation?',
    promptImage: integrationImages.m4Question.src,
    placeholder:
      'Explain the method clearly.',
    teacherAnswer:
      'First find the points of intersection to get the bounds.\n\nThen use\n$V=\\pi\\int \\left((\\text{outer radius})^2-(\\text{inner radius})^2\\right)dx$\n\nFrom $x=0$ to $x=1$, the outer radius is $y=x$ and the inner radius is $y=x^2$.\n\nSo the setup is\n$V=\\pi\\int_0^1 \\left(x^2-x^4\\right)dx$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-19',
    type: 'text',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{\\sin x}{\\cos x}\\,dx$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the method clearly.',
    teacherAnswer:
      'Use reverse chain rule or substitution.\n\nThe denominator is $\\cos x$, and its derivative is $-\\sin x$, so this matches a logarithm pattern.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-20',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{2x+3}{x+1}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use integration by parts',
      'Use the inverse sine form',
      'Use partial fractions',
      'Rearrange first, then integrate term by term',
    ],
    correctOption: 'Rearrange first, then integrate term by term',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Rearrange first.\n\n$\\frac{2x+3}{x+1}=\\frac{2(x+1)+1}{x+1}$\n$=2+\\frac{1}{x+1}$\n\nThen integrate term by term.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-21',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{1}{x^2+6x+13}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use integration by parts',
      'Complete the square, then use the standard arctan form',
      'Use partial fractions',
      'Rearrange first',
    ],
    correctOption: 'Complete the square, then use the standard arctan form',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Complete the square first.\n\n$x^2+6x+13=(x+3)^2+4$\n\nSo,\n$\\int \\frac{1}{x^2+6x+13}\\,dx=\\int \\frac{1}{(x+3)^2+4}\\,dx$\n\nNow use the standard result\n$\\int \\frac{1}{x^2+a^2}\\,dx=\\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right)+C$\n\nHere,\n$\\int \\frac{1}{(x+3)^2+4}\\,dx=\\int \\frac{1}{(x+3)^2+2^2}\\,dx$\n\nSo,\n$\\int \\frac{1}{x^2+6x+13}\\,dx=\\frac{1}{2}\\tan^{-1}\\left(\\frac{x+3}{2}\\right)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-22',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int (3x^2+1)\\cos(x^3+x)\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use reverse chain rule or substitution',
      'Use integration by parts',
      'Expand first',
      'Use partial fractions',
    ],
    correctOption: 'Use reverse chain rule or substitution',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use reverse chain rule or substitution.\n\nThe inside is $x^3+x$, and its derivative is $3x^2+1$, which is already there.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-23',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int \\frac{x+2}{(x-1)(x+3)}\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use reverse chain rule',
      'Use technology',
      'Use integration by parts',
      'Use partial fractions',
    ],
    correctOption: 'Use partial fractions',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use partial fractions.\n\nThe denominator is factorised into linear factors, so the fraction can be split into simpler fractions.',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-m-24',
    type: 'multiple-choice',
    title: 'Integrate this',
    promptText:
      'Find $\\int x^2e^x\\,dx$.\n\nWhat process would you use to solve this?',
    options: [
      'Use reverse chain rule',
      'Use integration by parts, and repeat if needed',
      'Use the standard inverse sine form',
      'Use partial fractions',
    ],
    correctOption: 'Use integration by parts, and repeat if needed',
    promptImage: '',
    placeholder:
      'Choose the best method.',
    teacherAnswer:
      'Use integration by parts.\n\nThis is a product, and differentiating the polynomial makes it simpler. You would need to repeat the method.',
    teacherAnswerImage: '',
  },
],
 accuracy: [
  {
    id: 'integration-a-1',
    type: 'text-and-drawing',
    title: 'Question 1',
    promptText:
      'Find $\\int \\left(\\frac{3}{2}x^4-\\frac{4}{x^2}+\\frac{5}{x}-7\\right)\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Rewrite where helpful:\n\n$\\int \\left(\\frac{3}{2}x^4-4x^{-2}+5x^{-1}-7\\right)\\,dx$\n\nIntegrate term by term:\n\n$\\int \\left(\\frac{3}{2}x^4-4x^{-2}+5x^{-1}-7\\right)\\,dx=\\frac{3}{10}x^5+\\frac{4}{x}+5\\ln|x|-7x+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-2',
    type: 'text-and-drawing',
    title: 'Question 2',
    promptText:
      'Find $\\int e^{1-2x}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use reverse chain rule.\n\n$\\frac{d}{dx}\\left(e^{1-2x}\\right)=-2e^{1-2x}$\n\n$\\int e^{1-2x}\\,dx=-\\frac{1}{2}e^{1-2x}+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-3',
    type: 'text-and-drawing',
    title: 'Question 3',
    promptText:
      'Use the substitution $u=x^2+4$ to find $\\int \\frac{x}{(x^2+4)^2}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$u=x^2+4$\n\n$\\frac{du}{dx}=2x$\n$dx=\\frac{du}{2x}$\n\nSubstitute into the integral:\n$\\int \\frac{x}{(x^2+4)^2}\\,dx=\\int \\frac{x}{u^2}\\times\\frac{du}{2x}$\n$=\\frac{1}{2}\\int u^{-2}\\,du$\n\nIntegrate:\n$\\frac{1}{2}\\int u^{-2}\\,du=-\\frac{1}{2}u^{-1}+C$\n\nSubstitute back:\n$\\int \\frac{x}{(x^2+4)^2}\\,dx=-\\frac{1}{2(x^2+4)}+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-4',
    type: 'text-and-drawing',
    title: 'Question 4',
    promptText:
      'Given that $\\frac{dy}{dx}=\\frac{4x}{2x^2+5}-\\frac{3}{x^2}$ and $y=2$ when $x=1$, find $y$ in terms of $x$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      '$y=\\int \\left(\\frac{4x}{2x^2+5}-\\frac{3}{x^2}\\right)dx$\n\nIntegrate term by term:\n\n$y=\\ln(2x^2+5)+\\frac{3}{x}+C$\n\nUse $y=2$ when $x=1$:\n\n$2=\\ln 7+3+C$\n$C=-1-\\ln 7$\n\n$y=\\ln(2x^2+5)+\\frac{3}{x}-1-\\ln 7$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-5',
    type: 'text-and-drawing',
    title: 'Question 5',
    promptText:
      'Use the substitution $u=2x-1$ to find $\\int \\frac{1}{\\sqrt{9-(2x-1)^2}}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$u=2x-1$\n\n$\\frac{du}{dx}=2$\n$dx=\\frac{1}{2}du$\n\nSubstitute into the integral:\n$\\int \\frac{1}{\\sqrt{9-(2x-1)^2}}\\,dx=\\int \\frac{1}{\\sqrt{9-u^2}}\\times\\frac{1}{2}du$\n$=\\frac{1}{2}\\int \\frac{1}{\\sqrt{9-u^2}}\\,du$\n\nUse the standard inverse sine result:\n$\\int \\frac{1}{\\sqrt{a^2-u^2}}\\,du=\\sin^{-1}\\left(\\frac{u}{a}\\right)+C$\n\n$\\frac{1}{2}\\int \\frac{1}{\\sqrt{9-u^2}}\\,du=\\frac{1}{2}\\sin^{-1}\\left(\\frac{u}{3}\\right)+C$\n\nSubstitute back:\n$\\int \\frac{1}{\\sqrt{9-(2x-1)^2}}\\,dx=\\frac{1}{2}\\sin^{-1}\\left(\\frac{2x-1}{3}\\right)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-6',
    type: 'text-and-drawing',
    title: 'Question 6',
    promptText:
      'Find the area enclosed by $y=2x+3$ and $y=x^2+x+1$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'First find the points of intersection:\n\n$2x+3=x^2+x+1$\n$x^2-x-2=0$\n$(x-2)(x+1)=0$\n$x=2$ or $x=-1$\n\nArea under the line:\n$\\int_{-1}^{2}(2x+3)\\,dx=\\left[x^2+3x\\right]_{-1}^{2}$\n$=(4+6)-(1-3)$\n$=12$\n\nArea under the curve:\n$\\int_{-1}^{2}(x^2+x+1)\\,dx=\\left[\\frac{x^3}{3}+\\frac{x^2}{2}+x\\right]_{-1}^{2}$\n$=\\left(\\frac{8}{3}+2+2\\right)-\\left(-\\frac{1}{3}+\\frac{1}{2}-1\\right)$\n$=\\frac{15}{2}$\n\nArea enclosed:\n$12-\\frac{15}{2}=\\frac{9}{2}$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-7',
    type: 'text-and-drawing',
    title: 'Question 7',
    promptText:
      'Find $\\int \\frac{4x-1}{(x+2)(x-1)}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$\\frac{4x-1}{(x+2)(x-1)}=\\frac{A}{x+2}+\\frac{B}{x-1}$\n\n$4x-1=A(x-1)+B(x+2)$\n$4x-1=(A+B)x+(-A+2B)$\n\nCompare coefficients:\n$A+B=4$\n$-A+2B=-1$\n\n$A=3$\n$B=1$\n\n$\\frac{4x-1}{(x+2)(x-1)}=\\frac{3}{x+2}+\\frac{1}{x-1}$\n\n$\\int \\frac{4x-1}{(x+2)(x-1)}\\,dx=3\\int \\frac{1}{x+2}\\,dx+\\int \\frac{1}{x-1}\\,dx$\n\n$\\int \\frac{4x-1}{(x+2)(x-1)}\\,dx=3\\ln|x+2|+\\ln|x-1|+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-8',
    type: 'text-and-drawing',
    title: 'Question 8',
    promptText:
      'Find the area enclosed by $y=x^2$, $y=3$, $y=6$, and the $y$-axis.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use horizontal strips.\n\nWrite the curve as\n$x=\\sqrt{y}$\n\n$A=\\int_3^6 x\\,dy$\n$A=\\int_3^6 \\sqrt{y}\\,dy$\n$A=\\int_3^6 y^{1/2}\\,dy$\n\nIntegrate:\n$A=\\left[\\frac{2}{3}y^{3/2}\\right]_3^6$\n$=\\frac{2}{3}\\left(6^{3/2}-3^{3/2}\\right)$\n$=4\\sqrt{6}-2\\sqrt{3}$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-9',
    type: 'text-and-drawing',
    title: 'Question 9',
    promptText:
      'The graph shows $y=4x-x^2$ and $y=x$.\n\nFind the area enclosed by the two graphs.',
    promptImage: integrationImages.a9Question.src,
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'First find the points of intersection:\n\n$4x-x^2=x$\n$-x^2+3x=0$\n$x(x-3)=0$\n$x=0$ or $x=3$\n\nFrom $x=0$ to $x=3$, the curve $y=4x-x^2$ is above the line $y=x$.\n\n$A=\\int_0^3 \\left((4x-x^2)-x\\right)dx$\n$A=\\int_0^3 (3x-x^2)\\,dx$\n\nIntegrate:\n$A=\\left[\\frac{3x^2}{2}-\\frac{x^3}{3}\\right]_0^3$\n$=\\frac{9}{2}$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-10',
    type: 'text-and-drawing',
    title: 'Question 10',
    promptText:
      'Find $\\int \\frac{1}{x^2-4x+13}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Complete the square:\n\n$x^2-4x+13=(x-2)^2+9$\n\n$\\int \\frac{1}{x^2-4x+13}\\,dx=\\int \\frac{1}{(x-2)^2+3^2}\\,dx$\n\nUse the standard result\n$\\int \\frac{1}{x^2+a^2}\\,dx=\\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right)+C$\n\n$\\int \\frac{1}{x^2-4x+13}\\,dx=\\frac{1}{3}\\tan^{-1}\\left(\\frac{x-2}{3}\\right)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-11',
    type: 'text-and-drawing',
    title: 'Question 11',
    promptText:
      'Find $\\int \\frac{x^3}{(x^2+2)^2}\\,dx$ via substitution or otherwise.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$u=x^2+2$\n\n$\\frac{du}{dx}=2x$\n$dx=\\frac{du}{2x}$\n\nSubstitute into the integral:\n$\\int \\frac{x^3}{(x^2+2)^2}\\,dx=\\int \\frac{x^3}{u^2}\\times\\frac{du}{2x}$\n$=\\frac{1}{2}\\int \\frac{x^2}{u^2}\\,du$\n\nSince\n$u=x^2+2$\n$x^2=u-2$\n\n$\\frac{1}{2}\\int \\frac{x^2}{u^2}\\,du=\\frac{1}{2}\\int \\frac{u-2}{u^2}\\,du$\n$=\\frac{1}{2}\\int \\left(\\frac{1}{u}-\\frac{2}{u^2}\\right)du$\n\nIntegrate:\n$=\\frac{1}{2}\\left(\\ln|u|+\\frac{2}{u}\\right)+C$\n\nSubstitute back:\n$\\int \\frac{x^3}{(x^2+2)^2}\\,dx=\\frac{1}{2}\\ln(x^2+2)+\\frac{1}{x^2+2}+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-12',
    type: 'text-and-drawing',
    title: 'Question 12',
    promptText:
      'Find $\\int \\frac{7x-1}{x^2-2x-3}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Factorise the denominator:\n\n$x^2-2x-3=(x-3)(x+1)$\n\nLet\n$\\frac{7x-1}{(x-3)(x+1)}=\\frac{A}{x-3}+\\frac{B}{x+1}$\n\n$7x-1=A(x+1)+B(x-3)$\n$7x-1=(A+B)x+(A-3B)$\n\nCompare coefficients:\n$A+B=7$\n$A-3B=-1$\n\n$A=5$\n$B=2$\n\n$\\frac{7x-1}{x^2-2x-3}=\\frac{5}{x-3}+\\frac{2}{x+1}$\n\n$\\int \\frac{7x-1}{x^2-2x-3}\\,dx=5\\int \\frac{1}{x-3}\\,dx+2\\int \\frac{1}{x+1}\\,dx$\n\n$\\int \\frac{7x-1}{x^2-2x-3}\\,dx=5\\ln|x-3|+2\\ln|x+1|+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-13',
    type: 'text-and-drawing',
    title: 'Question 13',
    promptText:
      'Find $\\int x\\ln x\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use integration by parts.\n\nTake\n$u=\\ln x$\n$v\'=x$\n\n$u\'=\\frac{1}{x}$\n$v=\\frac{x^2}{2}$\n\n$\\int x\\ln x\\,dx=\\frac{x^2}{2}\\ln x-\\int \\frac{x^2}{2}\\times\\frac{1}{x}\\,dx$\n$=\\frac{x^2}{2}\\ln x-\\frac{1}{2}\\int x\\,dx$\n$=\\frac{x^2}{2}\\ln x-\\frac{x^2}{4}+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-14',
    type: 'text-and-drawing',
    title: 'Question 14',
    promptText:
      'Find $\\int e^x\\cos x\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
    'Let\n$I=\\int e^x\\cos x\\,dx$\n\nUse integration by parts.\nTake\n$u=\\cos x$\n$v\'=e^x$\n\n$u\'=-\\sin x$\n$v=e^x$\n\n$I=e^x\\cos x-\\int e^x(-\\sin x)\\,dx$\n$I=e^x\\cos x+\\int e^x\\sin x\\,dx$\n\nUse integration by parts again on $\\int e^x\\sin x\\,dx$.\nTake\n$u=\\sin x$\n$v\'=e^x$\n\n$u\'=\\cos x$\n$v=e^x$\n\n$\\int e^x\\sin x\\,dx=e^x\\sin x-\\int e^x\\cos x\\,dx$\n$\\int e^x\\sin x\\,dx=e^x\\sin x-I$\n\nSubstitute back:\n$I=e^x\\cos x+e^x\\sin x-I$\n$2I=e^x(\\sin x+\\cos x)$\n$I=\\frac{1}{2}e^x(\\sin x+\\cos x)+C$\n\n$\\int e^x\\cos x\\,dx=\\frac{1}{2}e^x(\\sin x+\\cos x)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-15',
    type: 'text-and-drawing',
    title: 'Question 15',
    promptText:
      'Use the substitution $x=\\frac{5}{2}\\sin\\theta$ to find $\\int \\frac{3}{\\sqrt{25-4x^2}}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$x=\\frac{5}{2}\\sin\\theta$\n\n$\\frac{dx}{d\\theta}=\\frac{5}{2}\\cos\\theta$\n$dx=\\frac{5}{2}\\cos\\theta\\,d\\theta$\n\n$25-4x^2=25-4\\left(\\frac{25}{4}\\sin^2\\theta\\right)$\n$=25-25\\sin^2\\theta$\n$=25\\cos^2\\theta$\n\n$\\sqrt{25-4x^2}=5\\cos\\theta$\n\nSubstitute into the integral:\n$\\int \\frac{3}{\\sqrt{25-4x^2}}\\,dx=\\int \\frac{3}{5\\cos\\theta}\\times\\frac{5}{2}\\cos\\theta\\,d\\theta$\n$=\\frac{3}{2}\\int d\\theta$\n$=\\frac{3}{2}\\theta+C$\n\nSince\n$x=\\frac{5}{2}\\sin\\theta$\n$\\sin\\theta=\\frac{2x}{5}$\n$\\theta=\\sin^{-1}\\left(\\frac{2x}{5}\\right)$\n\n$\\int \\frac{3}{\\sqrt{25-4x^2}}\\,dx=\\frac{3}{2}\\sin^{-1}\\left(\\frac{2x}{5}\\right)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-16',
    type: 'text-and-drawing',
    title: 'Question 16',
    promptText:
      'Use the substitution $u=x^2+1$ to find $\\int x\\ln(x^2+1)\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$u=x^2+1$\n\n$\\frac{du}{dx}=2x$\n$dx=\\frac{du}{2x}$\n\nSubstitute into the integral:\n$\\int x\\ln(x^2+1)\\,dx=\\int x\\ln u\\times\\frac{du}{2x}$\n$=\\frac{1}{2}\\int \\ln u\\,du$\n\nIntegrate by parts on $\\int \\ln u\\,du$.\n\nTake\n$U=\\ln u$\n$V\'=1$\n\n$U\'=\\frac{1}{u}$\n$V=u$\n\n$\\int \\ln u\\,du=u\\ln u-\\int 1\\,du$\n$=u\\ln u-u+C$\n\n$\\int x\\ln(x^2+1)\\,dx=\\frac{1}{2}(u\\ln u-u)+C$\n\nSubstitute back:\n$\\int x\\ln(x^2+1)\\,dx=\\frac{1}{2}\\left((x^2+1)\\ln(x^2+1)-(x^2+1)\\right)+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-17',
    type: 'text-and-drawing',
    title: 'Question 17',
    promptText:
      'A particle has velocity $v(t)=\\frac{2t}{t^2+4}$ and displacement $s=1$ when $t=0$.\n\nFind $s$ in terms of $t$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
   teacherAnswer:
  '$\\frac{ds}{dt}=\\frac{2t}{t^2+4}$\n\n$s=\\int \\frac{2t}{t^2+4}\\,dt$\n\nLet\n$u=t^2+4$\n\n$\\frac{du}{dt}=2t$\n$dt=\\frac{du}{2t}$\n\n$s=\\int \\frac{2t}{u}\\times\\frac{du}{2t}$\n$=\\int \\frac{1}{u}\\,du$\n$=\\ln u+C$\n$=\\ln(t^2+4)+C$\n\nUse $s=1$ when $t=0$:\n$1=\\ln 4+C$\n$C=1-\\ln 4$\n\n$s=\\ln(t^2+4)+1-\\ln 4$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-18',
    type: 'text-and-drawing',
    title: 'Question 18',
    promptText:
      'The graph shows the shaded region under $y=x^2+1$ from $x=0$ to $x=2$.\n\nThe region is rotated about the $x$-axis.\n\nFind the volume created.',
    promptImage: integrationImages.a18Question.src,
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use\n$V=\\pi\\int y^2\\,dx$\n\nHere,\n$y=x^2+1$\n$y^2=(x^2+1)^2=x^4+2x^2+1$\n\n$V=\\pi\\int_0^2 (x^4+2x^2+1)\\,dx$\n\nIntegrate term by term:\n\n$V=\\pi\\left[\\frac{x^5}{5}+\\frac{2x^3}{3}+x\\right]_0^2$\n$=\\pi\\left(\\frac{32}{5}+\\frac{16}{3}+2\\right)$\n$=\\pi\\left(\\frac{96+80+30}{15}\\right)$\n$=\\frac{206\\pi}{15}$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-19',
    type: 'text-and-drawing',
    title: 'Question 19',
    promptText:
      'The graph shows the shaded region enclosed by $y=3x$ and $y=x^2$.\n\nThe region is rotated about the $x$-axis.\n\nFind the volume created.',
    promptImage: integrationImages.a19Question.src,
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'First find the points of intersection:\n\n$3x=x^2$\n$x^2-3x=0$\n$x(x-3)=0$\n$x=0$ or $x=3$\n\nFrom $x=0$ to $x=3$, the outer radius is $y=3x$ and the inner radius is $y=x^2$.\n\n$V=\\pi\\int_0^3 \\left((3x)^2-(x^2)^2\\right)dx$\n$V=\\pi\\int_0^3 (9x^2-x^4)\\,dx$\n\nIntegrate term by term:\n\n$V=\\pi\\left[3x^3-\\frac{x^5}{5}\\right]_0^3$\n$=\\pi\\left(81-\\frac{243}{5}\\right)$\n$=\\frac{162\\pi}{5}$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-20',
    type: 'text-and-drawing',
    title: 'Question 20',
    promptText:
      'The graph shows the shaded region under $y=2\\sqrt{x}$ from $x=0$ to $x=9$.\n\nThe region is rotated about the $y$-axis.\n\nFind the volume created.',
    promptImage: integrationImages.a20Question.src,
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use\n$V=\\pi\\int x^2\\,dy$\n\nSince\n$y=2\\sqrt{x}$,\n$x=\\frac{y^2}{4}$\n$x^2=\\frac{y^4}{16}$\n\nThe bounds change.\nWhen $x=0$, $y=0$.\nWhen $x=9$, $y=6$.\n\n$V=\\pi\\int_0^6 \\frac{y^4}{16}\\,dy$\n\nIntegrate:\n$V=\\frac{\\pi}{16}\\left[\\frac{y^5}{5}\\right]_0^6$\n$=\\frac{\\pi}{16}\\times\\frac{7776}{5}$\n$=\\frac{486\\pi}{5}$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-21',
    type: 'text-and-drawing',
    title: 'Question 21',
    promptText:
      'A particle has velocity $v(t)=\\frac{3}{t+1}-1$ for $t\\geq 0$.\n\nFind the displacement and the total distance travelled from $t=0$ to $t=5$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'First find the displacement:\n\n$\\text{displacement}=\\int_0^5 \\left(\\frac{3}{t+1}-1\\right)dt$\n\nAn antiderivative is\n$F(t)=3\\ln(t+1)-t$\n\n$\\text{displacement}=F(5)-F(0)$\n$=(3\\ln 6-5)-0$\n$=3\\ln 6-5$\n\nNow find the total distance.\nSolve $v(t)=0$:\n\n$\\frac{3}{t+1}-1=0$\n$t=2$\n\n$F(0)=0$\n$F(2)=3\\ln 3-2$\n$F(5)=3\\ln 6-5$\n\n$\\text{total distance}=|F(2)-F(0)|+|F(5)-F(2)|$\n$=|3\\ln 3-2|+|3\\ln 6-5-(3\\ln 3-2)|$\n$=3\\ln 3-2+|3\\ln 2-3|$\n\nSince $3\\ln 2<3$,\n$|3\\ln 2-3|=3-3\\ln 2$\n\n$\\text{total distance}=3\\ln 3-2+3-3\\ln 2$\n$=1+3\\ln\\left(\\frac{3}{2}\\right)$\n\nDisplacement $=3\\ln 6-5$\n\nTotal distance $=1+3\\ln\\left(\\frac{3}{2}\\right)$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-22',
    type: 'text-and-drawing',
    title: 'Question 22',
    promptText:
      'Evaluate $\\int_0^1 (6x-5)e^{3x^2-5x}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use reverse chain rule.\n\nThe inside is $3x^2-5x$.\nIts derivative is $6x-5$, which is already there.\n\n$\\int (6x-5)e^{3x^2-5x}\\,dx=e^{3x^2-5x}$\n\nApply the limits:\n\n$\\int_0^1 (6x-5)e^{3x^2-5x}\\,dx=[e^{3x^2-5x}]_0^1$\n$=e^{-2}-1$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-23',
    type: 'text-and-drawing',
    title: 'Question 23',
    promptText:
      'Find $\\int \\frac{3x+4}{(x-2)^2}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let\n$\\frac{3x+4}{(x-2)^2}=\\frac{A}{x-2}+\\frac{B}{(x-2)^2}$\n\n$3x+4=A(x-2)+B$\n$3x+4=Ax-2A+B$\n\nCompare coefficients:\n$A=3$\n$-2A+B=4$\n$B=10$\n\n$\\frac{3x+4}{(x-2)^2}=\\frac{3}{x-2}+\\frac{10}{(x-2)^2}$\n\n$\\int \\frac{3x+4}{(x-2)^2}\\,dx=3\\int \\frac{1}{x-2}\\,dx+10\\int (x-2)^{-2}\\,dx$\n$=3\\ln|x-2|-\\frac{10}{x-2}+C$',
    teacherAnswerImage: '',
  },
  {
    id: 'integration-a-24',
    type: 'text-and-drawing',
    title: 'Question 24',
    promptText:
      'Evaluate $\\int_0^2 \\frac{1}{x^2+2x+5}\\,dx$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Complete the square:\n\n$x^2+2x+5=(x+1)^2+4$\n\n$\\int_0^2 \\frac{1}{x^2+2x+5}\\,dx=\\int_0^2 \\frac{1}{(x+1)^2+2^2}\\,dx$\n\nUse the standard result:\n$\\int \\frac{1}{x^2+a^2}\\,dx=\\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right)+C$\n\n$\\int \\frac{1}{(x+1)^2+4}\\,dx=\\frac{1}{2}\\tan^{-1}\\left(\\frac{x+1}{2}\\right)+C$\n\nApply the limits:\n\n$\\int_0^2 \\frac{1}{x^2+2x+5}\\,dx=\\left[\\frac{1}{2}\\tan^{-1}\\left(\\frac{x+1}{2}\\right)\\right]_0^2$\n$=\\frac{1}{2}\\tan^{-1}\\left(\\frac{3}{2}\\right)-\\frac{1}{2}\\tan^{-1}\\left(\\frac{1}{2}\\right)$',
    teacherAnswerImage: '',
  },
],
};

export const integrationOutros = {
understanding: {
  title: 'Understanding',
  summary:
    'You have finished the conceptual section for Integration. You must now assess how strong your depth of understanding is across both SL and HL content.',
  recapTitle: 'You should be able to...',
  recapItems: [
    'Understand integration as anti-differentiation and explain the meaning of the constant of integration.',
    'Interpret definite integrals, signed area, total area, and area between curves clearly.',
    'Recognise the ideas behind reverse chain rule, substitution, integration by parts, repeated cycles, and partial fractions.',
    'Understand HL applications such as kinematics with integration and volumes of revolution about different axes.',
  ],
  tipTitle: 'If it did not go well:',
  tipText:
    'Return to your notes and worked examples, especially on what an integral means before focusing on calculation. Make sure you can explain when an integral represents a family of functions, an area, a total distance, or a volume. For HL, focus on why methods such as substitution, integration by parts, and volumes of revolution work, not just the steps.',
},

'method-selection': {
  title: 'Method Selection',
  summary:
    'You have finished the method selection section for Integration. You must now assess how strong your method choice and question recognition are.',
  recapTitle: 'You should be able to...',
  recapItems: [
    'Recognise whether an integral is best handled by direct anti-differentiation, algebraic rearrangement, reverse chain rule, substitution, partial fractions, a standard result, or integration by parts.',
    'Decide when a definite integral represents signed area, total area, distance travelled, or a numerical value that should be found with technology.',
    'Choose sensible variables and bounds when working with area and volume, especially when integrating with respect to y.',
    'Recognise HL structures such as inverse trig forms, repeated integration by parts, kinematics with repeated integration, and volumes formed by rotating regions.',
  ],
  tipTitle: 'If it did not go well:',
  tipText:
    'Go back through worked examples and focus on identifying the structure of the integral before doing any calculation. Practise asking what makes this question awkward, what would simplify it, and what the integral is actually representing. For HL, pay close attention to when the variable, bounds, or geometry of the region changes the method.',
},

accuracy: {
  title: 'Accuracy',
  summary:
    'You have finished the accuracy section for Integration. You must now assess how reliable your algebra, notation, and final answers are under pressure across both SL and HL content.',
  recapTitle: 'You should be able to...',
  recapItems: [
    'Integrate accurately when signs, fractions, constants, powers, and brackets make the working awkward.',
    'Complete full solutions reliably for reverse chain rule, substitution, standard inverse trig forms, partial fractions, and integration by parts.',
    'Work accurately with enclosed areas, definite integrals, kinematics, and volumes of revolution about different axes.',
    'Present clear, complete solutions with correct notation, correct bounds, and correct constants throughout.',
  ],
  tipTitle: 'If it did not go well:',
  tipText:
    'Go back through the questions you missed and find the first line where the error happened. In integration, mistakes usually begin with one small slip: a sign, a factor, a constant, the wrong substitution, the wrong bounds, or the wrong geometric interpretation. Practise full worked solutions slowly until those small slips stop appearing.',
},


};
export const integrationIntros = {
  understanding: {
    eyebrow: 'Before you begin',
    title: 'Integration understanding',
    summary:
      'This quiz will help you check your understanding of concepts we have learned across SL and HL Integration, such as anti-differentiation, the constant of integration, definite integrals, signed area, total area, area between curves, reverse chain rule, substitution, integration by parts, repeated cycles, partial fractions, kinematics, and volumes of revolution about different axes.',
    recapTitle: 'In this section',
    recapItems: [
      'Think carefully about each question and make sure you fully understand the answer.',
      'Depth of understanding is important for handling unfamiliar IB questions, which come up often.',
      'A stronger understanding helps embed the topic more securely in your memory and helps later methods stay retained more strongly.',
      'A good conceptual understanding also helps you check whether your working and final answers make sense.',
    ],
    tipTitle: 'Before you start:',
    tipText:
      'You can answer questions on here, or on paper in your maths book and then just submit anything. However, you will not gain anything from just looking at the solutions without trying it yourself. These quizzes are meant to be for reviewing content, not for learning content.',
    primaryLabel: 'Start section',
  },

  'method-selection': {
    eyebrow: 'Before you begin',
    title: 'Integration method selection',
    summary:
      'This quiz will not follow an order like the other quizzes, because it is designed to make you consider which method to apply out of all the available ones in this topic.',
    recapTitle: 'In this section',
    recapItems: [
      'You do not need to solve each question fully, only identify the method or the first step as asked.',
      'You will need to choose between the different integration methods and applications used across the topic.',
      'This is an important skill in calculus because there are many possible methods available.',
      'Choosing the right method quickly helps prevent you from wasting a lot of time.',
    ],
    tipTitle: 'Before you start:',
    tipText:
      'You can answer questions on here, or on paper in your maths book and then just submit anything. However, you will not gain anything from just looking at the solutions without trying it yourself. These quizzes are meant to be for reviewing content, not for learning content.',
    primaryLabel: 'Start section',
  },

  accuracy: {
    eyebrow: 'Before you begin',
    title: 'Integration accuracy',
    summary:
      'This quiz will work its way through the different types of questions we have looked at, testing your accuracy at applying the methods we have learned.',
    recapTitle: 'In this section',
    recapItems: [
      'Work your way through carefully and fully, either here or, probably better, on paper.',
      'Focus on applying the correct methods accurately across the range of question types in the topic.',
      'Pay specific attention to places where accuracy mistakes often happen, such as negative signs, coefficients and bounds.',
      'Treat this as practice for producing full, reliable solutions',
    ],
    tipTitle: 'Before you start:',
    tipText:
      'You can answer questions on here, or on paper in your maths book and then just submit anything. However, you will not gain anything from just looking at the solutions without trying it yourself. These quizzes are meant to be for reviewing content, not for learning content.',
    primaryLabel: 'Start section',
  },
};

export const integrationTopicStripImages = Object.entries(integrationImages)
  .filter(([, image]) => image.showInTopicStrip)
  .map(([key, image]) => ({
    id: key,
    src: image.src,
    connectedImages: image.connectedImages ?? [],
  }));
  