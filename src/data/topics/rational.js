export const rationalImages = {
  u2Graph: {
    src: '/images/rational/rational-u-2-graph.PNG',
    showInTopicStrip: false,
  },
  u3Answer: {
    src: '/images/rational/rational-u-3-ans.PNG',
    showInTopicStrip: false,
  },
    u6Graph: {
    src: '/images/rational/rational-u-6-graph.PNG',
    showInTopicStrip: false,
  },
  a1Answer: {
    src: '/images/rational/rational-a-1-ans.PNG',
    showInTopicStrip: false,
  },
  a2Answer: {
    src: '/images/rational/rational-a-2-ans.PNG',
    showInTopicStrip: false,
  },
  a4Question: {
    src: '/images/rational/rational-a-4-q.PNG',
    showInTopicStrip: false,
  },
  a4Answer: {
    src: '/images/rational/rational-a-4-ans.PNG',
    showInTopicStrip: false,
  },
  a6Answer: {
    src: '/images/rational/rational-a-6-ans.PNG',
    showInTopicStrip: false,
  },

  ExamQ1: {
    src: '/images/rational/rational-e-1-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/rational/rational-e-1-a.PNG'],
  },
  ExamQ2: {
    src: '/images/rational/rational-e-2-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/rational/rational-e-2-a.PNG'],
  },
  ExamQ3: {
    src: '/images/rational/rational-e-3-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/rational/rational-e-3-a.PNG'],
  },
  ExamQ4: {
    src: '/images/rational/rational-e-4-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/rational/rational-e-4-a.PNG'],
  },
  ExamQ5: {
    src: '/images/rational/rational-e-5-q.PNG',
    showInTopicStrip: true,
    connectedImages: ['/images/rational/rational-e-5-a.PNG'],
  },
};

