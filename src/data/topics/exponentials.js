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
    showInTopicStrip: false, // Hidden until differentiation has been taught.
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
    showInTopicStrip: false, // Hidden until differentiation has been taught.
    connectedImages: ['/images/exponentials/exponentials-e-7-a.PNG'],
  },
};

export const exponentialsQuestions = {
  understanding: [
  {
    "id": "exponentials-u-1",
    "type": "multiple-choice",
    "title": "Exponential or not?",
    "promptText": "Which of the following is an exponential relationship? What is each part of the function named?",
    "options": [
      "$y = 3x + 5$",
      "$y = x^3$",
      "$y = 2^x$",
      "$y = \\frac{1}{x}$"
    ],
    "correctOption": "$y = 2^x$",
    "promptImage": "",
    "placeholder": "",
    "teacherAnswer": "The $2$ is the base. The $x$ is the exponent. It is exponential because the exponent is variable.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-2",
    "type": "text",
    "title": "How the base affects behaviour",
    "promptText": "For exponential functions in the form $f(x) = a^x$, where $a > 0$ and $a \\ne 1$, how does the base affect the behaviour of the function?",
    "promptImage": "",
    "placeholder": "Describe how different values of $a$ change the behaviour of the graph.",
    "teacherAnswer": "Each increase of $1$ in $x$ multiplies $f(x)$ by $a$: $f(x+1)=a f(x)$. If $a>1$, the function increases; if $0<a<1$, it decreases. For example, $a=2$ doubles the value each step, while $a=\\frac12$ halves it.\nBoth graphs pass through $(0,1)$, have domain $\\mathbb{R}$, range $(0,\\infty)$ and horizontal asymptote $y=0$. A larger base does not mean a larger slope at every $x$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-3",
    "type": "drawing",
    "title": "Sketch growth and decay",
    "promptText": "Sketch the graphs of $y = 2^x$ and $y = \\left(\\frac{1}{2}\\right)^x$ on the same axes. Label any key features you think matter.\n\nPart b: Is there any other way that $y = \\left(\\frac{1}{2}\\right)^x$ can be written algebraically?",
    "promptImage": "",
    "placeholder": "Sketch both graphs carefully and then answer part b in words or algebra.",
    "teacherAnswer": "$\\left(\\frac{1}{2}\\right)^x$ can also be written as $2^{-x}$.",
    "teacherAnswerImage": "/images/exponentials/exponentials-u-3-ans.PNG"
  },
  {
    "id": "exponentials-u-4",
    "type": "text",
    "title": "Rules of indices",
    "promptText": "What are all the rules of indices?",
    "promptImage": "",
    "placeholder": "List the laws of indices clearly and, if you can, include any conditions or common cautions.",
    "teacherAnswer": "The main laws of indices are:\n$a^m \\times a^n = a^{m+n}$\n$a^m \\div a^n = a^{m-n}$\n$(a^m)^n = a^{mn}$\n$(ab)^n = a^n b^n$\n$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n$a^0 = 1$ for $a \\ne 0$\n$a^{-n} = \\frac{1}{a^n}$\n$a^{1/n} = \\sqrt[n]{a}$\nMore generally, $a^{m/n} = \\sqrt[n]{a^m}$.\nIn general, $(a+b)^n \\ne a^n + b^n$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-5",
    "type": "multiple-choice",
    "title": "Spot the false rule",
    "promptText": "Which of the following is not generally true?",
    "options": [
      "$a^m \\times a^n = a^{m+n}$",
      "$(a^m)^n = a^{mn}$",
      "$(ab)^n = a^n b^n$",
      "$(a+b)^n = a^n + b^n$"
    ],
    "correctOption": "$(a+b)^n = a^n + b^n$",
    "promptImage": "",
    "placeholder": "Choose the false statement and explain why it is false.",
    "teacherAnswer": "In general, $(a+b)^n \\ne a^n + b^n$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-7",
    "type": "text",
    "title": "What does $e$ represent?",
    "promptText": "What does $e$ represent in mathematics, and what is special about the function $e^x$?",
    "promptImage": "",
    "placeholder": "Explain what $e$ is and why the function $e^x$ is important.",
    "teacherAnswer": "$e$ is Euler’s number, an irrational constant approximately equal to $2.71828$. It is the base of natural logarithms and appears naturally in continuous growth and decay. The function $e^x$ is special because it is its own derivative, so $\\frac{d}{dx}(e^x) = e^x$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-8",
    "type": "text",
    "title": "Interpret an exponential model",
    "promptText": "A population is modelled by $P = 1200(1.08)^t$. Without calculating anything, explain what the $1200$, the $1.08$, and the variable $t$ represent.",
    "promptImage": "",
    "placeholder": "Interpret each part of the model in context.",
    "teacherAnswer": "$1200$ is the initial population, so it is the value when $t = 0$. $1.08$ is the growth factor, so the population increases by $8\\%$ for each unit of time. $t$ represents time.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-9",
    "type": "text",
    "title": "What is a logarithm?",
    "promptText": "Explain what a logarithm is and how it is connected to exponentials. You should use an example.",
    "promptImage": "",
    "placeholder": "Explain the meaning of a logarithm and its relationship to exponential functions.",
    "teacherAnswer": "A logarithm tells you what power a base must be raised to in order to produce a given value. For example, $\\log_2(8) = 3$ because $2^3 = 8$. Logarithms and exponentials are inverse functions, so a logarithm undoes an exponential and recovers the exponent.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-10-v2",
    "type": "multiple-choice",
    "title": "Rewrite between logarithmic and exponential form",
    "promptText": "Which exponential statement expresses $\\log_2(32)=5$?",
    "options": [
      "$2^5=32$",
      "$5^2=32$",
      "$2^{32}=5$",
      "$32^2=5$"
    ],
    "correctOption": "$2^5=32$",
    "promptImage": "",
    "placeholder": "Choose the correct option and explain the meaning of the logarithm.",
    "teacherAnswer": "$\\log_b N=r$ means $b^r=N$: the base stays $2$, the exponent is $5$, and the result is $32$. The other options interchange these roles.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-11-v2",
    "type": "text",
    "title": "Two fundamental logarithm values",
    "promptText": "For $a>0$ and $a\\ne1$, evaluate $\\log_a a$ and $\\log_a 1$. Justify each using an exponential statement.",
    "promptImage": "",
    "placeholder": "Give both values and explain why.",
    "teacherAnswer": "$\\log_a a=1$ because $a^1=a$.\n$\\log_a 1=0$ because $a^0=1$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-12",
    "type": "text",
    "title": "Why are logarithms only defined for positive inputs?",
    "promptText": "Why is $\\log_a(x)$ only defined when $x > 0$? Explain this using the inverse relationship with exponentials.",
    "promptImage": "",
    "placeholder": "Use the connection between logarithms and exponentials to justify the restriction.",
    "teacherAnswer": "A logarithm is the inverse of an exponential function. For a valid base $a$, the expression $a^y$ is always positive for all real $y$. Since $\\log_a(x)$ asks what exponent gives $x$, there is no real exponent that makes $a^y$ equal to $0$ or a negative number. That is why $x$ must be positive.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-13",
    "type": "drawing",
    "title": "What does $\\ln(x)$ mean?",
    "promptText": "What does $\\ln(x)$ mean? Sketch the function $y = \\ln(x)$.",
    "promptImage": "",
    "placeholder": "Explain the meaning of $\\ln(x)$ and sketch the graph carefully.",
    "teacherAnswer": "$\\ln(x)$ means $\\log_e(x)$",
    "teacherAnswerImage": "/images/exponentials/exponentials-u-13-ans.PNG"
  },
  {
    "id": "exponentials-u-14",
    "type": "drawing",
    "title": "Sketch functions",
    "promptText": "Sketch $y = 2^x$, $y = \\log_2(x)$, and the line $y = x$ on the same axes. What does the picture show about the relationship between the two functions?",
    "promptImage": "",
    "placeholder": "Sketch all three carefully, then describe the relationship you can see.",
    "teacherAnswer": "They are inverse functions",
    "teacherAnswerImage": "/images/exponentials/exponentials-u-14-ans.PNG"
  },
  {
    "id": "exponentials-u-15",
    "type": "text",
    "title": "Laws of logarithms",
    "promptText": "What are all the laws of logarithms?",
    "promptImage": "",
    "placeholder": "List the main logarithm laws clearly and state any restrictions that matter.",
    "teacherAnswer": "The main laws of logarithms are:\n      $\\log_a(xy) = \\log_a(x) + \\log_a(y)$\n      $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$\n      $\\log_a(x^k) = k\\log_a(x)$\n      Also, $\\log_a(1) = 0$ and $\\log_a(a) = 1$.\n      The change of base formula is $\\log_a(x) = \\frac{\\log(x)}{\\log(a)} = \\frac{\\ln(x)}{\\ln(a)}$.\n      These laws only apply when the logarithms are defined, so the inputs must be positive and the base must be positive and not equal to $1$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-6-v3",
    "type": "text",
    "title": "Understanding change of base",
    "promptText": "A calculator has $\\ln$ and $\\log_{10}$ keys. Write $\\log_2 7$ using each of these keys. Explain why both expressions give the same value and why $\\frac{\\ln2}{\\ln7}$ is not the correct expression.",
    "promptImage": "",
    "placeholder": "Give both expressions and justify the order of the numerator and denominator.",
    "teacherAnswer": "$\\log_2 7=\\frac{\\ln7}{\\ln2}=\\frac{\\log_{10}7}{\\log_{10}2}$.\nIf $y=\\log_2 7$, then $2^y=7$. Taking logs in either base gives $y\\log_b2=\\log_b7$, so $y=\\frac{\\log_b7}{\\log_b2}$.\nThe same base must be used in numerator and denominator. Reversing the ratio gives $\\log_7 2$, not $\\log_2 7$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-u-16-v2",
    "type": "text",
    "title": "Finding an inverse function",
    "promptText": "Let $f(x)=3e^x+2$ for $x\\in\\mathbb{R}$. Find $f^{-1}(x)$ and state the domain and range of both functions.",
    "promptImage": "",
    "placeholder": "Show your rearrangement and state all domains and ranges.",
    "teacherAnswer": "$y=3e^x+2$ gives $e^x=\\frac{y-2}{3}$, so $x=\\ln\\left(\\frac{y-2}{3}\\right)$.\nTherefore $f^{-1}(x)=\\ln\\left(\\frac{x-2}{3}\\right)$.\nDomain of $f$: $\\mathbb{R}$. Range of $f$: $(2,\\infty)$.\nDomain of $f^{-1}$: $(2,\\infty)$. Range of $f^{-1}$: $\\mathbb{R}$.\nThe inverse swaps the domain and range.",
    "teacherAnswerImage": ""
  }
],

'method-selection': [
  {
    "id": "exponentials-m-1-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "For $2^{x+1}=16$, which rewrite gives the most direct route to an exact solution?",
    "options": [
      "$2x+1=16$",
      "$2^{x+1}=2^4$",
      "$2^{x+1}=2^8$",
      "$2^x=16-2$"
    ],
    "correctOption": "$2^{x+1}=2^4$",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "$16=2^4$, so $x+1=4$.\n$2^{x+1}$ is not $2x+1$. Also, $2^8=256$, not $16$.\nSince $2^{x+1}=2\\times2^x$, isolating $2^x$ would require division by $2$, not subtraction. Taking logs is also valid, but rewriting the base is quicker here.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-m-2-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "You need all solutions of $e^x=x+2$ on $[-2,3]$. What should you do first?",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "Use the calculator graph and intersection tools over the whole interval. There are two crossings: one in $(-2,-1)$ and one in $(1,2)$.\nTaking logs gives $x=\\ln(x+2)$; a logarithm of a sum cannot be split. An exponential is not the linear expression $ex$. Two increasing graphs can intersect more than once.",
    "teacherAnswerImage": "",
    "calculator": true,
    "options": [
      "Take logs and rewrite as $x=\\ln x+\\ln2$.",
      "Replace $e^x$ with $ex$ and solve a linear equation.",
      "Find one intersection of $y=e^x$ and $y=x+2$ and stop, because both graphs increase.",
      "Graph $y=e^x$ and $y=x+2$ over the full interval, then find every intersection numerically."
    ],
    "correctOption": "Graph $y=e^x$ and $y=x+2$ over the full interval, then find every intersection numerically."
  },
  {
    "id": "exponentials-m-3-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "For $5^{2x}-6\\times5^x+5=0$, which substitution and resulting equation are correct?",
    "options": [
      "$u=5^x$, giving $u^2-6u+5=0$, with $u>0$.",
      "$u=5^x$, giving $2u-6u+5=0$, with $u>0$.",
      "$u=5^x$, giving $u^2-6u^2+5=0$, with $u>0$.",
      "$u=5^x$, giving $u^2-6u+1=0$, with $u>0$."
    ],
    "correctOption": "$u=5^x$, giving $u^2-6u+5=0$, with $u>0$.",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "$5^{2x}=(5^x)^2=u^2$, so the equation is quadratic in $u$.\nThe second option confuses doubling an exponent with multiplying the expression by $2$. The third incorrectly squares the middle term. The fourth changes the constant $5$, which is unaffected by the substitution.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-m-4-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "For $7^x=20$, which line correctly applies natural logarithms and the power law?",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "Taking logs of both sides gives $\\ln(7^x)=\\ln20$, hence $x\\ln7=\\ln20$.\nThe first option logs only one side. The third treats $7^x$ as the product $7x$. The fourth reverses the base and the right-hand value.",
    "teacherAnswerImage": "",
    "options": [
      "$x\\ln7=20$",
      "$x\\ln7=\\ln20$",
      "$\\ln x+\\ln7=\\ln20$",
      "$x\\ln20=\\ln7$"
    ],
    "correctOption": "$x\\ln7=\\ln20$"
  },
  {
    "id": "exponentials-m-5-v2",
    "type": "multiple-choice",
    "title": "Solving a logarithmic equation",
    "promptText": "For $x>1$, which equation is equivalent to $\\ln(x-1)+\\ln(x+3)=2$ and provides a useful next step?",
    "options": [
      "$\\ln(2x+2)=2$",
      "$\\ln((x-1)(x+3))=2$",
      "$\\ln(x-1)\\times\\ln(x+3)=2$",
      "$\\ln\\left(\\frac{x-1}{x+3}\\right)=2$"
    ],
    "correctOption": "$\\ln((x-1)(x+3))=2$",
    "promptImage": "",
    "placeholder": "Choose the best starting method.",
    "teacherAnswer": "The restriction is $x>1$, so both log arguments are positive. The product law gives $\\ln((x-1)(x+3))=2$; next convert to $(x-1)(x+3)=e^2$.\n$\\ln(2x+2)$ incorrectly adds the arguments.\nMultiplying the logarithms is not the product law: it is the arguments that are multiplied inside a single logarithm.\nThe quotient expression would correspond to subtracting the logarithms, not adding them.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-m-6-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "Before manipulating $\\log_3 x+\\log_3(x-6)=2$, which restriction must you impose?",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "Both original arguments must be positive: $x>0$ and $x-6>0$. Together these give $x>6$.\n$x>0$ alone misses the second argument. Merely excluding zero arguments still allows negative ones. The final option only ensures $x(x-6)>0$; when $x<0$, the original logarithms are undefined.",
    "teacherAnswerImage": "",
    "options": [
      "$x>0$ only.",
      "$x>6$.",
      "$x\\ne0$ and $x\\ne6$.",
      "$x<0$ or $x>6$."
    ],
    "correctOption": "$x>6$."
  },
  {
    "id": "exponentials-m-7-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "Given $\\log_3 2=x$ and $\\log_3 5=y$, which first rewrite correctly prepares $\\log_3(80)$ for expression in terms of $x$ and $y$?",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "Since $80=2^4\\times5$, the product and power laws give $4\\log_3 2+\\log_3 5=4x+y$.\nA product inside a log becomes a sum of logs, not a product. The second option corresponds to $2\\times5^4$, not $80$. The fourth raises the log value to a power instead of bringing the exponent down as a multiplier.",
    "teacherAnswerImage": "",
    "options": [
      "$\\log_3(2^4)\\times\\log_3 5$",
      "$\\log_3 2+4\\log_3 5$",
      "$4\\log_3 2+\\log_3 5$",
      "$(\\log_3 2)^4+\\log_3 5$"
    ],
    "correctOption": "$4\\log_3 2+\\log_3 5$"
  },
  {
    "id": "exponentials-m-8-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "In $\\log_3 x=\\log_9 27$, which rewrite of the right-hand side correctly uses base $3$?",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "Change of base gives $\\log_9 27=\\frac{\\log_3 27}{\\log_3 9}=\\frac32$.\nThe second option reverses numerator and denominator. The third uses subtraction instead of the change-of-base ratio. The fourth divides by the base itself rather than its logarithm.",
    "teacherAnswerImage": "",
    "options": [
      "$\\log_3 x=\\frac{\\log_3 27}{\\log_3 9}$",
      "$\\log_3 x=\\frac{\\log_3 9}{\\log_3 27}$",
      "$\\log_3 x=\\log_3 27-\\log_3 9$",
      "$\\log_3 x=\\frac{\\log_3 27}{9}$"
    ],
    "correctOption": "$\\log_3 x=\\frac{\\log_3 27}{\\log_3 9}$"
  },
  {
    "id": "exponentials-m-9-v2",
    "type": "multiple-choice",
    "title": "Exponential modelling",
    "promptText": "A population is modelled by $P=12000(1.06)^t$, where $t$ is measured in years. Which expression gives the time when the population reaches $20000$?",
    "options": [
      "$t=\\frac{\\ln(20000/12000)}{\\ln(1.06)}$",
      "$t=\\frac{20000/12000-1}{0.06}$",
      "$t=\\frac{\\ln(20000/12000)}{0.06}$",
      "$t=\\frac{\\ln(20000/12000)}{\\ln(0.06)}$"
    ],
    "correctOption": "$t=\\frac{\\ln(20000/12000)}{\\ln(1.06)}$",
    "promptImage": "",
    "placeholder": "Choose the best starting method.",
    "teacherAnswer": "Divide $20000=12000(1.06)^t$ by $12000$, then take logs:\n$t\\ln(1.06)=\\ln(20000/12000)$.\nHence $t=\\frac{\\ln(20000/12000)}{\\ln(1.06)}$ years.\nThe second option assumes simple rather than compound growth.\nThe third treats $0.06$ as a continuous growth rate; the equivalent continuous rate is $\\ln(1.06)$.\nThe fourth uses $0.06$ as the multiplier instead of the correct growth factor $1.06$.",
    "teacherAnswerImage": ""
  },
  {
    "id": "exponentials-m-10-v3",
    "type": "multiple-choice",
    "title": "Choosing a first step",
    "promptText": "For $2\\log_2 x=\\log_2(5x-4)$, with $x>\\frac45$, which proposed step is INVALID?",
    "promptImage": "",
    "placeholder": "Choose one option.",
    "teacherAnswer": "The power law is $2\\log_2 x=\\log_2(x^2)$, not $\\log_2(2x)$.\nThe other three steps are valid: rewrite using the power law, equate arguments of logs with the same base, then rearrange. Any eventual roots must satisfy the original restriction $x>\\frac45$.",
    "teacherAnswerImage": "",
    "options": [
      "Rewrite the left side as $\\log_2(x^2)$.",
      "Equate the arguments to obtain $x^2=5x-4$.",
      "Move all terms to one side to obtain $x^2-5x+4=0$.",
      "Rewrite the left side as $\\log_2(2x)$."
    ],
    "correctOption": "Rewrite the left side as $\\log_2(2x)$."
  }
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
  "id": "exponentials-a-2-v2",
  "type": "text-and-drawing",
  "calculator": false,
  "title": "Negative and fractional powers",
  "promptText": "(a) Evaluate $16^{-3/4}$ exactly.\n(b) Solve $x^{3/2}=8$ over the real numbers.",
  "promptImage": "",
  "placeholder": "Show your working and give exact answers.",
  "teacherAnswer": "(a) $16^{-3/4}=\\frac{1}{(\\sqrt[4]{16})^3}=\\frac{1}{2^3}=\\frac18$.\nThe negative exponent takes a reciprocal; it does not make the value negative.\n(b) For real $x^{3/2}$, $x\\ge0$. Taking both sides to the power $\\frac23$ gives $x=8^{2/3}=4$.\nCheck: $4^{3/2}=(\\sqrt4)^3=8$.",
  "teacherAnswerImage": ""
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
      'Write your working and answer here.',
    teacherAnswer: `$9^{x-1} = 27^{2x+1}$
$3^{2x-2} = 3^{6x+3}$
$2x - 2 = 6x + 3$
-5 = 4x
$x = -\\frac{5}{4}$`,
    teacherAnswerImage: '',
  },
  {
  "id": "exponentials-a-4-v2",
  "type": "text-and-drawing",
  "calculator": false,
  "title": "Solving an exponential equation",
  "promptText": "Solve $5^{2x}+5^x-6=0$ exactly. Explain why any rejected candidate is invalid.",
  "promptImage": "",
  "placeholder": "Show your working and check which candidates are valid.",
  "teacherAnswer": "Let $u=5^x$, so $u>0$.\n$u^2+u-6=0$\n$(u+3)(u-2)=0$\n$u=-3$ or $u=2$.\nReject $u=-3$ because $5^x$ is always positive.\nThus $5^x=2$, giving $x=\\log_5 2=\\frac{\\ln2}{\\ln5}$.\nCheck: $2^2+2-6=0$.",
  "teacherAnswerImage": ""
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
      'Write your working and answer here.',
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
      'Write your working and answer here.',
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
  "id": "exponentials-a-8",
  "type": "text-and-drawing",
  "calculator": true,
  "title": "Sketching an exponential function",
  "promptText": "Consider the function $y = f(x)$ with $f(x) = 9e^{0.2x} + 4$.\n\n(a) Write down the domain of $f$.\n(b) Find the $y$-intercept.\n(c) Find $f(5)$ correct to 3 significant figures.\n(d) Find the first integer value of $x$ for which $y$ exceeds $40$.\n(e) Find $f(-20)$ to 3 significant figures. Then explain what happens to $f(x)$ as $x\\to-\\infty$ and hence state the horizontal asymptote.\n(f) Write down the range of $f$.\n(g) Sketch the graph, clearly marking the $y$-intercept and horizontal asymptote.",
  "promptImage": "",
  "placeholder": "This is a calculator question. Keep the graph features consistent with your values.",
  "teacherAnswer": "(a)\nDomain: $\\mathbb{R}$\n\n(b)\n$f(0) = 9e^0 + 4$\n$f(0) = 13$\n\n(c)\n$f(5) = 9e^{1} + 4$\n$f(5) \\approx 28.5$\n\n(d)\n$9e^{0.2x} + 4 > 40$\n$9e^{0.2x} > 36$\n$e^{0.2x} > 4$\n$0.2x > \\ln 4$\n$x > \\frac{\\ln 4}{0.2}$\n$x > 6.93$\n\nFirst integer value: $7$\n\n(e)\n$f(-20) = 9e^{-4} + 4$\n$f(-20) \\approx 4.16$\n\nAs $x\\to-\\infty$, $e^{0.2x}\\to0$, so $f(x)\\to4$ from above. This establishes the horizontal asymptote $y=4$; one finite value alone does not.\nHorizontal asymptote: $y = 4$\n\n(f)\nRange: $y > 4$\n\n(g)\nIncreasing exponential curve\n$y$-intercept at $(0,13)$\nHorizontal asymptote $y = 4$",
  "teacherAnswerImage": "/images/exponentials/exponential-model.svg",
  "teacherAnswerImageAlt": "Graph of f(x)=9e^(0.2x)+4, with y-intercept (0,13) and horizontal asymptote y=4."
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
      'Write your working and answer here.',
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
      'Write your working and answer here.',
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
      'Write your working and answer here.',
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
  "id": "exponentials-a-15",
  "type": "text-and-drawing",
  "calculator": true,
  "title": "Exponential modelling",
  "promptText": "A sum of $3500$ is invested at a nominal rate of $5.4\\%$ per year.\n\n(a) Show that, if interest is compounded monthly, the value after $m$ months is given by $V = 3500(1.0045)^m$.\n(b) Find the minimum number of months required for the investment to exceed $5000$.\n(c) If the same $3500$ were instead compounded annually at $5.4\\%$ per year, find the first whole year in which the investment would exceed $5000$.",
  "promptImage": "",
  "placeholder": "Write your working and answers here.",
  "teacherAnswer": "(a)\nMonthly rate $= \\frac{0.054}{12}$\n\nMonthly rate $= 0.0045$\n\n$V = 3500(1 + 0.0045)^m$\n$V = 3500(1.0045)^m$\n\n(b)\n$3500(1.0045)^m > 5000$\n$(1.0045)^m > \\frac{10}{7}$\n$m\\ln(1.0045) > \\ln\\left(\\frac{10}{7}\\right)$\n$m > \\frac{\\ln(10/7)}{\\ln(1.0045)}$\n$m > 79.4393\\ldots$\n\nMinimum number of months: $80$\n\n(c)\n$3500(1.054)^n > 5000$\n$(1.054)^n > \\frac{10}{7}$\n$n\\ln(1.054) > \\ln\\left(\\frac{10}{7}\\right)$\n$n > \\frac{\\ln(10/7)}{\\ln(1.054)}$\n$n > 6.78187\\ldots$\n\nFirst whole year: $7$",
  "teacherAnswerImage": ""
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
