export const differentiationImages = {
  u6Answer: {
    src: '/images/differentiation/differentiation-u-6-ans.PNG',
    showInTopicStrip: false,
  },
  u14Answer: {
    src: '/images/differentiation/differentiation-u-14-ans.PNG',
    showInTopicStrip: false,
  },
    m9question: {
    src: '/images/differentiation/differentiation-m-9-q.PNG',
    showInTopicStrip: false,
  },
    ExamQ1: {
    src: '/images/differentiation/differentiation-e-1-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-1-a.PNG'],
  },
  ExamQ2: {
    src: '/images/differentiation/differentiation-e-2-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-2-a.PNG'],
  },
  ExamQ3: {
    src: '/images/differentiation/differentiation-e-3-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-3-a.PNG'],
  },
  ExamQ4: {
    src: '/images/differentiation/differentiation-e-4-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-4-a.PNG'],
  },
  ExamQ5: {
    src: '/images/differentiation/differentiation-e-5-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-5-a.PNG'],
  },
  ExamQ6: {
    src: '/images/differentiation/differentiation-e-6-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-6-a.PNG'],
  },
  ExamQ7: {
    src: '/images/differentiation/differentiation-e-7-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-7-a.PNG'],
  },
  ExamQ8: {
    src: '/images/differentiation/differentiation-e-8-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/differentiation/differentiation-e-8-a.PNG'],
  },
};

