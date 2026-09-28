# Exponentials and logarithms question audit

24 September 2026. Review of `src/data/topics/exponentials.js`, its five answer graphs, all seven gallery question/answer pairs, and the relevant response controls. No question content was changed during this audit.

Question references below use U = Understanding, M = Method Selection, A = Accuracy, E = gallery file number. Gallery file numbers differ from the numbers printed on the images.

## Overall judgment

This is a useful foundation, especially for algebraic equation solving. It is not yet a complete AA SL/HL revision bank. Most final answers are correct; the weaknesses are uneven coverage, repetitive introductory questions, inconsistent answer completeness, and several unconvincing multiple-choice alternatives.

Keep three skill strands, but make their purposes more distinct:

| Strand | Suggested design | What successful performance demonstrates |
|---|---|---|
| Understanding | Approximately 12–14 focused questions | Explain, interpret, connect representations, identify invalid reasoning. |
| Choose a method | Approximately 6–8 mixed questions | Write the first mathematical step and justify it briefly, without completing the solution. |
| Solve & check | Approximately 16–20 varied questions | Solve independently, check restrictions, and communicate a contextual or graphical answer. |

These counts are design suggestions, not syllabus requirements. Replace duplicates before expanding the bank. Retain the gallery as optional mixed practice, with clear prerequisites and worked explanations. If two sections are preferable for navigation, use Understanding and Practice, embedding method-choice prompts in Practice. Simply removing method choice would lose a worthwhile diagnostic skill.

The current Method Selection section does not consistently earn ten separate mandatory questions: some choices are obvious, some repeat Understanding/Accuracy, and one title names the method. It needs redesign rather than deletion. Let students revisit the strand relevant to their weakness.

## Syllabus basis and coverage