export const rationalQuestions = {
understanding: [
  {
    id: 'rational-u-1',
    type: 'multiple-choice',
    title: 'Definition check',
    promptText:
      'Which of the following is a rational function? What makes a function rational?',
    options: [
      '$y = 3x + 1$',
      '$y = \\frac{2x+5}{x-1}$',
      '$y = x^2 - 4$',
      '$y = \\sqrt{x+2}$',
    ],
    correctOption: '$y = \\frac{2x+5}{x-1}$',
    promptImage: '',
    placeholder:
      'Choose the rational function, then explain what makes a function rational.',
    teacherAnswer:
      'A rational function is a function that can be written as the quotient of two polynomials, so it has the form $f(x)=\\frac{p(x)}{q(x)}$ where $p(x)$ and $q(x)$ are polynomials and $q(x) \\ne 0$. That is why $y = \\frac{2x+5}{x-1}$ is rational.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-2',
    type: 'text',
    title: 'Reading behaviour',
    promptText:
      'Look carefully at the graph shown. Describe its key features and overall behaviour. You should comment on the shape, any asymptotic behaviour, where it appears undefined, and what happens as $x$ becomes very large positive or very large negative.',
    promptImage: rationalImages.u2Graph.src,
    placeholder:
      'Describe the graph in words. Focus on what the graph is doing rather than trying to work backwards to an equation.',
    teacherAnswer:
      'The graph has two separate branches, which is typical of a reciprocal-style rational graph. It appears to be undefined at $x=2$, giving a vertical asymptote there. As $x$ approaches $2$ from the left, the graph decreases without limit, and as $x$ approaches $2$ from the right, the graph increases without limit. As $x$ becomes very large positive or very large negative, the graph gets closer and closer to the line $y = -1$, so the horizontal asymptote is $y=-1$.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-3',
    type: 'drawing',
    title: 'Core sketch',
    promptText:
      'Sketch the graph of $y = \\frac{1}{x}$. Label any key features you think are important.',
    promptImage: '',
    placeholder:
      'Sketch the graph clearly and label the features that matter.',
    teacherAnswer: '',
    teacherAnswerImage: rationalImages.u3Answer.src,
  },
  {
    id: 'rational-u-4',
    type: 'text',
    title: 'Asymptotic behaviour',
    promptText:
      'What causes a vertical asymptote in a function graph, and what causes a horizontal asymptote?',
    promptImage: '',
    placeholder:
      'Explain both ideas conceptually rather than just giving a rule.',
    teacherAnswer:
      'A vertical asymptote is caused by a restricted value in the domain where the function is not defined, and where the function values tend to positive or negative infinity as $x$ approaches that value. A restriction in domain is not enough by itself! (consider $y=\\sqrt x)$ \n\ \n\ A horizontal asymptote is caused by the behaviour of the function as it approaches its limits. If the function converges towards a specific constant, rather than diverging to infinity, then the function will have an asymptote of y = (that constant). The constant is the value that the graph approaches as $x$ tends to positive or negative infinity.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-5',
    type: 'text',
    title: 'Domain restrictions',
    promptText:
      'What are all the possible causes of a vertical asymptote that you know? (Think of graphs with vertical asymptotes)',
    promptImage: '',
    placeholder:
      'List the different situations that can lead to a vertical asymptote.',
    teacherAnswer:
      'Common causes of a vertical asymptote include:\n\n- when the variable is in a denominator, because division by zero is undefined\n- when the variable is inside a logarithm and the input approaches $0$ from the positive side\n- when the variable is inside a tangent function, since $\\tan x = \\frac{\\sin x}{\\cos x}$ and this is undefined when $\\cos x = 0$',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-6',
    type: 'text',
    title: 'Beyond rational',
    promptText:
      'Does the function $f(x)=e^x$ have any asymptotes? Explain for both cases.',
    promptImage: rationalImages.u6Graph.src,
    placeholder:
      'Decide whether there are any asymptotes, and explain both the vertical and horizontal cases.',
    teacherAnswer:
      'Yes, $f(x)=e^x$ has a horizontal asymptote at $y=0$, because as $x \\to -\\infty$, the value of $e^x$ approaches $0$ but never reaches it. \n\ Although it looks like it does, it does not have a vertical asymptote, because the function is defined for all real values of $x$ and there is no restricted value of $x$ where the graph tends to positive or negative infinity.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-7',
    type: 'text',
    title: 'Transformation language',
    promptText:
      'Describe what each of the following does to the graph of $y=f(x)$:\n\n(a) $y = f(x)+a$\n(b) $y = f(x-a)$\n(c) $y = -f(x)$\n(d) $y = f(-x)$\n(e) $y = af(x)$\n(f) $y = f(ax)$',
    promptImage: '',
    placeholder:
      'Describe each transformation clearly in words.',
    teacherAnswer: `(a) $f(x)+a$ translates the graph by the vector $\\begin{pmatrix}0\\\\a\\end{pmatrix}$.

(b) $f(x-a)$ translates the graph by the vector $\\begin{pmatrix}a\\\\0\\end{pmatrix}$.

(c) $-f(x)$ reflects the graph in the $x$-axis.

(d) $f(-x)$ reflects the graph in the $y$-axis.

(e) $af(x)$ gives a stretch in the $y$-direction by scale factor $a$.

(f) $f(ax)$ gives a stretch in the $x$-direction by scale factor $\\frac{1}{a}$.`,
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-8',
    type: 'text',
    title: 'Input and output',
    promptText:
      'Explain why $f(x+5)$ translates the graph $5$ units in the negative $x$-direction, while $f(x)+5$ translates the graph $5$ units in the positive $y$-direction. Why does one affect the input and the other the output? Why does one act in the opposite direction to its sign?',
    promptImage: '',
    placeholder:
      'Focus on the difference between changing the input and changing the output.',
    teacherAnswer:
      '$f(x)+5$ changes the output of the function, so every $y$-value increases by $5$, which moves the graph up by $5$. In contrast, $f(x+5)$ changes the input. To get the same output that used to happen at $x$, the new graph must now achieve it when the input is $5$ less, so the whole graph shifts left. That is why vertical changes follow the sign directly, while horizontal changes appear to move in the opposite direction.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-9',
    type: 'text',
    title: 'Composite order',
    promptText:
      'Does the order of composite transformations matter? Why or why not?',
    promptImage: '',
    placeholder:
      'Explain your reasoning clearly, and mention whether the order always matters or only sometimes.',
    teacherAnswer:
      'The order of composite transformations sometimes matters and sometimes does not. If the two transformations are perpendicular, meaning one affects the $x$-direction and the other affects the $y$-direction, then the order does not matter because they act independently. However, if two different transformations both affect the same direction, then the order does matter, because doing them in a different order can produce a different final graph. So the effect depends on whether the transformations act in different directions or in the same direction.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-u-10',
    type: 'multiple-choice',
    title: 'Transformation order',
    promptText:
      'Which of the following is correct for compound transformations of $y=f(x)$? Also think about what should come first if there are multiple horizontal and multiple vertical transformations.',
    options: [
      'Horizontal transformations follow BIDMAS, and vertical transformations follow BIDMAS.',
      'Horizontal transformations follow reverse BIDMAS, and vertical transformations follow BIDMAS.',
      'Horizontal transformations follow BIDMAS, and vertical transformations follow reverse BIDMAS.',
      'Horizontal transformations follow reverse BIDMAS, and vertical transformations follow reverse BIDMAS.',
    ],
    correctOption:
      'Horizontal transformations follow reverse BIDMAS, and vertical transformations follow BIDMAS.',
    promptImage: '',
    placeholder:
      'Choose the correct statement, then explain what happens when there are several horizontal and several vertical transformations together.',
    teacherAnswer:
      'Horizontal transformations follow reverse BIDMAS, while vertical transformations follow normal BIDMAS. This is because horizontal changes act on the input, so they behave in the opposite order to how they appear in the equation, whereas vertical changes act directly on the output. If there are several horizontal transformations, their internal order matters and the correct horizontal order must be followed. If there are several vertical transformations, their internal order also matters and the correct vertical order must be followed. However, it does not matter whether you carry out the horizontal group first or the vertical group first, as long as the correct order is followed within each group.',
    teacherAnswerImage: '',
  },

  {
  id: 'rational-u-11',
  type: 'text-and-drawing',
  title: 'Self-inverse',
  promptText:
    'What does it mean for a function to be self-inverse? Explain why $f(x)=\\frac{1}{x}$ is self-inverse. Do self-inverse functions have any special features when sketched. Why?',
  promptImage: '',
  placeholder:
    'Explain what self-inverse means and connect it to the reciprocal function.',
  teacherAnswer:
    'A function is self-inverse if its inverse is the same as the original function. In other words, applying the function and then applying it again brings you back to where you started. For $f(x)=\\frac{1}{x}$, if we apply the function twice we get $f(f(x)) = \\frac{1}{\\frac{1}{x}} = x$, for all allowed values of $x$. This means the inverse of $f(x)=\\frac{1}{x}$ is itself, so it is self-inverse. Self-inverse functions have a special graphical feature: their graphs are symmetric in the line $y=x$. This is because taking the inverse of a function reflects its graph in the line $y=x$, since every point $(a,b)$ on the graph becomes $(b,a)$ on the inverse. If a function is self-inverse, then reflecting its graph in $y=x$ gives exactly the same graph back, so the graph must be symmetric in the line $y=x$.',  teacherAnswerImage: '',
  },
  ],

  'method-selection': [
  {
    id: 'rational-m-1',
    type: 'multiple-choice',
    title: 'Parent graph',
    promptText:
      'Which of the following can most naturally be viewed as a transformation of $y = \\frac{1}{x}$?',
    options: [
      '$y = \\frac{1}{x-2} + 3$',
      '$y = \\frac{x+1}{x^2+1}$',
      '$y = x^2 - 4$',
      '$y = \\sqrt{x+3}$',
    ],
    correctOption: '$y = \\frac{1}{x-2} + 3$',
    promptImage: '',
    placeholder:
      'Choose the best option, then explain why it should be thought of as a transformed reciprocal graph.',
    teacherAnswer:
      '$y = \\frac{1}{x-2} + 3$ is the clearest transformation of $y = \\frac{1}{x}$. It is the reciprocal graph translated right by $2$ and up by $3$, so it keeps the same basic reciprocal shape.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-2',
    type: 'text',
    title: 'Planning a sketch',
    promptText:
      'Consider the function $y = \\frac{2x+1}{x-3}$. What would you need to find or think about in order to draw this graph? Do not draw it or carry out the full working.',
    promptImage: '',
    placeholder:
      'Describe the features and structure you would use to plan the sketch.',
    teacherAnswer:
      'To draw the graph you would want to identify the vertical asymptote, the horizontal asymptote, any intercepts, and the general behaviour of the branches on either side of the asymptote.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-3',
    type: 'multiple-choice',
    title: 'End behaviour',
    promptText:
      'Consider the function $y=\\frac{3x-5}{2x+1}$. How would you calculate the horizontal asymptote for this rational function?',
    options: [
      'Substitute $x=0$ into the function',
      'Find where the denominator is equal to $0$',
      'Compare the highest power terms and use the ratio of their coefficients',
      'Set the numerator equal to the denominator',
    ],
    correctOption:
      'Compare the highest power terms and use the ratio of their coefficients',
    promptImage: '',
    placeholder:
      'Choose the best method and explain briefly why it works.',
    teacherAnswer:
      'For a rational function of the form $\\frac{ax+b}{cx+d}$, the horizontal asymptote comes from the end behaviour of the function as $x$ becomes very large positive or negative. The highest power terms dominate, so $\\frac{3x-5}{2x+1}$ behaves like $\\frac{3x}{2x}=\\frac{3}{2}$. So the best method is to compare the highest power terms and use the ratio of their coefficients.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-4',
    type: 'text',
    title: 'Using a base graph',
    promptText:
      'If you are given the graph of $y=f(x)$ and then asked to sketch $y=-2f(x+3)+1$, what would you need to consider before drawing it?',
    promptImage: '',
    placeholder:
      'Explain what you would look at first and how you would organise the transformations.',
    teacherAnswer:
      'I would consider what the seperate x axis and y axis transformations are and then consider what order they should occur in. I would notice that there are two y-axis transformations (a stretch/reflection and a translation) so I would be thinking that they should follow BIDMAS order as they are affecting the y axis.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-5',
    type: 'multiple-choice',
    title: 'Choosing a tool',
    calculator: true,
    promptText:
      'Consider the equation $\\frac{1}{x-1} = x + 2$. What would be the best way to start if you want the solutions quickly and reliably?',
    options: [
      'Rearrange it immediately by hand and expand everything first',
      'Use the GDC to graph both sides and find the intersection points',
      'Substitute values of $x$ until a pattern appears',
      'Differentiate both sides',
    ],
    correctOption:
      'Use the GDC to graph both sides and find the intersection points',
    promptImage: '',
    placeholder:
      'Choose the best method and explain why it is suitable here.',
    teacherAnswer:
      'A good method is to use the GDC to graph $y = \\frac{1}{x-1}$ and $y = x+2$ and then find their intersection points. This is quick, visual, and reliable, especially when the equation is not immediately simple to solve by inspection.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-6',
    type: 'multiple-choice',
    title: 'Choosing a tool',
    calculator: true,
    promptText:
      'Consider the equation $\\frac{2}{x-3} = 1$. What would be the best way to start this question?',
    options: [
      'Use the GDC to graph both sides',
      'Solve it directly using simple algebra',
      'Make a table of values',
      'Differentiate both sides',
    ],
    correctOption: 'Solve it directly using simple algebra',
    promptImage: '',
    placeholder:
      'Choose the best starting method.',
    teacherAnswer:
      'The best method is simple algebra, because the equation is straightforward to rearrange and solve exactly. A GDC would work, but it would be slower and less efficient than solving it directly.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-7',
    type: 'text',
    title: 'Finding an inverse',
    promptText:
      'Find the inverse function of $f(x)=\\frac{2x+3}{x-2}$. What would be your first steps to finding this? What would tell you that you had found a self-inverse function?',
    promptImage: '',
    placeholder:
      'Describe the method you would use, and explain what result would show the function is self-inverse.',
    teacherAnswer:
      'A good first step would be to write the function as $y=\\frac{2x+3}{x-2}$, then swap $x$ and $y$, and rearrange to make $y$ the subject again. That gives the inverse function. To tell whether the function is self-inverse, you would compare the inverse you found with the original function. If they are the same, then the function is self-inverse. You could also confirm this by showing that $f(f(x))=x$ for all allowed values of $x$.',
    teacherAnswerImage: '',
  },
  {
    id: 'rational-m-8',
    type: 'text',
    title: 'Solving an inequality',
    promptText:
      'Consider the inequality $\\frac{3x-5}{2x+1} > 1$. Describe how you would solve this.',
    promptImage: '',
    placeholder:
      'Describe the graph-based method clearly without carrying out the full solution.',
    teacherAnswer:
      'A good method is to think of this graphically. Sketch the graph of $y=\\frac{3x-5}{2x+1}$ and also sketch the line $y=1$. To sketch the rational graph, you would first identify its asymptotes so that the overall shape is clear. Then find the point where the two graphs intersect by solving $\\frac{3x-5}{2x+1}=1$. That intersection tells you where the graphs are equal. Finally, use your sketch to decide for which values of $x$ the rational graph lies above the line $y=1$. Any value that makes the denominator zero must be excluded from the final solution.',
    teacherAnswerImage: '',
  },
  ],


  accuracy: [
  {
    id: 'rational-a-1',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Feature sketch',
    promptText:
      'Consider the function $y=\\frac{3x+1}{x-2}$.\n\n(a) Find the vertical asymptote.\n(b) Find the horizontal asymptote.\n(c) Find the $x$-intercept and the $y$-intercept.\n(d) Sketch the graph clearly, labelling the asymptotes and intercepts.',
    promptImage: '',
    placeholder:
      'Show all key working and make the sketch match the features you have found.',
    teacherAnswer: `(a)
Vertical asymptote: $x=2$

(b)
Horizontal asymptote: $y=3$

(c)
$x$-intercept:
$3x+1=0$
$x=-\\frac{1}{3}$

So the $x$-intercept is $\\left(-\\frac{1}{3},0\\right)$

$y$-intercept:
$y=\\frac{3(0)+1}{0-2}=-\\frac{1}{2}$

So the $y$-intercept is $\\left(0,-\\frac{1}{2}\\right)$`,
    teacherAnswerImage: rationalImages.a1Answer.src,
  },
  {
    id: 'rational-a-2',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Rewriting form',
    promptText:
      'Show that $y=\\frac{2x-3}{x+1}$ can be written in the form $y=a+\\frac{b}{x+1}$.\n\nHence state the transformations from $y=\\frac{1}{x}$. \n\ Hence or otherwise, sketch the graph.',
    promptImage: '',
    placeholder:
      'Rewrite the function first, then use the transformed form to guide your sketch.',
    teacherAnswer: `$y=\\frac{2x-3}{x+1}$

$y=\\frac{2(x+1)-5}{x+1}$

$y=2-\\frac{5}{x+1}$

So $a=2$ and $b=-5$.

This is a transformation of $y=\\frac{1}{x}$:
- stretch in the $y$-direction by scale factor $5$
- reflection in the $x$-axis
- translation by the vector $\\begin{pmatrix}-1\\\\2\\end{pmatrix}$`,
    teacherAnswerImage: rationalImages.a2Answer.src,
  },
  {
    id: 'rational-a-3',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Comparing functions',
    promptText:
      'Let $f(x)=x^2+1$ and let $g(x)=2(x-3)^2-4$.\n\nDescribe clearly the transformations needed to get from $f(x)$ to $g(x)$.',
    promptImage: '',
    placeholder:
      'State the transformations clearly and in a sensible order.',
    teacherAnswer: `Starting from $f(x)=x^2+1$:

  First note that
  $f(x-3)=(x-3)^2+1$

  So
  $2f(x-3)-6=2[(x-3)^2+1]-6=2(x-3)^2-4$

  Therefore the transformations from $f(x)$ to $g(x)$ are:
  - translate by the vector $\\begin{pmatrix}3\\\\0\\end{pmatrix}$
  - stretch in the $y$-direction by scale factor $2$
  - translate by the vector $\\begin{pmatrix}0\\\\-6\\end{pmatrix}$`,
    teacherAnswerImage: '',
},
  {
    id: 'rational-a-4',
    type: 'drawing',
    calculator: false,
    title: 'Transforming a graph',
    promptText:
      'The graph shown is $y=f(x)$. Sketch the graph of $y=2f(x+1)-3$, showing the new shape and the new position of the labelled vertex. You do not need to find the intercepts.',
    promptImage: rationalImages.a4Question.src,
    placeholder:
      'Apply the transformations carefully to the given graph.',
    teacherAnswer: '',
    teacherAnswerImage: rationalImages.a4Answer.src,
  },
  {
    id: 'rational-a-5',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Inverse function',
    promptText:
      'Find the inverse of $f(x)=\\frac{2x+3}{x-2}$. Hence show that the function is self-inverse.',
    promptImage: '',
    placeholder:
      'Use a clear inverse-function method and then compare your result with the original function.',
    teacherAnswer: `Let $y=\\frac{2x+3}{x-2}$

Swap $x$ and $y$:
$x=\\frac{2y+3}{y-2}$

Now rearrange for $y$:
$x(y-2)=2y+3$

$xy-2x=2y+3$

$xy-2y=2x+3$

$y(x-2)=2x+3$

$y=\\frac{2x+3}{x-2}$

So
$f^{-1}(x)=\\frac{2x+3}{x-2}$

Since $f^{-1}(x)=f(x)$, the function is self-inverse.`,
    teacherAnswerImage: '',
  },
  {
    id: 'rational-a-6',
    type: 'text-and-drawing',
    calculator: false,
    title: 'Inequality',
    promptText:
      'Solve the inequality $\\frac{2x-3}{x+4} \\le -1$.',
    promptImage: '',
    placeholder:
      'Use a clear graphical method and write the final answer carefully.',
    teacherAnswer: `A good method is to compare the graphs of

$y=\\frac{2x-3}{x+4}$

and

$y=-1$

First sketch the rational function and the horizontal line $y=-1$.

Then find the point where they intersect by solving

$\\frac{2x-3}{x+4}=-1$

$2x-3=-(x+4)$

$2x-3=-x-4$

$3x=-1$

$x=-\\frac{1}{3}$

Also note that the rational function is undefined when

$x+4=0$

so

$x=-4$

This gives a vertical asymptote at $x=-4$.

Now use the sketch to decide where the graph of $y=\\frac{2x-3}{x+4}$ lies on or below the line $y=-1$.

So the solution is

$-4<x\\le -\\frac{1}{3}$`,
    teacherAnswerImage: rationalImages.a6Answer.src, 
  },
  {
    id: 'rational-a-7',
    type: 'text-and-drawing',
    calculator: true,
    title: 'GDC intersections',
    promptText:
      'Consider the graphs $y=\\frac{1.7x-0.9}{x-0.6}$ and $y=0.4x+0.2$.\n\n(a) Use the GDC to find the coordinates of the intersection points, correct to 3 significant figures.\n(b) Hence solve $\\frac{1.7x-0.9}{x-0.6}=0.4x+0.2$.\n(c) State the asymptotes of the rational graph.',
    promptImage: '',
    placeholder:
      'Use the GDC carefully, then record the coordinates and final solutions accurately.',
    teacherAnswer: `(a)
Using the GDC, the intersection points are approximately:
$(0.507,\\ 0.403)$
$(3.84,\\ 1.74)$

(b)
So the solutions to $\\frac{1.7x-0.9}{x-0.6}=0.4x+0.2$ are:

$x \\approx 0.507$
or
$x \\approx 3.84$

(c)
For $y=\\frac{1.7x-0.9}{x-0.6}$:

Vertical asymptote:
$x=0.6$

Horizontal asymptote:
$y=1.7$`,
    teacherAnswerImage: '',
  },
],
};
export const rationalOutros = {
  understanding: {
    title: 'Understanding',
    summary:
      'You have finished the conceptual section for Rational Functions and Transformations. You must now assess how strong your depth of understanding is.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Recognise rational functions and understand the behaviour of their graphs.',
      'Understand what vertical and horizontal asymptotes represent and when they occur.',
      'Explain single and composite transformations of graphs clearly.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to the textbook and read the explanations of graphs and asymptotes, or watch videos on youtube. Draw key graphs by hand, then draw them again after transformations.',
  },
  'method-selection': {
    title: 'Method Selection',
    summary:
      'You have finished the method selection section for Rational Functions and Transformations. You must now assess how strong your ability is to recognise graph structure, choose suitable methods, and decide when to use algebra, sketches, or the GDC.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Recognise when a graph or function should be approached as a transformation of a known base graph.',
      'Decide what features matter when sketching rational functions or transformed graphs.',
      'Choose appropriately between algebraic, graphical, and GDC-based methods.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to worked examples and focus on how the method is chosen before the solution begins. Practise looking at a function and deciding what information matters most, what graph it resembles, and whether a sketch, algebra, or the GDC is the most efficient tool.',
  },
  accuracy: {
    title: 'Accuracy',
    summary:
      'You have finished the accuracy section for Rational Functions and Transformations. You must now assess how reliable your working, graph sketches, and final answers are under pressure.',
    recapTitle: 'You should be able to...',
    recapItems: [
      'Find asymptotes, intercepts, inverses, and other key features accurately.',
      'Apply graph transformations carefully and sketch the resulting functions clearly.',
      'Solve rational equations and inequalities accurately using algebraic, graphical, or GDC-based methods where appropriate.',
    ],
    tipTitle: 'If it did not go well:',
    tipText:
      'Return to the questions you got wrong and check each step carefully. Focus on where the first mistake happened, whether it was in the algebra, the graph features, or the choice of method. Redo the question slowly and compare your working with the model answer.',
},
};

export const rationalTopicStripImages = Object.entries(rationalImages)
  .filter(([, image]) => image.showInTopicStrip)
  .map(([key, image]) => ({
    id: key,
    src: image.src,
    connectedImages: image.connectedImages ?? [],
  }));