export const differentiationQuestions = {
  understanding: [
    {
      id: 'differentiation-u-1',
      type: 'text-and-drawing',
      title: 'Limits',
      promptText:
        'In the expression $\\frac{f(x+h)-f(x)}{h}$, why do we look at $\\lim_{h \\to 0}$ rather than just substituting $h=0$ straight away? What is the purpose of letting $h$ approach $0$?',
      promptImage: '',
      placeholder:
        'Explain what $h$ represents and why we let it approach 0 rather than equal 0.',
      teacherAnswer:
        '$h$ represents a small change in $x$. The expression $\\frac{f(x+h)-f(x)}{h}$ gives the gradient between two nearby points on the curve. We look at $\\lim_{h \\to 0}$ because we want $h$ to become extremely small without actually being $0$. We do not just substitute $h=0$ immediately because that would give division by $0$, which is undefined.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-2',
      type: 'text',
      title: 'Rate of change',
      promptText:
        'What does $\\frac{dx}{dt}$ represent in context and graphically?',
      promptImage: '',
      placeholder:
        'Answer in words, then explain what it means on a graph.',
      teacherAnswer:
        'In context:\nThe rate of change of $x$ with respect to $t$.\n\nGraphically:\nOn a graph of $x$ against $t$, it is the gradient of the curve at any point.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-3',
      type: 'multiple-choice',
      title: 'First derivative',
      promptText:
        'If $f\'(x) < 0$ for all $x$ in an interval, what does this tell you about the function $f(x)$ on that interval?',
      options: [
        '$f(x)$ is increasing',
        '$f(x)$ is decreasing',
        '$f(x)$ is constant',
        '$f(x)$ must have a maximum',
      ],
      correctOption: '$f(x)$ is decreasing',
      promptImage: '',
      placeholder:
        'Choose the best interpretation of the sign of the derivative.',
      teacherAnswer:
        'If $f\'(x) < 0$ throughout an interval, then the function is decreasing on that interval.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-4',
      type: 'text-and-drawing',
      title: 'Differentiating polynomials',
      promptText:
        'State the derivative of $x^n$ and explain how this leads to the derivative of a polynomial.',
      promptImage: '',
      placeholder:
        'State the rule clearly, then explain how it is applied term by term.',
      teacherAnswer:
        'For integer $n$, $\\frac{d}{dx}(x^n) = nx^{n-1}$. Since a polynomial is a sum of terms of the form $ax^n$, we differentiate each term separately using $\\frac{d}{dx}(ax^n) = anx^{n-1}$. Constant terms differentiate to $0$.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-5',
      type: 'text',
      title: 'Zeros of $f\'(x)$',
      promptText:
        'What do the $x$-intercepts on a graph of $f\'(x)$ represent about $f(x)$?',
      promptImage: '',
      placeholder:
        'Explain what they tell you about the original function, and mention any caution if needed.',
      teacherAnswer:
        'The $x$-intercepts of $f\'(x)$ are the points where $f\'(x)=0$. These correspond to stationary points on the graph of $f(x)$, where the tangent is horizontal. They may be local maxima, local minima, or stationary points of inflection, so more information is needed before deciding which.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-6',
      type: 'text-and-drawing',
      title: 'Tangent and normal',
      promptText:
        'What is the difference between a tangent and a normal to a curve? Sketch a curve with both lines drawn at the same point, and explain using an example where the tangent gradient is $2$.',
      promptImage: '',
      placeholder:
        'Draw a small sketch, then explain the relationship between the two gradients using the example.',
      teacherAnswer:
        'Tangent:\nThe tangent is the line that touches the curve at the point and follows its direction there.\n\nNormal:\nThe normal is the line perpendicular to the tangent at the same point.\n\nExample:\nIf the tangent gradient is $2$, then the normal gradient is $-\\frac{1}{2}$. So if the tangent rises $2$ for every $1$ across, the normal falls $1$ for every $2$ across.',
      teacherAnswerImage: differentiationImages.u6Answer.src,
    },
    {
      id: 'differentiation-u-7',
      type: 'text',
      title: 'Core derivative facts',
      promptText:
        'State the derivatives of $e^x$, $\\sin x$, $\\cos x$, and $\\ln x$.',
      promptImage: '',
      placeholder:
        'List the four derivative results clearly.',
      teacherAnswer:
        '$\\frac{d}{dx}(e^x) = e^x$, $\\frac{d}{dx}(\\sin x) = \\cos x$, $\\frac{d}{dx}(\\cos x) = -\\sin x$, and $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$ for $x>0$.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-8',
      type: 'text-and-drawing',
      title: 'Chain rule',
      promptText:
        'When is the chain rule needed and what is the formula for it?',
      promptImage: '',
      placeholder:
        'Explain when a function is composite, then state the formula clearly.',
      teacherAnswer:
        'The chain rule is needed when one function is inside another, so the function is composite.\n\nFormula:\n$\\frac{d}{dx}[f(g(x))] = f\'(g(x))\\,g\'(x)$.\n\nFor example, in $(3x-1)^5$, the outside function is “raise to the power $5$” and the inside function is $3x-1$. You differentiate the outside, then multiply by the derivative of the inside.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-9',
      type: 'text-and-drawing',
      title: 'Product rule',
      promptText:
        'When is the product rule needed and what is the formula for it?',
      promptImage: '',
      placeholder:
        'Explain when you use it, then state the formula clearly.',
      teacherAnswer:
        'The product rule is needed when two functions of $x$ are multiplied together.\n\nFormula:\n$\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$.\n\nFor example, if a function looks like $(x^2+1)\\sin x$, it is a product of two separate functions, so the product rule is appropriate.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-10',
      type: 'text-and-drawing',
      title: 'Quotient rule',
      promptText:
        'What is the formula for the quotient rule? When is it better to use than the product rule?',
      promptImage: '',
      placeholder:
        'State the formula, then explain when it is more useful.',
      teacherAnswer:
        'Formula than the product rule?',
      promptImage: '',
      placeholder:
        'State the formula, then explain when it is more useful.',
      teacherAnswer:
        'Formula:\n$\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$.\n\nWhen it is better:\nIt is better to use when the denominator of the function is already fairly complicated and would become even more complicated if raising it to a negative power.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-11',
      type: 'text',
      title: 'Second derivative',
      promptText:
        'What does the second derivative $f\'\'(x)$ represent, and how can it help describe the shape of a graph?',
      promptImage: '',
      placeholder:
        'Explain the meaning of the second derivative in words.',
      teacherAnswer:
        'The second derivative is the rate of change of the first derivative, so it tells you how the gradient is changing. It helps describe the shape of a graph: if $f\'\'(x) > 0$, the graph is concave up, and if $f\'\'(x) < 0$, the graph is concave down.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-12',
      type: 'multiple-choice',
      title: 'Before and after',
      promptText:
        'If $f\'(x)$ changes from positive to negative as $x$ passes through $a$, what does this suggest about $f(x)$ at $x=a$?',
      options: [
        'A local minimum',
        'A local maximum',
        'A point of inflection',
        'No special feature',
      ],
      correctOption: 'A local maximum',
      promptImage: '',
      placeholder:
        'Use the sign change of the derivative to classify the point.',
      teacherAnswer:
        'If $f\'(x)$ changes from positive to negative, the function changes from increasing to decreasing, so there is a local maximum at $x=a$.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-13',
      type: 'text-and-drawing',
      title: 'Second derivative test',
      promptText:
        'What does $f\'\'(x) < 0$ suggest when $f\'(x) = 0$, and why?',
      promptImage: '',
      placeholder:
        'Explain what this tells you about the stationary point, and support your answer with a quick sketch.',
      teacherAnswer:
        'Result:\nIf $f\'(x) = 0$, the point is stationary. If also $f\'\'(x) < 0$, this suggests the stationary point is a local maximum.\n\nWhy:\nA negative second derivative means the graph is concave down at that point, so the curve has a peak shape there.',
      teacherAnswerImage: "",
    },
    {
      id: 'differentiation-u-14',
      type: 'text-and-drawing',
      title: 'Second derivative',
      promptText:
        'What is a point of inflection? What do “concave up” and “concave down” mean? Sketch a graph that shows these ideas.',
      promptImage: '',
      placeholder:
        'Define the terms clearly, then support them with a labelled sketch.',
      teacherAnswer:
        'Point of inflection:\nA point of inflection is a point where the concavity changes.\n\nConcave up:\nThe graph bends upwards and typically has $f\'\'(x) > 0$.\n\nConcave down:\nThe graph bends downwards and typically has $f\'\'(x) < 0$.\n\nImportant caution:\n$f\'\'(x)=0$ by itself is not enough to guarantee a point of inflection. The concavity must actually change.',
      teacherAnswerImage: differentiationImages.u14Answer.src,
    },
    {
      id: 'differentiation-u-15',
      type: 'multiple-choice',
      title: 'Optimisation',
      promptText:
        'A farmer wants to use 80 metres of fencing to make a rectangular pen against a straight wall, so only three sides need fencing. He wants to make the area of the pen as large as possible.\n\nWhy is this question linked to differentiation?',
      promptImage: '',
      placeholder:
        'Choose the reason this becomes a differentiation problem.',
      options: [
        'Because you are trying to maximise or minimise a quantity',
        'Because you need to solve a quadratic equation only',
        'Because you need to find the gradient of a tangent to a graph',
        'Because differentiation is the only way to find the perimeter',
      ],
      correctOption: 'Because you are trying to maximise or minimise a quantity',
      teacherAnswer:
        'This is linked to differentiation because optimisation is about finding the maximum or minimum possible value of some quantity. In this case, you would usually be trying to maximise the area of the pen subject to a restriction.',
      teacherAnswerImage: '',
    },
    {
      id: 'differentiation-u-16',
      type: 'text',
      title: 'Kinematics',
      promptText:
        'In kinematics, how are displacement $s$, velocity $v$, acceleration $a$, and total distance travelled connected?',
      promptImage: '',
      placeholder:
        'State the derivative relationships and explain the difference between displacement and total distance.',
      teacherAnswer:
        'Velocity is the derivative of displacement, so $v = \\frac{ds}{dt}$. Acceleration is the derivative of velocity, so $a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$. Displacement from $t_1$ to $t_2$ is given by $\\int_{t_1}^{t_2} v\\,dt$, while total distance travelled is found by $\\int_{t_1}^{t_2} |v|\\,dt$. Speed is the magnitude of velocity.',
      teacherAnswerImage: '',
    },

    {
  id: 'differentiation-u-17',
  type: 'text',
  title: 'Continuity and differentiability',
  promptText:
    'What is the difference between continuity and differentiability at a point? Can a function be continuous but not differentiable?',
  promptImage: '',
  placeholder:
    'Explain both ideas clearly, and describe the relationship between them.',
  teacherAnswer:
    'Continuity means there is no break in the graph at the point. Differentiability means the function has a well-defined tangent gradient there. A function can be continuous but not differentiable, for example at a sharp corner or cusp. If a function is differentiable at a point, then it must be continuous there, but continuity alone does not guarantee differentiability.',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-18',
  type: 'text',
  title: 'Higher derivatives',
  promptText:
    'What do $f\'\'(x)$, $f\'\'\'(x)$, and $\\frac{d^n y}{dx^n}$ mean?',
  promptImage: '',
  placeholder:
    'Explain what each notation represents.',
  teacherAnswer:
    '$f\'\'(x)$ is the second derivative, so it is the derivative of the first derivative. $f\'\'\'(x)$ is the third derivative, so it is the derivative of the second derivative. More generally, $\\frac{d^n y}{dx^n}$ means the $n$th derivative of $y$ with respect to $x$.',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-19',
  type: 'multiple-choice',
  title: 'Indeterminate forms',
  promptText:
    'Which of the following pairs are both indeterminate forms?',
  options: [
    '$\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$',
    '$\\frac{5}{0}$ and $\\frac{0}{7}$',
    '$\\frac{0}{0}$ and $\\frac{5}{0}$',
    '$\\frac{\\infty}{0}$ and $\\frac{0}{\\infty}$',
  ],
  correctOption: '$\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$',
  promptImage: '',
  placeholder:
    'Choose the correct pair.',
  teacherAnswer:
    '$\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ are indeterminate forms because they do not by themselves determine a unique limit. Different functions can produce different answers even though the form looks the same.',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-20',
  type: 'text',
  title: 'L’Hôpital’s rule',
  promptText:
    'When can L’Hôpital’s rule be used, and what is its purpose?',
  promptImage: '',
  placeholder:
    'Explain the type of limit it is used for and what it helps you do.',
  teacherAnswer:
    'L’Hôpital’s rule can be used when a limit gives an indeterminate form such as $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$. Its purpose is to turn the original limit into a simpler one by differentiating the numerator and denominator separately.',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-21',
  type: 'text',
  title: 'Implicit differentiation',
  promptText:
    'In the equation $x^2 + y^2 = 25$, why does $x^2$ differentiate to $2x$ but $y^2$ differentiate to $2y\\frac{dy}{dx}$?',
  promptImage: '',
  placeholder:
    'Explain why the two terms are treated differently when differentiating with respect to $x$.',
  teacherAnswer:
    'We are differentiating the implicit equation with respect to $x$.\n\n$x^2$ differentiates to $2x$ because it is written directly in terms of $x$.\n\nFor $y^2$, $y$ depends on $x$, so we use the chain rule:\n\n$\\frac{d}{dx}(y^2) = \\frac{d}{dy}(y^2) \\times \\frac{dy}{dx}$\n$\\frac{d}{dx}(y^2) = 2y \\times \\frac{dy}{dx}$',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-22',
  type: 'text',
  title: 'Related rates',
  promptText:
    'If $\\frac{dA}{dt} = 5$ and $\\frac{dB}{dt} = 3$, what other derivatives can we calculate?',
  promptImage: '',
  placeholder:
    'Use the fact that all the variables are related through time.',
  teacherAnswer:
    'We can calculate by finding the reciprocal:\n\n$\\frac{dt}{dA} = \\frac{1}{5}$\n$\\frac{dt}{dB} = \\frac{1}{3}$\n\nThen using multiplication of related derivatives:\n\n$\\frac{dA}{dB} = \\frac{dA}{dt} \\times \\frac{dt}{dB} = 5 \\times \\frac{1}{3} = \\frac{5}{3}$\n\n$\\frac{dB}{dA} = \\frac{dB}{dt} \\times \\frac{dt}{dA} = 3 \\times \\frac{1}{5} = \\frac{3}{5}$',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-23',
  type: 'text',
  title: 'Inverse trig notation',
  promptText:
    'What is the difference between $\\cos^{-1}(x)$ and $(\\cos(x))^{-1}$?',
  promptImage: '',
  placeholder:
    'Explain what each notation means.',
  teacherAnswer:
    '$\\cos^{-1}(x)$ means the inverse cosine function, also written as $\\arccos(x)$. It asks for the angle whose cosine is $x$. But $(\\cos(x))^{-1}$ means the reciprocal of $\\cos(x)$, so it is $\\frac{1}{\\cos(x)} = \\sec(x)$. They are completely different meanings.',
  teacherAnswerImage: '',
},
{
  id: 'differentiation-u-24',
  type: 'text',
  title: 'Derivative of $a^x$',
  promptText:
    'Why is the derivative of $a^x$ equal to $a^x\\ln(a)$?',
  promptImage: '',
  placeholder:
    'Show the proof carefully with each line following from the previous one.',
  teacherAnswer:
    'Let $y = a^x$\n\n$y = e^{\\ln(a^x)}$\n$y = e^{x\\ln(a)}$\n\nDifferentiate both sides with respect to $x$:\n\n$\\frac{dy}{dx} = \\frac{d}{dx}\\left(e^{x\\ln(a)}\\right)$\n$\\frac{dy}{dx} = e^{x\\ln(a)} \\times \\frac{d}{dx}(x\\ln(a))$\n$\\frac{dy}{dx} = e^{x\\ln(a)} \\times \\ln(a)$\n\nSince $e^{x\\ln(a)} = a^x$,\n\n$\\frac{dy}{dx} = a^x\\ln(a)$',
  teacherAnswerImage: '',
},
  ],

'method-selection': [
  {
    id: 'differentiation-m-1',
    type: 'multiple-choice',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $f(x)=(2x^2+5)^3$.\n\nWhat process would you use to solve this?',
    options: [
      'Use the product rule',
      'Expand the brackets',
      'Use the chain rule',
      'Integrate by parts',
    ],
    correctOption: 'Use the chain rule',
    promptImage: '',
    placeholder:
      'Choose the best method to start the differentiation.',
    teacherAnswer:
      'Use the chain rule because this is a function inside a function.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-2',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\frac{2x^2+3x-1}{x}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Rearrange the function first by splitting the fraction:\n$y=2x+3-\\frac{1}{x}$.\n\nThen rewrite the last term as $x^{-1}$ if you want.\n\nAfter that, differentiate term by term.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-3',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=(x^2+1)\\sin x$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the product rule.\n\nTreat the function as two factors multiplied together, for example:\n$u=x^2+1$ and $v=\\sin x$.\n\nThen use:\n$\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-4',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $f(x)=\\frac{3x^2}{5x-1}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'There are two sensible approaches.\n\nMethod 1:\nUse the quotient rule:\n$\\frac{d}{dx}\\left(\\frac{u}{v}\\right)=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$\n\nMethod 2:\nRewrite the function as $3x^2(5x-1)^{-1}$, then use the product rule together with the chain rule.\n\nBoth methods work, but the quotient rule would be easier here.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-5',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=(2x-1)(x^2+4)$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Expand the brackets first.\n\nThat turns the function into a polynomial, which is then quicker to differentiate term by term.\n\nYou could use the product rule, but expanding first would be simpler here.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-6',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\cosec(3x+5)$.\n\nThe formula booklet gives $\\frac{d}{dx}(\\cosec x)=-\\cosec x\\cot x$. How would you apply this formula here?',
    promptImage: '',
    placeholder:
      'Explain how you would apply the given formula.',
    teacherAnswer:
      'Let $u=3x+5$.\n\nUse the formula on the outside function first:\n$\\frac{d}{dx}(\\cosec u)=-\\cosec u\\cot u\\times\\frac{du}{dx}$\n\nSo:\n$\\frac{dy}{dx}=-\\cosec(3x+5)\\cot(3x+5)\\times 3$\n\nTherefore:\n$\\frac{dy}{dx}=-3\\cosec(3x+5)\\cot(3x+5)$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-7',
    type: 'text',
    title: 'Find an equation',
    promptText:
      'For the curve $y=\\ln(3x-1)$, find the equation of the tangent at the point where $x=2$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Describe the order of steps rather than doing every calculation.',
    teacherAnswer:
      'First differentiate the function to get the gradient function.\n\nThen substitute $x=2$ into the derivative to find the gradient of the tangent.\n\nNext substitute $x=2$ into the original equation to find the point on the curve.\n\nFinally use the point-gradient form of a line:\n$y-y_1=m(x-x_1)$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-8',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\tan^{-1}(2x-1)$.\n\nThe formula booklet gives $\\frac{d}{dx}(\\tan^{-1}x)=\\frac{1}{1+x^2}$. How would you apply this formula here?',
    promptImage: '',
    placeholder:
      'Explain how you would apply the given formula.',
    teacherAnswer:
      'Let $u=2x-1$.\n\nUse the formula on the outside function first:\n$\\frac{d}{dx}(\\tan^{-1}u)=\\frac{1}{1+u^2}\\times\\frac{du}{dx}$\n\nSo:\n$\\frac{dy}{dx}=\\frac{1}{1+(2x-1)^2}\\times 2$\n\nTherefore:\n$\\frac{dy}{dx}=\\frac{2}{1+(2x-1)^2}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-9',
    type: 'text',
    title: 'Sketching',
    promptText:
      'Here is a sketch of $f(x)$.\n\nIf you were asked to sketch $f\'(x)$, what features of the original graph should you identify first before you start drawing?',
    promptImage: differentiationImages.m9question.src,
    placeholder:
      'Explain what you would look for on the graph of $f(x)$ first.',
    teacherAnswer:
      'First identify the stationary points on $f(x)$, because these become the $x$-intercepts of $f\'(x)$.\n\nThen identify where $f(x)$ is increasing and decreasing, because that tells you where $f\'(x)$ is positive or negative.\n\nAlso look at how steep the graph is, because steeper parts of $f(x)$ correspond to larger positive or negative values of $f\'(x)$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-10',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=5^{3x-2}$.\n\nThe formula booklet gives $\\frac{d}{dx}(a^x)=a^x\\ln(a)$. How would you apply this formula here?',
    promptImage: '',
    placeholder:
      'Explain how you would apply the given formula.',
    teacherAnswer:
      'Let $u=3x-2$.\n\nUse the formula on the outside function first:\n$\\frac{d}{dx}(5^u)=5^u\\ln(5)\\times\\frac{du}{dx}$\n\nSo:\n$\\frac{dy}{dx}=5^{3x-2}\\ln(5)\\times 3$\n\nTherefore:\n$\\frac{dy}{dx}=3\\times 5^{3x-2}\\ln(5)$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-11',
    type: 'text',
    title: 'Find a gradient',
    promptText:
      'For the curve $y=e^x\\cos x$, find the gradient of the normal at $x=\\pi$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'First differentiate the curve using the product rule.\n\nThen substitute $x=\\pi$ to find the gradient of the tangent.\n\nFinally use the fact that the normal is perpendicular to the tangent, so the normal gradient is the negative reciprocal of the tangent gradient.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-12',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\log_3(2x+1)$.\n\nThe formula booklet gives $\\frac{d}{dx}(\\log_a x)=\\frac{1}{x\\ln(a)}$. How would you apply this formula here?',
    promptImage: '',
    placeholder:
      'Explain how you would apply the given formula.',
    teacherAnswer:
      'Let $u=2x+1$.\n\nUse the formula on the outside function first:\n$\\frac{d}{dx}(\\log_3 u)=\\frac{1}{u\\ln(3)}\\times\\frac{du}{dx}$\n\nSo:\n$\\frac{dy}{dx}=\\frac{1}{(2x+1)\\ln(3)}\\times 2$\n\nTherefore:\n$\\frac{dy}{dx}=\\frac{2}{(2x+1)\\ln(3)}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-13',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=e^x\\sec(2x-1)$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the product rule because the function has two factors.\n\nWhen differentiating $\\sec(2x-1)$, use the reciprocal trig formula and then the chain rule because the angle is $2x-1$.\n\nSo this question needs the product rule together with a formula and the chain rule.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-14',
    type: 'text',
    title: 'Reading graphs',
    promptText:
      'Here is a sketch of $f\'(x)$.\n\nIf you were asked about local maxima, local minima, and points of inflection of $f(x)$, what should you look for first?',
    promptImage: differentiationImages.m9question.src,
    placeholder:
      'Explain how you would read information about $f(x)$ from the graph of $f\'(x)$.',
    teacherAnswer:
      'For local maxima and minima of $f(x)$, first look for where $f\'(x)=0$ and check whether $f\'(x)$ changes sign there.\n\nFor points of inflection of $f(x)$, look for turning points on the graph of $f\'(x)$, because these are where $f\'\'(x)=0$ and may change sign.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-15',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $x^2+xy+y^2=7$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use implicit differentiation.\n\nDifferentiate every term with respect to $x$.\n\nFor the $xy$ term you will need the product rule, and for the $y$ terms you will need the chain rule because $y$ depends on $x$.\n\nThen rearrange to make $\\frac{dy}{dx}$ the subject.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-16',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\frac{2x+1}{x^2}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Rearrange the function first.\n\nSplit it into separate terms and rewrite with powers:\n$y=2x^{-1}+x^{-2}$.\n\nThen differentiate term by term.\n\nYou could use the quotient rule, but rearranging first is easier here.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-17',
    type: 'text',
    title: 'Optimisation',
    promptText:
      'A rectangle is enclosed on three sides by $30$ m of fencing, with the fourth side along a wall.\n\nWhat would you do first, then describe the following steps.',
    promptImage: '',
    placeholder:
      'Explain how you would model the area and what you would do after that.',
    teacherAnswer:
      'Let the two widths be $x$ metres each and the length along the wall be $y$ metres.\n\nFirst use the fencing condition:\n$2x+y=30$\nso\n$y=30-2x$.\n\nThen form an area function in one variable:\n$A=xy=x(30-2x)$.\n\nNext differentiate the area function.\n\nThen solve $\\frac{dA}{dx}=0$ to find the stationary point.\n\nAfter that, check that it gives a maximum and then calculate the corresponding area.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-18',
    type: 'multiple-choice',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=x^x$.\n\nWhat process would you use to solve this?',
    options: [
      'Use the product rule',
      'Take natural logarithms of both sides',
      'Use the chain rule',
      'Differentiate the base and exponent separately',
    ],
    correctOption: 'Take natural logarithms of both sides',
    promptImage: '',
    placeholder:
      'Choose the best first step.',
    teacherAnswer:
      'Take natural logarithms of both sides first:\n$\\ln y=\\ln(x^x)=x\\ln x$.\n\nThen differentiate implicitly.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-19',
    type: 'text',
    title: 'Find the limit',
    promptText:
      'Find the limit $\\lim_{x\\to2}\\frac{x^2-4}{x-2}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use algebra first.\n\nFactorise the numerator:\n$x^2-4=(x-2)(x+2)$.\n\nThen cancel the common factor and substitute $x=2$ into the simplified expression.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-20',
    type: 'text',
    title: 'Related rates',
    promptText:
      'A ladder of length $10$ m is leaning against a wall. The bottom is moving away from the wall at $0.5\\text{ m s}^{-1}$. How fast is the top of the ladder moving down the wall when the bottom is $6$ m from the wall?\n\nWhat equation should you form from the question, and what should you differentiate it with respect to?',
    promptImage: '',
    placeholder:
      'Write the equation linking the two lengths, and say what variable you differentiate with respect to.',
    teacherAnswer:
      'Let $x$ be the distance of the bottom from the wall and $y$ be the height of the top above the ground.\n\nThe equation to form is:\n$x^2+y^2=10^2$.\n\nYou should differentiate this equation with respect to time $t$.\n\nThat will link $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$ so you can find how fast the top is moving down the wall.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-21',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=e^{2x^2-3x}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the chain rule.\n\nThe outside function is the exponential function and the inside function is $2x^2-3x$.\n\nDifferentiate the outside, then multiply by the derivative of the inside.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-22',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\frac{\\sec x}{x^2+1}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the quotient rule.\n\nThere is a function on the top and a different function on the bottom.\n\nWhen differentiating the numerator, use the reciprocal trig formula for $\\sec x$.\n\nSo this needs the quotient rule together with the formula for differentiating $\\sec x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-23',
    type: 'text',
    title: 'Find the limit',
    promptText:
      'Find the limit $\\lim_{x\\to0}\\frac{\\tan x-x}{1-\\cos x}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'First substitute $x=0$ to check the form of the limit.\n\nIt gives $\\frac{0}{0}$, so L’Hôpital’s rule is appropriate.\n\nDifferentiate the numerator and denominator separately.\n\nIf the new limit is still indeterminate, apply L’Hôpital’s rule again, then substitute the value.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-24',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=x^2\\tan^{-1}x$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the product rule because the function has two factors.\n\nWhen differentiating $\\tan^{-1}x$, use the inverse trig formula from the booklet.\n\nSo this question needs the product rule together with the formula for differentiating $\\tan^{-1}x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-25',
    type: 'text',
    title: 'First principles',
    promptText:
      'Show from first principles that the derivative of $f(x)=x^4$ is $4x^3$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Describe the structure of a first-principles solution.',
    teacherAnswer:
      'Use the definition:\n$f\'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$.\n\nThen substitute $f(x)=x^4$, expand $(x+h)^4$, simplify, factor out $h$, and take the limit as $h\\to0$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-26',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\frac{1}{\\sqrt{x}}+\\frac{3}{x^2}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Rewrite the function using powers first:\n$y=x^{-1/2}+3x^{-2}$.\n\nThen differentiate term by term using the power rule.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-27',
    type: 'text',
    title: 'Classifying',
    promptText:
      'You differentiate a function and find a stationary point. The question then asks you to justify whether it is a maximum or minimum.\n\nWhat methods could you use from there?',
    promptImage: '',
    placeholder:
      'Explain the main ways of justifying the nature of the stationary point.',
    teacherAnswer:
      'Once you have found the stationary point by solving $f\'(x)=0$, there are two common ways to justify its nature.\n\nMethod 1:\nUse the second derivative test. If $f\'\'(x)>0$ it is a local minimum, and if $f\'\'(x)<0$ it is a local maximum.\n\nMethod 2:\nUse a sign-change test on $f\'(x)$ and check whether the function changes from increasing to decreasing or from decreasing to increasing.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-28',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $x+\\tan^{-1}(y)=y^2$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use implicit differentiation.\n\nDifferentiate every term with respect to $x$.\n\nFor $\\tan^{-1}(y)$, use the inverse trig formula together with the chain rule, because $y$ depends on $x$.\n\nThat gives a term involving $\\frac{dy}{dx}$.\n\nThen rearrange to make $\\frac{dy}{dx}$ the subject.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-29',
    type: 'text',
    title: 'Find the limit',
    promptText:
      'Find the limit $\\lim_{x\\to0}\\frac{\\sqrt{x+4}-2}{x}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'You can use L’Hôpital here because the limit gives the indeterminate form $\\frac{0}{0}$.\n\nHowever, the cleaner method is algebraic rationalising.\n\n$\\frac{\\sqrt{x+4}-2}{x}$\n$=\\frac{\\sqrt{x+4}-2}{x}\\times\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$\n$=\\frac{x+4-4}{x(\\sqrt{x+4}+2)}$\n$=\\frac{x}{x(\\sqrt{x+4}+2)}$\n$=\\frac{1}{\\sqrt{x+4}+2}$\n$\\to\\frac{1}{2+2}=\\frac{1}{4}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-30',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\frac{x^2+1}{x}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'A better method is to rearrange first.\n\nSplit the fraction:\n$y=x+\\frac{1}{x}$\nthen rewrite as:\n$y=x+x^{-1}$.\n\nAfter that, differentiate term by term.\n\nYou could use the quotient rule, but rearranging first is simpler here.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-31',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=x^2\\times 3^x$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the product rule because the function has two factors.\n\nWhen differentiating $3^x$, use the formula from the booklet:\n$\\frac{d}{dx}(a^x)=a^x\\ln(a)$.\n\nSo this question needs the product rule together with the formula for differentiating $a^x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-32',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\frac{\\log_2 x}{x+1}$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the quotient rule.\n\nWhen differentiating the numerator, use the formula from the booklet:\n$\\frac{d}{dx}(\\log_a x)=\\frac{1}{x\\ln(a)}$.\n\nSo this question needs the quotient rule together with the formula for differentiating $\\log_a x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-33',
    type: 'text',
    title: 'Differentiate this',
    promptText:
      'Find the derivative of $y=\\cosec(x^2+1)$.\n\nWhat process would you use to solve this?',
    promptImage: '',
    placeholder:
      'Explain the process you would use.',
    teacherAnswer:
      'Use the reciprocal trig formula together with the chain rule.\n\nDifferentiate the outside $\\cosec(\\,)$ first using the booklet formula, then multiply by the derivative of the inside expression $x^2+1$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-34',
    type: 'text',
    title: 'Rates of change',
    promptText:
      'A conical tank with its vertex down is $8$ m in diameter and $12$ m deep. Water flows in at $10\\text{ m}^3\\text{/min}$, and the question asks for the rate of change of the water depth when the water is $6$ m deep.\n\nWhat rate of change are you given in the question, what rate of change is the answer looking for and what rate of change do you need to work out to achieve that? How can you find that rate of change?',
    promptImage: '',
    placeholder:
      'Identify the given rate, the required rate, the intermediate rate, and how to obtain it.',
    teacherAnswer:
      'The given rate of change is:\n$\\frac{dV}{dt}=10$.\n\nThe question is asking for:\n$\\frac{dh}{dt}$.\n\nTo connect these, you need:\n$\\frac{dV}{dh}$.\n\nYou can find that by first writing the volume entirely in terms of $h$, and then differentiating the volume with respect to $h$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-m-35',
    type: 'text',
    title: 'Modelling before calculus',
    promptText:
      'A conical tank with its vertex down is $8$ m in diameter and $12$ m deep. Water flows in at a constant rate, and the question asks for the rate of change of the water depth.\n\nWhy is it not helpful to differentiate $V=\\frac13\\pi r^2h$ directly with respect to $h$? Why is implicit differentiation not useful here? What should be done instead?',
    promptImage: '',
    placeholder:
      'Explain why the original formula is not yet in a useful form and what should be done first.',
    teacherAnswer:
      'Implicit differentiation is not useful here because that would still leave $r$ terms and $\\frac{dr}{dh}$ in the derivative. We have not been given $\\frac{dr}{dh}$.\n\nSo first we need to write $r$ in terms of $h$.\n\nFor the full cone, the radius is $4$ and the height is $12$, so:\n$\\frac{r}{h}=\\frac{4}{12}=\\frac13$\nwhich gives:\n$r=\\frac{h}{3}$.\n\nNow substitute this into the volume formula:\n$V=\\frac13\\pi\\left(\\frac{h}{3}\\right)^2h$.\n\nThis rewrites the volume entirely in terms of $h$, so it can then be differentiated with respect to $h$.',
    teacherAnswerImage: '',
  },
],

  accuracy: [
  {
    id: 'differentiation-a-1',
    type: 'text-and-drawing',
    title: 'Question 1',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=4x^3-5x^2+7x-9$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Differentiate term by term.\n\n$\\frac{d}{dx}(4x^3)=12x^2$\n$\\frac{d}{dx}(-5x^2)=-10x$\n$\\frac{d}{dx}(7x)=7$\n$\\frac{d}{dx}(-9)=0$\n\nSo,\n$\\frac{dy}{dx}=12x^2-10x+7$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-2',
    type: 'text-and-drawing',
    title: 'Question 2',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=(3x-2)^5$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the chain rule.\n\nLet $u=3x-2$.\nThen $y=u^5$.\n\n$\\frac{dy}{du}=5u^4$\n$\\frac{du}{dx}=3$\n\nSo,\n$\\frac{dy}{dx}=5u^4\\times 3$\n$\\frac{dy}{dx}=15u^4$\n$\\frac{dy}{dx}=15(3x-2)^4$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-3',
    type: 'text-and-drawing',
    title: 'Question 3',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=(2x^2-1)e^x$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the product rule.\n\nLet $u=2x^2-1$ and $v=e^x$.\n\n$\\frac{du}{dx}=4x$\n$\\frac{dv}{dx}=e^x$\n\n$\\frac{dy}{dx}=u\\frac{dv}{dx}+v\\frac{du}{dx}$\n$\\frac{dy}{dx}=(2x^2-1)e^x+e^x(4x)$\n\nFactorise $e^x$:\n$\\frac{dy}{dx}=e^x(2x^2+4x-1)$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-4',
    type: 'text-and-drawing',
    title: 'Question 4',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=\\frac{x^2+3}{2x-1}$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the quotient rule.\n\nLet $u=x^2+3$ and $v=2x-1$.\n\n$\\frac{du}{dx}=2x$\n$\\frac{dv}{dx}=2$\n\n$\\frac{dy}{dx}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$\n$\\frac{dy}{dx}=\\frac{(2x-1)(2x)-(x^2+3)(2)}{(2x-1)^2}$\n\nExpand the numerator:\n$\\frac{dy}{dx}=\\frac{4x^2-2x-2x^2-6}{(2x-1)^2}$\n$\\frac{dy}{dx}=\\frac{2x^2-2x-6}{(2x-1)^2}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-5',
    type: 'text-and-drawing',
    title: 'Question 5',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=(x-4)(x+5)$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Expand first.\n\n$y=(x-4)(x+5)$\n$y=x^2+5x-4x-20$\n$y=x^2+x-20$\n\nDifferentiate term by term:\n$\\frac{dy}{dx}=2x+1$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-6',
    type: 'text-and-drawing',
    title: 'Question 6',
    promptText:
      'The formula booklet gives $\\frac{d}{dx}(\\cosec x)=-\\cosec x\\cot x$.\n\nFind $\\frac{dy}{dx}$ if $y=\\cosec(2x-1)$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let $u=2x-1$.\nThen $y=\\cosec u$.\n\nUsing the formula booklet:\n$\\frac{d}{du}(\\cosec u)=-\\cosec u\\cot u$\n\nAlso,\n$\\frac{du}{dx}=2$\n\nSo,\n$\\frac{dy}{dx}=-\\cosec u\\cot u\\times 2$\n$\\frac{dy}{dx}=-2\\cosec u\\cot u$\n$\\frac{dy}{dx}=-2\\cosec(2x-1)\\cot(2x-1)$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-7',
    type: 'text-and-drawing',
    title: 'Question 7',
    promptText:
      'Find the equation of the tangent to the curve $y=\\ln(2x+3)$ at the point where $x=1$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'First find the point on the curve.\n\nWhen $x=1$:\n$y=\\ln(2(1)+3)$\n$y=\\ln 5$\n\nSo the point is $(1,\\ln 5)$.\n\nNow differentiate:\n$y=\\ln(2x+3)$\n$\\frac{dy}{dx}=\\frac{1}{2x+3}\\times 2$\n$\\frac{dy}{dx}=\\frac{2}{2x+3}$\n\nAt $x=1$:\n$m=\\frac{2}{2(1)+3}$\n$m=\\frac{2}{5}$\n\nUse point-gradient form:\n$y-\\ln 5=\\frac{2}{5}(x-1)$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-8',
    type: 'text-and-drawing',
    title: 'Question 8',
    promptText:
      'The formula booklet gives $\\frac{d}{dx}(\\sin^{-1}x)=\\frac{1}{\\sqrt{1-x^2}}$.\n\nFind $\\frac{dy}{dx}$ if $y=\\sin^{-1}(3x)$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let $u=3x$.\nThen $y=\\sin^{-1}u$.\n\nUsing the formula booklet:\n$\\frac{d}{du}(\\sin^{-1}u)=\\frac{1}{\\sqrt{1-u^2}}$\n\nAlso,\n$\\frac{du}{dx}=3$\n\nSo,\n$\\frac{dy}{dx}=\\frac{1}{\\sqrt{1-u^2}}\\times 3$\n$\\frac{dy}{dx}=\\frac{3}{\\sqrt{1-u^2}}$\n$\\frac{dy}{dx}=\\frac{3}{\\sqrt{1-9x^2}}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-9',
    type: 'text-and-drawing',
    title: 'Question 9',
    promptText:
      'Find the stationary points of $y=x^3-3x^2-9x+5$ and classify them.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Differentiate:\n$y=x^3-3x^2-9x+5$\n$\\frac{dy}{dx}=3x^2-6x-9$\n\nFactorise:\n$\\frac{dy}{dx}=3(x^2-2x-3)$\n$\\frac{dy}{dx}=3(x-3)(x+1)$\n\nFor stationary points:\n$\\frac{dy}{dx}=0$\nSo,\n$3(x-3)(x+1)=0$\n\nTherefore,\n$x=3$ or $x=-1$\n\nFind the corresponding $y$-values.\n\nWhen $x=-1$:\n$y=(-1)^3-3(-1)^2-9(-1)+5$\n$y=-1-3+9+5$\n$y=10$\n\nWhen $x=3$:\n$y=3^3-3(3^2)-9(3)+5$\n$y=27-27-27+5$\n$y=-22$\n\nNow use the second derivative.\n$\\frac{d^2y}{dx^2}=6x-6$\n\nAt $x=-1$:\n$\\frac{d^2y}{dx^2}=6(-1)-6=-12$\nThis is negative, so $(-1,10)$ is a local maximum.\n\nAt $x=3$:\n$\\frac{d^2y}{dx^2}=18-6=12$\nThis is positive, so $(3,-22)$ is a local minimum.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-10',
    type: 'text-and-drawing',
    title: 'Question 10',
    promptText:
      'Find the gradient of the tangent to the curve $x^2+y^2=13$ at the point $(2,3)$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Differentiate implicitly with respect to $x$:\n\n$\\frac{d}{dx}(x^2)+\\frac{d}{dx}(y^2)=\\frac{d}{dx}(13)$\n$2x+2y\\frac{dy}{dx}=0$\n\nRearrange:\n$2y\\frac{dy}{dx}=-2x$\n$\\frac{dy}{dx}=-\\frac{2x}{2y}$\n$\\frac{dy}{dx}=-\\frac{x}{y}$\n\nAt the point $(2,3)$:\n$\\frac{dy}{dx}=-\\frac{2}{3}$\n\nSo the gradient of the tangent is $-\\frac{2}{3}$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-11',
    type: 'text-and-drawing',
    title: 'Question 11',
    promptText:
      'Show from first principles that the derivative of $f(x)=x^2$ is $2x$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the definition:\n\n$f\'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$\n\nSubstitute $f(x)=x^2$:\n$f\'(x)=\\lim_{h\\to0}\\frac{(x+h)^2-x^2}{h}$\n\nExpand:\n$f\'(x)=\\lim_{h\\to0}\\frac{x^2+2xh+h^2-x^2}{h}$\n\nSimplify:\n$f\'(x)=\\lim_{h\\to0}\\frac{2xh+h^2}{h}$\n\nFactorise $h$:\n$f\'(x)=\\lim_{h\\to0}\\frac{h(2x+h)}{h}$\n\nCancel $h$:\n$f\'(x)=\\lim_{h\\to0}(2x+h)$\n\nAs $h\\to0$, $f\'(x)=2x$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-12',
    type: 'text-and-drawing',
    title: 'Question 12',
    promptText:
      'Find the limit $\\lim_{x\\to4}\\frac{x^2-16}{x-4}$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Direct substitution gives:\n$\\frac{4^2-16}{4-4}=\\frac{0}{0}$\nSo we simplify first.\n\nFactorise the numerator:\n$x^2-16=(x-4)(x+4)$\n\nSo,\n$\\frac{x^2-16}{x-4}=\\frac{(x-4)(x+4)}{x-4}$\n\nCancel the common factor:\n$=x+4$\n\nNow let $x\\to4$:\n$4+4=8$\n\nSo the limit is $8$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-13',
    type: 'text-and-drawing',
    title: 'Question 13',
    promptText:
      'The formula booklet gives $\\frac{d}{dx}(a^x)=a^x\\ln(a)$.\n\nFind $\\frac{dy}{dx}$ if $y=4^{1-2x}$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let $u=1-2x$.\nThen $y=4^u$.\n\nUsing the formula booklet:\n$\\frac{d}{du}(4^u)=4^u\\ln 4$\n\nAlso,\n$\\frac{du}{dx}=-2$\n\nSo,\n$\\frac{dy}{dx}=4^u\\ln 4\\times (-2)$\n$\\frac{dy}{dx}=-2\\times 4^u\\ln 4$\n$\\frac{dy}{dx}=-2\\times 4^{1-2x}\\ln 4$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-14',
    type: 'text-and-drawing',
    title: 'Question 14',
    promptText:
      'The formula booklet gives $\\frac{d}{dx}(\\log_a x)=\\frac{1}{x\\ln(a)}$.\n\nFind $\\frac{dy}{dx}$ if $y=\\log_5(3x-1)$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let $u=3x-1$.\nThen $y=\\log_5 u$.\n\nUsing the formula booklet:\n$\\frac{d}{du}(\\log_5 u)=\\frac{1}{u\\ln 5}$\n\nAlso,\n$\\frac{du}{dx}=3$\n\nSo,\n$\\frac{dy}{dx}=\\frac{1}{u\\ln 5}\\times 3$\n$\\frac{dy}{dx}=\\frac{3}{u\\ln 5}$\n$\\frac{dy}{dx}=\\frac{3}{(3x-1)\\ln 5}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-15',
    type: 'text-and-drawing',
    title: 'Question 15',
    promptText:
      'Find $\\frac{dy}{dx}$ if $x^2+xy+y^2=7$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Differentiate implicitly with respect to $x$:\n\n$\\frac{d}{dx}(x^2)+\\frac{d}{dx}(xy)+\\frac{d}{dx}(y^2)=\\frac{d}{dx}(7)$\n\n$2x+\\left(x\\frac{dy}{dx}+y\\right)+2y\\frac{dy}{dx}=0$\n\nCollect the $\\frac{dy}{dx}$ terms:\n$2x+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0$\n$x\\frac{dy}{dx}+2y\\frac{dy}{dx}=-(2x+y)$\n\nFactorise:\n$\\frac{dy}{dx}(x+2y)=-(2x+y)$\n\nSo,\n$\\frac{dy}{dx}=-\\frac{2x+y}{x+2y}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-16',
    type: 'text-and-drawing',
    title: 'Question 16',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=x^2\\cosec x$.\n\nThe formula booklet gives $\\frac{d}{dx}(\\cosec x)=-\\cosec x\\cot x$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the product rule.\n\nLet $u=x^2$ and $v=\\cosec x$.\n\n$\\frac{du}{dx}=2x$\n$\\frac{dv}{dx}=-\\cosec x\\cot x$\n\nSo,\n$\\frac{dy}{dx}=u\\frac{dv}{dx}+v\\frac{du}{dx}$\n$\\frac{dy}{dx}=x^2(-\\cosec x\\cot x)+\\cosec x(2x)$\n\nTherefore,\n$\\frac{dy}{dx}=2x\\cosec x-x^2\\cosec x\\cot x$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-17',
    type: 'text-and-drawing',
    title: 'Question 17',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=\\frac{\\tan^{-1}x}{x^2+1}$.\n\nThe formula booklet gives $\\frac{d}{dx}(\\tan^{-1}x)=\\frac{1}{1+x^2}$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the quotient rule.\n\nLet $u=\\tan^{-1}x$ and $v=x^2+1$.\n\n$\\frac{du}{dx}=\\frac{1}{1+x^2}$\n$\\frac{dv}{dx}=2x$\n\n$\\frac{dy}{dx}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}$\n$\\frac{dy}{dx}=\\frac{(x^2+1)\\left(\\frac{1}{1+x^2}\\right)-\\tan^{-1}x(2x)}{(x^2+1)^2}$\n\nSimplify:\n$\\frac{dy}{dx}=\\frac{1-2x\\tan^{-1}x}{(x^2+1)^2}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-18',
    type: 'text-and-drawing',
    title: 'Question 18',
    promptText:
      'Find the equation of the normal to the curve $y=xe^{-x}$ at the point where $x=0$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'First find the point on the curve.\n\nWhen $x=0$:\n$y=0\\times e^0=0$\n\nSo the point is $(0,0)$.\n\nNow differentiate using the product rule.\n\nLet $u=x$ and $v=e^{-x}$.\n\n$\\frac{du}{dx}=1$\n$\\frac{dv}{dx}=e^{-x}(-1)=-e^{-x}$\n\n$\\frac{dy}{dx}=u\\frac{dv}{dx}+v\\frac{du}{dx}$\n$\\frac{dy}{dx}=x(-e^{-x})+e^{-x}(1)$\n$\\frac{dy}{dx}=e^{-x}(1-x)$\n\nAt $x=0$:\n$m_{\\text{tangent}}=e^0(1-0)=1$\n\nSo the normal gradient is:\n$m_{\\text{normal}}=-1$\n\nEquation of the normal:\n$y-0=-1(x-0)$\n$y=-x$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-19',
    type: 'text-and-drawing',
    title: 'Question 19',
    promptText:
      'A rectangle is enclosed on three sides by $40$ m of fencing, with the fourth side along a straight wall. Find the maximum possible area.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let the two equal widths be $x$ m and the length along the wall be $y$ m.\n\nThen:\n$2x+y=40$\nSo,\n$y=40-2x$\n\nArea:\n$A=xy$\n$A=x(40-2x)$\n$A=40x-2x^2$\n\nDifferentiate:\n$\\frac{dA}{dx}=40-4x$\n\nFor a maximum:\n$\\frac{dA}{dx}=0$\n$40-4x=0$\n$4x=40$\n$x=10$\n\nThen:\n$y=40-2(10)=20$\n\nMaximum area:\n$A=10\\times 20=200\\text{ m}^2$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-20',
    type: 'text-and-drawing',
    title: 'Question 20',
    promptText:
      'A particle moves in a straight line with displacement $s=t^3-6t^2+9t$ for $t\\ge0$.\n\nFind the times when the particle is at rest, and determine whether the particle changes direction at each time.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Velocity is the derivative of displacement.\n\n$s=t^3-6t^2+9t$\n$v=\\frac{ds}{dt}=3t^2-12t+9$\n\nFactorise:\n$v=3(t^2-4t+3)$\n$v=3(t-1)(t-3)$\n\nAt rest means $v=0$.\nSo,\n$3(t-1)(t-3)=0$\n\nTherefore,\n$t=1$ or $t=3$\n\nNow check the sign of $v$.\n\nFor $0<t<1$, take $t=0.5$:\n$v=3(0.5-1)(0.5-3)$\nThis is positive.\n\nFor $1<t<3$, take $t=2$:\n$v=3(2-1)(2-3)$\nThis is negative.\n\nFor $t>3$, take $t=4$:\n$v=3(4-1)(4-3)$\nThis is positive.\n\nSo the particle changes direction at both $t=1$ and $t=3$.\n\nAt $t=1$, velocity changes from positive to negative.\nAt $t=3$, velocity changes from negative to positive.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-21',
    type: 'text-and-drawing',
    title: 'Question 21',
    promptText:
      'A ladder of length $10$ m is leaning against a wall. The bottom moves away from the wall at $0.5\\text{ m s}^{-1}$. Find how fast the top moves down the wall when the bottom is $6$ m from the wall.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let $x$ be the distance of the bottom from the wall and $y$ be the height of the top above the ground.\n\nUsing Pythagoras:\n$x^2+y^2=10^2$\n$x^2+y^2=100$\n\nDifferentiate with respect to time $t$:\n$2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0$\n\nDivide by $2$:\n$x\\frac{dx}{dt}+y\\frac{dy}{dt}=0$\n\nSo,\n$y\\frac{dy}{dt}=-x\\frac{dx}{dt}$\n$\\frac{dy}{dt}=-\\frac{x}{y}\\frac{dx}{dt}$\n\nWhen $x=6$:\n$6^2+y^2=100$\n$36+y^2=100$\n$y^2=64$\n$y=8$\n\nSubstitute the values:\n$\\frac{dy}{dt}=-\\frac{6}{8}(0.5)$\n$\\frac{dy}{dt}=-\\frac{3}{4}\\times\\frac{1}{2}$\n$\\frac{dy}{dt}=-\\frac{3}{8}\\text{ m s}^{-1}$\n\nSo the top moves down the wall at $\\frac{3}{8}\\text{ m s}^{-1}$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-22',
    type: 'text-and-drawing',
    title: 'Question 22',
    promptText:
      'Find the stationary point of $y=xe^{-x}$ and determine its nature.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Differentiate using the product rule.\n\nLet $u=x$ and $v=e^{-x}$.\n\n$\\frac{du}{dx}=1$\n$\\frac{dv}{dx}=-e^{-x}$\n\nSo,\n$\\frac{dy}{dx}=x(-e^{-x})+e^{-x}(1)$\n$\\frac{dy}{dx}=e^{-x}(1-x)$\n\nFor a stationary point:\n$\\frac{dy}{dx}=0$\n$e^{-x}(1-x)=0$\n\nSince $e^{-x}\\neq0$,\n$1-x=0$\n$x=1$\n\nFind the $y$-value:\n$y=1\\cdot e^{-1}=\\frac{1}{e}$\n\nNow use the second derivative.\n\n$\\frac{dy}{dx}=e^{-x}(1-x)$\n\nDifferentiate again using the product rule:\n$\\frac{d^2y}{dx^2}=(-e^{-x})(1-x)+e^{-x}(-1)$\n$\\frac{d^2y}{dx^2}=e^{-x}(x-1)-e^{-x}$\n$\\frac{d^2y}{dx^2}=e^{-x}(x-2)$\n\nAt $x=1$:\n$\\frac{d^2y}{dx^2}=e^{-1}(1-2)=-e^{-1}$\nThis is negative, so the stationary point is a local maximum.\n\nTherefore, the stationary point is $\\left(1,\\frac{1}{e}\\right)$ and it is a local maximum.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-23',
    type: 'text-and-drawing',
    title: 'Question 23',
    promptText:
      'Find the limit $\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Substitute $x=0$:\n$\\frac{e^0-1-0}{0^2}=\\frac{1-1}{0}=\\frac{0}{0}$\nSo L’Hôpital’s rule can be used.\n\nDifferentiate numerator and denominator:\n$\\lim_{x\\to0}\\frac{e^x-1}{2x}$\n\nSubstitute $x=0$ again:\n$\\frac{e^0-1}{0}=\\frac{0}{0}$\nSo use L’Hôpital’s rule again.\n\nDifferentiate numerator and denominator again:\n$\\lim_{x\\to0}\\frac{e^x}{2}$\n\nNow substitute $x=0$:\n$\\frac{e^0}{2}=\\frac{1}{2}$\n\nSo the limit is $\\frac{1}{2}$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-24',
    type: 'text-and-drawing',
    title: 'Question 24',
    promptText:
      'Find the limit $\\lim_{x\\to0}\\frac{\\sqrt{9+x}-3}{x}$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Direct substitution gives:\n$\\frac{\\sqrt{9}-3}{0}=\\frac{0}{0}$\nSo rationalise the numerator.\n\n$\\frac{\\sqrt{9+x}-3}{x}=\\frac{\\sqrt{9+x}-3}{x}\\times\\frac{\\sqrt{9+x}+3}{\\sqrt{9+x}+3}$\n\n$=\\frac{(9+x)-9}{x(\\sqrt{9+x}+3)}$\n\n$=\\frac{x}{x(\\sqrt{9+x}+3)}$\n\n$=\\frac{1}{\\sqrt{9+x}+3}$\n\nNow let $x\\to0$:\n$\\frac{1}{\\sqrt{9}+3}=\\frac{1}{3+3}=\\frac{1}{6}$\n\nSo the limit is $\\frac{1}{6}$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-25',
    type: 'text-and-drawing',
    title: 'Question 25',
    promptText:
      'A spherical balloon is being inflated so that its volume increases at $12\\pi\\text{ cm}^3\\text{/s}$. Find the rate of increase of the radius when the radius is $2$ cm.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let the radius be $r$ cm and the volume be $V\\text{ cm}^3$.\n\nFor a sphere,\n$V=\\frac{4}{3}\\pi r^3$\n\nDifferentiate with respect to time $t$:\n$\\frac{dV}{dt}=\\frac{4}{3}\\pi\\times 3r^2\\frac{dr}{dt}$\n$\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}$\n\nSubstitute $\\frac{dV}{dt}=12\\pi$ and $r=2$:\n$12\\pi=4\\pi(2)^2\\frac{dr}{dt}$\n$12\\pi=16\\pi\\frac{dr}{dt}$\n\nSo,\n$\\frac{dr}{dt}=\\frac{12\\pi}{16\\pi}$\n$\\frac{dr}{dt}=\\frac{3}{4}\\text{ cm/s}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-26',
    type: 'text-and-drawing',
    title: 'Question 26',
    promptText:
      'A square sheet of card has side length $20$ cm. Squares of side length $x$ cm are cut from each corner, and the sides are folded up to make an open box.\n\nFind the value of $x$ that gives the maximum volume, and find that maximum volume.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'After cutting out squares of side $x$ cm:\n\nHeight of box $=x$\nLength of base $=20-2x$\nWidth of base $=20-2x$\n\nSo the volume is:\n$V=x(20-2x)^2$\n\nExpand:\n$V=x(400-80x+4x^2)$\n$V=400x-80x^2+4x^3$\n\nDifferentiate:\n$\\frac{dV}{dx}=400-160x+12x^2$\n\nFor a maximum or minimum:\n$\\frac{dV}{dx}=0$\n$400-160x+12x^2=0$\n\nDivide by $4$:\n$100-40x+3x^2=0$\n$3x^2-40x+100=0$\n\nSolve:\n$x=\\frac{40\\pm\\sqrt{(-40)^2-4(3)(100)}}{2(3)}$\n$x=\\frac{40\\pm\\sqrt{1600-1200}}{6}$\n$x=\\frac{40\\pm20}{6}$\n\nSo,\n$x=10$ or $x=\\frac{10}{3}$\n\nSince the box must have positive base dimensions, we need $20-2x>0$, so $x<10$.\nTherefore,\n$x=\\frac{10}{3}$\n\nNow find the maximum volume:\n$V=\\frac{10}{3}\\left(20-2\\times\\frac{10}{3}\\right)^2$\n$V=\\frac{10}{3}\\left(20-\\frac{20}{3}\\right)^2$\n$V=\\frac{10}{3}\\left(\\frac{40}{3}\\right)^2$\n$V=\\frac{10}{3}\\times\\frac{1600}{9}$\n$V=\\frac{16000}{27}\\text{ cm}^3$\n\nSo the maximum volume occurs when $x=\\frac{10}{3}$ cm, and the maximum volume is $\\frac{16000}{27}\\text{ cm}^3$.',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-27',
    type: 'text-and-drawing',
    title: 'Question 27',
    promptText:
      'Find $\\frac{dy}{dx}$ if $y=x\\sec(x^2)$.\n\nThe formula booklet gives $\\frac{d}{dx}(\\sec x)=\\sec x\\tan x$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Use the product rule.\n\nLet $u=x$ and $v=\\sec(x^2)$.\n\n$\\frac{du}{dx}=1$\n\nFor $v$ use the chain rule:\nLet $w=x^2$.\nThen $v=\\sec w$.\n\n$\\frac{dv}{dw}=\\sec w\\tan w$\n$\\frac{dw}{dx}=2x$\n\nSo,\n$\\frac{dv}{dx}=\\sec(x^2)\\tan(x^2)\\times 2x$\n\nNow use the product rule:\n$\\frac{dy}{dx}=u\\frac{dv}{dx}+v\\frac{du}{dx}$\n$\\frac{dy}{dx}=x\\left(2x\\sec(x^2)\\tan(x^2)\\right)+\\sec(x^2)$\n\nTherefore,\n$\\frac{dy}{dx}=2x^2\\sec(x^2)\\tan(x^2)+\\sec(x^2)$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-28',
    type: 'text-and-drawing',
    title: 'Question 28',
    promptText:
      'A balloon rises vertically from a point on the ground that is $30$ m from an observer. Let $\\theta$ be the angle of elevation of the balloon. If the balloon is rising at $4\\text{ m s}^{-1}$, find the rate of change of $\\theta$ when the balloon is $40$ m above the ground.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Let the height of the balloon be $h$ m.\n\nThen:\n$\\tan\\theta=\\frac{h}{30}$\n\nDifferentiate with respect to time $t$:\n$\\sec^2\\theta\\frac{d\\theta}{dt}=\\frac{1}{30}\\frac{dh}{dt}$\n\nWe are given:\n$\\frac{dh}{dt}=4$\n\nSo,\n$\\sec^2\\theta\\frac{d\\theta}{dt}=\\frac{4}{30}$\n$\\sec^2\\theta\\frac{d\\theta}{dt}=\\frac{2}{15}$\n\nNow find $\\sec^2\\theta$ when $h=40$.\n\n$\\tan\\theta=\\frac{40}{30}=\\frac{4}{3}$\n\nDraw a right-angled triangle with opposite $4$, adjacent $3$, and hypotenuse $5$.\nSo,\n$\\sec\\theta=\\frac{5}{3}$\n\nTherefore,\n$\\sec^2\\theta=\\frac{25}{9}$\n\nSubstitute back:\n$\\frac{25}{9}\\frac{d\\theta}{dt}=\\frac{2}{15}$\n\nSo,\n$\\frac{d\\theta}{dt}=\\frac{2}{15}\\times\\frac{9}{25}$\n$\\frac{d\\theta}{dt}=\\frac{18}{375}$\n$\\frac{d\\theta}{dt}=\\frac{6}{125}\\text{ rad s}^{-1}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-29',
    type: 'text-and-drawing',
    title: 'Question 29',
    promptText:
      'Water is being poured into a conical vessel. At every instant, the radius $r$ cm of the water surface and the water depth $h$ cm satisfy $r=2h$. The volume of water is increasing at $24\\pi\\text{ cm}^3\\text{/s}$.\n\nFind how fast the circumference of the water surface is increasing when $h=2$ cm.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'For a cone,\n$V=\\frac{1}{3}\\pi r^2h$\n\nWe are given that:\n$r=2h$\n\nSubstitute into the volume formula:\n$V=\\frac{1}{3}\\pi(2h)^2h$\n$V=\\frac{1}{3}\\pi(4h^2)h$\n$V=\\frac{4}{3}\\pi h^3$\n\nDifferentiate with respect to time $t$:\n$\\frac{dV}{dt}=\\frac{4}{3}\\pi\\times 3h^2\\frac{dh}{dt}$\n$\\frac{dV}{dt}=4\\pi h^2\\frac{dh}{dt}$\n\nSubstitute $\\frac{dV}{dt}=24\\pi$ and $h=2$:\n$24\\pi=4\\pi(2)^2\\frac{dh}{dt}$\n$24\\pi=16\\pi\\frac{dh}{dt}$\n\nSo,\n$\\frac{dh}{dt}=\\frac{24\\pi}{16\\pi}$\n$\\frac{dh}{dt}=\\frac{3}{2}\\text{ cm/s}$\n\nNow find the circumference of the water surface.\n\n$C=2\\pi r$\n\nSince $r=2h$,\n$C=2\\pi(2h)$\n$C=4\\pi h$\n\nDifferentiate with respect to time:\n$\\frac{dC}{dt}=4\\pi\\frac{dh}{dt}$\n\nSubstitute $\\frac{dh}{dt}=\\frac{3}{2}$:\n$\\frac{dC}{dt}=4\\pi\\times\\frac{3}{2}$\n$\\frac{dC}{dt}=6\\pi\\text{ cm/s}$\n\nEquivalently, using a triple chain-rule idea:\n$\\frac{dC}{dt}=\\frac{dC}{dr}\\times\\frac{dr}{dh}\\times\\frac{dh}{dt}$\n$\\frac{dC}{dt}=2\\pi\\times 2\\times\\frac{3}{2}=6\\pi\\text{ cm/s}$',
    teacherAnswerImage: '',
  },
  {
    id: 'differentiation-a-30',
    type: 'text-and-drawing',
    title: 'Question 30',
    promptText:
      'Find the point on the curve $y=x^2$ that is closest to the point $(0,3)$.',
    promptImage: '',
    placeholder:
      'Work carefully line by line. Add a sketch if it helps.',
    teacherAnswer:
      'Take a general point on the curve $y=x^2$.\n\nSo the point is $(x,x^2)$.\n\nThe distance from $(x,x^2)$ to $(0,3)$ is:\n$d=\\sqrt{(x-0)^2+(x^2-3)^2}$\n\nTo minimise the distance, it is easier to minimise $d^2$.\n\nLet\n$D=x^2+(x^2-3)^2$\n\nExpand:\n$D=x^2+x^4-6x^2+9$\n$D=x^4-5x^2+9$\n\nDifferentiate:\n$\\frac{dD}{dx}=4x^3-10x$\n\nFor a minimum or maximum:\n$\\frac{dD}{dx}=0$\n$4x^3-10x=0$\n$2x(2x^2-5)=0$\n\nSo,\n$x=0$\nor\n$2x^2-5=0$\n$x^2=\\frac{5}{2}$\n$x=\\pm\\sqrt{\\frac{5}{2}}$\n\nNow compare the values of $D$.\n\nWhen $x=0$:\n$D=0^4-5(0)^2+9=9$\n\nWhen $x^2=\\frac{5}{2}$:\n$D=\\left(\\frac{5}{2}\\right)^2-5\\left(\\frac{5}{2}\\right)+9$\n$D=\\frac{25}{4}-\\frac{25}{2}+9$\n$D=\\frac{25}{4}-\\frac{50}{4}+\\frac{36}{4}$\n$D=\\frac{11}{4}$\n\nSince $\\frac{11}{4}<9$, the minimum occurs when $x=\\pm\\sqrt{\\frac{5}{2}}$.\n\nThen\n$y=x^2=\\frac{5}{2}$.\n\nSo the points on the curve closest to $(0,3)$ are:\n$\\left(\\sqrt{\\frac{5}{2}},\\frac{5}{2}\\right)$ and $\\left(-\\sqrt{\\frac{5}{2}},\\frac{5}{2}\\right)$',
    teacherAnswerImage: '',
  },
],
};