This audit uses the current [IB Mathematics AA guide, first assessment 2021](https://ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-analysis-and-approaches-guide-en.pdf). Relevant references: SL 1.5/1.7 (powers and logarithms), 2.5/2.9–2.11 (functions, equations, graphs and transformations); AHL 2.14–2.16 (further function work). Quadratic substitution in exponential equations is explicitly included at SL, so it should not automatically receive an HL-only label.

The [announced course update](https://ibo.org/university-admission/latest-curriculum-updates/dp-mathematics-analysis-and-approaches-updates/) starts teaching in August 2027, with first assessment in May 2029. This report is not a mapping to that future course.

The following is my assessment of this bank, with proposed exercises rather than a reproduction of the syllabus:

| Skill | Current evidence | Recommended action |
|---|---|---|
| Recognising exponential relationships | U1, U2, U8 | Good foundation; use less repetitive interpretation. |
| Negative and fractional powers | Recalled in U4 | Add actual evaluation/simplification, e.g. 16^(-3/4). |
| Exponential/logarithm equivalence | U9–U12, U16 | Present, but basic evaluations overlap. |
| Log laws and change of base | U15, M5–M8, A5–A7, A10 | Strong algebra; add invalid-law error analysis. |
| Inverse identities and changing exponential base | Little explicit practice | Add exp(ln x), ln(exp x), and a^x = exp(x ln a), with restrictions. |
| Exponential graphs and transformations | U3/U6, A8/A11 | Reasonable coverage; improve labels and vary transformations. |
| Logarithmic graphs and transformations | U13/U14; a shifted log graph is supplied in E6 | Add student-generated shifted/reflected log sketches, domain, range and asymptotes; include a base between 0 and 1. |
| Finding inverse functions | Basic inverse relationship in U14 | Add algebraic inverse of a transformed function with domains. |
| Common-base equations | M1/M2, A1–A3 | Overrepresented relative to other skills. |
| Taking logs to solve equations | M4 describes it; models use it | Add an independently solved non-common-base equation, including variable exponents on both sides. |
| Substitution equations | M3/M10, A4/A12–A14 | Strong; include a negative substitution root that must be rejected. |
| Logarithm domain checks | M6, A6/A10, E6 | Present; state restrictions and rejection reasons consistently. |
| Numerical/graphical equation solving | Calculator evaluation/model calculations present | Add an intersection/root problem needing numerical methods, e.g. exp(x) = x + 2 on a stated interval. |
| Building models from data | E2 only | Bring one parameter-fitting problem into the core quiz. |
| Growth/decay/finance | U8, M9, A9/A15, gallery | Good variety; improve units, precision and interpretation of assumptions. |
| Further HL function reasoning | Limited explicit coverage | Add clearly tagged restricted inverses and more demanding function transformations/comparisons. |

Example replacement task: for f(x) = ln(x−2)+1, sketch the graph, give its domain/range/asymptote/intercepts, and find its inverse. Answers: domain x>2, range all real numbers, asymptote x=2, x-intercept 2+exp(−1), no y-intercept, inverse 2+exp(x−1). This adds more coverage than another common-base equation.

Example substitution check: exp(2x)+exp(x)−6=0 gives u=2 or −3; reject −3 because u=exp(x)>0, so x=ln 2.

“All aspects” across the entire course would also encompass calculus and complex-number connections. Relevant guide references include SL 5.6/5.10 and AHL 1.13/5.15–5.19. Keep those in their appropriate topic sections and cross-link them. The two gallery calculus questions should carry a prerequisite label, especially while the calculus sections are hidden. Log-linearisation could be enrichment; it should not be presented here as a missing standalone AA requirement.

## Corrections to prioritise

1. **A15 has two incorrect numerical intermediate values.** ln(10/7)/ln(1.0045) = 79.43930267…, not 79.33. ln(10/7)/ln(1.054) = 6.781865898…, not 6.77. The final answers, 80 months and 7 years, remain correct. Keep the inequalities m>79.4393… and n>6.781865… before rounding up.
2. **M7 does not finish what its wording requests.** With x=log_3 2 and y=log_3 5, the answers are log_3 80 = 4x+y and log_3(25/4) = 2y−2x. Either include these or ask only for a method.
3. **U2 overgeneralises steepness.** A larger base does not produce a larger slope at every x. Describe the multiplication factor for each unit increase in x; qualify any steepness comparison.
4. **A8 cannot deduce an asymptote from one finite function value.** Computing f(−20) illustrates approach to 4 but does not establish it. Ask what happens as x tends to negative infinity.
5. **M1 includes a valid alternative method.** Taking natural logs works. If common-base rewriting is the intended single answer, ask for the most direct exact method without a calculator and acknowledge the alternative.
6. **U10 has an unnecessarily confusing distractor.** For log_2 16=4, the distractor 4²=16 is also a true numerical equality, although it is not the intended base/exponent translation. Use log_2 32=5 instead and explain the correspondence.

## Understanding: every question

| ID | Verdict | Answer and question improvements |
|---|---|---|
| U1 | Keep, improve response format | Key 2^x is correct. x³ diagnoses confusing power and exponential functions. The naming/explanation part needs an actual response field. |
| U2 | Keep, tighten answer | Growth/decay, intercept, domain, range and asymptote are correct. Replace the unqualified steepness claim with the per-unit multiplier. |
| U3 | Keep | Both curves and 2^(−x) are correct. Label functions, (0,1), asymptote, and reflection in the y-axis. Provide a text field for the written part. |
| U4 | Replace broad recall with application | Laws are useful, but “all rules” is open-ended. State positive-base assumptions for unrestricted real powers and nonzero denominators. Include negative/fractional exponent examples. |
| U5 | Keep, add explanation | False sum law is the correct choice under suitable base assumptions. Show a counterexample: (1+1)²=4 whereas 1²+1²=2. Avoid immediately supplying the answer in U4. |
| U6 | Merge or replace | Description of 3^(−x) is correct but duplicates U2/U3. Compare it with −3^x, or use a decreasing logarithm instead. |
| U7 | Keep as a connection | Statements about e and the derivative of e^x are correct. Mark the derivative observation as a calculus connection; do not require it before calculus. |
| U8 | Keep | Initial value 1200 and growth of 8% per time unit are correct. Specify the time unit if the intended answer should use years. |
| U9 | Keep | Definition and example are correct. Include valid-base and positive-argument restrictions in the reference answer. |
| U10 | Revise options and explanation | Intended key is correct. Use a less coincidental numerical example. Its empty teacherAnswer is not a missing displayed key: the interface still shows correctOption. Add the general conversion rule. |
| U11 | Combine with U16 | log_2 2=1 and the explanation are correct. Too small a distinction to need another full mandatory slide. |
| U12 | Keep | Inverse-function explanation is correct. Explicitly say real logarithms with a valid base. |
| U13 | Keep, complete graph answer | Meaning of ln and graph shape are correct. Label (1,0), x=0 asymptote, domain and range. Accommodate the written definition alongside drawing. |
| U14 | Keep, strengthen explanation | Graph and “inverse functions” answer are correct but terse. Explain reflection in y=x, coordinate swaps and swapped domain/range. Label curves. |
| U15 | Reshape into focused prompts | Laws and restrictions are correct. Add an error-analysis item: why ln(x+y) cannot be split. Broad list recall is a weak measure of application. |
| U16 | Combine with U11 | log_8 1=0 because 8^0=1 is correct. Use as part of a short contrast with log_a a. |

## Method Selection: every question

| ID | Verdict | Answer and question improvements |
|---|---|---|
| M1 | Revise | Common-base method is efficient; taking ln also works. Tighten “best” and explain why the chosen approach is shorter. |
| M2 | Merge with M1 or replace | Base 3 for 9^x=27^(x−1) is correct, but adds little new strategy. |
| M3 | Keep, improve distractors | u=5^x is correct. State u>0. Replace arbitrary alternatives with plausible incorrect algebraic first steps. |
| M4 | Keep | Taking logs for 7^x=20 is correct. Request the first equation and a brief reason; accept log_7 directly. |
| M5 | Revise | Combining logs is correct, but x>1 should come first. Use explicit competing expressions rather than vague options. |
| M6 | Keep or combine with M5 | The answer correctly mentions restrictions and checking. State x>6 explicitly; could become an error-checking task. |
| M7 | Complete answer or narrow prompt | Required expressions are 4x+y and 2y−2x. Current explanation stops short. |
| M8 | Replace or neutralise title | Method is valid, but “Using change of base formula” gives away the choice. The numbers also allow direct exponent reasoning. |
| M9 | Revise substantially | Substituting P=20000 is correct but trivial against the current options. Ask students to select the correct time equation or expression. |
| M10 | Keep | Power law then equating arguments is valid. State x>4/5. If offering a full check, roots 1 and 4 are both valid. |

## Accuracy: every question

All final algebraic solutions below checked correctly. Improvements distinguish actual errors from presentation or coverage issues.

| ID | Checked result | Verdict / improvement |
|---|---|---|
| A1 | x=5/3 | Keep as an opening common-base question. |
| A2 | x=3/2 | Valid but repetitive; replace with negative/fractional power work. |
| A3 | x=−5/4 | Useful sign handling. Put the “−5=4x” line into math formatting. |
| A4 | x=1,2 | Correct substitution solution. Add u>0; use another item with a rejected negative u-root. |
| A5 | x=1 | Keep basic conversion. State x>−4/5. |
| A6 | x=−1+2√5 | Correct; explicitly reject −1−2√5 because x>1. |
| A7 | 1+2a+b; 2a+b−3; (2+a)/b | Strong varied law/change-of-base question. Keep. |
| A8 | Domain R; intercept 13; f(5)≈28.5; first integer 7; f(−20)≈4.16; asymptote 4; range y>4 | Useful mixed item, but long. Correct the asymptote reasoning and label y=4 on graph. Consider grouped self-marking for its seven parts. |
| A9 | M(6)=116.82054… g; time to 60 g=11.55245… h; half-life=5.77623… h | Existing rounded values are numerically defensible, but precision varies. Specify a convention and include units. At 3 significant figures: 117 g, 11.6 h, 5.78 h. |
| A10 | x=5 | Good mixed-base equation; x>1 is included. Move method-revealing hint behind a reveal button. |
| A11 | Asymptote y=−1; intercepts (−3,0), (0,e³−1) | Graph and answers correct. Label asymptote; explain translation left 3/down 1. This can also work without a calculator. |
| A12 | x=16 or 1/8 | Correct; state x>0. Useful distinction: a negative logarithm is allowed even though its argument must be positive. |
| A13 | x=0 or ln 2 | Correct; arguments are positive and multiplying by e^x is valid. Good mixed problem. |
| A14 | x=−1 or 1 | Correct. Keep as an independently selected substitution problem. |
| A15 | Monthly factor 1.0045; 80 months; 7 years | Worthwhile discrete-time rounding task. Correct both intermediate approximations identified above. |

## All nine multiple-choice items

| Item | Distractor assessment |
|---|---|
| U1 | x³ is strong: variable base versus variable exponent. 3x+5 checks linear/exponential distinction. 1/x is a less targeted but valid contrast. Add a reason for classification. |
| U5 | The three true index laws are legitimate competitors, assuming appropriate domains. Good recognition item; a counterexample is needed to show understanding. |
| U10 | 4²=16 is accidentally true but not the requested correspondence. The other two options swap roles of base, exponent and result, which is worthwhile. Change the example and explain each role. |
| U11 | 0 tests confusion with log_a 1; 2 echoes the base/argument; 4 has a weaker rationale. Pair with U16 and ask for exponent statements. |
| U16 | 1 tests confusion with log_a a; 8 echoes the base; 1/8 can detect interpreting logarithms as reciprocals. Reasonable quick diagnostic, weak as a whole slide. |
| M1 | Taking ln is valid, not an incorrect method. “2x+1” diagnoses misreading exponent notation. Moving everything left to factorise is weak unless a specific plausible factorisation is supplied. |
| M3 | Taking logs term by term diagnoses a real misuse of log laws. Rewriting in base 10 and subtracting 5/dividing by x are poorly motivated. Replace them with explicit common algebra errors. |
| M5 | “Expand logs separately” is vague; differentiating and moving left to factorise are weak competitors. Use sum/product/quotient/log-product alternatives. |
| M9 | Differentiating could confuse time with rate, but binomial expansion and replacing 1.06 by 6 are too easily dismissed. Competing growth equations would be much stronger. |

Suggested M5 replacement, explicitly for x>1: choose the expression equivalent to ln(x−1)+ln(x+3):

- ln((x−1)(x+3)): correct product rule.
- ln(2x+2): incorrectly adds the arguments.
- ln(x−1) × ln(x+3): confuses product of arguments with product of logarithms.
- ln((x−1)/(x+3)): confuses addition with subtraction/quotient law.

Suggested M9 replacement: time for 12000(1.06)^t to reach 20000:

- ln(20000/12000)/ln(1.06): correct.
- (20000/12000−1)/0.06: treats compound growth as simple growth.
- ln(20000/12000)/0.06: treats an effective 6% growth factor as continuous rate 0.06.
- ln(20000/12000)/ln(0.06): uses the percentage as the multiplier.

Three plausible choices are better than four with an obviously irrelevant option. Give a short explanation for each wrong option. In the current UI, multiple-choice items only collect a selected option: wording that asks “why” does not actually collect the reasoning, and the corresponding placeholder is unused.

## Seven gallery question/answer pairs

These are MadasMaths exam-style materials, not identified as official IB past-paper questions. All seven answer sets checked correctly.

| File | Printed number | Checked answer | Educational judgment |
|---|---|---|---|
| E1 | 3 | x=ln 3; y=4−e²; t=4 | Useful short conversions. Explicit domain checks would improve explanation. |
| E2 | 6 | A=4; k=ln 2/6; y(30)=128 | Valuable model fitting; move an equivalent original problem into the core quiz. |
| E3 | 13 | x=1/2 | Useful exact log simplification. |
| E4 | 21 | 72°C; 8 minutes to nearest minute; 42°C at the stated cooling rate | Correct, but the final part requires differentiation. Label the prerequisite. |
| E5 | 26 | (x,y)=(ln 6,ln 2) | Strong simultaneous substitution problem. Explain why e^y=0 is impossible. |
| E6 | 31 | A=(1,0), B=(7,0), C=(9,2ln 3) | Useful shifted-log/domain work. Explain rejection of x=4; a provided sketch does not assess sketch construction. |
| E7 | 37 | £600; approximately 9.54 years; derivative 16 £/year at t=12 | Correct. Add derivative units and a calculus prerequisite label. |

The five core answer graphs have correct shapes and plotted features. Their weakness is labelling, not incorrect mathematics. Label the function, relevant intercepts and asymptote rather than relying on colour or the grid.

## Answer style and assessment design

Use a consistent compact answer template:

1. Required restriction, where relevant.
2. Essential method and algebra.
3. Clearly identified final answer with units/precision.
4. One sentence explaining a rejected root or common misconception, when useful.

Understanding answers should usually be two to four focused sentences or a labelled sketch. Method answers should be a first mathematical line plus one sentence. Full solutions should preserve the steps students need to diagnose an error, rather than becoming either answer-only or verbose essays.

Provide checklists for multipart items and drawings. A single “partly correct” rating does not tell a student whether they missed a domain restriction, a graph feature or the whole method. Drawing-only prompts with written subparts need a clear way to enter those explanations. Accuracy placeholders frequently reveal the technique; use optional hints if the goal is independent problem solving.

## Recommended order of work

1. Correct the six priority issues, standardise restrictions/units, and improve graph labels.
2. Redesign the weak multiple-choice options and collect short explanations where requested.
3. Combine duplicated basics; replace them with the missing graph, inverse, fractional-power, modelling and numerical-solving tasks.
4. Shorten Method Selection and remove titles/hints that reveal the intended method.
5. Tag SL core, HL extension, calculator use and calculus prerequisites; add compact self-marking criteria.

Verification: read all 41 core prompts/answers, inspected five core answer graphs and fourteen gallery images, checked symbolic solutions manually, and used independent numerical calculations/substitutions to verify roots, identities and model values. This is a content audit, not an empirical study of how students respond to the distractors; their diagnostic value should ultimately be checked against student errors.
