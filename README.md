# WhereToStart

A React + Vite shell for a student revision website with:

- an animated homepage
- topic landing pages
- three subpages per topic (`understanding`, `method-selection`, `accuracy`)
- full-screen quiz sections
- forward movement locked until the current question is submitted
- backward movement always allowed
- browser-saved answers via `localStorage`
- support for text, multiple-choice, and drawing inputs

## Routes included

- `/`
- `/exponentials-and-logarithms`
- `/exponentials-and-logarithms/understanding`
- `/exponentials-and-logarithms/method-selection`
- `/exponentials-and-logarithms/accuracy`
- `/rational-functions-and-transformations`
- `/differentiation`
- `/integration`

Each topic page also links to its three subpages.

## 1) Open the project in VS Code

1. Unzip the folder.
2. Open the unzipped folder in VS Code.
3. Open the terminal in VS Code.

## 2) Install Node.js first

Vite's current guide says it requires Node.js `20.19+` or `22.12+`.

Check your version:

```bash
node -v
```

If Node is not installed, install the latest LTS version.

## 3) Install packages

```bash
npm install
```

## 4) Run the website locally

```bash
npm run dev
```

Vite will give you a local address, usually something like:

```bash
http://localhost:5173
```

Open that in your browser.

## 5) Build a production version

```bash
npm run build
```

Vite's production build command is `vite build`, which outputs a static app ready for hosting.

## 6) Push it to GitHub

Run these in the VS Code terminal from the project folder:

```bash
git init
git add .
git commit -m "Initial WhereToStart shell"
```

Then create an empty GitHub repository and connect it:

```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## 7) Deploy on Vercel

Vercel supports Git-based deployments and automatically deploys new pushes from connected Git repositories.

The easiest route:

1. Sign in to Vercel.
2. Click **Add New... > Project**.
3. Import your GitHub repository.
4. Vercel should detect Vite automatically. Vercel's Vite docs say Vite projects can be deployed directly and use the standard build flow.
5. Click **Deploy**.

This project already includes a `vercel.json` file with an SPA rewrite so direct visits to nested quiz routes still load `index.html`, which Vercel says SPAs need when using client-side routing.

## File structure

```text
WhereToStart-shell/
├── public/
│   └── illustrations/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Where you edit the real content later

### Topic data

Most of your future page content lives in:

```text
src/data/topicData.js
```

That file currently defines:

- the 4 topics
- the 3 subpages per topic
- placeholder questions for each subpage
- model answers and notes
- topic illustrations and descriptions

So yes: **that file is currently acting as the central content source for the site.**

### Components

The main reusable pieces are:

- `ShellHeader.jsx` – top navigation
- `TopicCard.jsx` – homepage topic cards
- `SubpageCard.jsx` – topic-page subpage cards
- `QuizSection.jsx` – one full-screen question section
- `QuestionPrompt.jsx` – left side prompt area
- `DrawingCanvas.jsx` – drawing input
- `StudentResponse.jsx` – displays saved student answers
- `ProgressDock.jsx` – question jump buttons and progress display

### Pages

- `HomePage.jsx` – animated homepage
- `TopicLandingPage.jsx` – base page for each topic
- `QuizPage.jsx` – the scrolling/locked quiz flow
- `NotFoundPage.jsx` – fallback page

## Important design note

Right now all topic subpages use the same **shell component** (`QuizPage.jsx`) and read different question data from `topicData.js`.

That means:

- they share the same layout and behavior
- but they do **not** have to stay identical later
- you can make them feel different by changing the data, images, colours, and question types
- if you later need one subpage to behave very differently, you can split it into a special page component

## Good next improvements

- add real IB questions and diagrams
- add per-question hints
- add score summaries or completion badges
- add better mobile gesture locking if you want a stricter phone experience
- add MathJax or KaTeX later for nicer maths notation

