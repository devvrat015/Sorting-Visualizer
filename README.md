# Sorting Visualizer

An interactive web app that animates classic sorting algorithms as colored bars, built with React (Create React App). Generate a random array, pick a sorting algorithm, and watch comparisons and swaps play out step by step with adjustable speed and array size.

## Features

- **Four sorting algorithms**, each with its own animation pipeline:
  - Bubble Sort
  - Insertion Sort
  - Merge Sort
  - Heap Sort
- **Live bar visualization** — bars are colored red while being compared and green once written back in place, with the numeric value shown on each bar.
- **Generate New Array** button to instantly produce a fresh random array.
- **Array size slider** (10–40 bars) and **speed slider** to control animation pacing.
- **Light / Dark mode** toggle.
- Algorithms are precomputed into an *animations* array (compare, compare, overwrite triplets), so the UI stays smooth and deterministic.

## Tech Stack

- React 18 (class components, CRA / react-scripts 5)
- Plain CSS (`src/SortingVisualizer/SortingVisualizer.css`)
- No external UI or animation libraries

## Project Structure

```
src/
├── App.js                              # Root component
├── index.js                            # Entry point
├── sortingAlgorithms/
│   └── sortingAlgorithms.js            # Merge/Bubble/Heap/Insertion animation generators
└── SortingVisualizer/
    ├── SortingVisualizer.jsx           # Main UI + animation player
    └── SortingVisualizer.css           # Styles / themes
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Local Development

```bash
npm install
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000). The page hot-reloads on edits.

### Production Build

```bash
npm run build
```

Outputs an optimized static build to the `build/` folder.

### Tests

```bash
npm test
```

Runs the CRA test runner in watch mode.

## Deploying to Vercel

The project is already Vercel-ready (`vercel.json` is included; build command `npm run build`, output `build`).

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Create React App — keep the defaults and click **Deploy**.

Or deploy from the CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

No environment variables are required.

## How It Works

Each algorithm in `sortingAlgorithms.js` doesn't sort for display directly — it records every step into an `animations` list:

- **Steps 1–2** mark two indices as *being compared* (bars flash red, then return to green).
- **Step 3** overwrites the value at an index (bar height animates to the new value).

`SortingVisualizer.jsx` plays that list back with `setTimeout`, spacing each frame by the speed slider (`101 - speed` ms per animation step).

## License

Font "Abril Fatface" is licensed under the [SIL Open Font License](src/Abril_Fatface/OFL.txt). Project code is otherwise unlicensed.