export const differentiationOutros = {
understanding: {
  title: 'Understanding',
  summary:
    'You have finished the conceptual section for Differentiation. You must now assess how strong your depth of understanding is across both SL and HL content.',
  recapTitle: 'You should be able to...',
  recapItems: [
    'Understand derivatives as rates of change and gradients.',
    'Recognise how the first and second derivatives describe graph behaviour, stationary points, and concavity.',
    'Understand the ideas behind tangents, normals, optimisation, and kinematics.',
    'Understand HL concepts such as continuity and differentiability, higher derivatives, indeterminate forms, L’Hôpital’s rule, implicit differentiation, related rates, inverse trig notation, and why the derivative of a^x is ln(a) × a^x.',
  ],
  tipTitle: 'If it did not go well:',
  tipText:
    'Return to your notes and worked examples, especially the meaning of the derivative and how graphs connect to calculus ideas. For HL, focus on understanding why the methods work, not just memorising them. Make sure you can explain each idea clearly before moving into harder calculations.',
},

  'method-selection': {
    title: 'Method Selection',
    summary:
      'You have finished the method selection section for Differentiation. You must now assess how strong your method choice and question recognition are.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Recognise the structure of a differentiation problem.',
      'Choose an efficient method before starting the working.',
      'Decide when to use standard rules such as chain, product, quotient, implicit differentiation, or algebraic rearrangement first.',
      'Recognise when HL formulae or limit methods should be applied and how they fit into a larger process.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to worked examples and focus on how the method is chosen, not just how the solution is finished. Practise identifying the first step before solving full questions, especially when several methods seem possible.',
  },

  accuracy: {
    title: 'Accuracy',
    summary:
      'You have finished the accuracy section for Differentiation. You must now assess how reliable your algebra, notation, and final answers are under pressure.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Differentiate accurately using the correct rules and formulae.',
      'Handle signs, factors, brackets, and algebraic simplification carefully.',
      'Work accurately with tangents, normals, stationary points, implicit differentiation, limits, optimisation, and related rates.',
      'Present complete solutions clearly, logically, and with correct notation throughout.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Go back through the questions you missed and find the first line where the error happened. Practise full worked solutions slowly, especially where negatives, chain rule factors, quotient rule algebra, or implicit differentiation can cause slips.',
  },
};

export const differentiationTopicStripImages = Object.entries(differentiationImages)
  .filter(([, image]) => image.showInTopicStrip)
  .map(([key, image]) => ({
    id: key,
    src: image.src,
    connectedImages: image.connectedImages ?? [],
  }));